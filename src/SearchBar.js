import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Caută produse..."
        value={query}
        onChange={handleInputChange}
        style={{ fontSize: "20px", padding: "5px", borderRadius: "9px" }}
      />
    </div>
  );
}

export default SearchBar;
