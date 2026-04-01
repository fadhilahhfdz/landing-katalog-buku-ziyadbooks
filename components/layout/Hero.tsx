import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, Gift, Truck } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-40">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 items-center md:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="flex flex-col gap-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-pretty leading-tight">
                Temukan Buku Islami Terbaik untuk Anak & Keluarga
              </h1>
              <p className="text-lg md:text-xl text-gray-600 text-pretty">
                Koleksi buku edukatif, islami, dan berkualitas untuk membantu tumbuh kembang anak dengan cara yang menyenangkan.
              </p>
            </div>

            {/* Supporting Points */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <BookOpen className="h-6 w-6 text-[#2E7D32] mt-1" />
                </div>
                <p className="text-base text-gray-700">Banyak pilihan buku islami anak</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <Gift className="h-6 w-6 text-[#F57C00] mt-1" />
                </div>
                <p className="text-base text-gray-700">Promo menarik & diskon spesial</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <Truck className="h-6 w-6 text-[#2E7D32] mt-1" />
                </div>
                <p className="text-base text-gray-700">Siap kirim ke seluruh Indonesia</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="#catalog"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[#2E7D32] text-white font-semibold hover:bg-[#1e5a24] hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Lihat Katalog
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-gray-300 text-gray-900 font-semibold hover:border-[#2E7D32] hover:text-[#2E7D32] hover:bg-[#2E7D32]/5 transition-all duration-300"
              >
                Pelajari Lebih Lanjut
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-100 md:h-125 lg:h-137.5 animate-float hidden md:block">
            <Image
              src="/hero-products.webp"
              alt="Koleksi Buku Islami Ziyad"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
