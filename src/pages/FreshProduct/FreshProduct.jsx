import React from "react";
import "./FreshProduct.css"
import ProductCard from "../../components/ProductCard/ProductCard";
import FreshProductdata from "../../data/FreshProducedata";

const FreshProduct = () => {
  return (
    <div className="electric">
      <section className="products">
        <h2>Fresh Produce</h2>
        <div className="product-grid">
          {FreshProductdata.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default FreshProduct;
