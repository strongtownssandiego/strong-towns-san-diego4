// RegisterForm.tsx
"use client";

import { useActionState } from "react";
import { initialRegisterState } from "@/types";
import { registerUserAction } from "@/data/actions/auth-actions";
import { FormField } from "@/components/forms/FormField";
import { PasswordInput } from "@/components/forms/PasswordInput";
import { StrapiErrors } from "@/components/StrapiErrors";
import Link from "next/link";

export default function RegisterForm() {
  const [state, formAction] = useActionState(
    registerUserAction,
    initialRegisterState
  );

  return (
    <main className="flex min-h-screen items-center justify-center bg-linear-to-br from-muted to-background">
      <div className="w-full max-w-sm rounded-xl bg-white p-8 shadow-md">
        <h1 id="register-title" className="text-2xl font-semibold text-center mb-6">
          Create your account
        </h1>

    <form action={formAction} className="space-y-6 max-w-md mx-auto" noValidate>
      <FormField
        label="Username"
        name="username"
        defaultValue={state.values.username}
        errors={state.zodErrors?.username}
      />

      <FormField
        label="Email"
        name="email"
        type="email"
        defaultValue={state.values.email}
        errors={state.zodErrors?.email}
      />

      <PasswordInput
        name="password"
        label="Password"
        defaultValue=""
        errors={state.zodErrors?.password}
      />

      <PasswordInput
        name="confirmPassword"
        label="Confirm Password"
        defaultValue=""
        errors={state.zodErrors?.confirmPassword}
      />

      {state.strapiErrors && <StrapiErrors error={state.strapiErrors} />}

      <button
        type="submit"
        className="
          w-full bg-primary text-white font-medium py-2 rounded-md
          hover:opacity-90 transition
          focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
        "
      >
        Create Account
      </button>

      <div className="mt-4 text-center text-sm">
        Have an account?
        <Link className="underline ml-2" href="login">
          Sign In
        </Link>
      </div>

    </form>
    </div>
    </main>
  );
}
