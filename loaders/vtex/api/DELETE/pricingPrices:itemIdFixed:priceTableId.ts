import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
accountName: string;
itemId?: number;
priceTableId?: string;
headers?: Headers;
}

/**
 * @name pricingPrices:itemIdFixed:priceTableId
 * @description Delete Fixed Prices on a price table or trade policy
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers, accountName } = props
  const client = createHttpClient({ base: `https://api.vtex.com/${accountName}`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["DELETE /pricing/prices/:itemId/fixed/:priceTableId"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
