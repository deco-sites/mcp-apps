import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
headers?: Headers;
}

/**
 * @name financasLancamentoscontabeis_
 * @description Lançamentos Contábeis
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://app.omie.com.br/api/v1`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["POST /financas/lancamentoscontabeis/"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
