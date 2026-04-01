import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/layout/Hero';
import { Footer } from '@/components/layout/Footer';
import { ProductSkeleton } from '@/components/product/ProductSkeleton';

export default function Loading() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      {/* Loading Section */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          {/* Header Skeleton */}
          <div className="mb-8">
            <div className="h-10 bg-gray-200 rounded w-1/3 mb-4 animate-pulse" />
            <div className="h-5 bg-gray-200 rounded w-1/2 animate-pulse" />
          </div>

          {/* Controls Skeleton */}
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-10 bg-gray-200 rounded w-32 animate-pulse" />
              ))}
            </div>
            <div className="h-10 bg-gray-200 rounded w-48 animate-pulse" />
          </div>

          {/* Product Count Skeleton */}
          <div className="mb-6 h-4 bg-gray-200 rounded w-40 animate-pulse" />

          {/* Grid Skeleton */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-6">
            {[...Array(8)].map((_, i) => (
              <ProductSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
