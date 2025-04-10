import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
id?: number;
headers?: Headers;
}

/**
 * @name apiAtendimento:idRemarcar
 * @description Remarca o atendimento
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://api.filazero.net/v2/ticketing`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["POST /api/Atendimento/:id/Remarcar"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
