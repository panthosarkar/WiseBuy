import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../assets/styles/shop.css";
import SeachBar from "../SearchBar/SeachBar";

function Shop() {
  const [productData, setProductData] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;
  useEffect(() => {
    axios
      .get(`${apiUrl}/products`)
      .then((res) => {
        console.log(res.data.products);
        setProductData(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div className="shop-container">
      <SeachBar />
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
