import React from "react";
import "./Bar.css";
import ProductSearch from "./ProductSearch";
function search() {
  return (
    <div className="search">
      <div className="search-item">
        <h1>Căutare Produse</h1>
        <br />
        <ProductSearch />
      </div>
    </div>
  );
}

export default search;
