import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
indexName: string;
projectId: string;
environment: string;
ids?: any;
namespace?: string;
headers?: Headers;
}

/**
 * @name vectorsFetch
 * @description Fetch vectors
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers, indexName, projectId, environment } = props
  const client = createHttpClient({ base: `https://${indexName}-${projectId}.svc.${environment}.pinecone.io`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["GET /vectors/fetch"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
