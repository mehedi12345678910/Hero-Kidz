const ProductCardSkeleton = () => {
  return (
    <div className="card bg-base-100 shadow-md rounded-2xl p-4 space-y-3">
      {/* Image Skeleton */}
      <div className="skeleton h-40 w-full rounded-xl"></div>

      {/* Title */}
      <div className="skeleton h-4 w-3/4"></div>

      {/* Rating */}
      <div className="skeleton h-4 w-1/2"></div>

      {/* Sold */}
      <div className="skeleton h-3 w-1/3"></div>

      {/* Price */}
      <div className="skeleton h-5 w-1/2"></div>

      {/* Button */}
      <div className="skeleton h-8 w-full rounded-lg"></div>
    </div>
  );
};

export default ProductCardSkeleton;
