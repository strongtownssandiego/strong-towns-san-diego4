import { getStrapiURL } from "@/lib/utils";
import qs from "qs";

const BASE_URL = getStrapiURL(); //"http://localhost:1337";

async function fetchData(url: string) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // or return null;
  }

}

const homePageQuery = qs.stringify({
populate: {
    blocks: {
        on: {
          "blocks.hero-section": {
            populate: {
              image: true,              
              cta: true,
            },
          },
          "blocks.features-section": {
            populate: {
              blurbs: {
                fields: ["heading", "description"],
                populate: {
                  "link": true,
                },

              },        
            },
          },
        },
      }

  }
}
);


export async function getHomePageData() {
  const path = "/api/home-page";
  const url = new URL(path, BASE_URL);
  url.search = homePageQuery;

  return await fetchData(url.href);
}

const globalQuery = qs.stringify(
{
  populate: {
    header: {
      populate: {
        logo: {
          fields: ["logoText"],
          populate: {
            "image": true,
          },
        },
        navigation: true,
        cta: true,
      }
    }
  }
}
);

export async function getGlobalData() {
  const path = "/api/global";
  const url = new URL(path, BASE_URL);
  url.search = globalQuery;

  return await fetchData(url.href);
}
