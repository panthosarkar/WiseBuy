import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import "../../assets/styles/search.css";

const SearchBar = ({ searchText, setSearchText }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (e) => {
    const { value } = e.target;

    setSearchInput(value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchText.length > 0) {
      setSearchText("");
      setSearchInput("");
    }
    setSearchText(searchInput);
  };
  return (
    <div className="shop-search">
      <form onSubmit={handleSearch}>
        <div className="shop-search-container">
          <input
            className="shop-search-input"
            type="text"
            value={searchInput}
            onChange={handleInputChange}
            placeholder="Search"
          />
          {searchText.length ? (
            <button type="submit" className="shop-close-icon">
              <IoMdCloseCircle />
            </button>
          ) : (
            <button type="submit">
              <FaSearch className="shop-search-icon" />
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
