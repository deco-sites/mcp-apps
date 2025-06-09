import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
cpf?: string;
headers?: Headers;
}

/**
 * @name v1PessoasCpf:cpf
 * @description Consultar CPF
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://api.nfe.io`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["GET /v1/pessoas/cpf/:cpf"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
