import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
call?: string;
headers?: Headers;
}

/**
 * @name geralDepartamentos_
 * @description Operações de departamentos
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://app.omie.com.br/api/v1`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["POST /geral/departamentos/"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
