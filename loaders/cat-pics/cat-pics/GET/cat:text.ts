import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
text?: string;
color?: string;
size?: number;
filter?: string;
type?: string;
headers?: Headers;
}

/**
 * @name cat:text
 * @description Get cat with text
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://cataas.com`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["GET /cat/:text"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
