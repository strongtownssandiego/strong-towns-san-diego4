export function getStrapiURL() {
  return "http://localhost:1337";
  // return process.env.STRAPI_CLOUD_URL ?? "http://localhost:1337";
}

// lib/strapi.ts
export const STRAPI_URL = process.env.STRAPI_URL || "https://your-strapi-domain";
export const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

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
export async function fetchFromStrapi<T = unknown>(
  url: URL,
  { populate ="*", filters, sort, pagination }: FetchOptions = {}
): Promise<T> {
  // const url = new URL(`${STRAPI_URL}/api/${path}`);

  const params = new URLSearchParams();

if (populate) {
  if (typeof populate === "string") {
    params.set("populate", populate);
  } else {
    appendQueryParams(params, "populate", populate);
  }
}
  if (sort) params.set("sort", sort);
  if (filters) params.set("filters", JSON.stringify(filters));
  if (pagination) params.set("pagination", JSON.stringify(pagination));

  url.search = params.toString();

  console.log(url.toString());

  const res = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${STRAPI_API_TOKEN}`,
    },
    next: { revalidate: 60 }, // optional, for ISR (Next.js App Router)
  });

  if (!res.ok) {
    throw new Error(`Strapi fetch error: ${res.statusText}`);
  }

  const json = await res.json();
  return json.data as T;
}
