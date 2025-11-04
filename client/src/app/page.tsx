import { BlockRenderer } from "@/components/BlockRenderer";
import { getHomePage } from "@/data/loaders"; // getHomePageData

export default async function HomeRoute() {
  const obj = await getHomePage();
  const { blocks } = obj;
  // const { title, description, blocks } = obj;
  // console.log(title, description, blocks);
  // console.log(blocks);

  return (
    <main>
      <BlockRenderer blocks={blocks} />
    </main>
  );
}
