import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { WishlistContext } from "../../context/WishlistContext";
import { CartContext } from "../../context/CartContext";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const { wishlist } = useContext(WishlistContext);
  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    const loggedUser = localStorage.getItem("loggedInUser");
    if (loggedUser) {
      setUser(loggedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    setUser(null);
    navigate("/login");
  };

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
           <img src="/image/logo.png" alt="logo" />
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

           
          {user && (
            <div className="user-avatar">
              {user.charAt(0).toUpperCase()}
            </div>
          )}

          {!user ? (
            <Link to="/login" className="login-btn">
              Login
            </Link>
          ) : (
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
            
          )}
        </div>
      </div>

      <nav className="menu-bar">
        <ul>
          <li><Link to="/">All</Link></li>
          <li><Link to="/organicFoods">Organic Foods</Link></li>
          <li><Link to="/FreshProduct">Fresh Produce</Link></li>
          <li><Link to="/OrganicBeauty">Organic Beauty</Link></li>
          <li><Link to="/Ayurveda">Herbal & Ayurveda</Link></li>
          <li><Link to="/Cart">Cart</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
