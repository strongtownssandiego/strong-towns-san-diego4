"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { ZodErrors } from "@/components/ZodErrors";

interface InputProps {
  name: string;
  label: string;
  type?: "text" | "email" | "password";
  defaultValue?: string;
  errors?: string[];
}

export function Input({
  name,
  label,
  type = "text",
  defaultValue = "",
  errors = [],
}: InputProps) {
  const [show, setShow] = useState(false);
  const errorId = `${name}-errors`;
  const isPassword = type === "password";

  return (
    <div className="mb-4">
      {/* Label */}
      <label htmlFor={name} className="font-medium block mb-1">
        {label}
      </label>

      <div className="relative">
        {/* Input */}
        <input
          id={name}
          name={name}
          type={isPassword ? (show ? "text" : "password") : type}
          defaultValue={defaultValue}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${
            errors?.length ? "border-pink-500" : ""
          }`}
          aria-invalid={errors?.length > 0}
          aria-describedby={errors?.length ? errorId : undefined}
        />

        {/* Password toggle */}
        {isPassword && (
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500"
          >
            {show ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>

      {/* Direct errors */}
      {errors?.map((err, i) => (
        <p key={i} className="text-pink-500 text-xs italic mt-1">
          {err}
        </p>
      ))}

      {/* Optional ZodErrors component */}
      {errors?.length > 0 && <ZodErrors errors={errors} id={errorId} />}
    </div>
  );
}
