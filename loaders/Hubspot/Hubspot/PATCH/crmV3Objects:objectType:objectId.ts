import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
objectType?: string;
objectId?: string;
headers?: Headers;
}

/**
 * @name crmV3Objects:objectType:objectId
 * @description Update a CRM object
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://api.hubapi.com`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["PATCH /crm/v3/objects/:objectType/:objectId"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
