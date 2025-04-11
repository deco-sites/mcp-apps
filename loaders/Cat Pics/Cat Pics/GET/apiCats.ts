import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
skip?: number;
limit?: number;
tags?: string;
headers?: Headers;
}

/**
 * @name apiCats
 * @description Get metadata about cats
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://cataas.com`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["GET /api/cats"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
