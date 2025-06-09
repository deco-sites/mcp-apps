import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
companyId?: string;
id?: string;
headers?: Headers;
}

/**
 * @name v1Companies:companyIdServiceinvoices:id
 * @description Cancelar uma Nota Fiscal de Serviço
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://api.nfe.io`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["DELETE /v1/companies/:company_id/serviceinvoices/:id"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
