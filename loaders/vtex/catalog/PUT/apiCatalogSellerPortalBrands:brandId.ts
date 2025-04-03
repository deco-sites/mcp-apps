import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
accountName: string;
brandId?: string;
headers?: Headers;
}

/**
 * @name apiCatalogSellerPortalBrands:brandId
 * @description Update brand
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers, accountName } = props
  const client = createHttpClient({ base: `https://${accountName}.vtexcommercestable.com.br`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["PUT /api/catalog-seller-portal/brands/:brandId"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
