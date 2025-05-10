import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
idBordero?: string;
headers?: Headers;
}

/**
 * @name borderos:idBorderoLiquidar
 * @description Liquida bordero
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://api.bling.com.br/v3`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["POST /borderos/:idBordero/liquidar"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
