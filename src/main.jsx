// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom'
// import './index.css'
// import App from './App.jsx'
// import CartProvider from './context/CartContext.jsx'
// import WishlistProvider from './context/WishlistContext.jsx'

// createRoot(document.getElementById('root')).render(

//   <BrowserRouter>
//   <CartProvider>
//     <WishlistProvider/>
//     <App />
//     <WishlistProvider/>
//     </CartProvider>
//   </BrowserRouter>,
// )



// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { BrowserRouter } from "react-router-dom";
// import WishlistProvider from "./context/WishlistContext";
// import CartProvider from "./context/CartContext";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//     <CartProvider>
//       <WishlistProvider>
//         <CartProvider>
//           <App />
//         </CartProvider>
//       </WishlistProvider>
//       </CartProvider>
//     </BrowserRouter>
//   </React.StrictMode>
// );






import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { WishlistProvider } from "./context/WishlistContext";
import { CartProvider } from "./context/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <WishlistProvider>
          <App />
        </WishlistProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
