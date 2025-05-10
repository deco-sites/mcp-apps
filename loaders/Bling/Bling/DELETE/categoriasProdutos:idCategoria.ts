import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
idCategoria?: string;
headers?: Headers;
}

/**
 * @name categoriasProdutos:idCategoria
 * @description Remove categoria de produto
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://api.bling.com.br/v3`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["DELETE /categorias-produtos/:idCategoria"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
