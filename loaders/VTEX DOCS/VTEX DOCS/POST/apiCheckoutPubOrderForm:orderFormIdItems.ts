import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
accountName: string;
environment: string;
orderFormId?: string;
headers?: Headers;
}

/**
 * @name apiCheckoutPubOrderForm:orderFormIdItems
 * @description Add Item to Cart
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers, accountName, environment } = props
  const client = createHttpClient({ base: `https://${accountName}.${environment}.com.br`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["POST /api/checkout/pub/orderForm/:orderFormId/items"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
