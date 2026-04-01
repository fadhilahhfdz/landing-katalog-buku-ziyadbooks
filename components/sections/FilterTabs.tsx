"use client";

import type { FilterType } from "@/types/api-response";

interface FilterTabsProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const filters: { label: string; value: FilterType }[] = [
  { label: "Semua Produk", value: "all" },
  { label: "Sedang Diskon", value: "diskon" },
  { label: "Preorder", value: "preorder" },
];

export function FilterTabs({ activeFilter, onFilterChange }: FilterTabsProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onFilterChange(filter.value)}
          className={`whitespace-nowrap px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
            activeFilter === filter.value
              ? "bg-[#2E7D32] text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
