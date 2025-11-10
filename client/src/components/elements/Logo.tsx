import { LogoProps } from "@/types"
import Link from "next/link"
import { StrapiImage } from "@/components/StrapiImage";

const Logo = ({logo}: {logo: LogoProps}) => {
  return (
    <Link href="/">
      <StrapiImage
        src={logo.image.url}
        alt={logo.image.alternativeText || "Strong Towns San Diego logo links to Home page"}
        className={"header__logo h-16 w-16"}
        width={120}
        height={120}
        title="Home page"
      />
    </Link>
  )
}

export default Logo
