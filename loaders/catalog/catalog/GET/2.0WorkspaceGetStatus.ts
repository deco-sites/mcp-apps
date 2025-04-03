import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
workspaceUrl: string;
path?: string;
headers?: Headers;
}

/**
 * @name 2.0WorkspaceGetStatus
 * @description Get workspace object status
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers, workspaceUrl } = props
  const client = createHttpClient({ base: `https://${workspaceUrl}/api`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["GET /2.0/workspace/get-status"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
