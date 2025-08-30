import { LinkProps } from '@/types'
import Link from 'next/link'
import React from 'react'

const Navbar = ({navigation}: {navigation: LinkProps[]}) => {
  return (
    <div>
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

    </div>
  )
}

export default Navbar