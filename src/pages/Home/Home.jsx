import React from "react";
import { useEffect, useState } from "react";
import "./Home.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import products from "../../data/Products";

const bannerImages = [
  "/image/bag.png",
  "/image/capsical.png",
  "/image/forest.png",
  "/image/hairs.png",
  "/image/chily.png",
  "/image/nutural.png",
  "/image/oil.png",
  "/image/tomato.png"
];

const Home = () => {
  const [current, setCurrent] = useState(0);
  const [loggedInUser, setLoggedInUser] = useState('');

  useEffect(() =>{
    setLoggedInUser(localStorage.getItem('loggedInUser'))
  },[]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === bannerImages.length - 1 ? 0 : prev + 1
      );
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">

      <section className="hero">
        <img src={bannerImages[current]} alt="banner" />
        <div className="hero-content">
          <h1>Healthy Living Starts Here</h1>
          <p>
          Fresh, chemical-free organic products directly from trusted farms to your home.
          </p>
        </div>
      </section>
      <section className="products">
        <h2>Products</h2>

        <div className="product-grid">
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>

      <section className="why-us">
        <h2>Why Choose GreenCart?</h2>

        <div className="features">
          <div className="feature">🌱 100% Organic</div>
          <div className="feature">🚚 Fast Delivery</div>
          <div className="feature">💰 Best Prices</div>
          <div className="feature">✅ Trusted Farmers</div>
        </div>
      </section>
    </div>
  );
};

export default Home;
