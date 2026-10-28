import React from 'react';
import { Header } from '@/components/kuykilat/Header';
import { HeroSection } from '@/components/kuykilat/HeroSection';
import { LogoCloud } from '@/components/kuykilat/LogoCloud';
import { ServicesBento } from '@/components/kuykilat/ServicesBento';
import { PriceCalculator } from '@/components/kuykilat/PriceCalculator';
import { FleetSection } from '@/components/kuykilat/FleetSection';
import { FeaturesTelemetry } from '@/components/kuykilat/FeaturesTelemetry';
import { TestimonialsSection } from '@/components/kuykilat/TestimonialsSection';
import { FaqSection, CtaBanner, Footer } from '@/components/kuykilat/FooterFaqCta';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50 font-sans">
      <Header />
      <main className="flex-1 w-full flex flex-col">
        <HeroSection />
        <LogoCloud />
        <ServicesBento />
        <PriceCalculator />
        <FleetSection />
        <FeaturesTelemetry />
        <TestimonialsSection />
        <FaqSection />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
