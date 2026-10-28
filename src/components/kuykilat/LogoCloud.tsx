'use client';

import React from 'react';
import { UtensilsCrossed, Cake, Store, Building2, Ticket } from 'lucide-react';

export function LogoCloud() {
  const clients = [
    { icon: UtensilsCrossed, name: 'Dapoer Nusantara' },
    { icon: Cake, name: 'KueManis Group' },
    { icon: Store, name: 'Sentra Retail ID' },
    { icon: Building2, name: 'Artha Living Property' },
    { icon: Ticket, name: 'Karya EO Jakarta' },
  ];

  return (
    <section className="w-full bg-white py-8 border-y border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <p className="text-center text-xs font-semibold text-slate-500 uppercase tracking-widest mb-6">
          Dipercaya oleh 4.500+ Bisnis UMKM, Dapur Katering, Event Organizer & Korporat
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-75">
          {clients.map((c, i) => {
            const Icon = c.icon;
            return (
              <div key={i} className="flex items-center gap-2 hover:opacity-100 transition-opacity">
                <Icon className="w-6 h-6 text-slate-600" />
                <span className="text-base font-bold text-slate-700 tracking-tight">{c.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
