import axios from "axios";
import React, { useEffect, useState } from "react";
import SeachBar from "../SearchBar/SearchBar";
import { apiUrl } from "../../utils/url";

function Shop() {
  const [productData, setProductData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`${apiUrl()}/products/search`, {
          params: {
            q: searchText,
            _page: currentPage,
            _limit: itemsPerPage,
          },
        })
        .then((response) => {
          setProductData(response.data.products);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };

    fetchData();
  }, [searchText, currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="shop-container">
      <SeachBar searchText={searchText} setSearchText={setSearchText} />
      <div className="flex items-center justify-center flex-wrap">
        {productData.map((product) => (
          <div
            key={product.id}
            className="overflow-hidden bg-[#f4fffa] text-[#212021] w-[300px] h-[400px] p-4 flex flex-col items-center justify-center rounded-2xl m-4 hover:shadow-lg cursor-pointer"
          >
            <img
              className="hover:scale-110 h-[70%] m-10px transition-all duration-300 ease-in-out"
              src={product.images}
              alt=""
            />
            <div className="w-full -tracking-tight">
              <h3 className="w-full mb-3 text-lg font-bold">{product.title}</h3>
              <p>Price: ${product.price}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={productData.length} // This should ideally be the total number of products available, not the length of current page data
        onPageChange={handlePageChange}
      />
    </div>
  );
}

const Pagination = ({
  currentPage,
  itemsPerPage,
  totalItems,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <nav className="flex justify-center mt-4">
      <ul className="flex space-x-2">
        <li>
          <button
            className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-md"
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
          >
            Previous
          </button>
        </li>
        {[...Array(totalPages)].map((_, index) => (
          <li key={index}>
            <button
              className={`px-3 py-1 rounded-md ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => onPageChange(index + 1)}
            >
              {index + 1}
            </button>
          </li>
        ))}
        <li>
          <button
            className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-md"
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Shop;
