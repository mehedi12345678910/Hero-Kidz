import React from "react";
import products from "@/data/toys.json";
import ProductCard from "../cards/ProductCard";
const Products = async() => {
    const products=(await getProducts()) || []
  return (
    <div>
      <h2 className="text-center text-4xl font-bold mb-10">
        {" "}
        Our <span className="text-primary">Products</span>{" "}
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:grid-cols-2">
        {products.map((product) => (
          <ProductCard key={product.title} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
