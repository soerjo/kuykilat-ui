'use client';

import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { SpotlightCard } from '@/components/react-bits/SpotlightCard';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Ibu Maya Arifin',
      role: 'Owner • Melati Sedap Catering Jkt',
      avatar: '/images/stitch/asset_0.webp',
      text: '“KuyKilat penyelamat katering pernikahan kami! Kirim 500 porsi prasmanan & tumpeng 5 tingkat sampai lokasi dalam kondisi hangat, mulus tanpa cacat sama sekali. Blind Van ber-AC-nya benar-benar standar katering bintang lima!”',
    },
    {
      name: 'Dimas Prasetyo',
      role: 'Software Engineer • User Pindahan',
      avatar: '/images/stitch/asset_1.webp',
      text: '“Pindahan dari kosan Tebet ke rumah baru di Serpong beres dalam 4 jam! Dua orang mas-mas helper-nya gesit banget, kasur dan kulkas 2 pintu dibungkus rapi pakai bubble wrap tebal. Gak ada lecet sama sekali.”',
    },
    {
      name: 'Hendra Gunawan',
      role: 'Founder • Jaya Motorparts ID',
      avatar: '/images/stitch/asset_2.webp',
      text: '“Fitur pencairan COD hariannya luar biasa membantu cashflow toko online sparepart saya. Driver selalu on-time jemput barang, pembeli senang paket kilat sampai di hari yang sama.”',
    },
  ];

  return (
    <section className="w-full bg-slate-50 py-16 md:py-24" id="testimoni">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-xs font-semibold text-orange-700 mb-3 border border-orange-200">
            <Star className="w-4 h-4 fill-orange-500 text-orange-500" />
            <span>Rating Rata-rata 4.98 / 5.0</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Apa Kata Mereka yang Sudah Menggunakan KuyKilat?
          </h2>
          <p className="text-base text-slate-600">
            Simak cerita kepuasan pemilik bisnis katering, pelaku UMKM, hingga pelanggan yang baru saja menyelesaikan pindahan rumah.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <SpotlightCard
              key={i}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex flex-col justify-between"
              spotlightColor="rgba(249, 115, 22, 0.08)"
            >
              <div>
                <div className="flex items-center gap-1 text-orange-500 mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 mb-6 italic leading-relaxed">{t.text}</p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-slate-200">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <span className="text-sm font-bold text-slate-900 block">{t.name}</span>
                  <span className="text-xs text-slate-500">{t.role}</span>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
