'use client';

import React from 'react';
import { ShieldCheck, Users, Headphones } from 'lucide-react';

export function FeaturesTelemetry() {
  return (
    <section className="w-full bg-white py-16 md:py-24 border-y border-slate-200" id="keunggulan">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Telemetry Card Mockup */}
          <div className="lg:col-span-6 bg-slate-900 rounded-2xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl"></div>
            <div className="flex items-center justify-between pb-6 border-b border-slate-800 mb-6">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></span>
                <span className="font-mono text-sm text-slate-200">RADAR DISPATCH LIVE #JKT-992</span>
              </div>
              <span className="px-2.5 py-0.5 rounded bg-slate-800 text-xs font-mono text-orange-400">GPS Aktif</span>
            </div>

            {/* Radar Map Box Mockup */}
            <div className="w-full h-56 rounded-xl bg-slate-800/60 border border-slate-700/60 mb-6 relative overflow-hidden flex flex-col justify-between p-4">
              <div className="flex justify-between items-start z-10">
                <span className="px-3 py-1 rounded-md bg-slate-900/80 backdrop-blur-md text-xs text-white">
                  Driver: Pak Bambang S. (Gran Max Box)
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-xs font-bold">
                  KECEPATAN: 42 km/j
                </span>
              </div>
              <div className="z-10 bg-slate-900/90 backdrop-blur-md rounded-lg p-3 max-w-xs border border-slate-800">
                <span className="text-[11px] text-slate-400 block">Rute Saat Ini:</span>
                <span className="text-sm font-semibold text-white">Jl. Fatmawati → Dharmawangsa Square</span>
              </div>
            </div>

            {/* Live Telemetry Badges */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-slate-800/80 rounded-lg p-3 flex flex-col border border-slate-700/50">
                <span className="text-[11px] text-slate-400">Suhu Box</span>
                <span className="font-mono text-sm text-emerald-400 font-bold">21.4°C Stabil</span>
              </div>
              <div className="bg-slate-800/80 rounded-lg p-3 flex flex-col border border-slate-700/50">
                <span className="text-[11px] text-slate-400">Sensor Guncangan</span>
                <span className="font-mono text-sm text-white font-bold">&lt; 0.12 G (Aman)</span>
              </div>
              <div className="bg-slate-800/80 rounded-lg p-3 flex flex-col border border-slate-700/50">
                <span className="text-[11px] text-slate-400">Estimasi Dropoff</span>
                <span className="font-mono text-sm text-orange-400 font-bold">11 Mnt Lagi</span>
              </div>
            </div>
          </div>

          {/* Value Propositions Column */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-xs font-semibold text-orange-700 mb-3 border border-orange-200">
                <ShieldCheck className="w-4 h-4" />
                <span>Standar Logistik Bintang Lima</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Kenapa Ribuan Pengusaha & Keluarga Memilih KuyKilat?
              </h2>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Klaim Asuransi Tanpa Berbelit</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Setiap barang yang dikirim terlindungi proteksi asuransi hingga Rp 100 Juta. Penggantian cepat dalam 1x24 jam tanpa birokrasi rumit.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Tim Bongkar Muat (Helper) Siap Kerja</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Tak perlu pusing angkat barang berat. Kru helper terlatih KuyKilat siap membantu angkut dari lantai atas, penataan aman di kendaraan, hingga peletakan di lokasi tujuan.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <Headphones className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Customer Care Manusia Asli (Bukan Bot Kaku)</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Tim support responsif di WhatsApp siaga 24 jam penuh untuk koordinasi rute mendadak, perubahan drop point, hingga penjemputan darurat malam hari.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
