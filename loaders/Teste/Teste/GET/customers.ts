import { AppContext } from "site/apps/site.ts";
import { createHttpClient } from "apps/utils/http.ts";

interface Props {
email?: string;
name?: string;
status?: string;
createdAtStart?: string;
createdAtEnd?: string;
updatedAtStart?: string;
updatedAtEnd?: string;
birthDateStart?: string;
birthDateEnd?: string;
cpf?: string;
page?: number;
pageSize?: number;
headers?: Headers;
}

/**
 * @name customers
 * @description List customers
 */
const loader = async (props: Props, _req: Request, _ctx: AppContext) => {
  const { headers,  } = props
  const client = createHttpClient({ base: `https://api.example.com/v1`,
        ...(headers ? {headers} : {}) });
  // @ts-ignore ignore client untyped
  return await client["GET /customers"]({ ...props })
    .then((r: any) => r.json())
    .catch(() => null);
};

export default loader;
