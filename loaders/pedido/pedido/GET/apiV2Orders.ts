import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
token?: string;
page?: number;
perPage?: number;
ids?: string;
sort?: string;
direction?: string;
reference?: string;
trackingCode?: string;
customerName?: string;
customerEmail?: string;
customerCpf?: string;
discountCode?: string;
status?: string;
paymentMethod?: string;
createdAtStart?: string;
createdAtEnd?: string;
updatedAtStart?: string;
updatedAtEnd?: string;
productSku?: string;
productTitle?: string;
headers?: Headers;
}

/**
 * @name apiV2Orders
 * @description Get orders
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://api.vnda.com.br`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["GET /api/v2/orders"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
