import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
id?: number;
chaveApi?: string;
chaveAplicacao?: string;
headers?: Headers;
}

/**
 * @name v1Categoria:id
 * @description Detalhar categoria
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://api.awsli.com.br`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["GET /v1/categoria/:id"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
