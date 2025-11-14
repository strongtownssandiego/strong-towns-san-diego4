"use client"

import Link from "next/link"
import { useState } from "react"

export default function RegisterForm() {
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget as HTMLFormElement)
    const name = formData.get("name")?.toString().trim()
    const email = formData.get("email")?.toString().trim()
    const password = formData.get("password")?.toString()
    const confirm = formData.get("confirm")?.toString()

    const newErrors: { [key: string]: string } = {}
    if (!name) newErrors.name = "Name is required"
    if (!email) newErrors.email = "Email is required"
    if (!password) newErrors.password = "Password is required"
    if (password !== confirm) newErrors.confirm = "Passwords do not match"
    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      alert("✅ Registration successful (placeholder)")
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-linear-to-br from-muted to-background">
      <div className="w-full max-w-sm rounded-xl bg-white p-8 shadow-md">
        <h1 id="register-title" className="text-2xl font-semibold text-center mb-6">
          Create your account
        </h1>

        <form
          className="space-y-4"
          aria-labelledby="register-title"
          noValidate
          onSubmit={handleSubmit}
        >
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.name && (
              <p id="name-error" role="alert" className="mt-1 text-sm text-red-600">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
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
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.email && (
              <p id="email-error" role="alert" className="mt-1 text-sm text-red-600">
                {errors.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              aria-invalid={!!errors.password}
              aria-describedby={errors.password ? "password-error" : undefined}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.password && (
              <p id="password-error" role="alert" className="mt-1 text-sm text-red-600">
                {errors.password}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirm" className="block text-sm font-medium mb-1">
              Confirm password
            </label>
            <input
              id="confirm"
              name="confirm"
              type="password"
              autoComplete="new-password"
              required
              aria-invalid={!!errors.confirm}
              aria-describedby={errors.confirm ? "confirm-error" : undefined}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.confirm && (
              <p id="confirm-error" role="alert" className="mt-1 text-sm text-red-600">
                {errors.confirm}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-md hover:opacity-90 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Create account
          </button>
        </form>

        <p className="text-center text-sm text-muted-foreground mt-4">
          Already have an account?{" "}
          <Link className="text-primary hover:underline ml-2" href="login">
            Sign in
          </Link>
        </p>
      </div>
    </main>
  )
}
