import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
id?: string;
headers?: Headers;
}

/**
 * @name partnersAppointments:id
 * @description Update appointment status
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://central-de-saude.petlove.com.br/api/v1`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["PATCH /partners/appointments/:id"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
