import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
headers?: Headers;
}

/**
 * @name categoriasLojasAplicativos
 * @description Obtém categorias de lojas e aplicativos
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://api.bling.com.br/v3`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["GET /categorias-lojas-aplicativos"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
