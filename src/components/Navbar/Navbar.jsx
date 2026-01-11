import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { WishlistContext } from "../../context/WishlistContext";
import { CartContext } from "../../context/CartContext";

const Navbar = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const { wishlist } = useContext(WishlistContext);
  const { cartItems } = useContext(CartContext);

  const handleSearch = () => {
    if (searchText.trim() === "") return;
    navigate(`/search?q=${encodeURIComponent(searchText)}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className="navbar-wrapper">
      <div className="navbar">
        <div className="navbar-left">
          <Link to="/" className="logo">
            Shop<span>Sphere</span>
          </Link>
        </div>

        <div className="navbar-center">
          <div className="search-box">
            <input
              className="searchbar"
              type="text"
              placeholder="Search for products..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <span className="search-icon">🔍</span>
          </div>

          <button className="searchbtn" onClick={handleSearch}>
            Search
          </button>
        </div>

        <div className="navbar-right">
          <Link to="/wishlist" className="nav-icon">
            ❤️ <span className="count">{wishlist.length}</span>
          </Link>

          <Link to="/cart" className="nav-icon">
            🛒 <span className="count">{cartItems.length}</span>
          </Link>


          <Link to="/login" className="login-btn">
            Login
          </Link>
        </div>
      </div>

      <nav className="menu-bar">
        <ul>
          <li><Link to="/">All</Link></li>
          <li><Link to="/furniture">Furniture</Link></li>
          <li><Link to="/electronics">Electronics</Link></li>
          <li><Link to="/Fashion">Fashion</Link></li>
          <li><Link to="/Jewellery">Jwellery</Link></li>
          <li><Link to="/Cart">Cart</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
