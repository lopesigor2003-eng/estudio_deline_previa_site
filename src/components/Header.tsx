import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, MessageCircle, Phone } from 'lucide-react';
import { DELINE_DATA } from '../data/delineData';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-sm py-3'
          : 'bg-white/70 backdrop-blur-md border-b border-[#ccc7c6]/30 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark and Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a32451] rounded-lg"
            aria-label="Estúdio Delinê - Ir para o início"
          >
            <img
              src={DELINE_DATA.images.logo}
              alt="Logotipo Estúdio Delinê"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border border-[#a32451]/20 shadow-xs group-hover:scale-105 transition-transform duration-200"
              width="44"
              height="44"
            />
            <span className="font-semibold text-lg sm:text-xl tracking-tight text-[#2d2929] whitespace-nowrap">
              Estúdio <span className="text-[#a32451] font-bold">Delinê</span>
            </span>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav
            className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-[#5c5555]"
            aria-label="Navegação Principal"
          >
            <a
              href="#home"
              className="hover:text-[#a32451] transition-colors py-1 whitespace-nowrap"
            >
              Home
            </a>
            <a
              href="#sobre"
              className="hover:text-[#a32451] transition-colors py-1 whitespace-nowrap"
            >
              Sobre Nós
            </a>
            <a
              href="#servicos"
              className="hover:text-[#a32451] transition-colors py-1 whitespace-nowrap"
            >
              Serviços
            </a>
            <a
              href="#galeria"
              className="hover:text-[#a32451] transition-colors py-1 whitespace-nowrap"
            >
              Galeria
            </a>
            <a
              href="#depoimentos"
              className="hover:text-[#a32451] transition-colors py-1 whitespace-nowrap"
            >
              Depoimentos
            </a>
            <a
              href="#localizacao"
              className="hover:text-[#a32451] transition-colors py-1 whitespace-nowrap"
            >
              Contato
            </a>
          </nav>

          {/* Zone 3: Primary Action Button */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenBooking}
              type="button"
              className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-full glass-button-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a32451] focus-visible:ring-offset-2 whitespace-nowrap"
              aria-label="Agende seu horário no WhatsApp"
            >
              <Calendar className="w-4 h-4" aria-hidden="true" />
              <span>Agende seu horário</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#2d2929] hover:text-[#a32451] hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a32451]"
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-[#ccc7c6]/40 px-6 pt-4 pb-6 mt-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4 text-base font-medium text-[#2d2929]">
            <a
              href="#home"
              onClick={closeMenu}
              className="hover:text-[#a32451] transition-colors py-1"
            >
              Home
            </a>
            <a
              href="#sobre"
              onClick={closeMenu}
              className="hover:text-[#a32451] transition-colors py-1"
            >
              Sobre Nós
            </a>
            <a
              href="#servicos"
              onClick={closeMenu}
              className="hover:text-[#a32451] transition-colors py-1"
            >
              Serviços
            </a>
            <a
              href="#galeria"
              onClick={closeMenu}
              className="hover:text-[#a32451] transition-colors py-1"
            >
              Galeria
            </a>
            <a
              href="#depoimentos"
              onClick={closeMenu}
              className="hover:text-[#a32451] transition-colors py-1"
            >
              Depoimentos
            </a>
            <a
              href="#localizacao"
              onClick={closeMenu}
              className="hover:text-[#a32451] transition-colors py-1"
            >
              Contato & Localização
            </a>

            <div className="pt-3 border-t border-[#ccc7c6]/40 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  closeMenu();
                  onOpenBooking();
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold glass-button-primary"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Horário Online</span>
              </button>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <a
                  href={DELINE_DATA.contacts.geovana.waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-[#ccc7c6]/50 bg-white/60 text-[#a32451] font-medium"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Whats Geovana</span>
                </a>
                <a
                  href={DELINE_DATA.contacts.laise.waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-[#ccc7c6]/50 bg-white/60 text-[#a32451] font-medium"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Whats Laíse</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
