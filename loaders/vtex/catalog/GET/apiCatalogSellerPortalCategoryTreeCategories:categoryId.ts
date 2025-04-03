import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
accountName: string;
categoryId?: string;
headers?: Headers;
}

/**
 * @name apiCatalogSellerPortalCategoryTreeCategories:categoryId
 * @description Get category by ID
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers, accountName } = props
  const client = createHttpClient({ base: `https://${accountName}.vtexcommercestable.com.br`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["GET /api/catalog-seller-portal/category-tree/categories/:categoryId"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
