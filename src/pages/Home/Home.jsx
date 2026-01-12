import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Home.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import products from "../../data/Products";
import { handleSuccess } from '../../utils';
import { ToastContainer } from 'react-toastify';

const bannerImages = [
  "/image/hear.png",
  "/image/makup.png",
  "/image/mix.png",
  "/image/mixpro.png",
  "/image/brush.png",
  "/image/face.png",
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  const [loggedInUser, setLoggedInUser] = useState('');
  const navigate = useNavigate();

  useEffect(() =>{
    setLoggedInUser(localStorage.getItem('loggedInUser'))
  },[]);
  const handleLogout = (e) => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    handleSuccess('User Loggedout')
    setTimeout(() => {
      navigate('/login');
    },1000)
  }

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
          <h1>Organic Products</h1>
          <p>
            Buy good quility, furnitures and clothes and other thing directly from Us.
          </p>
        </div>
      </section>
      <section className="products">
        <h2>Featured Products</h2>

        <div className="product-grid">
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>

      <section className="why-us">
        <h2>Why Choose OrganicMart?</h2>

        <div className="features">
          <div className="feature">🌱 100% Organic</div>
          <div className="feature">🚚 Fast Delivery</div>
          <div className="feature">💰 Best Prices</div>
          <div className="feature">✅ Trusted Farmers</div>
        </div>
      </section>

      <div>
      <h1>{loggedInUser}</h1>
      <button onClick={handleLogout}>Logout</button>
      <ToastContainer/>
    </div>
    </div>
  );
};

export default Home;
