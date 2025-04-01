import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
accountName: string;
priceTableId?: string;
headers?: Headers;
}

/**
 * @name pricingPipelineCatalog:priceTableId
 * @description Update rules for a price table
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers, accountName } = props
  const client = createHttpClient({ base: `https://api.vtex.com/${accountName}`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["PUT /pricing/pipeline/catalog/:priceTableId"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
