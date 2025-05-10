import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
id?: string;
filter?: string;
type?: string;
json?: boolean;
headers?: Headers;
}

/**
 * @name cat:id
 * @description Get cat by ID
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://cataas.com`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["GET /cat/:id"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
