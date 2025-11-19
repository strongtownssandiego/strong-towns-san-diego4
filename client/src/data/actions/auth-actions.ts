// auth-actions.ts
"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";
import { initialRegisterState, RegisterUserState } from "@/types";
import { registerUserService } from "@/data/services/auth-service";

const config = {
  maxAge: 60 * 60 * 24 * 7, // 1 week
  path: "/",
  domain: process.env.HOST ?? "localhost",
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
};

const schemaRegister = z.object({
  username: z.string().min(3).max(20, {
    message: "Username must be between 3 and 20 characters",
  }).refine((value) => !value.includes(" "), {
    message: "Username cannot contain spaces",
    path: ["username"],
  }),
  email: z.string().nonempty().refine((value) => {
    // Custom validation function to check if the email address is valid
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
  }, {
    message: "Please enter a valid email address",
  }),
  password: z.string().min(6).max(100, {
    message: "Password must be between 6 and 100 characters",
  }),
  confirmPassword: z.string().min(6, {
    message: "Please confirm your password",
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});


export async function registerUserAction(
  prevState: RegisterUserState = initialRegisterState,
  formData: FormData
): Promise<RegisterUserState> {

  const rawValues = {
    username: String(formData.get("username") || ""),
    email: String(formData.get("email") || ""),
    password: String(formData.get("password") || ""),
    confirmPassword: String(formData.get("confirmPassword") || ""),
  };
  const validated = schemaRegister.safeParse(rawValues);
  // console.log(validated);

  if (!validated.success) {
    return {
      ...prevState,
      values: {
        username: formData.get("username") as string,
        email: formData.get("email") as string,
      },
      zodErrors: validated.error.flatten().fieldErrors,
      strapiErrors: null,
      message: "Validation failed.",
    };
  }

  const result = await registerUserService(validated.data);

  if (!result.ok) {
    return {
      ...prevState,
      zodErrors: null,
      strapiErrors: result.error,
      message: "Failed to Register.",
      values: rawValues, // ⬅ keep user’s input
    };
  }


  // Success
  const cookieStore = await cookies();
  cookieStore.set("jwt", result.data.jwt, config);

  redirect("/dashboard");
}
