import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
nome?: string;
ativo?: boolean;
offset?: number;
limit?: number;
count?: boolean;
fields?: string;
orderBy?: string;
headers?: Headers;
}

/**
 * @name apiFormulario
 * @description Retorna uma lista de formulario
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://api.filazero.net/v2/ticketing`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["GET /api/Formulario"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
