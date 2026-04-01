import type { Product } from "@/types/api-response";

interface ProductBadgeProps {
  product: Product;
}

export function ProductBadge({ product }: ProductBadgeProps) {
  if (product.sisastok === 0) {
    return (
      <span className="inline-block px-2 py-1 rounded-md bg-red-100 text-red-700 text-xs font-semibold">
        Stok Habis
      </span>
    );
  }

  if (product.preorder) {
    return (
      <span className="inline-block px-2 py-1 rounded-md bg-purple-100 text-purple-700 text-xs font-semibold">
        Preorder
      </span>
    );
  }

  if (product.diskon > 0) {
    return (
      <span className="inline-block px-2 py-1 rounded-md bg-[#F57C00] text-white text-xs font-semibold">
        -{product.diskon}%
      </span>
    );
  }

  return null;
}
