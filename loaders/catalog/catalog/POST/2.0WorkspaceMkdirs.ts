import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
workspaceUrl: string;
headers?: Headers;
}

/**
 * @name 2.0WorkspaceMkdirs
 * @description Create a directory
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers, workspaceUrl } = props
  const client = createHttpClient({ base: `https://${workspaceUrl}/api`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["POST /2.0/workspace/mkdirs"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
