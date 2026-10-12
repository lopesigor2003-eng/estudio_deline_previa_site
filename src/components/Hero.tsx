import React from 'react';
import { Calendar, Sparkles, MapPin, ArrowRight, Clock, Star } from 'lucide-react';
import { DELINE_DATA } from '../data/delineData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
      aria-label="Apresentação do Estúdio Delinê"
    >
      {/* Decorative CSS-only ambient glass glow (no heavy background images) */}
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#a32451]/10 via-[#fbcfe8]/20 to-transparent blur-3xl pointer-events-none -z-10 rounded-full"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 -right-20 w-80 h-80 bg-[#a32451]/5 blur-3xl pointer-events-none -z-10 rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Semantic Headline & Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Clean editorial kicker (Zero-pill compliant) */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-[#a32451] uppercase mb-3">
              <Sparkles className="w-4 h-4 text-[#a32451]" aria-hidden="true" />
              <span>Estética &amp; Beleza em Santa Maria · RS</span>
            </div>

            {/* MANDATORY: The single H1 on the page */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#2d2929] leading-[1.15] tracking-tight mb-5 max-w-2xl text-balance">
              Estúdio Delinê: <span className="text-[#a32451]">Sua Beleza Única</span>, Nosso Cuidado de Excelência.
            </h1>

            {/* Slogan & Welcome Description */}
            <p className="text-base sm:text-lg text-[#5c5555] leading-relaxed mb-6 max-w-xl">
              Aqui, cada detalhe é pensado pra que você se sinta bem desde o primeiro passo.
              Especialistas em realçar seu olhar marcante, sua pele radiante e sua harmonia natural com
              atendimento exclusivo e carinho.
            </p>

            {/* Location & Schedule Snippet (Quiet unboxed metadata) */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-[#5c5555] mb-8 pb-4 border-b border-[#ccc7c6]/40">
              <span className="inline-flex items-center gap-1.5 font-medium text-[#2d2929]">
                <MapPin className="w-4 h-4 text-[#a32451]" aria-hidden="true" />
                Al. Buenos Aires, 107 – Sala 403
              </span>
              <span aria-hidden="true" className="text-[#ccc7c6]">·</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#a32451]" aria-hidden="true" />
                Seg a Ter, 09h às 19h
              </span>
              <span aria-hidden="true" className="text-[#ccc7c6]">·</span>
              <span className="inline-flex items-center gap-1.5 font-semibold text-[#a32451]">
                <Star className="w-4 h-4 fill-[#a32451] text-[#a32451]" aria-hidden="true" />
                Avaliação 5 Estrelas
              </span>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href={DELINE_DATA.contacts.geovana.waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold rounded-full glass-button-primary shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a32451] focus-visible:ring-offset-2 whitespace-nowrap text-center"
                aria-label="Agende seu Momento no WhatsApp com Geovana"
              >
                <Calendar className="w-5 h-5" aria-hidden="true" />
                <span>Agende seu Momento ✨</span>
              </a>

              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold rounded-full glass-button-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a32451] whitespace-nowrap text-center"
              >
                <span>Escolher Procedimento</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Right Column: High Impact Photo with Apple Glassmorphism styling */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Glass Card Frame */}
              <div className="glass-card p-3 sm:p-4 rounded-3xl shadow-xl overflow-hidden relative">
                {/* Hero image with LCP priority (eager loading, no-referrer) */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#ccc7c6]/20">
                  <img
                    src={DELINE_DATA.images.hero}
                    alt="Estúdio Delinê - Atendimento e procedimentos de estética e beleza"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle contrast gradient at the bottom of the photo */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Overlaid caption inside photo */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs uppercase font-medium tracking-wider text-pink-200">
                      Ambiente Premium &amp; Humanizado
                    </p>
                    <p className="text-sm font-semibold text-white/95 drop-shadow-xs">
                      Cuidado nos mínimos detalhes para sua experiência
                    </p>
                  </div>
                </div>

                {/* Floating Glassmorphism Badge */}
                <div className="absolute -bottom-2 -left-2 sm:bottom-6 sm:-left-6 glass-panel px-4 py-3 rounded-2xl shadow-lg border border-white/80 max-w-[240px]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#a32451]/10 flex items-center justify-center text-[#a32451] shrink-0 font-bold">
                      ✨
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#2d2929]">Três Amigas, Um Sonho</p>
                      <p className="text-[11px] text-[#5c5555]">Amor pela estética e cuidado genuíno</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
