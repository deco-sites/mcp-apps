import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
voiceId?: string;
optimizeStreamingLatency?: number;
headers?: Headers;
}

/**
 * @name textToSpeech:voiceIdStream
 * @description Text to speech stream
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://api.elevenlabs.io/v1`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["POST /text-to-speech/:voice_id/stream"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
