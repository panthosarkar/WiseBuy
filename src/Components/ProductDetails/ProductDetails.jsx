import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiUrl } from "../../utils/url";

function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const fetchProduct = () => {
      axios
        .get(`${apiUrl()}/products/${productId}`)
        .then((response) => {
          setProduct(response.data);
        })
        .catch((error) => {
          console.error("Error fetching product details:", error);
        });
    };
    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <div className="w-full h-[100vh]">
      <div className="flex justify-start items-start w-full h-[100vh]">
        <div className="">
          <img src={product.images} alt="" className="w-[100rem] h-[50rem]" />
        </div>
        <div className="">
          <h2 className="text-3xl font-bold my-8">{product.title}</h2>
          <p className="">{product.description}</p>
          <p className="">Price: ${product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
