import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
userId?: string;
headers?: Headers;
}

/**
 * @name users:userIdSettingsSendAs
 * @description List send-as aliases
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://gmail.googleapis.com/gmail/v1`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["GET /users/:userId/settings/sendAs"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
