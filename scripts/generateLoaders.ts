import {
  toCamelCase,
  transformPath,
  transformType,
} from "site/sdk/openapi/transform.ts";

async function readJson(path: string) {
  const text = await Deno.readTextFile(path);
  return JSON.parse(text);
}

async function getFiles(path: string): Promise<string[]> {
  const entries = [];
  for await (const entry of Deno.readDir(path)) {
    if (entry.isFile && entry.name.endsWith(".openapi.json")) {
      entries.push(`${path}/${entry.name}`);
    } else if (entry.isDirectory) {
      entries.push(...await getFiles(`${path}/${entry.name}`));
    }
  }
  return entries;
}

interface OpenAPI {
  paths: Record<string, Record<string, any>>;
  servers?: {
    url: string;
    variables?: Record<string, { default?: string; enum?: string[] }>;
  }[];
}

const jsonFiles = await getFiles("./docs");

for (const filePath of jsonFiles) {
  const openapi: OpenAPI = await readJson(filePath);
  const folderPath = filePath.replace("./docs", "").replace(
    ".openapi.json",
    "",
  );

  const server = openapi.servers?.[0];
  const { baseUrl, dynamicParams } = Object.entries(server?.variables || {})
    .reduce<{
      baseUrl: string;
      dynamicParams: string[];
    }>(
      (acc, [key, { enum: enumValues }]) => {
        if (enumValues && enumValues.length === 1) {
          return {
            ...acc,
            baseUrl: acc.baseUrl.replace(`{${key}}`, enumValues[0]),
          };
        }
        return {
          ...acc,
          dynamicParams: [...acc.dynamicParams, key],
        };
      },
      { baseUrl: server?.url || "", dynamicParams: [] },
    );

  for (const [path, methods] of Object.entries(openapi.paths)) {
    for (const [method, details] of Object.entries(methods)) {
      const operationId = `${transformPath(path).replace(/\//g, "_")}`;
      const description = details.summary || "No description provided";
      const params = details.parameters || [];

      const outputDir = `loaders${folderPath}/${method.toUpperCase()}`;
      await Deno.mkdir(outputDir, { recursive: true });

      const propsInterface = [
        ...dynamicParams.map((param) => `${toCamelCase(param)}: string;`),
        ...params.filter((p: any) => p.in && p.in !== "header" && p.name).map((
          p: any,
        ) => `${toCamelCase(p.name)}?: ${transformType(p.schema?.type)};`),
        `headers?: Headers;`,
      ].join("\n");

      const loaderCode = `import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
${propsInterface}
}

/**
 * @name ${toCamelCase(operationId)}
 * @description ${description}
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers, ${dynamicParams.map(toCamelCase).join(", ")} } = props
  const client = createHttpClient({ base: \`${
        baseUrl.replace(/{([\w-]+)}/g, (_match, variable) =>
          `$\\{${toCamelCase(variable)}}`)
      }\`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["${method.toUpperCase()} ${
        transformPath(path)
      }"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
`;

      await Deno.writeTextFile(
        `${outputDir}/${toCamelCase(operationId)}.ts`,
        loaderCode,
      );
    }
  }
}

console.log("Loaders gerados com sucesso!");
