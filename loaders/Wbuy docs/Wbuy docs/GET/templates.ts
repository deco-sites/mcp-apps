import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
page?: number;
limit?: number;
headers?: Headers;
}

/**
 * @name templates
 * @description List all templates
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://doc-templates.wbuy.com.br`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["GET /templates"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
