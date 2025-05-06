import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
resumeId?: string;
headers?: Headers;
}

/**
 * @name resume:resumeIdPdf
 * @description Generate PDF for a resume
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://api.rendercv.com/v1`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["GET /resume/:resumeId/pdf"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
