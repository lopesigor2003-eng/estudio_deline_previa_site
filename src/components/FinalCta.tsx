import React from 'react';
import { Calendar, MessageCircle, Instagram, MapPin, Sparkles, Clock } from 'lucide-react';
import { DELINE_DATA } from '../data/delineData';

export const FinalCta: React.FC = () => {
  return (
    <section
      className="py-16 md:py-24 relative overflow-hidden"
      aria-label="Chamada para agendamento e contato"
    >
      {/* Delicate background blur highlight */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#a32451]/8 blur-3xl pointer-events-none -z-10 rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 sm:p-12 md:p-14 rounded-3xl text-center relative border border-white/80 shadow-xl">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-[#a32451] uppercase mb-4">
            <Sparkles className="w-4 h-4" aria-hidden="true" />
            <span>Agendamento &amp; Atendimento</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2d2929] tracking-tight mb-4">
            Seu Momento de Cuidado te Espera.
          </h2>

          <p className="text-base sm:text-lg text-[#5c5555] max-w-2xl mx-auto leading-relaxed mb-8">
            Seu olhar marcante, sua pele radiante, sua beleza é única 🥰 🤍 Cuide-se com excelência.
            Agende seu momento ✨
          </p>

          {/* Action Buttons: Fale com Geovana, Fale com Laíse, Siga-nos no Instagram */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href={DELINE_DATA.contacts.geovana.waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold glass-button-primary shadow-md hover:shadow-lg whitespace-nowrap"
              aria-label="Fale com Geovana pelo WhatsApp"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span>Fale com Geovana</span>
            </a>

            <a
              href={DELINE_DATA.contacts.laise.waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold glass-button-secondary border-[#a32451]/40 whitespace-nowrap"
              aria-label="Fale com Laíse pelo WhatsApp"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span>Fale com Laíse</span>
            </a>

            <a
              href={DELINE_DATA.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-white/80 border border-[#ccc7c6]/60 text-[#2d2929] hover:text-[#a32451] hover:border-[#a32451]/50 transition-colors whitespace-nowrap"
              aria-label="Siga o Estúdio Delinê no Instagram"
            >
              <Instagram className="w-4 h-4 text-[#E1306C]" aria-hidden="true" />
              <span>Siga no Instagram</span>
            </a>
          </div>

          {/* Address and schedule highlight */}
          <div className="pt-6 border-t border-[#ccc7c6]/40 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-[#5c5555]">
            <span className="flex items-center gap-1.5 font-medium text-[#2d2929]">
              <MapPin className="w-4 h-4 text-[#a32451]" aria-hidden="true" />
              {DELINE_DATA.address.full}
            </span>
            <span aria-hidden="true" className="text-[#ccc7c6] hidden sm:inline">·</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#a32451]" aria-hidden="true" />
              {DELINE_DATA.hours}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
