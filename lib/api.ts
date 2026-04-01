import { ApiResponse, Product } from "@/types/api-response";

const API_URL =
  "https://api-dev.ziyadbooks.com/api/v1/ecommerce/auth/products/all/category";
const BEARER_TOKEN = process.env.NEXT_PUBLIC_ZIYAD_API_TOKEN || "";

export interface PaginatedResponse {
  products: Product[];
  currentPage: number;
  lastPage: number;
}

// logika ambil data katalog buku dari api
export async function fetchProducts(
  page: number = 1,
): Promise<PaginatedResponse> {
  try {
    console.log("[service] API Token:", BEARER_TOKEN ? "SET" : "MISSING");
    const url = new URL(API_URL);
    url.searchParams.append("page", String(page));

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 }, // Cache for 60 seconds
    });

    if (!response.ok) {
      console.error(
        "[service] API request failed with status",
        response.status,
      );
      return {
        products: [],
        currentPage: page,
        lastPage: 1,
      };
    }

    const data: ApiResponse = await response.json();
    console.log("[service] API Response data:", data);
    const products = Array.isArray(data.data.data) ? data.data.data : [];
    console.log("[service] Extracted products:", products?.length);

    return {
      products,
      currentPage: data.data.current_page || page,
      lastPage: data.data.last_page || 1,
    };
  } catch (error) {
    console.error("[service] Failed to fetch products:", error);
    return {
      products: [],
      currentPage: page,
      lastPage: 1,
    };
  }
}

export function formatPrice(price: string): number {
  // Remove currency symbols and convert to number
  return parseFloat(price.replace(/[^\d.]/g, ""));
}

export function calculateDiscountPercentage(
  original: string,
  final: string,
): number {
  const originalPrice = formatPrice(original);
  const finalPrice = formatPrice(final);

  if (originalPrice === 0) return 0;

  return Math.round(((originalPrice - finalPrice) / originalPrice) * 100);
}
