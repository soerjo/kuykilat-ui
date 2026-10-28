'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, Send, Calculator, PhoneCall, Mail, MapPin } from 'lucide-react';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Berapa lama estimasi armada driver sampai ke lokasi penjemputan?',
      a: 'Rata-rata armada KuyKilat tiba di titik penjemputan dalam 15–30 menit setelah pesanan terkonfirmasi. Untuk armada besar seperti Blind Van dan Truk Engkel, kami menyarankan booking 2–3 jam sebelum atau H-1.',
    },
    {
      q: 'Apakah makanan panas / kue tart aman dikirim dengan KuyKilat?',
      a: 'Sangat aman! Armada Blind Van kami berpendingin kabin AC khusus, dilengkapi matras peredam getaran dan box insulasi termal. Driver kami juga telah terlatih membawa muatan rapuh dan makanan.',
    },
    {
      q: 'Bagaimana cara mengajukan klaim jika barang mengalami kerusakan?',
      a: 'Layanan kami dilengkapi jaminan Garansi Anti-Rusak hingga Rp 100 Juta. Cukup kirimkan foto/video kondisi barang sebelum dan sesudah ke WhatsApp CS kami, klaim akan diproses dalam 1x24 jam kerja.',
    },
    {
      q: 'Apakah harga di kalkulator sudah termasuk biaya tol & parkir?',
      a: 'Tarif di kalkulator mencakup biaya dasar armada, jarak rute, dan proteksi. Biaya tol dan parkir gedung bersifat reimbursement riil sesuai struk resmi jika diperlukan rute tol cepat.',
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24 border-t border-slate-200" id="faq">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-orange-600 uppercase tracking-widest block mb-2">
            Pertanyaan Umum
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Sering Ditanyakan (FAQ)
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-xl overflow-hidden transition-colors bg-slate-50/50"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 hover:text-orange-600 transition-colors"
                >
                  <span className="text-base">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform duration-200 text-slate-500 ${
                      isOpen ? 'rotate-180 text-orange-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function CtaBanner() {
  return (
    <section className="w-full bg-slate-900 py-16 md:py-20 relative overflow-hidden text-white">
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-4 md:px-8 text-center flex flex-col items-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-orange-300 text-xs font-semibold uppercase tracking-wider mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>Siap Jemput Kapan Saja • 24 Jam Non-Stop</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 max-w-2xl leading-tight">
          Butuh Kirim Paket, Makanan, atau Pindahan Hari Ini?
        </h2>

        <p className="text-base md:text-lg text-slate-300 max-w-xl mx-auto mb-10 leading-relaxed">
          Hubungi Customer Service KuyKilat sekarang juga. Dapatkan penawaran tarif transparan instan dan armada langsung diberangkatkan.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          <a
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-orange-500 text-white font-semibold shadow-md hover:bg-orange-600 transition-all flex items-center justify-center gap-2"
            href="https://wa.me/6281299005452?text=Halo%20KuyKilat,%20saya%20mau%20order%20pengiriman%20sekarang"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Send className="w-5 h-5" />
            <span>Pesan via WhatsApp (Respon 1 Menit)</span>
          </a>
          <a
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-white/10 text-white font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-2 border border-white/20"
            href="#kalkulator"
          >
            <Calculator className="w-5 h-5" />
            <span>Simulasi Tarif</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="w-full bg-white border-t border-slate-200 py-12 md:py-16 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4 md:col-span-1">
          <Image
            alt="KuyKilat Logo"
            className="h-9 w-auto object-contain"
            src="/images/stitch/logo-kuykilat.png"
            width={140}
            height={36}
          />
          <p className="text-xs text-slate-500 leading-relaxed">
            Platform pengiriman barang on-demand, spesialis katering aman ber-AC, dan jasa pindahan terpercaya di Indonesia.
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <MapPin className="w-4 h-4 text-orange-500 shrink-0" />
            <span>Jabodetabek • Bandung • Surabaya</span>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">Layanan</h4>
          <ul className="flex flex-col gap-2 text-xs">
            <li><a href="#layanan" className="hover:text-orange-600 transition-colors">Pengiriman Paket Kilat</a></li>
            <li><a href="#layanan" className="hover:text-orange-600 transition-colors">Ekspedisi Katering & Frozen</a></li>
            <li><a href="#layanan" className="hover:text-orange-600 transition-colors">Pindahan Rumah & Kos</a></li>
            <li><a href="#armada" className="hover:text-orange-600 transition-colors">Sewa Truk & Blind Van</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">Perusahaan</h4>
          <ul className="flex flex-col gap-2 text-xs">
            <li><a href="#keunggulan" className="hover:text-orange-600 transition-colors">Kenapa KuyKilat</a></li>
            <li><a href="#testimoni" className="hover:text-orange-600 transition-colors">Ulasan Pelanggan</a></li>
            <li><a href="#kalkulator" className="hover:text-orange-600 transition-colors">Kalkulator Tarif</a></li>
            <li><a href="#faq" className="hover:text-orange-600 transition-colors">Bantuan & FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">Hubungi Kami</h4>
          <ul className="flex flex-col gap-2.5 text-xs">
            <li className="flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-emerald-500 shrink-0" />
              <span className="font-mono">0812-9900-5452 (WhatsApp)</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-orange-500 shrink-0" />
              <span>halo@kuykilat.id</span>
            </li>
            <li className="text-[11px] text-slate-400 mt-2">
              Layanan Customer Care 24 Jam Non-stop siap membantu pengiriman darurat Anda.
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mt-12 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <span>© 2026 PT KuyKilat Logistik Indonesia. Seluruh hak cipta dilindungi.</span>
        <span>Made with Precision & Speed.</span>
      </div>
    </footer>
  );
}
