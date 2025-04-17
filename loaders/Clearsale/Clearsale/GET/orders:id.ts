import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
id?: string;
headers?: Headers;
}

/**
 * @name orders:id
 * @description Get order status
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://api.clearsale.com.br/api/v2`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["GET /orders/:id"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
