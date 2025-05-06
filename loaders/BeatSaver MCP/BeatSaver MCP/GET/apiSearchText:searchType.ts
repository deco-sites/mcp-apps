import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
searchType?: any;
automapper?: boolean;
noodle?: boolean;
chroma?: boolean;
me?: boolean;
cinema?: boolean;
ranked?: boolean;
curated?: boolean;
verified?: boolean;
minDuration?: number;
maxDuration?: number;
minNps?: number;
maxNps?: number;
minRating?: number;
maxRating?: number;
from?: string;
to?: string;
fullSpread?: boolean;
query?: string;
sortOrder?: any;
page?: number;
includeEmpty?: boolean;
headers?: Headers;
}

/**
 * @name apiSearchText:searchType
 * @description No description provided
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: ``,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["GET /api/search/text/:searchType"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
