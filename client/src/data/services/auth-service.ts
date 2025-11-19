import { getStrapiURL } from "@/lib/strapi"; // fetchFromStrapi, 
import { RegisterUserProps } from "@/types";

const baseUrl = getStrapiURL();

export async function registerUserService(userData: RegisterUserProps) {
  const url = `${baseUrl}/api/create-user`; //new URL("/api/auth/local/register", baseUrl);

  try {
    const email = userData.email;
    const username = userData.username;
    const password = userData.password;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
      body: JSON.stringify({
        email,
        username,
        password,
      }),
    });

    const json = await res.json();

    if (!res.ok) {
      // Normalize Strapi-style errors
      return {
        ok: false,
        error: json.error || {
          message: "Unknown error",
        },
        data: null,
      };
    }

    return {
      ok: true,
      error: null,
      data: json,
    };
  } catch (err) {
    console.error("Registration Service Error:", err);

    return {
      ok: false,
      error: { message: "Network or server error" },
      data: null,
    };
  }
}
