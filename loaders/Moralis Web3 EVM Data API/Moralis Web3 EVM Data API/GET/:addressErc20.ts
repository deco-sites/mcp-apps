import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
address?: string;
chain?: string;
tokenAddresses?: any;
headers?: Headers;
}

/**
 * @name :addressErc20
 * @description Get ERC20 tokens by wallet
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://deep-index.moralis.io/api/v2.2`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["GET /:address/erc20"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
