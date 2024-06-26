import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../../assets/styles/search.css";

const SeachBar = ({ setResult }) => {
  const [searchInput, setSearchInput] = useState("");
  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setResult(searchInput);
  };
  return (
    <div className="shop-search">
      <form onSubmit={handleSearchSubmit}>
        <div className="shop-search-container">
          <input
            className="shop-search-input"
            type="text"
            onChange={handleInputChange}
            placeholder="Search"
          />
          <button type="submit">
            <FaSearch className="shop-search-icon" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SeachBar;
