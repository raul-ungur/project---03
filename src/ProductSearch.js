import React, { useState } from "react";
import SearchBar from "./SearchBar";
import planta from "./img/planta.webp";
import cactus from "./img/cactus.webp";

const products = [
  { id: 1, name: "", image: "" },
  { id: 2, name: "planta rara", image: planta },
  { id: 3, name: "cactus", image: cactus },
];

function ProductSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProduct, setFilteredProduct] = useState(null);

  const handleSearch = (query) => {
    setSearchQuery(query);

    const product = products.find(
      (product) => product.name.toLowerCase() === query.toLowerCase()
    );
    setFilteredProduct(product || null);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div>
        {filteredProduct ? (
          <div>
            <br />
            <h3>{filteredProduct.name}</h3>
            <br />
            <img
              src={filteredProduct.image}
              alt={filteredProduct.name}
              width="200"
              style={{ borderRadius: "9px" }}
            />
          </div>
        ) : (
          searchQuery && <p>Produsul nu a fost găsit.</p>
        )}
      </div>
    </div>
  );
}

export default ProductSearch;
