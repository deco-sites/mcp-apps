import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
accountName: string;
itemId?: number;
headers?: Headers;
}

/**
 * @name pricingPrices:itemIdFixed
 * @description Get Fixed Prices
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers, accountName } = props
  const client = createHttpClient({ base: `https://api.vtex.com/${accountName}`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["GET /pricing/prices/:itemId/fixed"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
