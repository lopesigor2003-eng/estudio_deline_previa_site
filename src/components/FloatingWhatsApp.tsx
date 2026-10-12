import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { DELINE_DATA } from '../data/delineData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside
      className="fixed bottom-5 right-5 z-40 flex flex-col items-end"
      aria-label="Atendimento rápido por WhatsApp"
    >
      {/* Mini popup card when clicked */}
      {isOpen && (
        <div className="mb-3 w-64 glass-card bg-white p-4 rounded-2xl shadow-xl border border-[#ccc7c6]/50 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#ccc7c6]/30">
            <span className="text-xs font-bold text-[#a32451] uppercase tracking-wider">
              Fale Conosco
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-[#5c5555] hover:text-[#2d2929] rounded-md"
              aria-label="Fechar janela rápida de WhatsApp"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-xs text-[#5c5555] mb-3">
            Escolha com quem prefere conversar:
          </p>
          <div className="space-y-2">
            <a
              href={DELINE_DATA.contacts.geovana.waLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between p-2 rounded-xl bg-neutral-50 hover:bg-[#a32451]/10 text-xs font-semibold text-[#2d2929] hover:text-[#a32451] transition-colors border border-neutral-200/60"
            >
              <span>Geovana (Olhar &amp; Cílios)</span>
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            </a>
            <a
              href={DELINE_DATA.contacts.laise.waLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between p-2 rounded-xl bg-neutral-50 hover:bg-[#a32451]/10 text-xs font-semibold text-[#2d2929] hover:text-[#a32451] transition-colors border border-neutral-200/60"
            >
              <span>Laíse (Pele &amp; Estética)</span>
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            </a>
          </div>
        </div>
      )}

      {/* Main Circular Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
        aria-label={isOpen ? 'Fechar opções de WhatsApp' : 'Abrir atendimento WhatsApp'}
        aria-expanded={isOpen}
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>
    </aside>
  );
};
