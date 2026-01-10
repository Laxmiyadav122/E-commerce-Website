import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../data/Products";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  const [qty, setQty] = useState(1);

  if (!product) {
    return <h2 style={{ padding: "40px" }}>Product not found</h2>;
  }

  return (
    <div className="pd-container">

      <div className="pd-left">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="pd-right">

        <h1 className="pd-title">{product.title}</h1>

        <div className="pd-rating">
          ⭐ {product.rating} ({product.reviews} Reviews)
        </div>

        <div className="pd-price">
          <span className="pd-current">₹{product.price}</span>
          <span className="pd-old">₹{product.oldPrice}</span>
          <span className="pd-discount">{product.discount}% OFF</span>
        </div>

        <p className="pd-stock">In Stock</p>

        <div className="pd-qty">
          <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>-</button>
          <span>{qty}</span>
          <button onClick={() => setQty(qty + 1)}>+</button>
        </div>

        <div className="pd-buttons">
          <button className="add-cart">Add to Cart</button>
          <button className="wishlist">❤ Wishlist</button>
        </div>

        <div className="pd-info">
          <p>🚚 Free Delivery in 3–5 days</p>
          <p>🔄 7 Days Replacement</p>
          <p>💳 Cash on Delivery Available</p>
        </div>

        <div className="pd-desc">
          <h3>Description</h3>
          <p>
            This is a premium quality product made with high-grade materials,
            perfect for modern homes and long-term usage.
          </p>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;
