'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Error Section */}
      <div className="flex-1 flex flex-col items-center justify-center py-20 px-4">
        <div className="text-center max-w-md">
          <div className="text-6xl font-bold text-[#2E7D32] mb-4">500</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Oops! Ada Kesalahan
          </h1>
          <p className="text-gray-600 mb-8">
            Sepetinya ada masalah ketika memuat data buku
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => reset()}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#2E7D32] text-white font-semibold hover:bg-[#1f5722] transition-colors"
            >
              Coba lagi
            </button>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-gray-300 text-gray-900 font-semibold hover:border-gray-400 transition-colors"
            >
              Kembali
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
