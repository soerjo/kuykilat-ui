'use client';

import React, { useState, useMemo } from 'react';
import { Calculator, Zap } from 'lucide-react';

type ServiceType = 'barang' | 'katering' | 'pindahan';

export function PriceCalculator() {
  const [service, setService] = useState<ServiceType>('barang');
  const [distance, setDistance] = useState<number>(12);
  const [weight, setWeight] = useState<number>(20);
  const [helper, setHelper] = useState<boolean>(false);
  const [insurance, setInsurance] = useState<boolean>(true);

  const handleServiceChange = (newService: ServiceType) => {
    setService(newService);
    if (newService === 'katering') {
      setWeight(60);
    } else if (newService === 'pindahan') {
      setWeight(90);
    } else {
      setWeight(15);
    }
  };

  const calculation = useMemo(() => {
    let basePrice = 20000;
    let perKm = 2500;
    let armadaName = 'Motor Kilat';

    if (service === 'barang') {
      if (weight > 30) {
        basePrice = 85000;
        perKm = 4000;
        armadaName = 'Blind Van Cargo';
      } else {
        basePrice = 18000;
        perKm = 2200;
        armadaName = 'Motor Box Kilat';
      }
    } else if (service === 'katering') {
      basePrice = 95000;
      perKm = 4500;
      armadaName = 'Blind Van Berpendingin (Food Grade)';
    } else if (service === 'pindahan') {
      if (weight > 80) {
        basePrice = 320000;
        perKm = 8500;
        armadaName = 'Truk Engkel CDE Box';
      } else {
        basePrice = 160000;
        perKm = 6000;
        armadaName = 'Pickup Gran Max Bak/Box';
      }
    }

    const distanceCost = distance * perKm;
    let addonCost = 0;
    if (helper) addonCost += 45000;
    if (insurance) addonCost += 5000;

    const total = basePrice + distanceCost + addonCost;

    return {
      armadaName,
      basePrice,
      distanceCost,
      addonCost,
      total,
    };
  }, [service, distance, weight, helper, insurance]);

  const waLink = 'https://wa.me/6281299005452?text=' + encodeURIComponent(
    'Halo KuyKilat, saya ingin pesan layanan ' + service + ' jarak ' + distance + 'km estimasi Rp ' + calculation.total.toLocaleString('id-ID')
  );

  return (
    <section className="w-full bg-white py-16 md:py-24 border-y border-slate-200" id="kalkulator">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-xs font-semibold text-orange-700 mb-3 border border-orange-200">
            <Calculator className="w-4 h-4" />
            <span>Kalkulator Transparan Tanpa Biaya Tersembunyi</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Hitung Estimasi Biaya Pengiriman Instan
          </h2>
          <p className="text-base text-slate-600">
            Pilih kategori kebutuhan Anda, atur perkiraan jarak rute, dan lihat estimasi biaya secara real-time.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-slate-50 rounded-2xl shadow-lg border border-slate-200 p-6 md:p-10">
          <div className="flex p-1.5 bg-slate-200/80 rounded-xl mb-8 max-w-lg mx-auto border border-slate-200">
            <button
              type="button"
              onClick={() => handleServiceChange('barang')}
              className={'flex-1 py-2.5 px-3 rounded-lg text-center text-sm font-semibold transition-all ' + (
                service === 'barang'
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              )}
            >
              Paket & Barang
            </button>
            <button
              type="button"
              onClick={() => handleServiceChange('katering')}
              className={'flex-1 py-2.5 px-3 rounded-lg text-center text-sm font-semibold transition-all ' + (
                service === 'katering'
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              )}
            >
              Katering & Makanan
            </button>
            <button
              type="button"
              onClick={() => handleServiceChange('pindahan')}
              className={'flex-1 py-2.5 px-3 rounded-lg text-center text-sm font-semibold transition-all ' + (
                service === 'pindahan'
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              )}
            >
              Pindahan Rumah
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <label htmlFor="range-distance" className="text-sm font-semibold text-slate-900">Jarak Pengiriman</label>
                  <span className="font-mono text-sm text-orange-600 font-bold">{distance} km</span>
                </div>
                <input
                  id="range-distance"
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
                  max={60}
                  min={1}
                  type="range"
                  value={distance}
                  onChange={(e) => setDistance(parseInt(e.target.value, 10))}
                />
                <div className="flex justify-between text-slate-500 text-xs">
                  <span>1 km (Dekat)</span>
                  <span>30 km (Antar Kota)</span>
                  <span>60 km (Jabodetabek Raya)</span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <label htmlFor="range-weight" className="text-sm font-semibold text-slate-900">
                    {service === 'katering' ? 'Jumlah Porsi / Box Makanan' : 'Beban Muatan / Estimasi Berat'}
                  </label>
                  <span className="font-mono text-sm text-orange-600 font-bold">
                    {weight} {service === 'katering' ? 'Porsi' : 'kg'}
                  </span>
                </div>
                <input
                  id="range-weight"
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
                  max={service === 'katering' ? 200 : service === 'pindahan' ? 150 : 100}
                  min={1}
                  type="range"
                  value={weight}
                  onChange={(e) => setWeight(parseInt(e.target.value, 10))}
                />
                <div className="flex justify-between text-slate-500 text-xs">
                  <span>Ringan (1 {service === 'katering' ? 'porsi' : 'kg'})</span>
                  <span>Menengah (50 {service === 'katering' ? 'porsi' : 'kg'})</span>
                  <span>Maksimal ({service === 'katering' ? '200 porsi' : '150 kg'})</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm flex flex-col gap-3">
                <span className="text-xs font-semibold text-slate-900">Layanan Tambahan Disarankan:</span>
                <div className="flex flex-col sm:flex-row gap-3.5">
                  <label className="flex items-center gap-2.5 cursor-pointer">
                    <input
                      checked={helper}
                      onChange={(e) => setHelper(e.target.checked)}
                      className="w-4 h-4 rounded text-orange-500 accent-orange-500"
                      type="checkbox"
                    />
                    <span className="text-xs text-slate-800 font-medium">+1 Tenaga Angkut Helper (+Rp 45.000)</span>
                  </label>
                  <label className="flex items-center gap-2.5 cursor-pointer">
                    <input
                      checked={insurance}
                      onChange={(e) => setInsurance(e.target.checked)}
                      className="w-4 h-4 rounded text-orange-500 accent-orange-500"
                      type="checkbox"
                    />
                    <span className="text-xs text-slate-800 font-medium">Proteksi Garansi Anti Rusak (+Rp 5.000)</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white rounded-xl p-6 shadow-md border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-4">
                  <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">
                    Estimasi Resmi KuyKilat
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-mono text-[11px] font-bold border border-emerald-200">
                    TERVERIFIKASI
                  </span>
                </div>

                <div className="flex flex-col gap-2.5 mb-6 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Armada: {calculation.armadaName}</span>
                    <span className="text-slate-900 font-semibold">Rp {calculation.basePrice.toLocaleString('id-ID')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Tarif Jarak ({distance} km)</span>
                    <span className="text-slate-900 font-semibold">Rp {calculation.distanceCost.toLocaleString('id-ID')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Biaya Proteksi & Addon</span>
                    <span className="text-slate-900 font-semibold">Rp {calculation.addonCost.toLocaleString('id-ID')}</span>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-200">
                  <span className="text-xs font-medium text-slate-500 block mb-1">Total Biaya Bersih (Nett)</span>
                  <span className="text-3xl text-orange-600 tracking-tight font-extrabold">
                    Rp {calculation.total.toLocaleString('id-ID')}
                  </span>
                  <span className="block text-[11px] text-slate-500 mt-1">
                    Tanpa tip tersembunyi & tanpa biaya aplikasi ekstra
                  </span>
                </div>
              </div>

              <a
                className="w-full h-12 rounded-lg bg-orange-500 text-white text-sm font-semibold text-center shadow-sm hover:bg-orange-600 transition-all active:scale-[0.98] flex items-center justify-center gap-2 border border-transparent"
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Pesan Armada Ini Sekarang</span>
                <Zap className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
