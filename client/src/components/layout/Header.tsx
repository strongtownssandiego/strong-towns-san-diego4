"use client";
import Link from "next/link";
import { LinkProps, LogoProps } from "@/types";
import Logo from "../elements/Logo";
import Navbar from "./Navbar";

interface HeaderProps {
  data: {
    logo: LogoProps;
    navigation: LinkProps[];
    cta: LinkProps;
  };
}

export function Header({ data }: HeaderProps) {
  if (!data) return null;
  const { logo, navigation, cta } = data;
  const wantCtaBtn = false;

  return (
    <header className="w-full px-10 flex justify-between sticky top-0 z-10">
      <Logo logo={logo} />
      <Navbar navigation={navigation} />
      { cta && wantCtaBtn ?  <Link href={cta.href} target={cta.isExternal ? "_blank" : "_self"}>
        <button className="btn btn--black btn--small">{cta.text}</button>
      </Link> : null }
    </header>
  );
}

/*
      <ul className="header__nav flex items-center m-2 border-solid border-2">
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

*/