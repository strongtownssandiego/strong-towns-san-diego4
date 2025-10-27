"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaInstagram, FaDiscord, FaRedditAlien, FaFacebookF } from "react-icons/fa";
import Link from "next/link";
import { LinkProps, LogoProps } from "@/types";
import Logo from "../elements/Logo";

interface HeaderProps {
  data: {
    logo: LogoProps;
    navigation: LinkProps[];
    cta: LinkProps;
  };
}

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/strongtownssandiego/",
    icon: FaInstagram,
    bg: "hover:bg-pink-700",
  },
  {
    name: "Discord",
    href: "https://discord.com/invite/8WYy2sQcxA",
    icon: FaDiscord,
    bg: "hover:bg-indigo-600",
  },
  {
    name: "Reddit",
    href: "https://www.reddit.com/r/StrongTownsSD/",
    icon: FaRedditAlien,
    bg: "hover:bg-orange-600",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61575577124066",
    icon: FaFacebookF,
    bg: "hover:bg-blue-600",
  },
];

export default function Header({ data }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const { logo, navigation } = data; // , cta

  // console.log(navigation);


  return (
    <header className="shadow-md w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Logo logo={logo} />

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className=" hover:text-blue-600 transition"
            >
              {item.text}
            </Link>
          ))}
        </nav>

        {/* Social icons */}
        <div className="hidden md:flex space-x-4">
          {socials.map(({ name, href, icon: Icon, bg }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className={`transition-colors bg-transparent ${bg} text-[var(--st-yellow)] hover:text-white`}
            >
              <Icon size={24} />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden  focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col px-4 py-2 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="block text-gray-700 hover:text-blue-600 py-1"
                onClick={() => setMenuOpen(false)}
              >
                {item.text}
              </Link>
            ))}

            {/* Optional: Social icons also appear in mobile view */}
            <div className="flex space-x-4 pt-2 border-t border-gray-100 mt-2">
              {socials.map(({ name, href, icon: Icon, bg }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className={`transition-colors bg-transparent ${bg} text-[var(--st-yellow)] hover:text-white`}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

/*
  // const isDesktop = useMediaQuery('(min-width: 768px)');

    <header className="shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">

*/