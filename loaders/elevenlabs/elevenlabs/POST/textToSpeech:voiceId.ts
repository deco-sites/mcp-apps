import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
voiceId?: string;
headers?: Headers;
}

/**
 * @name textToSpeech:voiceId
 * @description Convert text to speech
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://api.elevenlabs.io/v1`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["POST /text-to-speech/:voice_id"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
