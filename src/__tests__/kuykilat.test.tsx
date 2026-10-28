import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Header } from '@/components/kuykilat/Header';
import { PriceCalculator } from '@/components/kuykilat/PriceCalculator';

describe('KuyKilat Public Web Profile', () => {
  it('renders Header with brand and navigation', () => {
    render(<Header />);
    expect(screen.getByRole('link', { name: /kuykilat/i })).toBeDefined();
    expect(screen.getByText('Layanan')).toBeDefined();
    expect(screen.getByText('Cek Tarif')).toBeDefined();
  });

  it('renders PriceCalculator with interactive options', () => {
    render(<PriceCalculator />);
    expect(screen.getByText('Hitung Estimasi Biaya Pengiriman Instan')).toBeDefined();
    expect(screen.getByText('Paket & Barang')).toBeDefined();
    expect(screen.getByText('Katering & Makanan')).toBeDefined();
    expect(screen.getByText('Pindahan Rumah')).toBeDefined();
  });
});
