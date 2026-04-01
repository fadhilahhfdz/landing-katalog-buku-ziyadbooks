export function ProductSkeleton() {
  return (
    <div className="flex flex-col gap-3 rounded-lg bg-white overflow-hidden animate-pulse">
      {/* Image Skeleton */}
      <div className="relative aspect-3/4 w-full bg-gray-200 rounded-lg" />

      {/* Content Skeleton */}
      <div className="flex flex-col gap-2 px-3 pb-3">
        {/* Title Skeleton */}
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-3 bg-gray-200 rounded w-3/4" />

        {/* Price Skeleton */}
        <div className="flex gap-2 mt-2">
          <div className="h-4 bg-gray-200 rounded w-16" />
          <div className="h-4 bg-gray-200 rounded w-20" />
        </div>
      </div>
    </div>
  );
}
