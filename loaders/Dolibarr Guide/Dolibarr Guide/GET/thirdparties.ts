import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
limit?: number;
page?: number;
headers?: Headers;
}

/**
 * @name thirdparties
 * @description List all third parties
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://example.dolibarr.org/api/index.php`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["GET /thirdparties"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
