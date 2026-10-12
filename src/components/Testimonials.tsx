import React from 'react';
import { Star, MessageSquareQuote, ExternalLink } from 'lucide-react';
import { DELINE_DATA } from '../data/delineData';

export const Testimonials: React.FC = () => {
  return (
    <section
      id="depoimentos"
      className="py-16 md:py-24 relative"
      aria-label="Depoimentos e avaliações de clientes do Estúdio Delinê"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-[#a32451] uppercase mb-3">
            <MessageSquareQuote className="w-4 h-4" aria-hidden="true" />
            <span>Avaliações Reais</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2d2929] tracking-tight mb-4">
            Experiências Que Inspiram Confiança.
          </h2>
          <p className="text-base text-[#5c5555]">
            O carinho e a satisfação de quem confia na dedicação do nosso estúdio para renovar sua autoestima.
          </p>
        </div>

        {/* Semantic Article Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DELINE_DATA.testimonials.map((item) => (
            <article
              key={item.id}
              className="glass-card p-6 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div>
                {/* 5 Star Rating */}
                <div className="flex items-center gap-1 mb-4 text-[#a32451]" aria-label="Avaliação 5 de 5 estrelas">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#a32451] text-[#a32451]" aria-hidden="true" />
                  ))}
                </div>

                {/* Review Body */}
                <p className="text-sm text-[#4b4545] leading-relaxed italic mb-6">
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              {/* Author & Unboxed Metadata */}
              <div className="pt-4 border-t border-[#ccc7c6]/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#a32451]/10 text-[#a32451] font-bold text-sm flex items-center justify-center shrink-0">
                    {item.name.charAt(0)}
                  </div>
                  <div className="overflow-hidden">
                    <h3 className="text-sm font-bold text-[#2d2929] truncate">{item.name}</h3>
                    {/* Unboxed metadata separated by dot (Zero-Pill discipline) */}
                    <p className="text-xs text-[#5c5555] truncate">
                      <span>{item.procedure}</span>
                      <span aria-hidden="true" className="mx-1">·</span>
                      <span>{item.date}</span>
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Action Button: Ver mais depoimentos no Google */}
        <div className="mt-12 text-center">
          <a
            href={DELINE_DATA.links.googleReviews}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold glass-button-secondary shadow-sm hover:shadow-md"
            aria-label="Ver mais avaliações do Estúdio Delinê no Google Maps"
          >
            <span>Ver mais depoimentos no Google</span>
            <ExternalLink className="w-4 h-4 text-[#a32451]" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};
