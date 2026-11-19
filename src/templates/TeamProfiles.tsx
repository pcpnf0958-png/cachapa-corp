type IWorkerProfile = {
  id: string;
  name: string;
  role: string;
  shortRole: string;
  experience: string;
  tagline: string;
  avatarBg: string;
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
    shortRole: 'Líder del Equipo y Asignación de Tareas',
    experience: '8 años de experiencia en la industria tecnológica',
    tagline:
      '«Coordinar con precisión milimétrica para que cada tarea técnica se traduzca en software rápido, puntual y confiable».',
    avatarBg: 'from-blue-600 to-cyan-500',
    avatarInitials: 'RV',
    cvSummary:
      'Especialista en dirección de proyectos de ingeniería de software y orquestación de equipos técnicos. En Cachapa Corp es la mente estratégica que analiza las necesidades de los clientes con hardware antiguo, descompone los requerimientos en tareas técnicas de alta prioridad y supervisa que los ciclos de entrega cumplan con los estándares de rendimiento más rigurosos.',
    responsibilities: [
      'Asignación, seguimiento y balanceo de tareas para el equipo de desarrollo y optimización.',
      'Definición de hojas de ruta (roadmaps) de los productos de software de Cachapa Corp.',
      'Gestión de relaciones técnicas con clientes corporativos y levantamiento de requerimientos de hardware.',
      'Aseguramiento de plazos de entrega y control de calidad final antes del despliegue.',
    ],
    skills: [
      'Asignación Estratégica de Tareas',
      'Gestión Ágil / Scrum',
      'Arquitectura de Proyectos',
      'Gestión de Recursos Críticos',
      'Control de Calidad (QA)',
      'Liderazgo Técnico',
    ],
    impactMetric: {
      label: 'Sprints y Proyectos Coordinados',
      value: '100% en tiempo',
    },
  },
  {
    id: 'abdiel-bustamante',
    name: 'ABDIEL BUSTAMANTE',
    role: 'Ingeniero Principal de Optimización & Rendimiento de Sistemas',
    shortRole: 'Encargado de Optimizar Programas',
    experience: '7 años de experiencia en ingeniería de bajo nivel',
    tagline:
      '«Si una aplicación tarda más de dos segundos en abrir o consume más de 50 MB de RAM, está mal hecha».',
    avatarBg: 'from-emerald-600 to-teal-500',
    avatarInitials: 'AB',
    cvSummary:
      'Ingeniero de software especializado en sistemas de bajo nivel, compiladores y consumo mínimo de recursos. En Cachapa Corp es el encargado de auditar y exprimir cada ciclo de procesador: refactoriza algoritmos pesados, purga fugas de memoria, optimiza binarios con ensamblador y garantiza que el software corra con total soltura en procesadores mononúcleo y memorias DDR2/DDR3.',
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
      'Gestión Manual de Memoria',
      'Algoritmos Cache-Friendly',
      'Compresión de Binarios',
    ],
    impactMetric: {
      label: 'Reducción Promedio de RAM Lograda',
      value: '-87% de consumo',
    },
  },
  {
    id: 'isaac-bastidas',
    name: 'ISAAC BASTIDAS',
    role: 'Diseñador Principal de Software & Arquitecto de Interfaces Ligeras',
    shortRole: 'Encargado del Diseño de los Programas',
    experience: '6 años de experiencia en UI/UX y diseño de software',
    tagline:
      '«La estética y la modernidad no deben costar gigabytes de memoria. El buen diseño es ligero y funcional».',
    avatarBg: 'from-purple-600 to-indigo-500',
    avatarInitials: 'IB',
    cvSummary:
      'Diseñador de software e interfaces humanas especializado en ergonomía y frontend de ultra-bajo impacto. En Cachapa Corp lidera el diseño conceptual, funcional y visual de todos los programas. Rechaza los entornos pesados basados en navegadores empaquetados y crea interfaces gráficas limpias, elegantes y comprensibles, renderizadas por vectores nativos que no exigen aceleración gráfica 3D.',
    responsibilities: [
      'Diseño conceptual, visual y funcional de la suite completa de programas de Cachapa Corp.',
      'Creación de interfaces gráficas (GUI) intuitivas y accesibles para usuarios comerciales y administrativos.',
      'Diseño de paletas con tecnología de alto contraste y legibilidad en monitores CRT y LCD antiguos.',
      'Prototipado e implementación de componentes visuales con cero consumo de GPU.',
    ],
    skills: [
      'Diseño UI/UX Ligero',
      'Frameworks Nativos (Qt / GTK / WinUI)',
      'Diseño Vectorial SVG',
      'Ergonomía de Software',
      'Accesibilidad & Contraste',
      'Prototipado de Interfaces',
    ],
    impactMetric: {
      label: 'Eficiencia de Renderizado Visual',
      value: '60 FPS en VGA/VRAM baja',
    },
  },
  {
    id: 'jesus-mujica',
    name: 'JESUS MUJICA',
    role: 'Ingeniero de Compatibilidad Retro & Arquitectura de Hardware Legacy',
    shortRole: 'Ingeniero de Compatibilidad y Hardware Antiguo',
    experience: '7 años de experiencia en soporte y compatibilidad',
    tagline:
      '«Ninguna máquina se queda atrás. Si tiene corriente y placa madre, nosotros le damos vida útil».',
    avatarBg: 'from-amber-600 to-orange-500',
    avatarInitials: 'JM',
    cvSummary:
      'Ingeniero de sistemas experto en arquitectura de hardware vintage, controladores (drivers) y sistemas operativos legacy. En Cachapa Corp se encarga de probar, validar y certificar que cada versión de software funcione sin fisuras en hardware real descontinuado: desde Pentium 4 y Athlon 64 hasta distribuciones minimalistas de Linux y versiones clásicas de Windows (XP, 7, Server 2003/2008).',
    responsibilities: [
      'Laboratorio de pruebas de compatibilidad en decenas de equipos físicos antiguos.',
      'Adaptación de APIs y puentes de compatibilidad para sistemas operativos descontinuados.',
      'Diagnóstico de problemas con buses antiguos (IDE, PCI clásico, USB 1.1/2.0).',
      'Soporte técnico avanzado y certificación de despliegues en infraestructura legacy.',
    ],
    skills: [
      'Win32 API & Legacy OS',
      'Distribuciones Linux Minimalistas',
      'Diagnóstico de Hardware Físico',
      'Controladores y Drivers Legacy',
      'Virtualización y Emulación QEMU',
      'Arquitecturas x86 32-bit & 64-bit',
    ],
    impactMetric: {
      label: 'Compatibilidad Certificada',
      value: 'Equipos desde 2004+',
    },
  },
];

const TeamProfiles = () => (
  <section id="equipo" className="py-16">
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      {/* Section Header */}
      <div className="mb-14 text-center">
        <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-400">
          Cuerpo Técnico & Equipo Humano
        </span>
        <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
          Conoce a los especialistas de{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Cachapa Corp
          </span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base text-gray-400">
          Fichas curriculares y funciones del equipo multidisciplinario detrás
          de nuestro software de optimización para equipos antiguos.
        </p>
      </div>

      {/* Grid of 4 Workers */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {WORKERS_DATA.map((worker) => (
          <div
            key={worker.id}
            className="flex flex-col rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900/90 to-gray-950 p-6 shadow-xl backdrop-blur-sm transition-all duration-200 hover:border-cyan-500/40 hover:shadow-cyan-500/5 sm:p-8"
          >
            {/* Card Header: Avatar + Name + Main Role */}
            <div className="flex items-start space-x-4">
              <div
                className={`flex size-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${worker.avatarBg} text-xl font-black text-white shadow-lg ring-2 ring-gray-800`}
              >
                {worker.avatarInitials}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-1">
                  <h3 className="text-xl font-bold tracking-tight text-white">
                    {worker.name}
                  </h3>
                  <span className="rounded border border-cyan-700/40 bg-cyan-950/60 px-2 py-0.5 text-[11px] font-semibold text-cyan-300">
                    {worker.shortRole}
                  </span>
                </div>
                <div className="mt-0.5 text-sm font-semibold text-cyan-400">
                  {worker.role}
                </div>
                <div className="mt-1 flex items-center text-xs text-gray-400">
                  <svg
                    className="mr-1.5 size-4 text-emerald-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{worker.experience}</span>
                </div>
              </div>
            </div>

            {/* Impact Metric Pill */}
            <div className="mt-4 flex items-center justify-between rounded-xl border border-gray-800/80 bg-gray-950/60 px-4 py-2 text-xs">
              <span className="text-gray-400">
                {worker.impactMetric.label}:
              </span>
              <span className="font-mono font-bold text-white">
                {worker.impactMetric.value}
              </span>
            </div>

            {/* Quote */}
            <blockquote className="my-4 border-l-2 border-cyan-500/50 pl-3 text-xs italic text-gray-400">
              {worker.tagline}
            </blockquote>

            {/* CV Summary / Profile */}
            <div className="mb-4 text-sm leading-relaxed text-gray-300">
              <span className="font-semibold text-white">
                Perfil en Cachapa Corp:{' '}
              </span>
              {worker.cvSummary}
            </div>

            {/* Key Responsibilities list */}
            <div className="mb-5 flex-1">
              <div className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-400">
                Responsabilidades Principales:
              </div>
              <ul className="space-y-1.5 text-xs text-gray-300">
                {worker.responsibilities.map((resp) => (
                  <li key={resp} className="flex items-start">
                    <span className="mr-2 font-bold text-cyan-400">›</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills / Tech Stack Tags */}
            <div className="border-t border-gray-800/80 pt-4">
              <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                Habilidades & Competencias Técnicas:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {worker.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-gray-800 bg-gray-900/80 px-2 py-0.5 font-mono text-[11px] text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export { TeamProfiles };
