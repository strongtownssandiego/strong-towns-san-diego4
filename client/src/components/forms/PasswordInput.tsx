// PasswordInput.tsx
"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { ZodErrors } from "@/components/ZodErrors";

interface PasswordInputProps {
  name: string;
  label: string;
  defaultValue?: string;
  errors?: string[] | undefined;
}

export function PasswordInput({
  name,
  label,
  defaultValue = "",
  errors,
}: PasswordInputProps) {
  const [show, setShow] = useState(false);
  const errorId = `${name}-errors`;

  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="font-medium block mb-1"
      >
        {label}
      </label>

      <div className="relative">
        <input
          id={name}
          name={name}
          type={show ? "text" : "password"}
          defaultValue={defaultValue}
          aria-invalid={errors ? "true" : "false"}
          aria-describedby={errors ? errorId : undefined}
          className={`border rounded-md px-3 py-2 w-full
            focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
            ${errors ? "border-pink-500" : ""}
          `}
        />

        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500"
          aria-label={show ? "Hide password" : "Show password"}
        >
          {show ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
      
      {errors && <ZodErrors errors={errors} id={errorId} />}
    </div>
  );
}
