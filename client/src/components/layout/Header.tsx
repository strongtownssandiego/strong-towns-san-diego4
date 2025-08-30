"use client";
import Link from "next/link";
// import { StrapiImage } from "@/components/StrapiImage";
import { LinkProps, LogoProps } from "@/types";
// import { useMediaQuery } from "@/lib/use-media-query";
import Logo from "../elements/Logo";

interface HeaderProps {
  data: {
    logo: LogoProps;
    navigation: LinkProps[];
    cta: LinkProps;
  };
}

export function Header({ data }: HeaderProps) {

  // const isDesktop = useMediaQuery('(min-width: 768px)');

  if (!data) return null;
  const { logo, navigation, cta } = data;

  return (
    <header className="header">
      <Logo logo={logo} />
      <ul className="header__nav">
        {navigation.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              target={item.isExternal ? "_blank" : "_self"}
            >
              <h5>{item.text}</h5>
            </Link>
          </li>
        ))}
      </ul>
      { cta ?  <Link href={cta.href} target={cta.isExternal ? "_blank" : "_self"}>
        <button className="btn btn--black btn--small">{cta.text}</button>
      </Link> : null }
    </header>
  );
}
