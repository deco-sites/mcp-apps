import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
headers?: Headers;
}

/**
 * @name partnersAvailabilities
 * @description Create professional availabilities
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://central-de-saude.petlove.com.br/api/v1`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["POST /partners/availabilities"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
