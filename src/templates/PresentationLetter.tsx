import Link from 'next/link';

const PresentationLetter = () => (
  <section id="carta" className="relative py-12">
    {/* Subtle glow effect behind the letter */}
    <div className="pointer-events-none absolute left-1/2 top-10 -z-10 h-72 w-3/4 max-w-4xl -translate-x-1/2 rounded-full bg-cyan-600/10 blur-3xl" />

    <div className="mx-auto max-w-4xl px-4 sm:px-6">
      {/* Letter Container */}
      <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900/90 via-[#0d1322] to-gray-950 p-6 shadow-2xl backdrop-blur-xl sm:p-10">
        {/* Terminal-like top bar / Letter Header */}
        <div className="mb-8 flex flex-wrap items-center justify-between border-b border-gray-800 pb-5 text-xs text-gray-400">
          <div className="flex items-center space-x-2">
            <span className="size-2.5 animate-pulse rounded-full bg-emerald-400" />
            <span className="font-mono text-gray-300">
              DOC-REF: CC-2026-PRESENTACION-OFICIAL
            </span>
          </div>
          <div className="font-mono text-cyan-400">
            EMPRESA: CACHAPA CORP S.A.
          </div>
        </div>

        {/* Formal Meta Info */}
        <div className="mb-8 grid grid-cols-1 gap-2 rounded-xl border border-gray-800/80 bg-gray-950/60 p-4 font-mono text-xs text-gray-300 sm:grid-cols-2">
          <div>
            <span className="text-gray-500">DE:</span> Dirección General &
            Cuerpo Técnico de Cachapa Corp
          </div>
          <div>
            <span className="text-gray-500">PARA:</span> Empresas, Talleres,
            Instituciones y Usuarios con Equipos Legacy
          </div>
          <div>
            <span className="text-gray-500">SECTOR:</span> Desarrollo & Venta de
            Software de Alta Eficiencia
          </div>
          <div>
            <span className="text-gray-500">ESTADO:</span> Abiertos a Nuevos
            Proyectos y Despliegues
          </div>
        </div>

        {/* Letter Title */}
        <div className="mb-6">
          <span className="inline-block rounded-md border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            Carta de Presentación Empresarial
          </span>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Revitalizando el hardware de ayer con la{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              ingeniería de software más eficiente
            </span>
          </h1>
        </div>

        {/* Letter Body */}
        <div className="space-y-5 text-base leading-relaxed text-gray-300">
          <p>
            <strong className="text-white">Estimado lector:</strong> En un
            ecosistema tecnológico dominado por el desperdicio de recursos y el
            hinchamiento innecesario del software (bloatware), millones de
            computadoras perfectamente funcionales son dadas de baja cada año.
            En <strong className="text-cyan-400">Cachapa Corp</strong> nacemos
            con una convicción inquebrantable:{' '}
            <em>
              el hardware antiguo no es el problema; el problema es cómo se
              programa hoy en día.
            </em>
          </p>

          <p>
            Nos dedicamos al diseño, desarrollo y venta de software comercial e
            institucional especialmente calibrado para ordenadores con recursos
            limitados: procesadores de generaciones previas (Pentium, Core 2
            Duo, AMD Athlon, i3 de primeras series), memorias RAM desde 512 MB
            hasta 4 GB, y almacenamiento en discos rígidos mecánicos (HDD).
          </p>

          <p>
            Mientras el software convencional exige gigabytes de memoria solo
            para arrancar, nuestras soluciones se construyen desde cero con
            arquitecturas nativas ultraligeras. Logramos que una computadora de
            hace una década ejecute labores administrativas, puntos de venta,
            ofimática, inventarios y telecomunicaciones con la misma soltura y
            agilidad que una máquina recién salida de fábrica.
          </p>
        </div>

        {/* Key Metrics / Highlights */}
        <div className="my-8 grid grid-cols-2 gap-4 border-y border-gray-800 py-6 sm:grid-cols-4">
          <div className="text-center">
            <div className="text-2xl font-extrabold text-cyan-400 sm:text-3xl">
              -85%
            </div>
            <div className="mt-1 text-xs text-gray-400">
              Consumo de Memoria RAM
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-extrabold text-emerald-400 sm:text-3xl">
              &lt; 1.5s
            </div>
            <div className="mt-1 text-xs text-gray-400">
              Tiempo de Inicio en HDD
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-extrabold text-blue-400 sm:text-3xl">
              32 / 64
            </div>
            <div className="mt-1 text-xs text-gray-400">
              Soporte x86 & x64 Nativo
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-extrabold text-purple-400 sm:text-3xl">
              0%
            </div>
            <div className="mt-1 text-xs text-gray-400">
              Telemetría o Bloatware
            </div>
          </div>
        </div>

        {/* Closing Paragraph */}
        <div className="text-base leading-relaxed text-gray-300">
          <p>
            El verdadero secreto de{' '}
            <strong className="text-white">Cachapa Corp</strong> no radica en la
            magia, sino en la especialización milimétrica de nuestro equipo
            humano. A continuación, les presentamos a los cuatro profesionales
            que hacen posible que cada línea de código cuente.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-4 pt-4">
          <Link
            href="#equipo"
            className="inline-flex items-center space-x-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-gray-950 shadow-lg shadow-cyan-500/20 transition-all hover:bg-cyan-400"
          >
            <span>Conocer a los Trabajadores (CV)</span>
            <span>↓</span>
          </Link>
          <Link
            href="#software"
            className="inline-flex items-center space-x-2 rounded-xl border border-gray-700 bg-gray-800/80 px-5 py-3 font-semibold text-gray-200 transition-all hover:border-gray-600 hover:bg-gray-700"
          >
            <span>Nuestras Soluciones de Software</span>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export { PresentationLetter };
