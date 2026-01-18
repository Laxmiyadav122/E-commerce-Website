import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-ring"></div>
      <h2 className="loader-text">
      Green<span>Cart</span>
      </h2>
      <p className="loader-sub">Loading, please wait...</p>
    </div>
  );
};

export default Loader;
