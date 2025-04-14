import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
chaveApi?: string;
chaveAplicacao?: string;
headers?: Headers;
}

/**
 * @name v1Produto
 * @description Criar novo produto
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://api.awsli.com.br`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["POST /v1/produto"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
