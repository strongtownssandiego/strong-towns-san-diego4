import { getHomePageData } from "@/data/loaders";

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
