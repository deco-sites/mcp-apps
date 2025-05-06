import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
objectType?: string;
headers?: Headers;
}

/**
 * @name crmV3Objects:objectTypeSearch
 * @description Search CRM objects
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://api.hubapi.com`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["POST /crm/v3/objects/:objectType/search"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
