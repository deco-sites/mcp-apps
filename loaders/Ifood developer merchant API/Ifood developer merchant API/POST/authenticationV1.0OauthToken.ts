import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
headers?: Headers;
}

/**
 * @name authenticationV1.0OauthToken
 * @description Autenticação
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://merchant-api.ifood.com.br`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["POST /authentication/v1.0/oauth/token"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
