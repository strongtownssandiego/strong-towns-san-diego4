import { LogoProps } from "@/types"
import Link from "next/link"
import { StrapiImage } from "../StrapiImage"

const Logo = ({logo}: {logo: LogoProps}) => {
  // console.log(logo);
  return (
    <Link href="/">
      <StrapiImage
        src={logo.image.url}
        alt={logo.image.alternativeText || "Strong Towns San Diego logo links to Home page"}
        className={"header__logo"}
        width={120}
        height={120}
        title="Home page"
      />
    </Link>
  )
}

export default Logo
