"use client";

import { useState, useMemo } from "react";
import type { Product, FilterType, SortType } from "@/types/api-response";
import { formatPrice } from "@/lib/api";
import { ProductGrid } from "@/components/product/ProductGrid";
import { FilterTabs } from "./FilterTabs";
import { SortDropdown } from "./SortDropdown";
import { Pagination } from "./Pagination";

interface CatalogSectionProps {
  products: Product[];
  currentPage: number;
  lastPage: number;
}

export function CatalogSection({
  products,
  currentPage = 1,
  lastPage = 1,
}: CatalogSectionProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [activeSort, setActiveSort] = useState<SortType>("newest");

  // Ensure products is always an array - multiple safety checks
  const productsArray = useMemo(() => {
    console.log(
      "[service] Products received:",
      products,
      "Type:",
      typeof products,
      "Is Array:",
      Array.isArray(products),
    );
    if (!products) return [];
    if (!Array.isArray(products)) return [];
    return products;
  }, [products]);

  const filteredAndSortedProducts = useMemo(() => {
    // Apply filters - productsArray is guaranteed to be an array
    let filtered = [...productsArray];

    if (activeFilter === "diskon") {
      filtered = filtered.filter((p) => p.diskon > 0);
    } else if (activeFilter === "preorder") {
      filtered = filtered.filter((p) => p.preorder);
    }

    // Apply sorting
    const sorted = [...filtered];

    if (activeSort === "price-asc") {
      sorted.sort(
        (a, b) =>
          formatPrice(a.final_price_formatted) -
          formatPrice(b.final_price_formatted),
      );
    } else if (activeSort === "price-desc") {
      sorted.sort(
        (a, b) =>
          formatPrice(b.final_price_formatted) -
          formatPrice(a.final_price_formatted),
      );
    }
    // 'newest' is the natural order from API

    return sorted;
  }, [productsArray, activeFilter, activeSort]);

  return (
    <section id="catalog" className="py-12 md:py-16 bg-gray-50 md:scroll-mt-16 scroll-mt-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Katalog Kami
          </h2>
          <p className="text-gray-600">
            Jelajahi ratusan pilihan buku, mulai dari buku anak sampai buku
            pengetahuan
          </p>
        </div>

        {/* Controls */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <FilterTabs
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
          <SortDropdown activeSort={activeSort} onSortChange={setActiveSort} />
        </div>

        {/* Product Count */}
        <div className="mb-6 text-sm text-gray-600">
          Menampilkan {filteredAndSortedProducts.length} dari{" "}
          {productsArray.length} buku
        </div>

        {/* Grid */}
        <ProductGrid products={filteredAndSortedProducts} />

        {/* Pagination */}
        {lastPage > 1 && (
          <Pagination currentPage={currentPage} lastPage={lastPage} />
        )}
      </div>
    </section>
  );
}
