import Link from 'next/link';

import { RetroLogo } from './RetroLogo';

const NAV_ITEMS = [
  { href: '#carta', label: 'Carta' },
  { href: '#software', label: 'Software' },
  { href: '#equipo', label: 'Equipo' },
  { href: '#contacto', label: 'Contacto' },
];

const RetroHeader = () => (
  <header className="sticky top-0 z-40 border-b-2 border-black bg-[#c0c0c0]">
    {/* Marquee ticker */}
    <div className="cc-marquee border-b border-[#808080] bg-[#000080] py-1 text-[11px] text-white">
      <span className="cc-pixel">
        *** CACHAPA CORP S.A. — SOFTWARE ULTRA-OPTIMIZADO PARA HARDWARE LEGACY —
        CABIMAS, ZULIA, VENEZUELA — SIN TELEMETRÍA, SIN BLOATWARE — CACHAPA CORP
        S.A. — SOFTWARE ULTRA-OPTIMIZADO PARA HARDWARE LEGACY — CABIMAS, ZULIA,
        VENEZUELA — SIN TELEMETRÍA, SIN BLOATWARE —&nbsp;
      </span>
    </div>

    <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-3 py-2">
      <RetroLogo />

      <nav aria-label="Principal">
        <ul className="flex flex-wrap items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="cc-btn block px-2.5 py-1 text-[11px] uppercase"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="#contacto"
              className="cc-btn cc-btn-primary block px-2.5 py-1 text-[11px] uppercase"
            >
              Pedir Presupuesto
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export { RetroHeader };
