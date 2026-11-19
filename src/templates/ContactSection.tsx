import type { FormEvent } from 'react';
import { useState } from 'react';

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [clientName, setClientName] = useState('');
  const [hardwareInfo, setHardwareInfo] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!clientName.trim()) return;
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="border-t border-gray-800/80 py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/90 via-[#0d1526] to-gray-950 p-6 shadow-2xl backdrop-blur-xl sm:p-10">
          <div className="text-center sm:text-left">
            <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Contratación & Contacto Directo
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              ¿Listo para revivir tus computadoras con{' '}
              <span className="text-cyan-400">Cachapa Corp</span>?
            </h2>
            <p className="mt-2 text-base text-gray-400">
              Escríbenos o indícanos las especificaciones de tus máquinas.
              Nuestro equipo liderado por Reinaldo Villegas analizará tu caso y
              Abdiel, Isaac y Jesús diseñarán la solución exacta.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Contact details */}
            <div className="space-y-4 rounded-xl border border-gray-800/80 bg-gray-950/60 p-5 text-sm text-gray-300">
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-cyan-400">
                Canales Oficiales:
              </div>
              <div>
                <div className="text-xs text-gray-500">Correo Electrónico:</div>
                <div className="font-mono font-semibold text-white">
                  contacto@cachapacorp.dev
                </div>
              </div>
              <div>
                <div className="text-xs text-gray-500">
                  Laboratorio de Optimización:
                </div>
                <div className="text-white">
                  División de Software Legacy & Computación Eficiente
                </div>
                <div className="mt-0.5 text-xs text-cyan-400">
                  📍 Cabimas, Estado Zulia, Venezuela
                </div>
              </div>
              <div>
                <div className="text-xs text-gray-500">Garantía Cachapa:</div>
                <div className="font-medium text-emerald-400">
                  Prueba de rendimiento gratuita en tu propio hardware
                </div>
              </div>
              <div className="border-t border-gray-800 pt-2 text-xs text-gray-400">
                Respuesta garantizada por Reinaldo Villegas en menos de 24 horas
                hábiles.
              </div>
            </div>

            {/* Quick Inquiry Form */}
            <div>
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-6 text-center">
                  <span className="text-3xl">✅</span>
                  <h3 className="mt-2 text-lg font-bold text-white">
                    ¡Solicitud Recibida!
                  </h3>
                  <p className="mt-1 text-xs text-emerald-300">
                    Gracias,{' '}
                    <strong className="text-white">{clientName}</strong>.
                    Reinaldo Villegas ha registrado tus equipos (
                    {hardwareInfo || 'Hardware informado'}) y asignará a Abdiel
                    e Isaac la evaluación de optimización.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setClientName('');
                      setHardwareInfo('');
                    }}
                    className="mt-4 rounded-lg bg-gray-800 px-3 py-1.5 text-xs font-semibold text-gray-300 hover:text-white"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label
                      htmlFor="clientName"
                      className="mb-1 block text-xs font-semibold text-gray-300"
                    >
                      Tu Nombre o Empresa:
                    </label>
                    <input
                      id="clientName"
                      type="text"
                      required
                      placeholder="Ej. Distribuidora Central"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full rounded-lg border border-gray-700 bg-gray-900/90 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="hardwareInfo"
                      className="mb-1 block text-xs font-semibold text-gray-300"
                    >
                      ¿Qué equipos deseas optimizar?
                    </label>
                    <input
                      id="hardwareInfo"
                      type="text"
                      placeholder="Ej. 10 PCs con 1GB RAM y Windows 7 lento"
                      value={hardwareInfo}
                      onChange={(e) => setHardwareInfo(e.target.value)}
                      className="w-full rounded-lg border border-gray-700 bg-gray-900/90 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-2.5 text-sm font-bold text-gray-950 shadow-lg shadow-cyan-500/20 transition-all hover:from-cyan-400 hover:to-blue-500"
                  >
                    Solicitar Diagnóstico a Cachapa Corp
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ContactSection };
