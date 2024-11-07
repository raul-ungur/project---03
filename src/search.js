import React from "react";
import "./Bar.css";
import ProductSearch from "./ProductSearch";
function search() {
  return (
    <div className="search" style={{ marginLeft: "100px" }}>
      <div className="search-item" style={{ marginLeft: "200px" }}>
        <h1>Căutare Produse</h1>
        <br />
        <ProductSearch />
      </div>
    </div>
  );
}

export default search;
