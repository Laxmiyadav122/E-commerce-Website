// import React from "react";
// import "./Home.css";

// const Home = () => {
//   return (
//     <div className="home">

//       <section className="hero">
//         <div className="hero-content">
//           <h1>Fresh & Organic Products</h1>
//           <p>
//             Buy healthy, organic fruits and vegetables directly from farmers.
//           </p>
//           <button className="hero-btn">Shop Now</button>
//         </div>
//       </section>

//       <section className="categories">
//         <h2>Shop by Category</h2>
//         <div className="category-list">
//           <div className="category-card">🍎 Fruits</div>
//           <div className="category-card">🥦 Vegetables</div>
//           <div className="category-card">🌾 Organic</div>
//           <div className="category-card">🥜 Dry Fruits</div>
//         </div>
//       </section>

//       <section className="products">
//         <h2>Featured Products</h2>

//         <div className="product-grid">
//           <div className="product-card">
//             <img src="https://m.media-amazon.com/images/I/712rQalRBvL._AC_UF894,1000_QL80_.jpg" alt="table" />
//             <h3>Vanity Table</h3>
//             <p>₹5000</p>
//             <button>Add to Cart</button>
//           </div>

//           <div className="product-card">
//             <img src="https://m.media-amazon.com/images/I/71SHVbtQwML._AC_UF894,1000_QL80_.jpg" alt="Vanity Set with Large Mirror" />
//             <h3>Vanity Set with Large Mirror</h3>
//             <p>₹10000</p>
//             <button>Add to Cart</button>
//           </div>

//           <div className="product-card">
//             <img src="https://m.media-amazon.com/images/I/71f3BmjCwtL.jpg" alt="Shoes" />
//             <h3>Shoes</h3>
//             <p>₹1650</p>
//             <button>Add to Cart</button>
//           </div>

//           <div className="product-card">
//             <img src="https://i.pinimg.com/236x/51/a3/61/51a361203841c598e2dde47bc9241b64.jpg" alt="Bangles" />
//             <h3>Bangles</h3>
//             <p>₹300</p>
//             <button>Add to Cart</button>
//           </div>
//         </div>
//       </section>

//       <section className="why-us">
//         <h2>Why Choose OrganicMart?</h2>

//         <div className="features">
//           <div className="feature">🌱 100% Organic</div>
//           <div className="feature">🚚 Fast Delivery</div>
//           <div className="feature">💰 Best Prices</div>
//           <div className="feature">✅ Trusted Farmers</div>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default Home;




import React from "react";
import "./Home.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import products from "../../data/Products";

const Home = () => {
  return (
    <div className="home">

      <section className="hero">
        <div className="hero-content">
          <h1>Fresh & Organic Products</h1>
          <p>
            Buy healthy, organic fruits and vegetables directly from farmers.
          </p>
          <button className="hero-btn">Shop Now</button>
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

    </div>
  );
};

export default Home;
