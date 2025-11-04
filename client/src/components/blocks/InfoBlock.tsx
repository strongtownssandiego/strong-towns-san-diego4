import { StrapiImage } from "@/components/StrapiImage";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

import type { InfoBlockProps } from "@/types";

export function InfoBlock({
  imageOnRight,
  image,
  heading,
  content,
  link,
}: Readonly<InfoBlockProps>) {
  // console.log('info block', imageOnRight, image, heading, content, link);
  return (
    <section className={`flex info px-4 py-2 ${imageOnRight && "flex-row-reverse"}`}>
      <StrapiImage
        src={image.url}
        alt={image.alternativeText || "Parklet image"}
        height={250}
        width={300}
      />
      <div className="prose mx-5">
        <h2 className="text-center">
          {heading}
        </h2>
        <div>
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
        {link && (
          <Link href={link.href} target={link.isExternal ? "_blank" : "_self"}>
            <div>
              <button className="navy-on-yellow px-3 rounded-full">
                {link.text}
              </button>
            </div>
          </Link>
        )}
      </div>
    </section>
  );
}