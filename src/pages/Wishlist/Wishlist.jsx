import React, { useContext } from "react";
import { WishlistContext } from "../../context/WishlistContext";
import { CartContext } from "../../context/CartContext";
import "./Wishlist.css";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);

  if (wishlist.length === 0) {
    return (
      <div className="empty-wishlist">
        <h2>Your Wishlist is empty 💔</h2>
        <p>Save items you love here</p>
      </div>
    );
  }

  return (
    <div className="wishlist-container">
      <h2>My Wishlist ❤️</h2>

      <div className="wishlist-grid">
        {wishlist.map((item) => (
          <div className="wishlist-card" key={item.id}>

            <img src={item.image} alt={item.title} />

            <h4>{item.title}</h4>
            <p className="price">₹{item.price}</p>

            <div className="wishlist-actions">
              <button
                className="cart-btn"
                onClick={() => addToCart(item)}
              >
                Move to Cart
              </button>

              <button
                className="remove-btn"
                onClick={() => removeFromWishlist(item.id)}
              >
                Remove
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
