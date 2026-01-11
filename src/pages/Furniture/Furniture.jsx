import React from "react";
import "./Furniture.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import furnitureData from "../../data/Furnituredata"; 

const Furniture = () => {
  return (
    <div className="furniture">
      <section className="products">
        <h2>Furnitures</h2>
        <div className="product-grid">
          {furnitureData.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Furniture;
