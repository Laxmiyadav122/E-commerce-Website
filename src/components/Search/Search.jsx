import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Search.css";

const Search = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get("q");

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    const fetchProducts = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `https://dummyjson.com/products/search?q=${query}`
        );

        const data = await res.json();

        console.log("API DATA 👉", data); 

        setProducts(data.products || []);
      } catch (error) {
        console.error("Search error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [query]);

  return (
    <div className="search-page">
      <h2>
        Search results for: <span>{query}</span>
      </h2>

      {loading && <p>Loading...</p>}

      <div className="product-grid">
        {!loading && products.length === 0 && (
          <p className="no-result">No products found 😔</p>
        )}

        {products.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.thumbnail} alt={item.title} />
            <h4>{item.title}</h4>
            <p>₹ {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
