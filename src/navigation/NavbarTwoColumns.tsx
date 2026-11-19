import Link from 'next/link';
import type { ReactNode } from 'react';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="flex flex-wrap items-center justify-between gap-y-4">
    <div>
      <Link href="/">{props.logo}</Link>
    </div>

    <nav>
      <ul className="navbar flex flex-wrap items-center text-sm font-medium text-gray-300">
        {props.children}
      </ul>
    </nav>

    <style jsx>
      {`
        .navbar :global(li:not(:first-child)) {
          @apply ml-6;
        }

        .navbar :global(a) {
          @apply transition-colors duration-150 hover:text-cyan-400;
        }
      `}
    </style>
  </div>
);

export { NavbarTwoColumns };
