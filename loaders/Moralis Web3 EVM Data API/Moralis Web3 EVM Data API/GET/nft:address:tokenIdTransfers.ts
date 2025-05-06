import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
address?: string;
tokenId?: string;
chain?: string;
format?: string;
limit?: number;
cursor?: string;
headers?: Headers;
}

/**
 * @name nft:address:tokenIdTransfers
 * @description Get NFT transfers by token ID
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://deep-index.moralis.io/api/v2.2`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["GET /nft/:address/:token_id/transfers"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
