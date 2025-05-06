import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
transactionHash?: string;
chain?: string;
include?: string;
headers?: Headers;
}

/**
 * @name transaction:transactionHash
 * @description Get transaction
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://deep-index.moralis.io/api/v2.2`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["GET /transaction/:transaction_hash"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
