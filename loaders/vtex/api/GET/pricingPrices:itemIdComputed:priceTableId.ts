import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
accountName: string;
categoryIds?: number;
brandId?: number;
quantity?: number;
itemId?: number;
priceTableId?: string;
headers?: Headers;
}

/**
 * @name pricingPrices:itemIdComputed:priceTableId
 * @description Get Computed Price by price table or trade policy
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers, accountName } = props
  const client = createHttpClient({ base: `https://api.vtex.com/${accountName}`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["GET /pricing/prices/:itemId/computed/:priceTableId"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
