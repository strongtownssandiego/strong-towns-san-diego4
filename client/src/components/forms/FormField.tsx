// FormField.tsx
"use client";

import { InputHTMLAttributes } from "react";
import { ZodErrors } from "@/components/ZodErrors";

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  errors?: string[] | null;
  defaultValue?: string;
}

export function FormField({
  label,
  name,
  errors,
  defaultValue,
  type = "text",
  className = "",
  ...props
}: FormFieldProps) {
  const id = props.id ?? name;
  const errorId = `${id}-errors`;

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="font-medium">
        {label}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        defaultValue={defaultValue}
        aria-invalid={errors ? "true" : "false"}
        aria-describedby={errors ? errorId : undefined}
        className={`
          border rounded-md px-3 py-2 w-full
          focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
          ${className}
        `}
        {...props}
      />

      <ZodErrors errors={errors} id={errorId} />
    </div>
  );
}
