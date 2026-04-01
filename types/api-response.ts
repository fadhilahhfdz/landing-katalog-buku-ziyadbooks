// initialize data type from api
export interface Product {
  id: number;
  name: string;
  image_url: string;
  price_formatted: string;
  final_price_formatted: string;
  diskon: number;
  preorder: boolean;
  sisastok: number;
}

export interface ApiResponse {
  status: string;
  message: string;
  data: {
    data: Product[];
    current_page?: number;
    last_page?: number;
    next_page_url?: string | null;
    prev_page_url?: string | null;
  };
}

export type FilterType = 'all' | 'diskon' | 'preorder';
export type SortType = 'price-asc' | 'price-desc' | 'newest';
