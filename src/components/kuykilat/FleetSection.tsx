'use client';

import React from 'react';
import { Bike, Car, Truck } from 'lucide-react';
import { SpotlightCard } from '@/components/react-bits/SpotlightCard';

export function FleetSection() {
  const fleets = [
    {
      title: 'Motor Box',
      maxWeight: 'Maks 25 Kg',
      description: 'Lincah selap-selip di kemacetan kota. Dilengkapi box anti air untuk dokumen, paket olshop, dan makanan porsi satuan.',
      dimensi: '50 x 40 x 40 cm',
      duration: 'Rata-rata 30-45 mnt',
      icon: Bike,
      featured: false,
      waText: 'Order Motor Box',
    },
    {
      title: 'Blind Van',
      badge: 'Favorit Katering',
      maxWeight: 'Maks 600 Kg',
      description: 'Kabin tertutup ber-AC penuh, aman dari hujan, terik matahari & debu. Sangat pas untuk katering, kue hajatan, dan elektronik.',
      dimensi: '2.5 m³ Volume',
      duration: 'Kabin Dingin AC',
      icon: Car,
      featured: true,
      waText: 'Order Blind Van',
    },
    {
      title: 'Pickup Bak / Box',
      maxWeight: 'Maks 1.000 Kg',
      description: 'Pilihan ideal untuk pindahan kamar kos, lemari, kasur spring bed, kulkas, sofa, dan barang dagangan bervolume menengah.',
      dimensi: '4.0 m³ Volume',
      duration: 'Terpal + Tali Pengikat',
      icon: Truck,
      featured: false,
      waText: 'Order Pickup Bak',
    },
    {
      title: 'Truk Engkel Box',
      maxWeight: 'Maks 2.500 Kg',
      description: 'Solusi tuntas pindahan rumah tapak, kantor corporate, panggung bazaar event, serta muatan kargo logistik antar propinsi.',
      dimensi: '9.0 m³ Volume',
      duration: 'Termasuk 2 Kru Helper',
      icon: Truck,
      featured: false,
      waText: 'Order Truk Engkel',
    },
  ];

  return (
    <section className="w-full bg-slate-50 py-16 md:py-24" id="armada">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-xs font-semibold text-orange-700 mb-3 border border-orange-200">
              <Car className="w-4 h-4" />
              <span>Kapasitas Tepat, Pengiriman Cepat</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Pilihan Armada Siap Berangkat
            </h2>
          </div>
          <p className="text-base text-slate-600 max-w-md">
            Seluruh kendaraan melewati uji kelayakan berkala dan sanitasi higienis sebelum setiap keberangkatan penjemputan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fleets.map((f, i) => {
            const Icon = f.icon;
            return (
              <SpotlightCard
                key={i}
                className={
                  'bg-white rounded-xl p-6 flex flex-col justify-between group transition-all ' +
                  (f.featured
                    ? 'shadow-md border-2 border-orange-500/30 relative hover:shadow-lg'
                    : 'shadow-sm border border-slate-200 hover:shadow-md')
                }
                spotlightColor="rgba(249, 115, 22, 0.08)"
              >
                {f.badge && (
                  <div className="absolute -top-3 left-6 px-3.5 py-0.5 rounded-full bg-orange-500 text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                    {f.badge}
                  </div>
                )}
                <div>
                  <div className="w-full h-36 bg-orange-50 rounded-lg mb-4 flex items-center justify-center text-orange-600 border border-slate-200/60">
                    <Icon className="w-16 h-16" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-bold text-slate-900">{f.title}</h4>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                      {f.maxWeight}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mb-4 leading-relaxed">{f.description}</p>
                  <div className="flex flex-col gap-1.5 text-xs text-slate-800 mb-6">
                    <div className="flex justify-between py-1 bg-slate-100 px-2.5 rounded-md border border-slate-200/80">
                      <span className="text-slate-500">Kapasitas:</span>
                      <span className="font-mono font-semibold">{f.dimensi}</span>
                    </div>
                    <div className="flex justify-between py-1 bg-slate-100 px-2.5 rounded-md border border-slate-200/80">
                      <span className="text-slate-500">Keterangan:</span>
                      <span className="font-medium">{f.duration}</span>
                    </div>
                  </div>
                </div>

                <a
                  className={
                    'w-full h-11 rounded-lg text-sm font-semibold text-center transition-all flex items-center justify-center ' +
                    (f.featured
                      ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-sm'
                      : 'bg-slate-100 text-slate-800 hover:bg-orange-500 hover:text-white border border-slate-200 hover:border-transparent')
                  }
                  href={'https://wa.me/6281299005452?text=' + encodeURIComponent(f.waText)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pilih {f.title}
                </a>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
