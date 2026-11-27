import { RetroLogo } from './RetroLogo';

const RetroFooter = () => (
  <footer className="bg-[#c0c0c0] py-8">
    <div className="mx-auto max-w-6xl px-3">
      <div className="cc-window">
        <div className="flex flex-col items-start justify-between gap-5 p-4 sm:flex-row">
          <div>
            <RetroLogo />
            <p className="mt-2 max-w-sm font-mono text-[11px] leading-relaxed text-[#202020]">
              Ingeniería de software ultra-optimizada para computadoras de bajo
              rendimiento y hardware legacy.
            </p>
            <p className="mt-1 font-mono text-[11px] text-[#000080]">
              Sede operativa: Cabimas, Estado Zulia, Venezuela
            </p>
          </div>

          <div className="font-mono text-[11px] text-[#202020]">
            <div className="text-[#404040]">Equipo técnico fundador:</div>
            <div className="mt-1 leading-relaxed">
              Reinaldo Villegas · Abdiel Bustamante
              <br />
              Isaac Bastidas · Jesús Mujica
            </div>
          </div>
        </div>

        {/* Status bar */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-[#808080] bg-[#d4d0c8] px-3 py-1.5 font-mono text-[10px] text-[#404040]">
          <span>© {new Date().getFullYear()} Cachapa Corp S.A.</span>
          <span>Todos los derechos reservados</span>
          <span className="ml-auto flex items-center gap-1">
            <span className="size-1.5 rounded-full bg-[#00a000]" />
            Sistema operativo
          </span>
        </div>
      </div>
    </div>
  </footer>
);

export { RetroFooter };
