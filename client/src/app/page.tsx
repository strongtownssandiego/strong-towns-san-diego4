import { FeaturesSection } from "@/components/blocks/FeaturesSection";
import { HeroSection } from "@/components/blocks/HeroSection";
import { getHomePageData } from "@/data/loaders";

export default async function HomeRoute() {
  const obj = await getHomePageData();
  // const { title, description } = obj.data;
  const { blocks } = obj.data;

  return (
    <main className="container mx-auto py-6">
      <HeroSection data={blocks[0]} />
      <FeaturesSection data={blocks[1]} />
    </main>
  );
}
