"use client";

import Link from "next/link";
// import { useActionState } from "react";
// import { loginUserAction } from "@/data/actions/auth-actions";

export default function LoginForm() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-linear-to-br from-muted to-background">
      <div className="w-full max-w-sm rounded-xl bg-white p-8 shadow-md">
        <h1 className="text-2xl font-semibold text-center mb-6">Welcome back</h1>

        <form className="space-y-4" aria-labelledby="login-title">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-md hover:opacity-90 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Sign in
          </button>
        </form>

        <p className="text-center text-sm text-muted-foreground mt-4">
          Don’t have an account?{" "}
          <Link className="text-primary hover:underline ml-2" href="register">
            Register
          </Link>
        </p>
      </div>
    </main>
  )
}
