import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cartItems, removeFromCart, updateQty } = useContext(CartContext);

  const total = cartItems.reduce(
    (sum, item) => sum + Number(item.price) * item.qty,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty 🛒</h2>
        <p>Add some products to continue shopping</p>
      </div>
    );
  }

  return (
    <div className="cart-container">

      <div className="cart-items">
        <h2>Shopping Cart</h2>

        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>

            <img src={item.image} alt={item.title} />

            <div className="cart-details">
              <h4>{item.title}</h4>
              <p>₹{item.price}</p>

              <div className="cart-qty">
                <button
                  onClick={() =>
                    updateQty(item.id, item.qty > 1 ? item.qty - 1 : 1)
                  }
                >
                  -
                </button>
                <span>{item.qty}</span>
                <button
                  onClick={() => updateQty(item.id, item.qty + 1)}
                >
                  +
                </button>
              </div>

              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>

            <div className="cart-price">
              ₹{Number(item.price) * item.qty}
            </div>


          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Price Details</h3>

        <div className="summary-grid">
          <div>Subtotal</div>
          <div>₹{total}</div>

          <div>Delivery</div>
          <div>Free</div>

          <div className="total-label">Total</div>
          <div className="total-amount">₹{total}</div>
        </div>

        <button className="checkout-btn">
          Proceed to Checkout
        </button>
      </div>

    </div>
  );
};

export default Cart;
