import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
eventId?: number;
sessionId?: number;
headers?: Headers;
}

/**
 * @name apiV1TicketingGetDeliveries
 * @description No description provided
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://api.filazero.net/v2/ticketing`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["GET /api/V1/Ticketing/GetDeliveries"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
