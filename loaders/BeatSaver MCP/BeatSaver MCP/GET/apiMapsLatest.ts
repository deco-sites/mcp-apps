import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
automapper?: boolean;
before?: string;
after?: string;
page?: number;
headers?: Headers;
}

/**
 * @name apiMapsLatest
 * @description No description provided
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: ``,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["GET /api/maps/latest"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
