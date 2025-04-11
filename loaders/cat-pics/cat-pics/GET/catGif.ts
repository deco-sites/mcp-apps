import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
tag?: string;
filter?: string;
headers?: Headers;
}

/**
 * @name catGif
 * @description Get a random cat GIF
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://cataas.com`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["GET /cat/gif"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
