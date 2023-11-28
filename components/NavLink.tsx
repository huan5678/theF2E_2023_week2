'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';

type NextLinkProps = {
  title: string;
  href: string;
};

const NavLink = ({title, href}: NextLinkProps) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`${
        pathname === href ? 'text-primary border-primary' : 'text-white-dark border-transparent'
      } pb-3 border-b-4`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
