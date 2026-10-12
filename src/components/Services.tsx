import React from 'react';
import { Sparkles, Check, ArrowRight, Clock } from 'lucide-react';
import { DELINE_DATA } from '../data/delineData';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section
      id="servicos"
      className="py-16 md:py-24 relative"
      aria-label="Nossos serviços de estética e beleza"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-[#a32451] uppercase mb-3">
            <Sparkles className="w-4 h-4" aria-hidden="true" />
            <span>Procedimentos Especializados</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2d2929] tracking-tight mb-4">
            Serviços de Excelência para Realçar Sua Beleza Natural.
          </h2>
          <p className="text-base sm:text-lg text-[#5c5555]">
            Aqui, cada detalhe é pensado pra que você se sinta bem desde o primeiro passo.
            Tudo com cuidado, excelência e carinho 💕. Venha viver essa experiência única!
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DELINE_DATA.services.map((service, index) => {
            const isFeatured = index === 0; // Alongamento de cílios has high prominence
            return (
              <div
                key={service.id}
                className={`glass-card p-6 sm:p-7 rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between ${
                  isFeatured ? 'md:col-span-2 lg:col-span-1 lg:row-span-1 bg-gradient-to-br from-white via-white to-[#fdf2f4]/50 border-[#a32451]/30' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl sm:text-4xl p-2 rounded-2xl bg-[#a32451]/5 border border-[#a32451]/10 inline-block" role="img" aria-label={service.title}>
                      {service.iconEmoji}
                    </span>
                    <span className="text-xs text-[#5c5555] font-medium flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#a32451]" aria-hidden="true" />
                      {service.duration}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#2d2929] mb-2.5">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#5c5555] leading-relaxed mb-5">
                    {service.summary}
                  </p>

                  <ul className="space-y-2 mb-6" aria-label={`Benefícios de ${service.title}`}>
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#4b4545]">
                        <Check className="w-4 h-4 text-[#a32451] shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#ccc7c6]/30">
                  <button
                    type="button"
                    onClick={() => onSelectService(service.title)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold glass-button-primary"
                    aria-label={`Agendar ${service.title} pelo WhatsApp`}
                  >
                    <span>Agendar este procedimento</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            );
          })}

          {/* Bonus Ambience Commitment Card */}
          <div className="glass-card p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-[#a32451] to-[#7f1c3f] text-white flex flex-col justify-between shadow-lg">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center text-xl mb-4">
                ✨
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Você Merece Esse Momento!
              </h3>
              <p className="text-sm text-pink-100 leading-relaxed mb-6">
                Combinamos música relaxante, aromas exclusivos, ambiente climatizado e cafezinho especial para que seu procedimento seja um verdadeiro ritual de autocuidado.
              </p>
              <div className="text-xs text-white/90 space-y-1.5 pb-4">
                <p>📍 Al. Buenos Aires, 107 - Sala 403</p>
                <p>💆‍♀️ Atendimento personalizado com hora marcada</p>
              </div>
            </div>

            <a
              href={DELINE_DATA.contacts.geovana.waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-white text-[#a32451] hover:bg-pink-50 transition-colors shadow-sm"
            >
              <span>Tirar Dúvidas com a Equipe</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
