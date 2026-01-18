import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import OrganicBeautydata from "../../data/OrganicBeautydata";

const OrganicBeauty = () => {
  return (
    <div className="Fashion">
      <section className="products">
        <h2>Organic Beauty</h2>

        <div className="product-grid">
          {OrganicBeautydata.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default OrganicBeauty;
