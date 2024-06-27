import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../assets/styles/shop.css";
import SeachBar from "../SearchBar/SearchBar";
import { apiUrl } from "../../utils/url";

function Shop() {
  const [productData, setProductData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    axios
      .get(`${apiUrl()}/products/search`, {
        params: {
          q: searchText,
        },
      })
      .then(({ data }) => {
        setProductData(data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchText]);

  return (
    <div className="shop-container">
      <SeachBar searchText={searchText} setSearchText={setSearchText} />
      <div className="shop-cards">
        {productData.map((product) => (
          <div key={product.id} className="shop-card">
            <img src={product.images} alt="" />
            <div className="product-info">
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
