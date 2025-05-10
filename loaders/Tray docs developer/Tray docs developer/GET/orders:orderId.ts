import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
orderId?: number;
headers?: Headers;
}

/**
 * @name orders:orderId
 * @description Detalhes do pedido
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://api.tray.com.br`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["GET /orders/:order_id"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
