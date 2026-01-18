import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import OrganicFoodsData from "../../data/OrganicFoodsdata"; 

const OrganicFoodsdata = () => {
  return (
    <div className="furniture">
      <section className="products">
        <h2>Organic Foods  
        </h2>
        <div className="product-grid">
          {OrganicFoodsData.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default OrganicFoodsdata;
