import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
key?: string;
hash?: string;
headers?: Headers;
}

/**
 * @name apiDownloadKey:key:hash
 * @description No description provided
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: ``,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["GET /api/download/key/:key/:hash"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
