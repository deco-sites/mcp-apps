import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
id?: number;
nome?: string;
especialidade?: number;
servico?: number;
unidade?: number;
ativo?: boolean;
offset?: number;
limit?: number;
count?: boolean;
fields?: string;
orderBy?: string;
headers?: Headers;
}

/**
 * @name apiFuncionario
 * @description Retorna uma lista de funcionários
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://api.filazero.net/v2/ticketing`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["GET /api/Funcionario"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
