import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
idCategoria?: string;
headers?: Headers;
}

/**
 * @name categoriasLojasAplicativos:idCategoria
 * @description Obtém categoria de loja e aplicativo
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://api.bling.com.br/v3`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["GET /categorias-lojas-aplicativos/:idCategoria"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
