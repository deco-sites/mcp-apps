import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
datahora?: string;
disponiveis?: boolean;
ativo?: boolean;
servico?: number;
especialidade?: number;
funcionario?: number;
unidade?: number;
offset?: number;
limit?: number;
count?: boolean;
fields?: string;
orderBy?: string;
headers?: Headers;
}

/**
 * @name apiAgenda
 * @description Retorna uma lista de agendas
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://api.filazero.net/v2/ticketing`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["GET /api/Agenda"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
