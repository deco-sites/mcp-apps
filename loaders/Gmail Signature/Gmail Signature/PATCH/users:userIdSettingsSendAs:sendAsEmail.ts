import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
userId?: string;
sendAsEmail?: string;
headers?: Headers;
}

/**
 * @name users:userIdSettingsSendAs:sendAsEmail
 * @description Update send-as alias
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://gmail.googleapis.com/gmail/v1`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["PATCH /users/:userId/settings/sendAs/:sendAsEmail"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
