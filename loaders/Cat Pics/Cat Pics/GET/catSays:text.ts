import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
text?: string;
size?: number;
color?: string;
tag?: string;
type?: string;
filter?: string;
headers?: Headers;
}

/**
 * @name catSays:text
 * @description Get a cat image with the specified text
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://cataas.com`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["GET /cat/says/:text"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
