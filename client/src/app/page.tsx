import { BlockRenderer } from "@/components/BlockRenderer";
import { getHomePage } from "@/data/loaders"; // getHomePageData

export default async function HomeRoute() {
  const obj = await getHomePage();
  const { title, description, blocks } = obj;
  // console.log(title, description, blocks);

  return (
    <main>
      <BlockRenderer blocks={blocks} />
    </main>
  );
}


/*
      <HeroSection data={blocks[0]} />
      <FeaturesSection data={blocks[1]} />

    <div className="px-10 text-2xl text-center">
      <h2>Get Involved!</h2>
      <Newsletter />
    </div>

*/