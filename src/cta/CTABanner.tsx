import type { ReactNode } from 'react';

type ICTABannerProps = {
  title: string;
  subtitle: string;
  button: ReactNode;
};

const CTABanner = (props: ICTABannerProps) => (
  <div className="flex flex-col rounded-2xl border border-primary-500/30 bg-gradient-to-r from-gray-900 via-[#101b2e] to-gray-900 p-6 shadow-2xl sm:flex-row sm:items-center sm:justify-between sm:p-12 sm:text-left">
    <div className="text-2xl font-semibold">
      <div className="text-white">{props.title}</div>
      <div className="text-primary-400">{props.subtitle}</div>
    </div>

    <div className="whitespace-no-wrap mt-4 sm:ml-4 sm:mt-0">
      {props.button}
    </div>
  </div>
);

export { CTABanner };
