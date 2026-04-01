import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-[#2E7D32]">
                Ziyad<span className="text-[#F57C00]">Books</span>
              </span>
            </div>
            <p className="text-sm text-gray-600">
              Koleksi buku islami pilihan untuk anak dan keluarga, dengan
              kualitas terbaik dan harga terjangkau.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-gray-600 hover:text-[#2E7D32] transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-[#2E7D32] transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-[#2E7D32] transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-gray-900">Perusahaan</h3>
            <Link
              href="/"
              className="text-sm text-gray-600 hover:text-[#2E7D32] transition-colors"
            >
              Beranda
            </Link>
            <Link
              href="#catalog"
              className="text-sm text-gray-600 hover:text-[#2E7D32] transition-colors"
            >
              Katalog
            </Link>
          </div>

          {/* Support Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-gray-900">Bantuan</h3>
            <Link
              href="#"
              className="text-sm text-gray-600 hover:text-[#2E7D32] transition-colors"
            >
              Kontak
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-600 hover:text-[#2E7D32] transition-colors"
            >
              FAQs
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-600 hover:text-[#2E7D32] transition-colors"
            >
              Informasi Pengiriman
            </Link>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-gray-900">Legal</h3>
            <Link
              href="#"
              className="text-sm text-gray-600 hover:text-[#2E7D32] transition-colors"
            >
              Kebijakan Privasi
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-600 hover:text-[#2E7D32] transition-colors"
            >
              Syarat & Ketentuan
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} ZiyadBooks</p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-xs text-gray-600 hover:text-[#2E7D32] transition-colors"
            >
              Privasi
            </Link>
            <Link
              href="#"
              className="text-xs text-gray-600 hover:text-[#2E7D32] transition-colors"
            >
              Ketentuan
            </Link>
            <Link
              href="#"
              className="text-xs text-gray-600 hover:text-[#2E7D32] transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
