import { useRouter } from 'next/router';

import { RetroWindow } from './RetroWindow';

type IWorkerProfile = {
  id: string;
  name: string;
  role: string;
  shortRole: string;
  experience: string;
  location: string;
  personalEmail: string;
  corporateEmail: string;
  tagline: string;
  avatarInitials: string;
  responsibilities: string[];
  cvSummary: string;
  skills: string[];
  impactMetric: { label: string; value: string };
};

const WORKERS_DATA: IWorkerProfile[] = [
  {
    id: 'reinaldo-villegas',
    name: 'REINALDO VILLEGAS',
    role: 'Líder de Equipo & Director de Operaciones Técnicas',
    shortRole: 'Líder y asignación de tareas',
    experience: '8 años en la industria tecnológica',
    location: 'Cabimas, Zulia, Venezuela',
    personalEmail: 'reinaldovillegas.cabimas@gmail.com',
    corporateEmail: 'reinaldo@cachapacorp.dev',
    tagline:
      '«Coordinar con precisión milimétrica para que cada tarea técnica se traduzca en software rápido, puntual y confiable».',
    avatarInitials: 'RV',
    cvSummary:
      'Especialista en dirección de proyectos de ingeniería de software y orquestación de equipos técnicos. Orgullosamente oriundo de Cabimas, Zulia. En Cachapa Corp es la mente estratégica que analiza las necesidades de los clientes con hardware antiguo, descompone los requerimientos en tareas técnicas de alta prioridad y supervisa que los ciclos de entrega cumplan con los estándares de rendimiento más rigurosos.',
    responsibilities: [
      'Asignación, seguimiento y balanceo de tareas para el equipo de desarrollo y optimización.',
      'Definición de hojas de ruta (roadmaps) de los productos de software de Cachapa Corp.',
      'Gestión de relaciones técnicas con clientes corporativos y levantamiento de requerimientos de hardware.',
      'Aseguramiento de plazos de entrega y control de calidad final antes del despliegue.',
    ],
    skills: [
      'Asignación estratégica de tareas',
      'Gestión ágil / Scrum',
      'Arquitectura de proyectos',
      'Gestión de recursos críticos',
      'Control de calidad (QA)',
      'Liderazgo técnico',
    ],
    impactMetric: {
      label: 'Sprints y proyectos coordinados',
      value: '100% en tiempo',
    },
  },
  {
    id: 'abdiel-bustamante',
    name: 'ABDIEL BUSTAMANTE',
    role: 'Ingeniero Principal de Optimización & Rendimiento de Sistemas',
    shortRole: 'Encargado de optimizar programas',
    experience: '7 años en ingeniería de bajo nivel',
    location: 'Cabimas, Zulia, Venezuela',
    personalEmail: 'abdielbustamante.opt@gmail.com',
    corporateEmail: 'abdiel@cachapacorp.dev',
    tagline:
      '«Si una aplicación tarda más de dos segundos en abrir o consume más de 50 MB de RAM, está mal hecha».',
    avatarInitials: 'AB',
    cvSummary:
      'Ingeniero de software nacido y formado en Cabimas, Zulia, especializado en sistemas de bajo nivel, compiladores y consumo mínimo de recursos. En Cachapa Corp es el encargado de auditar y exprimir cada ciclo de procesador: refactoriza algoritmos pesados, purga fugas de memoria, optimiza binarios con ensamblador y garantiza que el software corra con total soltura en procesadores mononúcleo y memorias DDR2/DDR3.',
    responsibilities: [
      'Optimización extrema de consumo de memoria RAM y reducción del uso de CPU.',
      'Perfilado profundo (profiling) de código para erradicar cuellos de botella y latencia.',
      'Compilación de binarios nativos optimizados para arquitecturas x86 y conjuntos de instrucciones antiguos.',
      'Reemplazo de algoritmos ineficientes por estructuras de datos de acceso ultra-rápido.',
    ],
    skills: [
      'Optimización en C / C++',
      'Ensamblador x86',
      'Profiling (Valgrind / GProf)',
      'Gestión manual de memoria',
      'Algoritmos cache-friendly',
      'Compresión de binarios',
    ],
    impactMetric: {
      label: 'Reducción promedio de RAM',
      value: '-87% de consumo',
    },
  },
  {
    id: 'isaac-bastidas',
    name: 'ISAAC BASTIDAS',
    role: 'Diseñador Principal de Software & Arquitecto de Interfaces Ligeras',
    shortRole: 'Encargado del diseño de programas',
    experience: '6 años en UI/UX y diseño de software',
    location: 'Cabimas, Zulia, Venezuela',
    personalEmail: 'isaacbastidas.ui@gmail.com',
    corporateEmail: 'isaac@cachapacorp.dev',
    tagline:
      '«La estética y la modernidad no deben costar gigabytes de memoria. El buen diseño es ligero y funcional».',
    avatarInitials: 'IB',
    cvSummary:
      'Diseñador de software e interfaces humanas radicado en Cabimas, Zulia, especializado en ergonomía y frontend de ultra-bajo impacto. En Cachapa Corp lidera el diseño conceptual, funcional y visual de todos los programas. Rechaza los entornos pesados basados en navegadores empaquetados y crea interfaces gráficas limpias, elegantes y comprensibles, renderizadas por vectores nativos que no exigen aceleración gráfica 3D.',
    responsibilities: [
      'Diseño conceptual, visual y funcional de la suite completa de programas de Cachapa Corp.',
      'Creación de interfaces gráficas (GUI) intuitivas y accesibles para usuarios comerciales y administrativos.',
      'Diseño de paletas con tecnología de alto contraste y legibilidad en monitores CRT y LCD antiguos.',
      'Prototipado e implementación de componentes visuales con cero consumo de GPU.',
    ],
    skills: [
      'Diseño UI/UX ligero',
      'Frameworks nativos (Qt / GTK / WinUI)',
      'Diseño vectorial SVG',
      'Ergonomía de software',
      'Accesibilidad y contraste',
      'Prototipado de interfaces',
    ],
    impactMetric: {
      label: 'Eficiencia de renderizado',
      value: '60 FPS en VGA',
    },
  },
  {
    id: 'jesus-mujica',
    name: 'JESUS MUJICA',
    role: 'Ingeniero de Compatibilidad Retro & Arquitectura de Hardware Legacy',
    shortRole: 'Compatibilidad y hardware antiguo',
    experience: '7 años en soporte y compatibilidad',
    location: 'Cabimas, Zulia, Venezuela',
    personalEmail: 'jesusmujica.retro@gmail.com',
    corporateEmail: 'jesus@cachapacorp.dev',
    tagline:
      '«Ninguna máquina se queda atrás. Si tiene corriente y placa madre, nosotros le damos vida útil».',
    avatarInitials: 'JM',
    cvSummary:
      'Ingeniero de sistemas cabimense experto en arquitectura de hardware vintage, controladores (drivers) y sistemas operativos legacy. En Cachapa Corp se encarga de probar, validar y certificar que cada versión de software funcione sin fisuras en hardware real descontinuado: desde Pentium 4 y Athlon 64 hasta distribuciones minimalistas de Linux y versiones clásicas de Windows (XP, 7, Server 2003/2008).',
    responsibilities: [
      'Laboratorio de pruebas de compatibilidad en decenas de equipos físicos antiguos.',
      'Adaptación de APIs y puentes de compatibilidad para sistemas operativos descontinuados.',
      'Diagnóstico de problemas con buses antiguos (IDE, PCI clásico, USB 1.1/2.0).',
      'Soporte técnico avanzado y certificación de despliegues en infraestructura legacy.',
    ],
    skills: [
      'Win32 API y legacy OS',
      'Distribuciones Linux minimalistas',
      'Diagnóstico de hardware físico',
      'Controladores y drivers legacy',
      'Virtualización y emulación QEMU',
      'Arquitecturas x86 32-bit y 64-bit',
    ],
    impactMetric: {
      label: 'Compatibilidad certificada',
      value: 'Equipos desde 2004+',
    },
  },
];

const RetroTeam = () => {
  const router = useRouter();

  return (
    <section id="equipo" className="border-b-2 border-black py-10">
      <div className="mx-auto max-w-6xl px-3">
        {/* Section head */}
        <div className="mb-6 text-center">
          <h2 className="cc-pixel text-xl text-black sm:text-2xl">
            C:\CACHAPA\EQUIPO — CUERPO TÉCNICO
          </h2>
          <p className="mx-auto mt-2 max-w-2xl font-mono text-[13px] leading-relaxed text-[#404040]">
            Fichas curriculares y funciones del equipo multidisciplinario detrás
            de nuestro software de optimización. Todos orgullosamente nacidos y
            formados en <strong>Cabimas, Zulia</strong>.
          </p>
        </div>

        {/* Team photo banner */}
        <RetroWindow
          title="FOTO-EQUIPO.JPG — Vista en miniatura"
          bodyClassName="p-4"
          className="mb-6"
        >
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="cc-window-sunken bg-[#0a0a0a] p-2">
                <img
                  src={`${router.basePath}/assets/images/equipo-cachapa.jpg`}
                  alt="Equipo de trabajo de Cachapa Corp en Cabimas, Zulia"
                  className="w-full"
                />
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="cc-window-sunken bg-[#0a0a0a] p-3 font-mono text-[12px] leading-relaxed text-[#33ff33]">
                <div className="mb-1 text-[#ffb000]">INTEGRANTES:</div>
                <div>Reinaldo Villegas — Líder</div>
                <div>Abdiel Bustamante — Optimización</div>
                <div>Isaac Bastidas — Diseño y UI/UX</div>
                <div>Jesús Mujica — Compatibilidad</div>
              </div>
              <p className="mt-3 font-mono text-[12px] leading-relaxed text-[#202020]">
                Equipo fundador de Cachapa Corp en Cabimas, Estado Zulia. Un
                grupo cohesionado que combina liderazgo operativo, maestría en
                optimización de bajo nivel, diseño ergonómico y laboratorio de
                compatibilidad con hardware real de décadas pasadas.
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2 font-mono text-[11px]">
                <span className="cc-window-outset bg-[#d4d0c8] px-2 py-1 text-black">
                  100% talento zuliano
                </span>
                <span className="cc-window-outset bg-[#d4d0c8] px-2 py-1 text-black">
                  Atención nacional e internacional
                </span>
              </div>
            </div>
          </div>
        </RetroWindow>

        {/* Operator cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {WORKERS_DATA.map((worker) => (
            <RetroWindow
              key={worker.id}
              title={`OPERADOR — ${worker.avatarInitials} — ${worker.shortRole.toUpperCase()}`}
              bodyClassName="p-4"
            >
              {/* Identity block */}
              <div className="flex items-start gap-3">
                <span className="cc-window-outset flex size-14 shrink-0 items-center justify-center bg-[#000080]">
                  <span className="cc-pixel text-base text-white">
                    {worker.avatarInitials}
                  </span>
                </span>
                <div className="min-w-0">
                  <h3 className="cc-pixel text-[13px] leading-tight text-black">
                    {worker.name}
                  </h3>
                  <div className="mt-1 font-mono text-[11px] leading-snug text-[#000080]">
                    {worker.role}
                  </div>
                  <div className="mt-1 font-mono text-[10px] text-[#404040]">
                    {worker.experience}
                  </div>
                </div>
              </div>

              {/* Emails */}
              <div className="cc-window-sunken mt-3 space-y-1 bg-[#d4d0c8] p-2.5 font-mono text-[11px]">
                <div className="flex flex-wrap items-baseline gap-x-1">
                  <span className="text-[#404040]">Personal:</span>
                  <a
                    href={`mailto:${worker.personalEmail}`}
                    className="text-[#000080] hover:underline"
                  >
                    {worker.personalEmail}
                  </a>
                </div>
                <div className="flex flex-wrap items-baseline gap-x-1 border-t border-[#a0a0a0] pt-1">
                  <span className="text-[#404040]">Corporativo:</span>
                  <a
                    href={`mailto:${worker.corporateEmail}`}
                    className="text-black hover:underline"
                  >
                    {worker.corporateEmail}
                  </a>
                </div>
              </div>

              {/* Impact metric */}
              <div className="mt-3 flex items-center justify-between gap-2 bg-[#0a0a0a] px-2.5 py-1.5 font-mono text-[11px]">
                <span className="text-[#a0a0a0]">
                  {worker.impactMetric.label}:
                </span>
                <span className="cc-pixel text-[11px] text-[#ffb000]">
                  {worker.impactMetric.value}
                </span>
              </div>

              {/* Tagline */}
              <blockquote className="my-3 border-l-2 border-[#000080] pl-2.5 font-mono text-[11px] italic leading-relaxed text-[#404040]">
                {worker.tagline}
              </blockquote>

              {/* Summary */}
              <p className="font-mono text-[12px] leading-relaxed text-[#202020]">
                <strong>Perfil:</strong> {worker.cvSummary}
              </p>

              {/* Responsibilities */}
              <div className="mt-3">
                <div className="mb-1.5 font-mono text-[10px] uppercase tracking-wider text-[#000080]">
                  Responsabilidades principales
                </div>
                <ul className="space-y-1 font-mono text-[11px] text-[#202020]">
                  {worker.responsibilities.map((resp) => (
                    <li key={resp} className="flex items-start gap-1.5">
                      <span className="text-[#000080]">■</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div className="mt-3 border-t border-[#808080] pt-2.5">
                <div className="mb-1.5 font-mono text-[10px] uppercase tracking-wider text-[#000080]">
                  Habilidades técnicas
                </div>
                <div className="flex flex-wrap gap-1">
                  {worker.skills.map((skill) => (
                    <span
                      key={skill}
                      className="cc-window-outset bg-[#c0c0c0] px-1.5 py-0.5 font-mono text-[10px] text-black"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </RetroWindow>
          ))}
        </div>
      </div>
    </section>
  );
};

export { RetroTeam };
