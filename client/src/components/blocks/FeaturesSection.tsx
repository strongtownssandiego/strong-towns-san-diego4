import { FeaturesSectionProps } from "@/types";




export function FeaturesSection({
  data,
}: {
  readonly data: FeaturesSectionProps;
}) {
  const { blurbs } = data;
//   console.dir(blurbs, { depth: null });
  return (
    <div className="">
      <div className="flex-1">
        <section className="px-4 py-6 mx-auto md:px-6 lg:py-24">
          <div className="grid gap-8 md:grid-cols-3">
            {blurbs.map((blurb) => (
              <div
                key={blurb.id}
                className="flex flex-col items-center text-center"
              >
                <h2 className="mb-4 text-2xl font-bold">{blurb.heading}</h2>
                <p className="text-gray-500">
                  {blurb.description}
                </p>
                {blurb.link && (
                  <a
                    href={blurb.link.href}
                    className="inline-block mt-4 text-sm font-semibold text-indigo-600"
                  >
                    {blurb.link.text}
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

