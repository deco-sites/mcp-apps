import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
accountName: string;
headers?: Headers;
}

/**
 * @name pricingMigration
 * @description Get Pricing v2 Status
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers, accountName } = props
  const client = createHttpClient({ base: `https://api.vtex.com/${accountName}`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["GET /pricing/migration"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
