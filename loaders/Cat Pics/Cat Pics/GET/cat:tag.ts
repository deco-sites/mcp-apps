import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
tag?: string;
type?: string;
filter?: string;
headers?: Headers;
}

/**
 * @name cat:tag
 * @description Get a random cat image with the specified tag
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://cataas.com`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["GET /cat/:tag"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
