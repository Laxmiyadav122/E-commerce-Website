import React, { useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import products from "../../data/Products";
import "./Products.css";

const Products = () => {
  const [minPrice, setMinPrice] = useState(0);

const filteredProducts = products.filter(
  (p) => p.price >= minPrice
);

{products.map((item) => (
  <ProductCard key={item.id} product={item} />
))}


  return (
    <div className="products-container">
      <input
  type="range"
  min="0"
  max="5000"
  value={minPrice}
  onChange={(e) => setMinPrice(e.target.value)}
/>
<p>Min Price: ₹{minPrice}</p>

    </div>
  );
};

export default Products;
