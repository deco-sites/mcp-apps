import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
idBordero?: string;
headers?: Headers;
}

/**
 * @name borderos:idBordero
 * @description Altera bordero
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://api.bling.com.br/v3`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["PUT /borderos/:idBordero"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
