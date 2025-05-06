import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
limit?: number;
page?: number;
headers?: Headers;
}

/**
 * @name products
 * @description List all products
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://example.dolibarr.org/api/index.php`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["GET /products"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
