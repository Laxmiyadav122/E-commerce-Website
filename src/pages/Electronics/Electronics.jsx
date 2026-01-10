import React from "react";
import "./Electronics.css"
import ProductCard from "../../components/ProductCard/ProductCard";
import electronicsData from "../../data/Electronicdata";

const Electronics = () => {
  return (
    <div className="home">
      <section className="products">
        <h2>Electronic Furniture</h2>
        <div className="product-grid">
          {electronicsData.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Electronics;
