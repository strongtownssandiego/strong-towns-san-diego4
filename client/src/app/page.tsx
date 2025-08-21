import { Button } from "@/components/ui/button";

async function loader() {
  const path = "/api/home-page";
  const BASE_URL = "http://localhost:1337";
  const url = new URL(path, BASE_URL);
  const response = await fetch(url.href);
  const data = await response.json();
    console.log(data);

  return {...data.data};
}

export default async function HomeRoute() {
  const data = await loader();
  return (
    <main className="container mx-auto py-6">
      <h1>{data.title}</h1>
    </main>
  );
}


/*
      <Button>Button to Nowhere</Button>
*/