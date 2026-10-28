import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/kuykilat/Header';
import { HeroSection } from '@/components/kuykilat/HeroSection';
import { LogoCloud } from '@/components/kuykilat/LogoCloud';
import { ServicesBento } from '@/components/kuykilat/ServicesBento';
import { PriceCalculator } from '@/components/kuykilat/PriceCalculator';
import { FleetSection } from '@/components/kuykilat/FleetSection';
import { FeaturesTelemetry } from '@/components/kuykilat/FeaturesTelemetry';
import { TestimonialsSection } from '@/components/kuykilat/TestimonialsSection';
import { FaqSection, CtaBanner, Footer } from '@/components/kuykilat/FooterFaqCta';

interface HomePageProps {
  searchParams: Promise<{
    resi?: string;
    layanan?: string;
    jarak?: string;
  }>;
}

export async function generateMetadata({ searchParams }: HomePageProps): Promise<Metadata> {
  const params = await searchParams;
  const resi = params?.resi;
  const layanan = params?.layanan;

  let title = 'KuyKilat - Ekspedisi & Logistik On-Demand Indonesia';
  let description =
    'Kirim kilat, aman sampai tempat. Solusi pengiriman paket, katering, hingga pindahan rumah dengan armada terlengkap dan driver bersertifikasi.';

  if (resi) {
    title = `Lacak Resi ${resi.toUpperCase()} | KuyKilat Logistik On-Demand`;
    description = `Cek status pengiriman real-time paket dengan nomor resi ${resi.toUpperCase()} di KuyKilat.`;
  } else if (layanan) {
    const formattedLayanan = layanan.charAt(0).toUpperCase() + layanan.slice(1);
    title = `Layanan ${formattedLayanan} Kilat | KuyKilat Ekspedisi`;
    description = `Kalkulasi tarif dan pesan armada layanan ${layanan} on-demand langsung dari KuyKilat.`;
  }

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      siteName: 'KuyKilat',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const params = await searchParams;
  const initialResi = params?.resi;
  const initialService = (params?.layanan as 'barang' | 'katering' | 'pindahan') || undefined;
  const initialDistance = params?.jarak ? parseInt(params.jarak, 10) : undefined;

  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50 font-sans">
      <Header />
      <main className="flex-1 w-full flex flex-col">
        <HeroSection initialResi={initialResi} />
        <LogoCloud />
        <ServicesBento />
        <PriceCalculator initialService={initialService} initialDistance={initialDistance} />
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
