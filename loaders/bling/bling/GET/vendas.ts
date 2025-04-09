import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
pagina?: number;
limite?: number;
situacao?: string;
headers?: Headers;
}

/**
 * @name vendas
 * @description Listar vendas
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://www.bling.com.br/Api/v3`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["GET /vendas"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
