export const WHICH_STRAPI_SERVER = process.env.WHICH_STRAPI_SERVER || "LOCAL";
export const USE_STRAPI_CLOUD = (WHICH_STRAPI_SERVER === "CLOUD");
const STRAPI_API_TOKEN = (USE_STRAPI_CLOUD) ? process.env.STRAPI_CLOUD_API_TOKEN : process.env.STRAPI_LOCAL_API_TOKEN;

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

  const res = await fetch(url.toString(), {
    headers: {
      // "Content-Type": "application/json",         // for now we are only using GET, not POST
      Authorization: `Bearer ${STRAPI_API_TOKEN}`,
    },
    next: { revalidate: 60 }, // optional, for ISR (Next.js App Router)
  });

  if (!res.ok) {
    throw new Error(`Strapi fetch error: ${res.status} ${res.statusText}`);
  }

  const json: any = await res.json();

  // Prefer "data" field, but fall back to entire JSON for custom endpoint, login etc.
  if ("data" in json) {
    return json.data as T;
  }

  return json as T;
}
