import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
accountName: string;
headers?: Headers;
}

/**
 * @name apiCatalogSellerPortalCategoryTree
 * @description Update category tree
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers, accountName } = props
  const client = createHttpClient({ base: `https://${accountName}.vtexcommercestable.com.br`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["PUT /api/catalog-seller-portal/category-tree"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
