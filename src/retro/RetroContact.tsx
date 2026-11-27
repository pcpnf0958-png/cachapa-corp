import type { FormEvent } from 'react';
import { useState } from 'react';

import { RetroWindow } from './RetroWindow';

const RetroContact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [clientName, setClientName] = useState('');
  const [hardwareInfo, setHardwareInfo] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!clientName.trim()) return;
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="border-b-2 border-black py-10">
      <div className="mx-auto max-w-5xl px-3">
        <RetroWindow title="CONTACTO — Solicitud de Diagnóstico">
          <div className="mb-5 text-center">
            <h2 className="cc-pixel text-xl text-black sm:text-2xl">
              ¿LISTO PARA REVIVIR TUS COMPUTADORAS?
            </h2>
            <p className="mx-auto mt-2 max-w-2xl font-mono text-[13px] leading-relaxed text-[#404040]">
              Escríbenos o indícanos las especificaciones de tus máquinas.
              Nuestro equipo, liderado por Reinaldo Villegas, analizará tu caso
              y Abdiel, Isaac y Jesús diseñarán la solución exacta.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Channel info */}
            <div className="cc-window-sunken bg-[#d4d0c8] p-3 font-mono text-[12px]">
              <div className="mb-2 border-b border-[#808080] pb-1.5 text-[10px] uppercase tracking-wider text-[#000080]">
                Canales oficiales
              </div>
              <div className="space-y-2.5">
                <div>
                  <div className="text-[10px] text-[#404040]">
                    Correo electrónico
                  </div>
                  <div className="text-black">contacto@cachapacorp.dev</div>
                </div>
                <div>
                  <div className="text-[10px] text-[#404040]">
                    Laboratorio de optimización
                  </div>
                  <div className="text-black">
                    División de Software Legacy y Computación Eficiente
                  </div>
                  <div className="text-[11px] text-[#000080]">
                    Cabimas, Estado Zulia, Venezuela
                  </div>
                </div>
                <div>
                  <div className="text-[10px] text-[#404040]">
                    Garantía Cachapa
                  </div>
                  <div className="text-black">
                    Prueba de rendimiento gratuita en tu propio hardware
                  </div>
                </div>
                <div className="border-t border-[#808080] pt-2 text-[11px] text-[#404040]">
                  Respuesta garantizada por Reinaldo Villegas en menos de 24
                  horas hábiles.
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              {submitted ? (
                <div className="cc-window-sunken flex h-full flex-col items-center justify-center bg-[#0a0a0a] p-6 text-center">
                  <span className="cc-pixel text-sm text-[#33ff33]">
                    [ OK ] SOLICITUD REGISTRADA
                  </span>
                  <p className="mt-3 font-mono text-[12px] leading-relaxed text-[#c0c0c0]">
                    Gracias,{' '}
                    <strong className="text-[#ffb000]">{clientName}</strong>.
                    Reinaldo Villegas ha registrado tus equipos (
                    {hardwareInfo || 'hardware informado'}) y asignará a Abdiel
                    e Isaac la evaluación de optimización.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setClientName('');
                      setHardwareInfo('');
                    }}
                    className="cc-btn mt-4 px-3 py-1.5 text-[11px]"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label
                      htmlFor="clientName"
                      className="mb-1 block font-mono text-[11px] text-black"
                    >
                      Tu nombre o empresa:
                    </label>
                    <input
                      id="clientName"
                      type="text"
                      required
                      placeholder="Ej. Distribuidora Central"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="cc-field w-full px-2 py-1.5 font-mono text-[13px]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="hardwareInfo"
                      className="mb-1 block font-mono text-[11px] text-black"
                    >
                      ¿Qué equipos deseas optimizar?
                    </label>
                    <input
                      id="hardwareInfo"
                      type="text"
                      placeholder="Ej. 10 PCs con 1GB RAM y Windows 7 lento"
                      value={hardwareInfo}
                      onChange={(e) => setHardwareInfo(e.target.value)}
                      className="cc-field w-full px-2 py-1.5 font-mono text-[13px]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="cc-btn cc-btn-primary w-full px-4 py-2 text-[12px]"
                  >
                    Solicitar Diagnóstico
                  </button>
                </form>
              )}
            </div>
          </div>
        </RetroWindow>
      </div>
    </section>
  );
};

export { RetroContact };
