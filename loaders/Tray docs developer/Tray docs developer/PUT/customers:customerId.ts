import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
customerId?: number;
headers?: Headers;
}

/**
 * @name customers:customerId
 * @description Atualiza um cliente
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://api.tray.com.br`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["PUT /customers/:customer_id"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
