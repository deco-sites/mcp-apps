import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
urlId?: string;
headers?: Headers;
}

/**
 * @name logs:urlId
 * @description Get logs for a specific URL
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `/api`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["GET /logs/:urlId"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
