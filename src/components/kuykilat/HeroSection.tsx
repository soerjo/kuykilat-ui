'use client';

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowRight, MessageCircle, Truck, Search } from 'lucide-react';
import { CountUp } from '@/components/react-bits/CountUp';

interface HeroSectionProps {
  initialResi?: string;
}

export function HeroSection({ initialResi }: HeroSectionProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const urlResi = searchParams.get('resi') || initialResi || '';
  const [resi, setResi] = useState(urlResi);
  const [activeTracking, setActiveTracking] = useState(Boolean(urlResi));
  const [trackedResi, setTrackedResi] = useState(urlResi ? urlResi.toUpperCase() : '');

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    const targetResi = resi.trim() || 'KK-889021';
    const normalizedResi = targetResi.toUpperCase();
    setTrackedResi(normalizedResi);
    setActiveTracking(true);

    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set('resi', normalizedResi);
    const qs = newSearchParams.toString();
    router.replace(qs ? `/?${qs}` : '/', { scroll: false });
  };

  return (
    <section className="relative w-full overflow-hidden bg-slate-50 py-12 md:py-20 lg:py-24">
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-tr from-orange-500/15 via-orange-300/20 to-emerald-400/10 blur-[130px] rounded-full"></div>
      <div className="pointer-events-none absolute top-1/3 -right-40 w-[450px] h-[450px] bg-orange-500/10 blur-[110px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span className="text-xs font-semibold text-slate-800 uppercase tracking-wider">
              Armada Siaga • 1.200+ Unit Aktif Hari Ini
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 max-w-3xl leading-[1.15]">
            Kirim Kilat, Aman Sampai Tempat.<br className="hidden md:block" /> Dari Paket, Katering, hingga Pindahan.
          </h1>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Solusi logistik on-demand terdepan di Indonesia. Didukung armada terlengkap, driver bersertifikasi, dan jaminan anti-rusak tepat waktu 24/7.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5 w-full">
            <a
              className="h-12 px-6 rounded-lg bg-orange-500 text-white text-base font-semibold shadow-sm hover:bg-orange-600 transition-all active:scale-[0.98] inline-flex items-center justify-center gap-2"
              href="#kalkulator"
            >
              <span>Hitung Estimasi Cepat</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              className="h-12 px-6 rounded-lg bg-white text-slate-800 text-base font-semibold shadow-sm border border-slate-200 hover:bg-slate-50 transition-all inline-flex items-center justify-center gap-2"
              href="https://wa.me/6281299005452?text=Halo%20KuyKilat,%20saya%20butuh%20pengiriman%20sekarang"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5 text-emerald-500" />
              <span>Konsultasi CS WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md border border-slate-200 p-3 sm:p-4 mb-12">
          <form onSubmit={handleTrack} className="flex flex-col md:flex-row gap-3 items-center">
            <div className="flex-1 w-full flex items-center gap-3 bg-slate-100/80 rounded-lg px-4 h-12 border border-transparent focus-within:border-orange-500 transition-colors">
              <Truck className="w-5 h-5 text-orange-500 shrink-0" />
              <input
                className="w-full bg-transparent font-mono text-sm text-slate-900 outline-none placeholder:text-slate-400 font-medium"
                placeholder="Masukkan Nomor Resi / Booking ID (cth: KK-889021)"
                type="text"
                value={resi}
                onChange={(e) => setResi(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full md:w-auto h-12 px-6 rounded-lg bg-slate-900 text-white text-sm font-semibold shadow-sm hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shrink-0"
            >
              <Search className="w-4 h-4" />
              <span>Lacak Pengiriman</span>
            </button>
          </form>

          {activeTracking && (
            <div className="mt-4 pt-4 border-t border-slate-200 bg-blue-50/60 rounded-lg p-4 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm text-slate-900 font-bold">{trackedResi}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-semibold">
                    Driver OTW Antar
                  </span>
                </div>
                <span className="text-xs text-slate-500">Estimasi Tiba: 14:20 WIB (8 Menit Lagi)</span>
              </div>
              <div className="w-full bg-white rounded-lg border border-slate-200 p-3 flex items-center justify-between relative overflow-hidden">
                <div className="flex items-center gap-2 z-10">
                  <div className="w-7 h-7 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold">
                    1
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs text-slate-900 font-bold">Kitchen Tebet</span>
                    <span className="text-[11px] text-slate-500">Dipickup 13:45</span>
                  </div>
                </div>
                <div className="flex-1 mx-4 relative h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-orange-500 rounded-full w-3/4 animate-pulse"></div>
                </div>
                <div className="flex items-center gap-2 z-10">
                  <div className="w-7 h-7 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center text-xs font-bold">
                    2
                  </div>
                  <div className="flex flex-col text-right">
                    <span className="text-xs text-slate-900 font-bold">Gedung Antam TB Simatupang</span>
                    <span className="text-[11px] text-slate-500">Penerima: Ibu Ratna</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200 flex flex-col items-center text-center">
            <span className="text-3xl font-bold text-slate-900 tracking-tight mb-1">
              <CountUp to={250000} duration={2.2} suffix="+" format="locale" />
            </span>
            <span className="text-xs text-slate-500 font-medium">Order Sukses Tuntas</span>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200 flex flex-col items-center text-center">
            <span className="text-3xl font-bold text-orange-500 tracking-tight mb-1">
              <CountUp to={99.8} duration={1.8} suffix="%" format="decimal" />
            </span>
            <span className="text-xs text-slate-500 font-medium">Ketepatan Waktu (On-Time)</span>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200 flex flex-col items-center text-center">
            <span className="text-3xl font-bold text-slate-900 tracking-tight mb-1 flex items-center justify-center">
              ±<CountUp to={15} duration={1.5} suffix=" Mnt" />
            </span>
            <span className="text-xs text-slate-500 font-medium">Rata-Rata Jemput Driver</span>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200 flex flex-col items-center text-center">
            <span className="text-3xl font-bold text-emerald-600 tracking-tight mb-1">
              Rp <CountUp to={100} duration={2} suffix=" Jt" />
            </span>
            <span className="text-xs text-slate-500 font-medium">Proteksi Asuransi Resmi</span>
          </div>
        </div>
      </div>
    </section>
  );
}
