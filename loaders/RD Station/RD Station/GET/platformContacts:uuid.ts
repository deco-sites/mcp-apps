import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
uuid?: string;
headers?: Headers;
}

/**
 * @name platformContacts:uuid
 * @description Get contact by UUID
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://api.rd.services`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["GET /platform/contacts/:uuid"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
