import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
companyId?: string;
id?: string;
headers?: Headers;
}

/**
 * @name v1Companies:companyIdServiceinvoices:idEmail
 * @description Enviar Nota Fiscal de Serviço por email
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://api.nfe.io`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["POST /v1/companies/:company_id/serviceinvoices/:id/email"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
