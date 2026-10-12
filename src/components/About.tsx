import React, { useState } from 'react';
import { Heart, Sparkles, CheckCircle, Users, ExternalLink } from 'lucide-react';
import { DELINE_DATA } from '../data/delineData';

export const About: React.FC = () => {
  const [imageSrc, setImageSrc] = useState(DELINE_DATA.images.team);

  return (
    <section
      id="sobre"
      className="py-16 md:py-24 bg-white/60 relative"
      aria-label="Sobre o Estúdio Delinê e nossa equipe"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Team Photo with Glassmorphism Frame */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="glass-card p-3 sm:p-4 rounded-3xl shadow-lg relative">
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-[#ccc7c6]/20">
                  <img
                    src={imageSrc}
                    onError={() => setImageSrc(DELINE_DATA.images.hero)}
                    alt="Equipe Estúdio Delinê - Três amigas fundadoras e especialistas em estética"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-500"
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"
                    aria-hidden="true"
                  />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs uppercase font-medium tracking-wider text-pink-200">
                      Nossa Equipe
                    </p>
                    <p className="text-sm font-semibold">União de talentos e carinho com você</p>
                  </div>
                </div>

                {/* Floating pill-free trust badge */}
                <div className="absolute -bottom-3 right-4 sm:-right-4 glass-panel px-4 py-2.5 rounded-2xl shadow-md border border-white">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#a32451]">
                    <Heart className="w-4 h-4 fill-[#a32451]" aria-hidden="true" />
                    <span>Feito com amor &amp; dedicação</span>
                  </div>
                </div>
              </div>

              {/* Direct link to Google Maps photo */}
              <div className="mt-4 text-center">
                <a
                  href={DELINE_DATA.links.teamGooglePhoto}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#5c5555] hover:text-[#a32451] transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#a32451]" />
                  <span>Ver publicação no Google Maps</span>
                </a>
              </div>
            </div>
          </div>

          {/* Text & Brand Story */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-[#a32451] uppercase mb-3">
              <Users className="w-4 h-4" aria-hidden="true" />
              <span>Nossa História</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2d2929] tracking-tight mb-6">
              Quem Somos: Três Amigas, Um Sonho.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#5c5555] leading-relaxed">
              <p>
                Três amigas, um sonho em comum e uma paixão pela estética 💕 Foi assim que nasceu o
                nosso estúdio: da união de talentos, dedicação e o desejo de transformar a beleza e
                autoestima de cada cliente.
              </p>
              <p>
                ✨ Cada uma de nós trouxe sua especialidade, seu olhar único e uma força que se
                multiplica quando estamos juntas. Somos diferentes, mas com um propósito em comum:
                entregar excelência em cada detalhe.
              </p>
              <p className="font-medium text-[#2d2929]">
                Seja bem-vinda ao nosso sonho realizado! 🌟
              </p>
            </div>

            {/* Pillar Grid with clean hairline borders */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-[#ccc7c6]/40">
              <div className="p-4 rounded-2xl bg-white/70 border border-[#ccc7c6]/30">
                <div className="w-8 h-8 rounded-lg bg-[#a32451]/10 text-[#a32451] flex items-center justify-center font-bold text-sm mb-2.5">
                  01
                </div>
                <h3 className="text-sm font-bold text-[#2d2929] mb-1">União &amp; Talento</h3>
                <p className="text-xs text-[#5c5555] leading-normal">
                  Sinergia entre amigas apaixonadas pela arte de cuidar e elevar autoestimas.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/70 border border-[#ccc7c6]/30">
                <div className="w-8 h-8 rounded-lg bg-[#a32451]/10 text-[#a32451] flex items-center justify-center font-bold text-sm mb-2.5">
                  02
                </div>
                <h3 className="text-sm font-bold text-[#2d2929] mb-1">Olhar Único</h3>
                <p className="text-xs text-[#5c5555] leading-normal">
                  Visagismo personalizado que respeita a identidade e os traços de cada mulher.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/70 border border-[#ccc7c6]/30">
                <div className="w-8 h-8 rounded-lg bg-[#a32451]/10 text-[#a32451] flex items-center justify-center font-bold text-sm mb-2.5">
                  03
                </div>
                <h3 className="text-sm font-bold text-[#2d2929] mb-1">Rigor &amp; Conforto</h3>
                <p className="text-xs text-[#5c5555] leading-normal">
                  Produtos de alto padrão, biossegurança rigorosa e um acolhimento caloroso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
