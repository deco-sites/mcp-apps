import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
assigneeId?: number;
projectId?: number;
isWorking?: boolean;
headers?: Headers;
}

/**
 * @name v1.0Tasks
 * @description List all tasks
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://runrun.it/api`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["GET /v1.0/tasks"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
