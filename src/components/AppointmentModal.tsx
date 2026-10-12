import React, { useState } from 'react';
import { X, Calendar, MessageCircle, Clock, User, Sparkles } from 'lucide-react';
import { DELINE_DATA } from '../data/delineData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialService,
}) => {
  const [selectedService, setSelectedService] = useState<string>(
    initialService || DELINE_DATA.services[0].title
  );
  const [specialist, setSpecialist] = useState<'geovana' | 'laise' | 'any'>('geovana');
  const [preferredTime, setPreferredTime] = useState<string>('Manhã (09h às 12h)');
  const [clientName, setClientName] = useState<string>('');

  if (!isOpen) return null;

  const handleSendWhatsapp = (e: React.FormEvent) => {
    e.preventDefault();

    const targetPhone = specialist === 'laise' 
      ? DELINE_DATA.contacts.laise.phoneRaw 
      : DELINE_DATA.contacts.geovana.phoneRaw;

    const professionalName = specialist === 'laise' 
      ? 'Laíse' 
      : specialist === 'geovana' 
      ? 'Geovana' 
      : 'Equipe Delinê';

    const greeting = clientName.trim()
      ? `Olá ${professionalName}! Meu nome é ${clientName.trim()}.`
      : `Olá ${professionalName}!`;

    const message = `${greeting} Gostaria de agendar um horário para o procedimento de *${selectedService}* no Estúdio Delinê (preferência de turno: ${preferredTime}). Vocês teriam disponibilidade? ✨`;

    const url = `https://wa.me/${targetPhone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-lg glass-card bg-white p-6 sm:p-8 rounded-3xl shadow-2xl border border-white/90 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#5c5555] hover:text-[#2d2929] hover:bg-neutral-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#a32451]"
          aria-label="Fechar agendamento"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-semibold text-[#a32451] uppercase tracking-wider mb-1">
          <Sparkles className="w-4 h-4" />
          <span>Agendamento Direto</span>
        </div>

        <h3 id="modal-title" className="text-xl sm:text-2xl font-bold text-[#2d2929] mb-1">
          Agende seu Momento
        </h3>
        <p className="text-xs sm:text-sm text-[#5c5555] mb-6">
          Escolha o procedimento e fale conosco diretamente no WhatsApp para confirmar o melhor horário.
        </p>

        <form onSubmit={handleSendWhatsapp} className="space-y-4">
          {/* Service selection */}
          <div>
            <label htmlFor="service-select" className="block text-xs font-bold text-[#2d2929] uppercase tracking-wider mb-1.5">
              Procedimento Desejado
            </label>
            <select
              id="service-select"
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#ccc7c6]/70 bg-white/90 text-sm text-[#2d2929] focus:outline-none focus:border-[#a32451] focus:ring-2 focus:ring-[#a32451]/20"
            >
              {DELINE_DATA.services.map((s) => (
                <option key={s.id} value={s.title}>
                  {s.iconEmoji} {s.title} ({s.duration})
                </option>
              ))}
            </select>
          </div>

          {/* Professional selection */}
          <div>
            <label className="block text-xs font-bold text-[#2d2929] uppercase tracking-wider mb-1.5">
              Profissional de Preferência
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setSpecialist('geovana')}
                className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                  specialist === 'geovana'
                    ? 'border-[#a32451] bg-[#a32451]/10 text-[#a32451]'
                    : 'border-[#ccc7c6]/60 text-[#5c5555] hover:bg-neutral-50'
                }`}
              >
                Geovana (Olhar &amp; Cílios)
              </button>
              <button
                type="button"
                onClick={() => setSpecialist('laise')}
                className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                  specialist === 'laise'
                    ? 'border-[#a32451] bg-[#a32451]/10 text-[#a32451]'
                    : 'border-[#ccc7c6]/60 text-[#5c5555] hover:bg-neutral-50'
                }`}
              >
                Laíse (Pele &amp; Estética)
              </button>
            </div>
          </div>

          {/* Turn / Preferred Time */}
          <div>
            <label htmlFor="time-select" className="block text-xs font-bold text-[#2d2929] uppercase tracking-wider mb-1.5">
              Turno Preferido
            </label>
            <select
              id="time-select"
              value={preferredTime}
              onChange={(e) => setPreferredTime(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#ccc7c6]/70 bg-white/90 text-sm text-[#2d2929] focus:outline-none focus:border-[#a32451] focus:ring-2 focus:ring-[#a32451]/20"
            >
              <option value="Manhã (09h às 12h)">Manhã (09h às 12h)</option>
              <option value="Tarde (13h às 17h)">Tarde (13h às 17h)</option>
              <option value="Final do dia (17h às 19h)">Final do dia (17h às 19h)</option>
              <option value="Primeiro horário disponível">Primeiro horário disponível</option>
            </select>
          </div>

          {/* Client Name (optional) */}
          <div>
            <label htmlFor="client-name" className="block text-xs font-bold text-[#2d2929] uppercase tracking-wider mb-1.5">
              Seu Nome (Opcional)
            </label>
            <input
              type="text"
              id="client-name"
              placeholder="Como prefere ser chamada?"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#ccc7c6]/70 bg-white/90 text-sm text-[#2d2929] focus:outline-none focus:border-[#a32451] focus:ring-2 focus:ring-[#a32451]/20"
            />
          </div>

          <div className="pt-3">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-sm font-semibold glass-button-primary shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#a32451]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Continuar no WhatsApp</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
