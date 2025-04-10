import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
accountName: string;
environment: string;
orderId?: string;
headers?: Headers;
}

/**
 * @name apiOmsPvtOrders:orderId
 * @description Get Order
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers, accountName, environment } = props
  const client = createHttpClient({ base: `https://${accountName}.${environment}.com.br`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["GET /api/oms/pvt/orders/:orderId"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
