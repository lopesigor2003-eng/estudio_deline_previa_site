import React from 'react';
import { Instagram, Music, MapPin, Clock, Phone, MessageCircle } from 'lucide-react';
import { DELINE_DATA } from '../data/delineData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-[#ccc7c6]/50 pt-16 pb-12" aria-label="Rodapé do Estúdio Delinê">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <a
              href="#home"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a32451] rounded-lg"
              aria-label="Estúdio Delinê - Voltar ao topo"
            >
              <img
                src={DELINE_DATA.images.logo}
                alt="Logo do Estúdio Delinê"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-full object-cover border border-[#a32451]/20 shadow-xs"
                width="40"
                height="40"
              />
              <span className="font-semibold text-lg text-[#2d2929]">
                Estúdio <span className="text-[#a32451] font-bold">Delinê</span>
              </span>
            </a>
            <p className="text-xs sm:text-sm text-[#5c5555] leading-relaxed">
              Estética e beleza com olhar humanizado e cuidado de excelência. Três amigas unidas pelo
              propósito de realçar a sua beleza natural.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={DELINE_DATA.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#faf9f9] border border-[#ccc7c6]/50 flex items-center justify-center text-[#a32451] hover:bg-[#a32451] hover:text-white transition-colors"
                aria-label="Instagram do Estúdio Delinê"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={DELINE_DATA.links.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#faf9f9] border border-[#ccc7c6]/50 flex items-center justify-center text-[#1DB954] hover:bg-[#1DB954] hover:text-white transition-colors"
                aria-label="Playlist Delinê no Spotify"
              >
                <Music className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: MANDATORY Navigation Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#a32451] mb-4">
              Navegação
            </h3>
            <ul className="space-y-2.5 text-sm text-[#5c5555]">
              <li>
                <a href="#home" className="hover:text-[#a32451] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-[#a32451] transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#a32451] transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-[#a32451] transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a
                  href={DELINE_DATA.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#a32451] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href={DELINE_DATA.links.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#a32451] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Playlist Delinê (Spotify)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & WhatsApps */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#a32451] mb-4">
              Fale Conosco
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-[#5c5555]">
              <div>
                <p className="font-semibold text-[#2d2929]">WhatsApp Geovana:</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <a
                    href={DELINE_DATA.contacts.geovana.waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#a32451] hover:underline flex items-center gap-1 font-medium"
                    aria-label="Abrir WhatsApp da Geovana"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{DELINE_DATA.contacts.geovana.phone}</span>
                  </a>
                  <span aria-hidden="true" className="text-[#ccc7c6]">/</span>
                  <a
                    href={DELINE_DATA.contacts.geovana.telLink}
                    className="hover:text-[#2d2929] hover:underline"
                    aria-label="Ligar para Geovana"
                  >
                    Ligar
                  </a>
                </div>
              </div>

              <div>
                <p className="font-semibold text-[#2d2929]">WhatsApp Laíse:</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <a
                    href={DELINE_DATA.contacts.laise.waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#a32451] hover:underline flex items-center gap-1 font-medium"
                    aria-label="Abrir WhatsApp da Laíse"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{DELINE_DATA.contacts.laise.phone}</span>
                  </a>
                  <span aria-hidden="true" className="text-[#ccc7c6]">/</span>
                  <a
                    href={DELINE_DATA.contacts.laise.telLink}
                    className="hover:text-[#2d2929] hover:underline"
                    aria-label="Ligar para Laíse"
                  >
                    Ligar
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Address & Working Hours */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#a32451] mb-4">
              Atendimento &amp; Local
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-[#5c5555]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#a32451] shrink-0 mt-0.5" aria-hidden="true" />
                <span>{DELINE_DATA.address.full}</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#a32451] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-medium text-[#2d2929]">{DELINE_DATA.hours}</p>
                  <p className="text-xs text-[#5c5555] mt-0.5">Atendimentos com horário agendado</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright notice */}
        <div className="pt-8 border-t border-[#ccc7c6]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5c5555]">
          <p>© 2026 Estúdio Delinê. Todos os direitos reservados.</p>
          <p className="text-center sm:text-right">
            Sua beleza única, nosso cuidado de excelência.
          </p>
        </div>
      </div>
    </footer>
  );
};
