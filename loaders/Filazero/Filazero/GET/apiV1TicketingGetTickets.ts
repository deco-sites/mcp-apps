import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
orderId?: string;
headers?: Headers;
}

/**
 * @name apiV1TicketingGetTickets
 * @description No description provided
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://api.filazero.net/v2/ticketing`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["GET /api/V1/Ticketing/GetTickets"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
