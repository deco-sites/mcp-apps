import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
headers?: Headers;
}

/**
 * @name apiAgendaGerarAgenda
 * @description Gera agendas à partir de um array de requisições
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://api.filazero.net/v2/ticketing`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["POST /api/Agenda/GerarAgenda"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
