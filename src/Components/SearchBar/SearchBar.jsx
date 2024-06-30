import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

const SearchBar = ({ searchText, setSearchText }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (e) => {
    const { value } = e.target;
    setSearchInput(value);
  };

  const handleClearSearch = () => {
    setSearchText("");
    setSearchInput("");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchText(searchInput);
  };

  return (
    <div className="shop-search">
      <form onSubmit={handleSearch}>
        <div className="bg-[#f6f6f6] w-max flex items-center p-[14px] rounded-3xl justify-center my-[15px] mx-auto transition-all duration-300 ease-in-out">
          <input
            className="text-[20px] text-[#333] ml-[15px] outline-none border-none bg-transparent -tracking-[2px] flex-1 placeholder:text-[#00000080]"
            type="text"
            value={searchInput}
            onChange={handleInputChange}
            placeholder="Search"
          />
          {searchInput.length ? (
            <button
              type="button"
              onClick={handleClearSearch}
              className="text-[20px] my-0 mx-[30px] text-[#00000080]"
            >
              <IoMdCloseCircle />
            </button>
          ) : (
            <button type="submit">
              <FaSearch className="text-[20px] my-0 mx-[30px] text-[#00000080]" />
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
