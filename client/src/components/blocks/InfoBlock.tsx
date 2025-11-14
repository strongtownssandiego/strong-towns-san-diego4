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
    <section className="w-full flex justify-center px-4 py-8">
      <div className={`flex flex-col md:flex-row ${imageOnRight ? "md:flex-row-reverse" : ""} items-center md:items-start gap-6 max-w-5xl`}>
        <StrapiImage
          src={image.url}
          alt={image.alternativeText || "Parklet image"}
          height={250}
          width={300}
          className="shrink-0 rounded-lg"
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
      </div>
    </section>
  );
}