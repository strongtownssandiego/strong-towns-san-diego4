export const WHICH_STRAPI_SERVER = process.env.WHICH_STRAPI_SERVER || "LOCAL";
export const USE_STRAPI_CLOUD = (WHICH_STRAPI_SERVER === "CLOUD");

export function getStrapiURL() {
  if (USE_STRAPI_CLOUD && process.env.STRAPI_CLOUD_URL) return process.env.STRAPI_CLOUD_URL;
  return "http://localhost:1337";
}

// lib/strapi.ts
type StrapiPopulate = "*" | "deep" | `deep,${number}` | string | Record<string, unknown>;

type StrapiFilters = Record<string, unknown>;
type StrapiPagination = {
  page?: number;
  pageSize?: number;
  start?: number;
  limit?: number;
};

interface FetchOptions {
  populate?: StrapiPopulate;
  filters?: StrapiFilters;
  sort?: string;
  pagination?: StrapiPagination;
}

function appendQueryParams(params: URLSearchParams, key: string, value: unknown) {
  if (typeof value === "object" && value !== null) {
    for (const [subKey, subVal] of Object.entries(value)) {
      appendQueryParams(params, `${key}[${subKey}]`, subVal);
    }
  } else if (value !== undefined) {
    params.append(key, String(value));
  }
}

/**
 * Generic helper to fetch data from Strapi API using a secure API token.
 */
export async function fetchFromStrapi<T>(
  url: URL,
  { populate ="*", filters, sort, pagination }: FetchOptions = {}
): Promise<T> {

  let env = 'Unknown environment';
  if (process.env.NODE_ENV === 'development') {
    env = 'Running in development mode';
  } else if (process.env.NODE_ENV === 'production') {
    env = 'Running in production mode';
  }

  console.log("STRAPI TARGET:", {
    server: USE_STRAPI_CLOUD ? "CLOUD" : "LOCAL",
    url: getStrapiURL(),
    env: env
  });
  
  const params = new URLSearchParams();

  if (populate) {
    if (typeof populate === "string") {
      params.set("populate", populate);
    } else {
      appendQueryParams(params, "populate", populate);
    }
  }
  if (sort) params.set("sort", sort);
  if (filters) appendQueryParams(params, "filters", filters);
  if (pagination) appendQueryParams(params, "pagination", pagination);  

  url.search = params.toString();
  // console.log(url.toString());

  // use Public "Find" access, not API token
  const res = await fetch(url.toString(), {
    cache: "no-store",
  });

    // console.log(res);

  if (!res.ok) {
    throw new Error(`Strapi fetch error: ${res.status} ${res.statusText}`);
  }

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const json: any = await res.json();

  // Prefer "data" field, but fall back to entire JSON for custom endpoint, login etc.
  if ("data" in json) {
    return json.data as T;
  }

  return json as T;
}
