import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
accountName: string;
environment: string;
skuId?: string;
warehouseId?: string;
headers?: Headers;
}

/**
 * @name apiLogisticsPvtInventorySkus:skuIdWarehouses:warehouseId
 * @description Update Inventory
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers, accountName, environment } = props
  const client = createHttpClient({ base: `https://${accountName}.${environment}.com.br`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["PUT /api/logistics/pvt/inventory/skus/:skuId/warehouses/:warehouseId"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
