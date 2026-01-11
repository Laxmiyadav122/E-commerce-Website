import React from "react";
import "./Footer.css";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        
        <div className="footer-col">
          <h2 className="footer-logo">Shop<span>Sphere</span></h2>
          <p>
            ShopSphere is your one-stop destination for quality products,
            best prices, and trusted service.
          </p>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Categories</h3>
          <ul>
          <li><Link to="/">Home</Link></li>
            <li><Link to="/furniture">Furniture</Link></li>
            <li><Link to="/Fashion">Fashion</Link></li>
            <li><Link to="/electronics">Electronics</Link></li>
            <li><Link to="/Jewellery">Jwellery</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contact</h3>
          <p>📍 India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉ support@shopsphere.com</p>

          <div className="social-icons">
            <span>🌐</span>
            <span>📘</span>
            <span>📸</span>
            <span>🐦</span>
          </div>
        </div>

      </div>
      <div className="footer-bottom">
        <p>© 2026 ShopSphere. All Rights Reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;
