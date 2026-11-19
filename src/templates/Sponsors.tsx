import Image from 'next/image';

import { Section } from '@/layout/Section';

const Sponsors = () => (
  <Section
    title="Sponsors"
    description="Our sponsors' exceptional support has made this project possible."
  >
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      <div className="flex h-44 items-center justify-center rounded-xl border border-gray-800 bg-gray-900/60 p-4 transition-all duration-200 hover:border-primary-500/50 hover:bg-gray-800/60">
        <a
          href="https://clerk.com?utm_source=github&utm_medium=sponsorship&utm_campaign=nextjs-boilerplate"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/assets/images/clerk-logo-white.png"
            alt="Clerk – Authentication & User Management for Next.js"
            width={260}
            height={224}
            className="max-h-16 object-contain"
          />
        </a>
      </div>
      <div className="flex h-44 items-center justify-center rounded-xl border border-gray-800 bg-gray-900/60 p-4 transition-all duration-200 hover:border-primary-500/50 hover:bg-gray-800/60">
        <a
          href="https://www.coderabbit.ai?utm_source=next_js_starter&utm_medium=github&utm_campaign=next_js_starter_oss_2025"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/assets/images/coderabbit-logo-dark.svg"
            alt="CodeRabbit"
            width={260}
            height={224}
            className="max-h-16 object-contain"
          />
        </a>
      </div>
      <div className="flex h-44 items-center justify-center rounded-xl border border-gray-800 bg-gray-900/60 p-4 transition-all duration-200 hover:border-primary-500/50 hover:bg-gray-800/60">
        <a
          href="https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/assets/images/sentry-white.png"
            alt="Sentry"
            width={260}
            height={224}
            className="max-h-16 object-contain"
          />
        </a>
      </div>
      <div className="flex h-44 items-center justify-center rounded-xl border border-gray-800 bg-gray-900/60 p-4 transition-all duration-200 hover:border-primary-500/50 hover:bg-gray-800/60">
        <a
          href="https://launch.arcjet.com/Q6eLbRE"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/assets/images/arcjet-dark.svg"
            alt="Arcjet"
            width={260}
            height={224}
            className="max-h-16 object-contain"
          />
        </a>
      </div>
      <div className="flex h-44 items-center justify-center rounded-xl border border-gray-800 bg-gray-900/60 p-4 transition-all duration-200 hover:border-primary-500/50 hover:bg-gray-800/60">
        <a
          href="https://l.crowdin.com/next-js"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/assets/images/crowdin-white.png"
            alt="Crowdin"
            width={260}
            height={224}
            className="max-h-16 object-contain"
          />
        </a>
      </div>
      <div className="flex h-44 items-center justify-center rounded-xl border border-gray-800 bg-gray-900/60 p-4 transition-all duration-200 hover:border-primary-500/50 hover:bg-gray-800/60">
        <a
          href="https://nextjs-boilerplate.com/pro-saas-starter-kit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/assets/images/nextjs-boilerplate-saas.png"
            alt="Next.js Boilerplate SaaS"
            width={260}
            height={224}
            className="max-h-16 object-contain"
          />
        </a>
      </div>
    </div>
  </Section>
);

export { Sponsors };
