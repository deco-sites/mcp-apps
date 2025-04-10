import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
id?: number;
id2?: number;
headers?: Headers;
}

/**
 * @name apiFuncionario:idEspecialidade:id2
 * @description Remove vínculo de especiaidade com funcionário
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://api.filazero.net/v2/ticketing`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["DELETE /api/Funcionario/:id/Especialidade/:id2"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
