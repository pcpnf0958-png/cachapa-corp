import type { ReactNode } from 'react';

import { FooterCopyright } from './FooterCopyright';
import { FooterIconList } from './FooterIconList';

type ICenteredFooterProps = {
  logo: ReactNode;
  iconList: ReactNode;
  children: ReactNode;
};

const CenteredFooter = (props: ICenteredFooterProps) => (
  <div className="text-center">
    {props.logo}

    <nav>
      <ul className="navbar mt-5 flex flex-row justify-center text-xl font-medium text-gray-400">
        {props.children}
      </ul>
    </nav>

    <div className="mt-8 flex justify-center text-gray-400">
      <FooterIconList>{props.iconList}</FooterIconList>
    </div>

    <div className="mt-8 text-sm text-gray-500">
      <FooterCopyright />
    </div>

    <style jsx>
      {`
        .navbar :global(li) {
          @apply mx-4;
        }

        .navbar :global(a) {
          @apply transition-colors duration-150;
        }

        .navbar :global(a:hover) {
          @apply text-primary-400;
        }
      `}
    </style>
  </div>
);

export { CenteredFooter };
