"use client";

import Image from "next/image";
import { FaStar, FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const {
    title,
    image,
    price,
    discount,
    ratings,
    reviews,
    sold,
  } = product;

  const finalPrice = price - (price * discount) / 100;

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300 rounded-2xl">
      
      {/* Image */}
      <figure className="p-4">
        <Image
          src={image}
          alt={title}
          width={300}
          height={200}
          className="rounded-xl object-cover"
        />
      </figure>

      {/* Content */}
      <div className="card-body p-4">
        
        {/* Title */}
        <h2 className="text-sm font-semibold line-clamp-2">
          {title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-1 text-sm">
          <FaStar className="text-yellow-500" />
          <span>{ratings}</span>
          <span className="text-gray-400">({reviews})</span>
        </div>

        {/* Sold */}
        <p className="text-xs text-gray-500">
          Sold: {sold}
        </p>

        {/* Price */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-lg font-bold text-primary">
            ৳{finalPrice}
          </span>
          <span className="text-sm line-through text-gray-400">
            ৳{price}
          </span>
        </div>

        {/* Button */}
        <button className="btn btn-primary btn-sm mt-3 flex items-center gap-2">
          <FaShoppingCart />
          Add to Cart
        </button>

      </div>
    </div>
  );
};

export default ProductCard;