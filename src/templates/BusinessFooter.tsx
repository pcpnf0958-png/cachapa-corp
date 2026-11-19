import { Logo } from './Logo';

const BusinessFooter = () => (
  <footer className="border-t border-gray-800/80 bg-gray-950 py-10 text-xs text-gray-500">
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex flex-col items-center sm:items-start">
          <Logo />
          <p className="mt-2 text-center text-xs text-gray-400 sm:text-left">
            Ingeniería de software ultra-optimizada para computadoras de bajo
            rendimiento y hardware legacy.
          </p>
        </div>

        <div className="text-center sm:text-right">
          <div className="font-semibold text-gray-300">
            Equipo Técnico Fundador:
          </div>
          <div className="mt-1 font-mono text-[11px] text-gray-400">
            Reinaldo Villegas • Abdiel Bustamante • Isaac Bastidas • Jesús
            Mujica
          </div>
          <div className="mt-2 text-gray-500">
            © {new Date().getFullYear()} Cachapa Corp S.A. Todos los derechos
            reservados.
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export { BusinessFooter };
