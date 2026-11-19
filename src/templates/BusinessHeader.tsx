import Link from 'next/link';

import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const BusinessHeader = () => (
  <header className="sticky top-0 z-40 border-b border-gray-800/80 bg-gray-950/80 backdrop-blur-md">
    <div className="border-b border-gray-800/40 bg-gradient-to-r from-cyan-950/30 via-slate-900/40 to-blue-950/30 py-1.5 text-center text-xs text-gray-400">
      <span className="font-mono text-cyan-400">⚡ Cachapa Corp</span> —
      Especialistas en software de alto rendimiento para computadoras y hardware
      antiguo.
    </div>
    <Section yPadding="py-4">
      <NavbarTwoColumns logo={<Logo />}>
        <li>
          <Link href="#carta">Carta de Presentación</Link>
        </li>
        <li>
          <Link href="#software">Soluciones</Link>
        </li>
        <li>
          <Link href="#equipo">Nuestro Equipo</Link>
        </li>
        <li>
          <Link href="#contacto">
            <span className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5 font-semibold text-cyan-400 hover:bg-cyan-500/20">
              Solicitar Software
            </span>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>
  </header>
);

export { BusinessHeader };
