import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, ZoomIn, X } from 'lucide-react';
import { DELINE_DATA } from '../data/delineData';

const SPACE_IMAGES = [
  {
    id: 'int-1',
    url: DELINE_DATA.images.interior1,
    alt: 'Estúdio Delinê - Interior 1',
  },
  {
    id: 'int-2',
    url: DELINE_DATA.images.interior2,
    alt: 'Estúdio Delinê - Interior 2',
  },
  {
    id: 'int-3',
    url: DELINE_DATA.images.interior3,
    alt: 'Estúdio Delinê - Interior 3',
  },
  {
    id: 'proc-1',
    url: DELINE_DATA.images.procedure1,
    alt: 'Estúdio Delinê - Procedimento',
  },
];

export const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const touchStartX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % SPACE_IMAGES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + SPACE_IMAGES.length) % SPACE_IMAGES.length);
  }, []);

  // 6-second auto-rotation interval
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  return (
    <section
      id="galeria"
      className="py-16 md:py-24 bg-white/50 relative overflow-hidden"
      aria-label="Nosso Espaço"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-[#a32451] uppercase mb-3">
            <Sparkles className="w-4 h-4" aria-hidden="true" />
            <span>Ambiente &amp; Experiência</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2d2929] tracking-tight">
            Nosso Espaço e a Arte da Estética.
          </h2>
        </div>

        {/* 6-Second Carousel in Original Format without text description */}
        <div
          className="relative glass-card p-3 sm:p-6 rounded-3xl shadow-xl max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Slide Display preserving original format */}
          <div className="relative w-full min-h-[380px] sm:min-h-[500px] md:min-h-[560px] flex items-center justify-center rounded-2xl overflow-hidden bg-neutral-900/5">
            {SPACE_IMAGES.map((img, index) => {
              const isActive = index === currentIndex;
              return (
                <div
                  key={img.id}
                  className={`absolute inset-0 flex items-center justify-center p-2 sm:p-4 transition-opacity duration-700 ease-in-out ${
                    isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <div
                    className="relative max-h-[520px] w-auto h-auto cursor-zoom-in group"
                    onClick={() => setSelectedImage(img.url)}
                    role="button"
                    tabIndex={isActive ? 0 : -1}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedImage(img.url);
                      }
                    }}
                    aria-label="Ampliar foto em tela cheia"
                  >
                    <img
                      src={img.url}
                      alt={img.alt}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="max-h-[360px] sm:max-h-[480px] md:max-h-[520px] w-auto h-auto object-contain rounded-xl shadow-md group-hover:scale-101 transition-transform duration-300"
                    />
                    <div
                      className="absolute inset-0 rounded-xl bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <span className="p-2.5 rounded-full bg-white/90 text-[#a32451] shadow-lg">
                        <ZoomIn className="w-5 h-5" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Navigation Arrows */}
            <button
              type="button"
              onClick={prevSlide}
              className="absolute left-3 sm:left-4 z-20 p-2 sm:p-3 rounded-full glass-panel text-[#2d2929] hover:text-[#a32451] hover:scale-110 active:scale-95 transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a32451]"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              className="absolute right-3 sm:right-4 z-20 p-2 sm:p-3 rounded-full glass-panel text-[#2d2929] hover:text-[#a32451] hover:scale-110 active:scale-95 transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a32451]"
              aria-label="Próxima foto"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Carousel Navigation Dots */}
          <div className="flex items-center justify-center gap-2.5 pt-4">
            {SPACE_IMAGES.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a32451] ${
                  idx === currentIndex
                    ? 'w-8 bg-[#a32451]'
                    : 'w-2.5 bg-[#ccc7c6] hover:bg-[#a32451]/50'
                }`}
                aria-label={`Ir para a foto ${idx + 1}`}
                aria-current={idx === currentIndex ? 'true' : 'false'}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal on Click */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Visualização em tela cheia"
        >
          <div
            className="relative max-w-4xl w-full p-2 rounded-3xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Fechar visualização"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="rounded-2xl overflow-hidden flex items-center justify-center">
              <img
                src={selectedImage}
                alt="Foto do Estúdio Delinê ampliada"
                referrerPolicy="no-referrer"
                className="max-h-[85vh] w-auto h-auto object-contain rounded-xl shadow-2xl mx-auto"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
