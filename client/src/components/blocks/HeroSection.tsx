import { HeroSectionProps } from "@/types";
import { StrapiImage } from "@/components/StrapiImage";
import Link from "next/link";

export async function HeroSection({ heading, subheading, image, cta }: Readonly<HeroSectionProps>) {
  const cta0 = cta && cta[0];
  // console.log("subheading", subheading);
  const wantHeroBtn = false;

  return (
    <>
    <section className="w-full">
        <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[100vh] overflow-hidden">
          <StrapiImage
            src={image.url}
            alt={image.alternativeText || "Hero background"}
            width={2000}
            height={1050}
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 flex flex-col items-center justify-start pt-4 sm:pt-6 lg:pt-10 text-center px-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-200 drop-shadow-lg">{heading}</h1>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-200 drop-shadow-lg">{subheading}</h1>
            <div className="mt-2 flex items-center justify-center gap-x-6">
              {cta0 && wantHeroBtn && (
                <button className={"btn btn--medium rounded-full  px-5 py-2 text-sm font-semibold shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}>
                  <Link href={cta0.href}
                    target={cta0.isExternal ? "_blank" : "_self"}>
                    {cta0.text}
                  </Link>
                </button>
              )}
            </div>
          </div>
        
        </div>
    </section>
    </>
  );
}

/*

    {cta0 && wantHeroBtn && (
      <div className="mt-2 flex items-center justify-center gap-x-6">
        <Link
          href={cta0.href}
          target={cta0.isExternal ? "_blank" : "_self"}
          className="btn btn--medium rounded-full px-5 py-2 text-sm font-semibold shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {cta0.text}
        </Link>
      </div>
    )}

      <StrapiImage
        src={image.url}
        alt={image.alternativeText || "No alternative text provided"}
        className="hero__background-image"
        width={1920}
        height={1080}
      />
      <h1>{heading}</h1>
      <p>{subheading}</p>
      {cta0 && (
        <button className={`btn btn--medium`}>
          <Link href={cta0.href} target={cta0.isExternal ? "_blank" : "_self"}>
            {cta0.text}
          </Link>
        </button>
      )}



  <div class="relative isolate px-6 pt-14 lg:px-8">
    <div aria-hidden="true" class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
      <div style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" class="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"></div>
    </div>
    <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div class="hidden sm:mb-8 sm:flex sm:justify-center">
        <div class="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Announcing our next round of funding. <a href="#" class="font-semibold text-indigo-600"><span aria-hidden="true" class="absolute inset-0"></span>Read more <span aria-hidden="true">&rarr;</span></a>
        </div>
      </div>
      <div class="text-center">
        <h1 class="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">Data to enrich your online business</h1>
        <p class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.</p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
          <a href="#" class="text-sm/6 font-semibold text-gray-900">Learn more <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </div>
    <div aria-hidden="true" class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
      <div style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" class="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"></div>
    </div>
  </div>

  */