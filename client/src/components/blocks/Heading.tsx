import React from "react";
import type { HeadingProps } from "@/types";
export function Heading({ heading, linkId }: Readonly<HeadingProps>) {
  // console.log(heading, linkId)
  return (
    <div className="prose py-2 max-w-none mx-auto text-center">
      <h2 className="article-headline" id={linkId}>
        {heading}
      </h2>
    </div>
  );
}