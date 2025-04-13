import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
id?: string;
headers?: Headers;
}

/**
 * @name templates:id
 * @description Get template by ID
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://doc-templates.wbuy.com.br`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["GET /templates/:id"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
