// ZodErrors.tsx
interface ZodErrorsProps {
  errors?: string[] | null;
  id?: string; // For associating with aria-describedby
}

export function ZodErrors({ errors, id }: ZodErrorsProps) {
  if (!errors || errors.length === 0) return null;

  console.log('ZodErrors', errors); // console.log(JSON.parse(JSON.stringify(errors)));

  return (
    <ul id={id} className="text-pink-600 text-sm space-y-1 mt-1">
      {errors.map((err, i) => (
        <li key={i}>{err}</li>
      ))}
    </ul>
  );
}
