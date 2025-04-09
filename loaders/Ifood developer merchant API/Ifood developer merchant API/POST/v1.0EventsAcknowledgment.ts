import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
headers?: Headers;
}

/**
 * @name v1.0EventsAcknowledgment
 * @description Confirmar eventos
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://merchant-api.ifood.com.br`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["POST /v1.0/events/acknowledgment"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
