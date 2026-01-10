import React from "react";
import "./Fashion.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import Fashiondata from "../../data/Fashiondata";

const Fashion = () => {
  return (
    <div className="home">
      <section className="products">
        <h2>Fashion</h2>

        <div className="product-grid">
          {Fashiondata.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Fashion;
