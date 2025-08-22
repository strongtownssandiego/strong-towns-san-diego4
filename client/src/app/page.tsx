import qs from "qs";

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


async function getHomePageData() {
  const BASE_URL = "http://localhost:1337";
  const path = "/api/home-page";
  const url = new URL(path, BASE_URL);
  url.search = homePageQuery;

  try {
    const response = await fetch(url.href);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default async function HomeRoute() {
  const obj = await getHomePageData();
  const { title, description } = obj.data;

  return (
    <main className="container mx-auto py-6">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p>{description}</p>
    </main>
  );
}
