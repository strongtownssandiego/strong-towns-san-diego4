"use client";

import { LinkProps, LogoProps } from "@/types";
import Logo from "@/components/elements/Logo";
import Navbar from "@/components/layout/Navbar";
import SocialIcons from "@/components/layout/SocialIcons";

interface HeaderProps {
  data: {
    logo: LogoProps;
    navigation: LinkProps[];
    cta: LinkProps;
  };
}

export function Header({ data }: HeaderProps) {
  if (!data) return null;
  const { logo, navigation } = data; // , cta

  return (
    <header className="w-full px-10 flex justify-between sticky top-0 z-10">
      <Logo logo={logo} />
      <Navbar navigation={navigation} />
      <SocialIcons />
    </header>
  );
}

/*
  const wantCtaBtn = false;
      { cta && wantCtaBtn ?  <Link href={cta.href} target={cta.isExternal ? "_blank" : "_self"}>
        <button className="btn btn--black btn--small">{cta.text}</button>
      </Link> : null }

*/