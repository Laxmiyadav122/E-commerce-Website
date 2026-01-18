import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import AyurvedaData from "../../data/AyurvedaData";

const Ayurveda = () => {
  return (
    <div className="jewellery">
      <section className="products">
        <h2>Herbal & Ayurveda</h2>

        <div className="product-grid">
          {AyurvedaData.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Ayurveda;
