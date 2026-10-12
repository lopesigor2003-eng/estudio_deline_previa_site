import React from 'react';
import { MapPin, Navigation, Clock, Phone, Building, ExternalLink } from 'lucide-react';
import { DELINE_DATA } from '../data/delineData';

export const Location: React.FC = () => {
  return (
    <section
      id="localizacao"
      className="py-16 md:py-24 bg-white/60 relative"
      aria-label="Localização e como chegar ao Estúdio Delinê"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-[#a32451] uppercase mb-3">
            <MapPin className="w-4 h-4" aria-hidden="true" />
            <span>Fácil Acesso em Santa Maria</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2d2929] tracking-tight mb-4">
            Onde Estamos.
          </h2>
          <p className="text-base text-[#5c5555]">
            Localizado no bairro Nossa Senhora das Dores, nosso estúdio oferece ambiente reservado,
            confortável e de fácil estacionamento.
          </p>
        </div>

        {/* Map & Info Container */}
        <div className="glass-card rounded-3xl overflow-hidden p-3 sm:p-4 shadow-lg border border-[#ccc7c6]/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Interactive Embedded Google Maps Iframe */}
            <div className="lg:col-span-8 rounded-2xl overflow-hidden min-h-[360px] sm:min-h-[420px] bg-neutral-100 relative shadow-inner">
              <iframe
                title="Mapa de Localização - Estúdio Delinê"
                src={DELINE_DATA.links.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '360px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            {/* Address & Hours Detail Card */}
            <div className="lg:col-span-4 p-4 sm:p-6 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#a32451] mb-2">
                    <Building className="w-4 h-4" />
                    <span>Endereço Completo</span>
                  </div>
                  <p className="text-base font-bold text-[#2d2929]">
                    {DELINE_DATA.address.street}
                  </p>
                  <p className="text-sm text-[#5c5555] mt-0.5">
                    {DELINE_DATA.address.neighborhood}
                  </p>
                  <p className="text-sm text-[#5c5555]">
                    {DELINE_DATA.address.city} - {DELINE_DATA.address.state}, {DELINE_DATA.address.zip}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#ccc7c6]/30">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#a32451] mb-2">
                    <Clock className="w-4 h-4" />
                    <span>Horários de Atendimento</span>
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-[#5c5555]">
                    {DELINE_DATA.fullHours.map((h, i) => (
                      <li key={i} className="flex justify-between items-center gap-2">
                        <span className="font-medium text-[#2d2929]">{h.days}:</span>
                        <span className="text-right">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#ccc7c6]/30">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#a32451] mb-2">
                    <Phone className="w-4 h-4" />
                    <span>Contatos Telefônicos</span>
                  </div>
                  <div className="space-y-1 text-xs sm:text-sm text-[#5c5555]">
                    <p>
                      <span className="font-semibold text-[#2d2929]">Geovana:</span>{' '}
                      <a href={DELINE_DATA.contacts.geovana.telLink} className="hover:text-[#a32451] underline-offset-2 hover:underline">
                        {DELINE_DATA.contacts.geovana.phone}
                      </a>
                    </p>
                    <p>
                      <span className="font-semibold text-[#2d2929]">Laíse:</span>{' '}
                      <a href={DELINE_DATA.contacts.laise.telLink} className="hover:text-[#a32451] underline-offset-2 hover:underline">
                        {DELINE_DATA.contacts.laise.phone}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#ccc7c6]/30">
                <a
                  href={DELINE_DATA.links.googleMapsDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold glass-button-primary"
                  aria-label="Abrir rotas para o Estúdio Delinê no aplicativo Google Maps"
                >
                  <Navigation className="w-4 h-4" aria-hidden="true" />
                  <span>Traçar Rota no Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
