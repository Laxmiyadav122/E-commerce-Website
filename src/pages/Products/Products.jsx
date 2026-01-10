// import React from "react";
// import ProductCard from "../../components/ProductCard/ProductCard";
// import products from "../../data/products";
// import "./Products.css";

// const Products = () => {
//   return (
//     <>
//     <div className="products-container">
//     {products.map((item) => (
//       <ProductCard key={item.id} product={item} />
//     ))}
//   </div>
//     <div className="products-page">

//       {/* FILTER SIDEBAR */}
//       <aside className="filter-section">
//         <h3>Filters</h3>

//         <div className="filter-group">
//           <h4>Category</h4>
//           <label><input type="checkbox" /> Fruits</label>
//           <label><input type="checkbox" /> Vegetables</label>
//           <label><input type="checkbox" /> Dry Fruits</label>
//         </div>

//         <div className="filter-group">
//           <h4>Price</h4>
//           <label><input type="radio" name="price" /> Under ₹100</label>
//           <label><input type="radio" name="price" /> ₹100 - ₹500</label>
//           <label><input type="radio" name="price" /> Above ₹500</label>
//         </div>

//         <div className="filter-group">
//           <h4>Rating</h4>
//           <label><input type="checkbox" /> ⭐⭐⭐⭐ & above</label>
//           <label><input type="checkbox" /> ⭐⭐⭐ & above</label>
//         </div>
//       </aside>

//       {/* PRODUCT LIST */}
//       <section className="product-section">
//         <div className="product-header">
//           <h2>All Products</h2>
//           <select>
//             <option>Sort by</option>
//             <option>Price: Low to High</option>
//             <option>Price: High to Low</option>
//             <option>Popularity</option>
//           </select>
//         </div>

//         <div className="product-grid">

//           {/* PRODUCT CARD */}
//           <div className="product-card">
//             <img src="https://via.placeholder.com/200" alt="Apple" />
//             <h4>Fresh Apples</h4>
//             <p className="price">₹120 / kg</p>
//             <button>Add to Cart</button>
//           </div>

//           <div className="product-card">
//             <img src="https://via.placeholder.com/200" alt="Tomato" />
//             <h4>Organic Tomato</h4>
//             <p className="price">₹60 / kg</p>
//             <button>Add to Cart</button>
//           </div>

//           <div className="product-card">
//             <img src="https://via.placeholder.com/200" alt="Almond" />
//             <h4>Almonds</h4>
//             <p className="price">₹650 / kg</p>
//             <button>Add to Cart</button>
//           </div>

//           <div className="product-card">
//             <img src="https://via.placeholder.com/200" alt="Spinach" />
//             <h4>Spinach</h4>
//             <p className="price">₹40 / bunch</p>
//             <button>Add to Cart</button>
//           </div>

//         </div>
//       </section>
//     </div>
//     </>
//   );
// };

// export default Products;


import React, { useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import products from "../../data/Products";
import "./Products.css";

const Products = () => {
  const [minPrice, setMinPrice] = useState(0);

const filteredProducts = products.filter(
  (p) => p.price >= minPrice
);

{products.map((item) => (
  <ProductCard key={item.id} product={item} />
))}


  return (
    <div className="products-container">
      <input
  type="range"
  min="0"
  max="5000"
  value={minPrice}
  onChange={(e) => setMinPrice(e.target.value)}
/>
<p>Min Price: ₹{minPrice}</p>

    </div>
  );
};

export default Products;
