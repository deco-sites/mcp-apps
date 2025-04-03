import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
accountName: string;
q?: string;
from?: string;
to?: string;
orderBy?: string;
name?: string;
headers?: Headers;
}

/**
 * @name apiCatalogSellerPortalBrands
 * @description Get list of brands
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers, accountName } = props
  const client = createHttpClient({ base: `https://${accountName}.vtexcommercestable.com.br`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["GET /api/catalog-seller-portal/brands"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
