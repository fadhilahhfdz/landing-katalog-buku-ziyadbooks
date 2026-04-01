import type { Product } from "@/types/api-response";
import { ProductCard } from "./ProductCard";

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="text-center">
          <p className="text-gray-600 text-lg">Buku tidak ditemukan</p>
          <p className="text-gray-500 text-sm mt-2">Ubah kata kunci anda</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-6">
      {products.map((product) => (
        <div key={product.id} id={`product-${product.id}`}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
