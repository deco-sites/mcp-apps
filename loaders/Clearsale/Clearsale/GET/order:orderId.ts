import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
orderId?: string;
headers?: Headers;
}

/**
 * @name order:orderId
 * @description Get order details
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://api.clearsale.com.br`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["GET /order/:order-id"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
