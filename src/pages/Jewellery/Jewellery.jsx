import React from "react";
import "./Jewellery.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import jewelleryData from "../../data/JewelleryData";

const Fashion = () => {
  return (
    <div className="home">
      <section className="products">
        <h2>Jewellery</h2>

        <div className="product-grid">
          {jewelleryData.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Fashion;
