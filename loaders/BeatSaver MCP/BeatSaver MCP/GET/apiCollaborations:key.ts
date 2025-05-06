import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
key?: string;
headers?: Headers;
}

/**
 * @name apiCollaborations:key
 * @description No description provided
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: ``,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["GET /api/collaborations/:key"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
