import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
headers?: Headers;
}

/**
 * @name orders
 * @description Send a new order
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://api.clearsale.com.br/api/v2`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["POST /orders"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
