import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
objectType?: string;
objectId?: string;
toObjectType?: string;
headers?: Headers;
}

/**
 * @name crmV3Objects:objectType:objectIdAssociations:toObjectType
 * @description Get associated objects
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://api.hubapi.com`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["GET /crm/v3/objects/:objectType/:objectId/associations/:toObjectType"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
