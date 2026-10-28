'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Bolt } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 transition-all">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div className="flex items-center shrink-0">
          <Link href="/" className="flex items-center gap-2 group transition-all" title="KuyKilat">
            <div className="h-9 flex items-center transition-transform group-hover:scale-[1.02]">
              <Image
                alt="KuyKilat Logo"
                className="h-10 w-auto object-contain"
                src="/images/stitch/logo-kuykilat.png"
                width={160}
                height={40}
                priority
              />
            </div>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          <a
            className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors px-3 py-1.5 rounded-md hover:bg-slate-100"
            href="#layanan"
          >
            Layanan
          </a>
          <a
            className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors px-3 py-1.5 rounded-md hover:bg-slate-100"
            href="#kalkulator"
          >
            Cek Tarif
          </a>
          <a
            className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors px-3 py-1.5 rounded-md hover:bg-slate-100"
            href="#armada"
          >
            Armada
          </a>
          <a
            className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors px-3 py-1.5 rounded-md hover:bg-slate-100"
            href="#keunggulan"
          >
            Keunggulan
          </a>
          <a
            className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors px-3 py-1.5 rounded-md hover:bg-slate-100"
            href="#testimoni"
          >
            Testimoni
          </a>
          <a
            className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors px-3 py-1.5 rounded-md hover:bg-slate-100"
            href="#faq"
          >
            FAQ
          </a>
        </nav>

        {/* CTA & Telemetry Hotline */}
        <div className="flex items-center gap-3">
          <a
            className="hidden lg:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-orange-500/30 transition-all"
            href="https://wa.me/6281299005452?text=Halo%20KuyKilat,%20saya%20butuh%20bantuan%20CS"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-mono text-xs font-medium">CS 24/7 • 0812-9900-KILAT</span>
          </a>
          <a
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-orange-500 text-white text-sm font-semibold shadow-sm hover:bg-orange-600 transition-all active:scale-[0.98] border border-transparent gap-1.5"
            href="https://wa.me/6281299005452?text=Halo%20KuyKilat,%20saya%20mau%20order%20pengiriman%20sekarang"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Pesan Sekarang</span>
            <Bolt className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
