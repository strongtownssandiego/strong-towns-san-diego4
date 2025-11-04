import { fetchFromStrapi } from "@/lib/strapi";
import { getStrapiURL } from "@/lib/strapi";
import { HomePageProps } from "@/types";
import qs from "qs";

const BASE_URL = getStrapiURL();

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
              blurbs: true     
            },
          },

        },
      }

  }
}
);

/*
          "blocks.heading": {
            populate: {
              image: true,              
              cta: true,
            },
          },
*/

export async function getHomePage() {
  const path = "/api/home-page";
  const url = new URL(path, BASE_URL);
  return fetchFromStrapi<HomePageProps>(url, {populate: {blocks: {populate: "*" } } });
  
}
/*
await fetchFromStrapi("home-page", {
  populate: {
    blocks: {
      populate: {
        blurbs: {
          populate: "*",
        },
      },
    },
  },
});

const home = await fetchFromStrapi("home-page", {
  populate: {
    blocks: {
      populate: "*",
    },
  },
});*/

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
