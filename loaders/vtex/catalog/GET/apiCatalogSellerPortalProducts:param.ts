import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
accountName: string;
param?: string;
headers?: Headers;
}

/**
 * @name apiCatalogSellerPortalProducts:param
 * @description Get product by external ID,  SKU ID, SKU external ID or slug
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers, accountName } = props
  const client = createHttpClient({ base: `https://${accountName}.vtexcommercestable.com.br`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["GET /api/catalog-seller-portal/products/:param"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
