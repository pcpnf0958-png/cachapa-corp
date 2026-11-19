const SERVICES_DATA = [
  {
    id: 'pos',
    title: 'Cachapa POS: Punto de Venta Ultraligero',
    ramUsage: '< 28 MB RAM',
    compatibility: 'Windows XP / 7 / 10 / Linux 32-bit',
    description:
      'Sistema de facturación, caja y control de ventas diseñado para cajas registradoras y PCs antiguas. Conexión directa a gavetas de dinero e impresoras térmicas sin sobrecargar el procesador.',
    badge: 'Más Vendido',
  },
  {
    id: 'office',
    title: 'Cachapa Office Lite: Suite Administrativa',
    ramUsage: '< 45 MB RAM',
    compatibility: 'Cualquier CPU desde Pentium 4 en adelante',
    description:
      'Procesador de textos, planillas de cálculo y visor de documentos sin dependencias de navegadores ni marcos pesados. Compatible con formatos modernos (DOCX/XLSX) con apertura inmediata.',
    badge: 'Cero Lag',
  },
  {
    id: 'inventory',
    title: 'Cachapa Stock: Gestión de Inventarios Offline',
    ramUsage: '< 32 MB RAM',
    compatibility: 'Hardware con discos mecánicos HDD lentos',
    description:
      'Control de almacén y bodegas con base de datos compacta ultra-indexada. Ejecuta consultas complejas de decenas de miles de productos en menos de 0.1 segundos en hardware de 2008.',
    badge: 'Base de Datos Embebida',
  },
  {
    id: 'consulting',
    title: 'Auditoría & Revitalización de Sistemas Antiguos',
    ramUsage: 'Personalizado',
    compatibility: 'Parques informáticos empresariales y educativos',
    description:
      'Diagnóstico integral de flujos de trabajo en ordenadores lentos. Eliminamos software basura, adaptamos drivers retro y desplegamos nuestras soluciones para evitar la compra forzada de hardware nuevo.',
    badge: 'Servicio Corporativo',
  },
];

const ServicesGrid = () => (
  <section id="software" className="border-t border-gray-800/80 py-16">
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      {/* Section Header */}
      <div className="mb-12 text-center">
        <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-400">
          Catálogo Tecnológico
        </span>
        <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
          Programas diseñados para que tus equipos antiguos{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            vuelen de nuevo
          </span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base text-gray-400">
          En Cachapa Corp no obligamos a actualizar hardware: adaptamos la
          ingeniería de software a la capacidad real de tus máquinas.
        </p>
      </div>

      {/* Grid of 4 Products/Services */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {SERVICES_DATA.map((service) => (
          <div
            key={service.id}
            className="flex flex-col justify-between rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900/70 to-gray-950 p-6 shadow-lg backdrop-blur-sm transition-all duration-200 hover:border-gray-700"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-md border border-cyan-800/40 bg-cyan-950/70 px-2.5 py-1 text-xs font-semibold text-cyan-300">
                  {service.badge}
                </span>
                <span className="rounded border border-emerald-800/40 bg-emerald-950/60 px-2 py-0.5 font-mono text-xs font-bold text-emerald-400">
                  {service.ramUsage}
                </span>
              </div>

              <h3 className="mt-4 text-xl font-bold text-white">
                {service.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                {service.description}
              </p>
            </div>

            <div className="mt-6 border-t border-gray-800/80 pt-4 text-xs text-gray-400">
              <span className="font-semibold text-gray-300">
                Compatibilidad:{' '}
              </span>
              <span className="font-mono text-cyan-400">
                {service.compatibility}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export { ServicesGrid };
