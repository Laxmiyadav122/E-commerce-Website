// import React, { createContext, useState } from "react";

// export const WishlistContext = createContext();

// const WishlistProvider = ({ children }) => {
//   const [wishlist, setWishlist] = useState([]);

//   // ADD TO WISHLIST
//   const addToWishlist = (product) => {
//     const exists = wishlist.find((item) => item.id === product.id);
//     if (!exists) {
//       setWishlist([...wishlist, product]);
//     }
//   };

//   // REMOVE
//   const removeFromWishlist = (id) => {
//     setWishlist(wishlist.filter((item) => item.id !== id));
//   };

//   return (
//     <WishlistContext.Provider
//       value={{ wishlist, addToWishlist, removeFromWishlist }}
//     >
//       {children}
//     </WishlistContext.Provider>
//   );
// };

// export default WishlistProvider;


// import { createContext, useState } from "react";

// export const WishlistContext = createContext();

// const WishlistProvider = ({ children }) => {
//   const [wishlist, setWishlist] = useState([]);

//   const addToWishlist = (product) => {
//     const exists = wishlist.find((item) => item.id === product.id);
//     if (!exists) {
//       setWishlist([...wishlist, product]);
//     }
//   };

//   const removeFromWishlist = (id) => {
//     setWishlist(wishlist.filter((item) => item.id !== id));
//   };

//   return (
//     <WishlistContext.Provider
//       value={{ wishlist, addToWishlist, removeFromWishlist }}
//     >
//       {children}
//     </WishlistContext.Provider>
//   );
// };

// export default WishlistProvider;


import { createContext, useState, useEffect } from "react";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  const addToWishlist = (product) => {
    setWishlist((prev) => {
      const alreadyLiked = prev.find((item) => item.id === product.id);
      if (alreadyLiked) return prev;
      return [...prev, product];
    });
  };

  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
