import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
text?: string;
color?: string;
size?: number;
filter?: string;
headers?: Headers;
}

/**
 * @name catGifSays:text
 * @description Get a cat GIF with text
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://cataas.com`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["GET /cat/gif/says/:text"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
