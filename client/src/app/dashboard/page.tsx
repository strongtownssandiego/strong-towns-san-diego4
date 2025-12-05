import { cookies } from "next/headers";

export default async function DashboardRoute() {
  const cookieStore = await cookies();
  const loggedIn = cookieStore.has("token");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1>Dashboard</h1>
      <p>Logged in: {loggedIn ? "YES" : "NO"}</p>
    </div>
  );
}

/*      
<LogoutButton />

*/