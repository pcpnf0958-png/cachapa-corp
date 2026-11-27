import Link from 'next/link';

import { RetroWindow } from './RetroWindow';

const LETTER_META = [
  { k: 'DE', v: 'Dirección General & Cuerpo Técnico' },
  { k: 'PARA', v: 'Empresas, talleres e instituciones con equipos legacy' },
  { k: 'SECTOR', v: 'Desarrollo y venta de software de alta eficiencia' },
  { k: 'ESTADO', v: 'Abiertos a nuevos proyectos y despliegues' },
];

const METRICS = [
  { v: '-85%', k: 'Consumo de RAM', c: 'text-[#33ff33]' },
  { v: '< 1.5s', k: 'Arranque en HDD', c: 'text-[#ffb000]' },
  { v: '32 / 64', k: 'Nativo x86 y x64', c: 'text-[#33ff33]' },
  { v: '0%', k: 'Telemetría o bloatware', c: 'text-[#ffb000]' },
];

const RetroLetter = () => (
  <section id="carta" className="border-b-2 border-black py-10">
    <div className="mx-auto max-w-4xl px-3">
      <RetroWindow title="CARTA DE PRESENTACIÓN — CC-2026-OFICIAL">
        {/* Window menu bar */}
        <div className="-m-4 mb-4 flex items-center gap-1 border-b border-[#808080] bg-[#d4d0c8] px-2 py-1 font-mono text-[11px] text-black">
          <span className="px-1.5 py-0.5 hover:bg-[#000080] hover:text-white">
            Archivo
          </span>
          <span className="px-1.5 py-0.5 hover:bg-[#000080] hover:text-white">
            Editar
          </span>
          <span className="px-1.5 py-0.5 hover:bg-[#000080] hover:text-white">
            Ver
          </span>
          <span className="px-1.5 py-0.5 hover:bg-[#000080] hover:text-white">
            Ayuda
          </span>
        </div>

        {/* Doc header */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-[#808080] pb-3 font-mono text-[11px]">
          <span className="flex items-center gap-2 text-black">
            <span className="size-2 rounded-full bg-[#00a000]" />
            DOC-REF: CC-2026-PRESENTACION-OFICIAL
          </span>
          <span className="text-[#000080]">EMPRESA: CACHAPA CORP S.A.</span>
        </div>

        {/* Meta grid */}
        <div className="cc-window-sunken mb-5 grid grid-cols-1 gap-1.5 bg-[#d4d0c8] p-3 font-mono text-[11px] text-black sm:grid-cols-2">
          {LETTER_META.map((row) => (
            <div key={row.k} className="flex gap-1.5">
              <span className="shrink-0 text-[#000080]">{row.k}:</span>
              <span>{row.v}</span>
            </div>
          ))}
        </div>

        <h2 className="cc-pixel text-xl leading-snug text-black sm:text-2xl">
          RevITALIZANDO EL HARDWARE DE AYER CON LA{' '}
          <span className="bg-[#000080] px-1 text-white">
            INGENIERÍA DE SOFTWARE MÁS EFICIENTE
          </span>
        </h2>

        <div className="mt-4 space-y-3 font-mono text-[13px] leading-relaxed text-black">
          <p>
            <strong>Estimado lector:</strong> En un ecosistema tecnológico
            dominado por el desperdicio de recursos y el hinchamiento
            innecesario del software, millones de computadoras perfectamente
            funcionales son dadas de baja cada año. En Cachapa Corp nacemos con
            una convicción inquebrantable: el hardware antiguo no es el
            problema; el problema es cómo se programa hoy en día.
          </p>
          <p>
            Nos dedicamos al diseño, desarrollo y venta de software comercial e
            institucional calibrado para ordenadores con recursos limitados:
            procesadores de generaciones previas (Pentium, Core 2 Duo, AMD
            Athlon, i3 de primeras series), memorias RAM desde 512 MB hasta 4
            GB, y almacenamiento en discos rígidos mecánicos.
          </p>
          <p>
            Mientras el software convencional exige gigabytes de memoria solo
            para arrancar, nuestras soluciones se construyen desde cero con
            arquitecturas nativas ultraligeras. Logramos que una computadora de
            hace una década ejecute labores administrativas, puntos de venta,
            ofimática, inventarios y telecomunicaciones con la misma soltura que
            una máquina recién salida de fábrica.
          </p>
        </div>

        {/* Metrics strip */}
        <div className="my-5 grid grid-cols-2 gap-px border border-[#808080] bg-[#808080] sm:grid-cols-4">
          {METRICS.map((m) => (
            <div key={m.k} className="bg-[#0a0a0a] px-2 py-3 text-center">
              <div className={`cc-pixel text-lg ${m.c}`}>{m.v}</div>
              <div className="mt-1 font-mono text-[10px] text-[#a0a0a0]">
                {m.k}
              </div>
            </div>
          ))}
        </div>

        <div className="font-mono text-[13px] leading-relaxed text-black">
          <p>
            El verdadero secreto de Cachapa Corp no radica en la magia, sino en
            la especialización milimétrica de nuestro equipo humano. A
            continuación, les presentamos a los cuatro profesionales que hacen
            posible que cada línea de código cuente.
          </p>
        </div>

        {/* Action bar */}
        <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-[#808080] pt-4">
          <Link
            href="#equipo"
            className="cc-btn cc-btn-primary px-4 py-2 text-xs"
          >
            Conocer a los Trabajadores
          </Link>
          <Link href="#software" className="cc-btn px-4 py-2 text-xs">
            Nuestras Soluciones
          </Link>
        </div>

        {/* Status bar */}
        <div className="-m-4 mt-4 flex items-center gap-3 border-t border-[#808080] bg-[#d4d0c8] px-2 py-1 font-mono text-[10px] text-black">
          <span>Doc: 1 de 1</span>
          <span>UTF-8</span>
          <span className="ml-auto flex items-center gap-1">
            <span className="size-1.5 rounded-full bg-[#00a000]" />
            Listo
          </span>
        </div>
      </RetroWindow>
    </div>
  </section>
);

export { RetroLetter };
