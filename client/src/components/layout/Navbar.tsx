'use client';

// import { useMediaQuery } from '@/lib/use-media-query';
import { LinkProps } from '@/types'
import Link from 'next/link'
import React from 'react'

const Navbar = ({navigation}: {navigation: LinkProps[]}) => {
  // const isDesktop = useMediaQuery('(min-width: 768px)');
  return (
    <nav className="flex items-center align-center justify-center">
      <ul className="flex gap-4 px-4 py-1 rounded-full border-1 border-solid">
        {navigation.map((item) => (
          <li key={item.id}>
            {item.isExternal ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h5>{item.text}</h5>
              </a>
            ) : (
              <Link href={item.href}>
                <h5>{item.text}</h5>
              </Link>
            )}
          </li>
        ))}
      </ul>

    </nav>
  )
}

export default Navbar

/*

            <Link
              href={item.href}
              target={item.isExternal ? "_blank" : "_self"}
            >
              <h5>{item.text}</h5>
            </Link>

*/