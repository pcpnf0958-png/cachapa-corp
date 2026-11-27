import Link from 'next/link';

import { AppConfig } from '../utils/AppConfig';

type IRetroLogoProps = {
  xl?: boolean;
};

const RetroLogo = (props: IRetroLogoProps) => {
  const size = props.xl ? '32' : '26';

  return (
    <Link href="/" className="inline-flex items-center gap-2">
      <span className="cc-window-outset flex size-9 items-center justify-center bg-[#c0c0c0]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000080"
          strokeWidth="2"
          strokeLinecap="square"
          strokeLinejoin="miter"
        >
          <rect x="3" y="5" width="18" height="12" />
          <path d="M7 21h10" />
          <path d="M12 17v4" />
          <rect
            x="6"
            y="8"
            width="12"
            height="6"
            fill="#008080"
            stroke="#000040"
          />
          <path d="M8 11h8M8 12.5h5" stroke="#33ff33" strokeWidth="1" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`cc-pixel text-[#c0c0c0] ${
            props.xl ? 'text-base' : 'text-sm'
          }`}
        >
          {AppConfig.site_name}
        </span>
        <span className="mt-0.5 font-mono text-[10px] tracking-[0.2em] text-[#ffb000]">
          SISTEMA LEGACY
        </span>
      </span>
    </Link>
  );
};

export { RetroLogo };
