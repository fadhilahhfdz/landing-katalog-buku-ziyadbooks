"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Search, X } from "lucide-react";
import type { Product } from "@/types/api-response";
import { formatPrice } from "@/lib/api";

interface SearchModalProps {
  products: Product[];
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ products, isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Focus input when modal opens
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      return () => document.removeEventListener("keydown", handleEsc);
    }
  }, [isOpen, onClose]);

  const filteredProducts = query.trim()
    ? products.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
          onClick={onClose}
        />
      )}

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
          <div
            className="w-full max-w-2xl rounded-2xl bg-white shadow-2xl animate-in fade-in scale-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
              <h2 className="text-xl font-bold text-gray-900">Cari Buku</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="h-6 w-6 text-gray-500" />
              </button>
            </div>

            {/* Search Input */}
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Cari buku..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2E7D32] focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* Results */}
            <div className="max-h-96 overflow-y-auto">
              {query.trim() === "" ? (
                <div className="px-6 py-12 text-center">
                  <p className="text-gray-500">
                    Mulai ketik untuk mencari buku...
                  </p>
                </div>
              ) : filteredProducts.length === 0 ? (
                <div className="px-6 py-12 text-center">
                  <p className="text-gray-600 font-medium">
                    Buku tidak ditemukan
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Coba cari dengan kata kunci lain
                  </p>
                </div>
              ) : (
                <div className="divide-y divide-gray-200">
                  {filteredProducts.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => {
                        const element = document.getElementById(
                          `product-${product.id}`,
                        );
                        if (element) {
                          element.scrollIntoView({
                            behavior: "smooth",
                            block: "center",
                          });
                          onClose();
                        }
                      }}
                      className="w-full px-6 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors text-left"
                    >
                      {/* Product Image */}
                      {product.image_url && (
                        <div className="relative h-16 w-12 shrink-0 rounded-lg overflow-hidden bg-gray-100">
                          <Image
                            src={product.image_url}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-gray-900 truncate">
                          {product.name}
                        </h3>
                        <p className="text-sm text-[#2E7D32] font-medium mt-1">
                          {product.final_price_formatted}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
