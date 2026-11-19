import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '36' : '28';
  const fontStyle = props.xl
    ? 'font-bold text-2xl tracking-tight'
    : 'font-semibold text-lg tracking-tight';

  return (
    <span className={`inline-flex items-center text-white ${fontStyle}`}>
      <span className="mr-2.5 flex size-9 items-center justify-center rounded-lg border border-cyan-500/30 bg-gradient-to-br from-cyan-900/60 to-blue-950/80 text-cyan-400 shadow-md shadow-cyan-500/10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <path d="M9 1v3" />
          <path d="M15 1v3" />
          <path d="M9 20v3" />
          <path d="M15 20v3" />
          <path d="M20 9h3" />
          <path d="M20 14h3" />
          <path d="M1 9h3" />
          <path d="M1 14h3" />
        </svg>
      </span>
      <span>
        {AppConfig.site_name}
        <span className="ml-1.5 text-xs font-semibold text-cyan-400">.dev</span>
      </span>
    </span>
  );
};

export { Logo };
