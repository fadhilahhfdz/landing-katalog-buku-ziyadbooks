"use client";

import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import type { Product } from "@/types/api-response";
import { ProductBadge } from "./ProductBadge";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const isOutOfStock = product.sisastok === 0;

  return (
    <div className="group flex flex-col gap-3 rounded-xl bg-white overflow-hidden border border-gray-200 shadow-sm hover:shadow-md hover:scale-102 transition-all duration-300">
      {/* Image Container */}
      <div className="relative aspect-3/4 w-full overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={product.image_url}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />

        {/* Badge */}
        <div className="absolute top-3 right-3">
          <ProductBadge product={product} />
        </div>

        {/* Overlay */}
        {!isOutOfStock && (
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-end justify-end p-3">
            <button
              className="bg-[#2E7D32] text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
              aria-label="Add to cart"
            >
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 p-4">
        {/* Title */}
        <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-[#2E7D32] transition-colors">
          {product.name}
        </h3>

        {/* Price */}
        <div className="flex flex-col md:flex-row items-center gap-2">
          {product.diskon > 0 ? (
            <>
              <span className="text-xs text-red-500 line-through">
                {product.price_formatted}
              </span>
              <span className="text-sm font-bold text-[#2E7D32]">
                {product.final_price_formatted}
              </span>
            </>
          ) : (
            <span className="text-sm font-bold text-gray-900">
              {product.final_price_formatted}
            </span>
          )}
        </div>

        {/* Stock Info */}
        {!isOutOfStock && product.sisastok < 5 && (
          <p className="text-xs text-orange-600 font-medium">
            Stok tersisa {product.sisastok} lagi
          </p>
        )}
      </div>
    </div>
  );
}
