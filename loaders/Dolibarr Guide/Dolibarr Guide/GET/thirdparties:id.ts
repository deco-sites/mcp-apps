import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
id?: number;
headers?: Headers;
}

/**
 * @name thirdparties:id
 * @description Get a third party by ID
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://example.dolibarr.org/api/index.php`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["GET /thirdparties/:id"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
