import React, { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const [showDesc, setShowDesc] = useState(false);

  const { addToCart } = useContext(CartContext);
  const { wishlist, addToWishlist, removeFromWishlist } =
    useContext(WishlistContext);

  const isLiked = wishlist.some((item) => item.id === product.id);

  return (
    <div
      className="product-card"
      onMouseEnter={() => setShowDesc(true)}
      onMouseLeave={() => setShowDesc(false)}
      onClick={() => setShowDesc(!showDesc)} // mobile
    >
      {/* ❤️ LIKE */}
      <span
        className="like-icon"
        onClick={(e) => {
          e.stopPropagation();
          isLiked
            ? removeFromWishlist(product.id)
            : addToWishlist(product);
        }}
      >
        {isLiked ? "❤️" : "🤍"}
      </span>

      <img src={product.image} alt={product.title} />

      <h3>{product.title}</h3>
      <p className="price">₹{product.price}</p>

      {/* 👇 DESCRIPTION */}
      {showDesc && (
        <p className="description">{product.description}</p>
      )}

      <button
        className="add-btn"
        onClick={(e) => {
          e.stopPropagation();
          addToCart(product);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
