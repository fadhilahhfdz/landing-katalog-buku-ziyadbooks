"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import type { SortType } from "@/types/api-response";

interface SortDropdownProps {
  activeSort: SortType;
  onSortChange: (sort: SortType) => void;
}

export function SortDropdown({ activeSort, onSortChange }: SortDropdownProps) {
  return (
    <Select
      value={activeSort}
      onValueChange={(value) => onSortChange(value as SortType)}
    >
      <SelectTrigger className="w-50">
        <SelectValue placeholder="Urutkan" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="newest">Terbaru</SelectItem>
        <SelectItem value="price-asc">Harga: Rendah ke tinggi</SelectItem>
        <SelectItem value="price-desc">Harga: Tinggi ke rendah</SelectItem>
      </SelectContent>
    </Select>
  );
}
