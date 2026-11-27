const SERVICES_DATA = [
  {
    id: 'pos',
    exe: 'POS.EXE',
    title: 'Cachapa POS: Punto de Venta Ultraligero',
    ramUsage: '< 28 MB RAM',
    compatibility: 'Windows XP / 7 / 10 / Linux 32-bit',
    description:
      'Sistema de facturación, caja y control de ventas diseñado para cajas registradoras y PCs antiguas. Conexión directa a gavetas de dinero e impresoras térmicas sin sobrecargar el procesador.',
    badge: 'Más vendido',
  },
  {
    id: 'office',
    exe: 'OFFICE.EXE',
    title: 'Cachapa Office Lite: Suite Administrativa',
    ramUsage: '< 45 MB RAM',
    compatibility: 'Cualquier CPU desde Pentium 4 en adelante',
    description:
      'Procesador de textos, planillas de cálculo y visor de documentos sin dependencias de navegadores ni marcos pesados. Compatible con formatos modernos (DOCX/XLSX) con apertura inmediata.',
    badge: 'Cero lag',
  },
  {
    id: 'inventory',
    exe: 'STOCK.EXE',
    title: 'Cachapa Stock: Gestión de Inventarios Offline',
    ramUsage: '< 32 MB RAM',
    compatibility: 'Hardware con discos mecánicos HDD lentos',
    description:
      'Control de almacén y bodegas con base de datos compacta ultra-indexada. Ejecuta consultas complejas de decenas de miles de productos en menos de 0.1 segundos en hardware de 2008.',
    badge: 'Base embebida',
  },
  {
    id: 'consulting',
    exe: 'AUDIT.EXE',
    title: 'Auditoría y Revitalización de Sistemas Antiguos',
    ramUsage: 'Personalizado',
    compatibility: 'Parques informáticos empresariales y educativos',
    description:
      'Diagnóstico integral de flujos de trabajo en ordenadores lentos. Eliminamos software basura, adaptamos drivers retro y desplegamos nuestras soluciones para evitar la compra forzada de hardware nuevo.',
    badge: 'Servicio corporativo',
  },
];

const RetroServices = () => (
  <section id="software" className="border-b-2 border-black py-10">
    <div className="mx-auto max-w-6xl px-3">
      <div className="cc-window">
        {/* Toolbar */}
        <div className="flex flex-wrap items-center gap-1 border-b border-[#808080] bg-[#d4d0c8] px-2 py-1.5 font-mono text-[11px] text-black">
          <span className="cc-btn px-2 py-0.5 text-[10px]">Atrás</span>
          <span className="cc-btn px-2 py-0.5 text-[10px]">Adelante</span>
          <span className="cc-btn px-2 py-0.5 text-[10px]">Arriba</span>
          <span className="ml-auto flex items-center gap-2 text-[10px]">
            <span>Buscar</span>
            <span className="cc-field inline-block h-5 w-32 px-1 py-0.5 text-[10px]">
              *.exe
            </span>
          </span>
        </div>

        <div className="p-4">
          <div className="mb-6 text-center">
            <h2 className="cc-pixel text-xl text-black sm:text-2xl">
              C:\CACHAPA\SOFTWARE — CATÁLOGO
            </h2>
            <p className="mx-auto mt-2 max-w-2xl font-mono text-[13px] leading-relaxed text-[#404040]">
              No obligamos a actualizar hardware: adaptamos la ingeniería de
              software a la capacidad real de tus máquinas.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                className="cc-window flex flex-col bg-[#d4d0c8]"
              >
                {/* Program icon header */}
                <div className="flex items-center gap-3 border-b border-[#808080] px-3 py-2">
                  <span className="cc-window-outset flex size-9 shrink-0 items-center justify-center bg-[#c0c0c0]">
                    <span className="cc-pixel text-[10px] text-[#000080]">
                      {service.exe.slice(0, 4)}
                    </span>
                  </span>
                  <div className="min-w-0">
                    <div className="cc-pixel truncate text-[11px] text-black">
                      {service.exe}
                    </div>
                    <div className="font-mono text-[10px] text-[#404040]">
                      {service.badge}
                    </div>
                  </div>
                  <span className="cc-window-sunken ml-auto shrink-0 bg-[#0a0a0a] px-2 py-1 font-mono text-[10px] text-[#33ff33]">
                    {service.ramUsage}
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-3">
                  <h3 className="cc-pixel text-[13px] leading-snug text-black">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 font-mono text-[12px] leading-relaxed text-[#202020]">
                    {service.description}
                  </p>

                  <div className="mt-3 border-t border-[#808080] pt-2 font-mono text-[11px]">
                    <span className="text-[#404040]">Compatibilidad: </span>
                    <span className="text-[#000080]">
                      {service.compatibility}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Folder footer */}
          <div className="mt-5 flex items-center gap-2 border-t border-[#808080] pt-3 font-mono text-[11px] text-[#404040]">
            <span>4 objetos</span>
            <span>·</span>
            <span>Tamaño total: 11.4 MB</span>
            <span className="ml-auto">Seleccionar todo</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export { RetroServices };
