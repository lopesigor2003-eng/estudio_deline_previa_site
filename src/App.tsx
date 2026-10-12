/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { SpotifyBanner } from './components/SpotifyBanner';
import { FinalCta } from './components/FinalCta';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string | undefined>(
    undefined
  );

  const handleOpenBooking = (service?: string) => {
    setSelectedServiceForBooking(service);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedServiceForBooking(undefined);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f9] text-[#2d2929]">
      {/* Semantic Header */}
      <Header onOpenBooking={() => handleOpenBooking()} />

      {/* Semantic Main */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. Sobre Nós / Nossa História */}
        <About />

        {/* 3. Nossos Serviços */}
        <Services onSelectService={(service) => handleOpenBooking(service)} />

        {/* 4. Galeria de Ambientes e Procedimentos */}
        <Gallery />

        {/* 5. Depoimentos */}
        <Testimonials />

        {/* Special Atmosphere: Spotify Playlist Delinê */}
        <SpotifyBanner />

        {/* 6. Chamada para Ação Final */}
        <FinalCta />

        {/* 7. Localização */}
        <Location />
      </main>

      {/* Semantic Footer */}
      <Footer />

      {/* Interactive Booking Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialService={selectedServiceForBooking}
      />

      {/* Floating WhatsApp Quick Action */}
      <FloatingWhatsApp />
    </div>
  );
}
