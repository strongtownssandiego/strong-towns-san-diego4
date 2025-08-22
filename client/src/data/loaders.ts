import qs from "qs";

const BASE_URL = "http://localhost:1337";

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
        },
      },
    },
});


export async function getHomePageData() {
  const path = "/api/home-page";
  const url = new URL(path, BASE_URL);
  url.search = homePageQuery;
  
  return await fetchData(url.href);
}
