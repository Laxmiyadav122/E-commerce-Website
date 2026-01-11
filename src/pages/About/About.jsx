import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About Us</h1>
        <p>Your One-Stop Online Shopping Destination</p>
      </section>

      <section className="about-content">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            We are a modern e-commerce platform that brings together a wide
            variety of products in one place. From electronics and fashion to
            home essentials, beauty, and lifestyle products, we aim to make
            online shopping simple, convenient, and reliable for everyone.
          </p>

          <h2>Our Mission</h2>
          <p>
            Our mission is to provide customers with quality products, fair
            prices, and a smooth shopping experience. We focus on building a
            platform that is easy to use, secure, and trusted by shoppers across
            different categories.
          </p>

          <h2>Why Choose Us</h2>
          <ul>
            <li>🛒 Wide Range of Products</li>
            <li>⚡ Easy & Secure Shopping</li>
            <li>🚚 Fast & Reliable Delivery</li>
            <li>💳 Multiple Payment Options</li>
            <li>🤝 Trusted Sellers & Brands</li>
          </ul>
        </div>

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
            alt="Online shopping"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
