import Link from 'next/link';

const BOOT_LINES = [
  { text: 'Award Modular BIOS v4.51PG', tone: 'text-[#33ff33]' },
  {
    text: 'Copyright (C) 1984-1996, Award Software, Inc.',
    tone: 'text-[#33ff33]',
  },
  { text: '', tone: '' },
  { text: 'CACHAPA CORP LEGACY OS 2.04', tone: 'text-[#ffb000]' },
  { text: 'Optimizando nucleo de procesamiento...', tone: 'text-[#33ff33]' },
  { text: 'Reduccion de memoria asignada: 87% ... OK', tone: 'text-[#33ff33]' },
  { text: 'Cargando modulo POS.EXE ......... OK', tone: 'text-[#33ff33]' },
  { text: 'Cargando modulo OFFICE.EXE ....... OK', tone: 'text-[#33ff33]' },
  { text: 'Cargando modulo STOCK.EXE ....... OK', tone: 'text-[#33ff33]' },
  { text: '', tone: '' },
  { text: 'LISTO.', tone: 'text-[#ffb000]' },
];

const RetroHero = () => (
  <section className="cc-tile border-b-2 border-black py-8">
    <div className="mx-auto max-w-6xl px-3">
      <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
        {/*  CRT Monitor  */}
        <div className="lg:col-span-6">
          <div className="cc-window h-full">
            {/* Monitor bezel */}
            <div className="border-b-2 border-[#808080] bg-[#d4d0c8] p-3">
              <div className="cc-crt h-[280px] border-[10px] border-[#808080] bg-black shadow-crt sm:h-[330px]">
                <div className="flex h-full flex-col justify-between p-4">
                  <div className="cc-terminal space-y-[2px] text-[13px] leading-[1.15] text-[#33ff33] sm:text-[15px]">
                    {BOOT_LINES.map((line, i) => (
                      <div key={i} className={line.tone}>
                        {line.text || ''}
                      </div>
                    ))}
                    <div className="cc-cursor cc-crt-glow">
                      {'C:\\CACHAPA>'}
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-t border-[#33ff33]/20 pt-1 font-mono text-[10px] text-[#33ff33]/70">
                    <span>640x480 VGA</span>
                    <span>16.7M COLORS</span>
                    <span className="flex items-center gap-1">
                      <span className="size-1.5 rounded-full bg-[#33ff33]" />
                      ACTIVIDAD HDD
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Monitor base / case controls */}
            <div className="flex items-center justify-between gap-3 bg-[#d4d0c8] px-3 py-2">
              <div className="flex items-center gap-2">
                <span className="cc-pixel text-[10px] text-[#000080]">
                  CACHAPA SVGA 1024
                </span>
                <span className="flex gap-1" aria-hidden="true">
                  <span className="size-2 rounded-full bg-[#33ff33] shadow-[0_0_4px_#33ff33]" />
                  <span className="size-2 rounded-full bg-[#808080]" />
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="cc-btn flex size-5 items-center justify-center text-[9px]"></span>
                <span className="cc-btn flex size-5 items-center justify-center text-[9px]"></span>
                <span className="cc-btn flex size-5 items-center justify-center text-[9px]"></span>
              </div>
            </div>
          </div>
        </div>

        {/*  Pitch  */}
        <div className="flex flex-col justify-center lg:col-span-6">
          <div className="cc-window p-5 sm:p-6">
            <div className="cc-titlebar mb-4 px-2 py-1 text-[11px]">
              LEEME.TXT — Bloc de notas
            </div>

            <h1 className="cc-pixel text-2xl leading-tight text-[#c0c0c0] sm:text-3xl">
              <span className="text-[#ffb000]">CACHAPA CORP</span>
              <br />
              <span className="text-[#33ff33]">SOFTWARE PARA</span>
              <br />
              <span className="text-[#33ff33]">COMPUTADORAS ANTIGUAS</span>
            </h1>

            <div className="cc-window-sunken mt-4 bg-[#0a0a0a] p-3">
              <p className="font-mono text-[13px] leading-relaxed text-[#c0c0c0]">
                Tu Pentium 4 no es un problema. El problema es el software que
                le estás instalando.
              </p>
            </div>

            <p className="mt-4 font-mono text-[13px] leading-relaxed text-[#a0a0a0]">
              Construimos software comercial e institucional que corre con
              fluidez sobre Pentium, Core 2 Duo y Athlon, con 512 MB de RAM y
              discos mecánicos. Sin frameworks pesados, sin telemetría, sin
              actualizaciones que exigen 20 GB libres.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <Link
                href="#software"
                className="cc-btn cc-btn-primary px-4 py-2 text-xs"
              >
                Ver Catálogo
              </Link>
              <Link href="#carta" className="cc-btn px-4 py-2 text-xs">
                Leer la Carta
              </Link>
            </div>

            {/* Spec readout */}
            <div className="mt-5 grid grid-cols-3 gap-px border border-[#808080] bg-[#808080]">
              {[
                { k: 'RAM', v: '< 48 MB' },
                { k: 'ARRANQUE', v: '< 1.5 s' },
                { k: 'BINARIO', v: 'x86 / x64' },
              ].map((spec) => (
                <div key={spec.k} className="bg-[#d4d0c8] p-2 text-center">
                  <div className="font-mono text-[9px] tracking-wider text-[#000080]">
                    {spec.k}
                  </div>
                  <div className="cc-pixel mt-1 text-[11px] text-black">
                    {spec.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export { RetroHero };
