import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
idProduto?: string;
headers?: Headers;
}

/**
 * @name produtos:idProduto
 * @description Obter produto
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://api.bling.com.br/v3`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["GET /produtos/:idProduto"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
