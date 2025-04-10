import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
agenda?: number;
especialidade?: number;
unidade?: number;
funcionario?: number;
status?: number;
data?: string;
empresa?: number;
cidadao?: number;
dataInicial?: string;
dataFinal?: string;
codValidacao?: string;
codTicket?: string;
offset?: number;
limit?: number;
count?: boolean;
fields?: string;
orderBy?: string;
headers?: Headers;
}

/**
 * @name apiAtendimento
 * @description Retorna uma lista de atendimentos
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://api.filazero.net/v2/ticketing`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["GET /api/Atendimento"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
