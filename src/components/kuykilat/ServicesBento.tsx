'use client';

import React from 'react';
import { Zap, Utensils, Home, CheckCircle2, ArrowRight } from 'lucide-react';
import { SpotlightCard } from '@/components/react-bits/SpotlightCard';

export function ServicesBento() {
  return (
    <section className="w-full bg-slate-50 py-16 md:py-24" id="layanan">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-xs font-semibold text-orange-700 mb-3 border border-orange-200">
              <CheckCircle2 className="w-4 h-4" />
              <span>Tiga Layanan Unggulan KuyKilat</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Dirancang Khusus untuk Kebutuhan Riil Anda
            </h2>
          </div>
          <p className="text-base text-slate-600 max-w-md">
            Bukan sekadar ojek online biasa. Armada dan tim KuyKilat dispesifikasi untuk keamanan maksimal barang niaga, katering, dan furniture.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Paket & Dagangan */}
          <SpotlightCard className="group relative bg-white rounded-xl p-6 md:p-8 shadow-sm border border-slate-200 flex flex-col justify-between overflow-hidden" spotlightColor="rgba(249, 115, 22, 0.08)">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-6">
                <Zap className="w-7 h-7" />
              </div>
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold border border-slate-200 inline-block mb-3">
                Instant 1-2 Jam
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Antar Jemput Paket & Dagangan</h3>
              <p className="text-sm text-slate-600 mb-6">
                Layanan kurir ekspres motor & van untuk kirim stok toko, dokumen berharga, paket e-commerce, hingga COD dengan pencairan dana instan harian.
              </p>
              <ul className="flex flex-col gap-2.5 text-xs text-slate-800 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Prioritas pick-up tanpa antre (Direct Pickup)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Opsi Bayar di Tempat (COD) terintegrasi</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Foto bukti serah terima & Geo-tagging GPS</span>
                </li>
              </ul>
            </div>
            <div className="relative z-10 pt-4 mt-auto border-t border-slate-200">
              <a
                className="text-sm font-semibold text-orange-600 flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
                href="#kalkulator"
              >
                <span>Cek Ongkir Paket</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </SpotlightCard>

          {/* Card 2: Katering & Kuliner */}
          <SpotlightCard className="group relative bg-white rounded-xl p-6 md:p-8 shadow-md border-2 border-orange-500/30 flex flex-col justify-between overflow-hidden" spotlightColor="rgba(249, 115, 22, 0.12)">
            <div className="absolute top-0 right-0 px-3.5 py-1 rounded-bl-lg bg-orange-500 text-white text-[11px] font-bold uppercase tracking-wider">
              Spesialisasi Kuliner
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-lg bg-orange-500 text-white flex items-center justify-center mb-6">
                <Utensils className="w-7 h-7" />
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold border border-emerald-200 inline-block mb-3">
                Food Grade Safe
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Katering Acara & Frozen Food</h3>
              <p className="text-sm text-slate-600 mb-6">
                Dirancang untuk katering hajatan, tumpeng besar, kue tart ulang tahun, dan bento box. Bebas goncangan, anti tumpah, dengan box suhu terjaga.
              </p>
              <ul className="flex flex-col gap-2.5 text-xs text-slate-800 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Box termal isolasi panas / dingin terjaga</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Driver tersertifikasi penanganan makanan aman</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Blind Van ber-AC untuk tumpeng & cake rapuh</span>
                </li>
              </ul>
            </div>
            <div className="relative z-10 pt-4 mt-auto border-t border-slate-200">
              <a
                className="text-sm font-semibold text-orange-600 flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
                href="https://wa.me/6282311434969?text=Halo%20KuyKilat,%20saya%20mau%20booking%20pengiriman%20katering"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Booking Driver Katering</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </SpotlightCard>

          {/* Card 3: Pindahan */}
          <SpotlightCard className="group relative bg-white rounded-xl p-6 md:p-8 shadow-sm border border-slate-200 flex flex-col justify-between overflow-hidden" spotlightColor="rgba(249, 115, 22, 0.08)">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center mb-6">
                <Home className="w-7 h-7" />
              </div>
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold border border-slate-200 inline-block mb-3">
                All-In-One Service
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Pindahan Rumah, Kos & Kantor</h3>
              <p className="text-sm text-slate-600 mb-6">
                Solusi bebas capek pindahan interior. Termasuk armada truk/pickup, kru helper angkut profesional, pembungkus bubble wrap, dan penataan ulang.
              </p>
              <ul className="flex flex-col gap-2.5 text-xs text-slate-800 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Termasuk kru helper terlatih bongkar muat</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Tersedia kardus, bubble wrap & strapping seal</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Proteksi penuh perlengkapan elektronik & furnitur</span>
                </li>
              </ul>
            </div>
            <div className="relative z-10 pt-4 mt-auto border-t border-slate-200">
              <a
                className="text-sm font-semibold text-orange-600 flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
                href="#kalkulator"
              >
                <span>Simulasi Biaya Pindahan</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
