import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../Context/cartContext";
import { apiUrl } from "../../utils/url";

function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart, increaseQuantity, decreaseQuantity, cart } = useCart();

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

  const cartItem = cart.find((item) => item.product.id === product.id);

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row items-start bg-white shadow-md rounded-lg p-6">
        <img
          src={product.images}
          alt=""
          className="w-full md:w-1/2 h-auto object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
        />
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
          <p className="mb-4">{product.description}</p>
          <p className="text-xl font-semibold mb-4">Price: ${product.price}</p>
          {cartItem ? (
            <div className="flex items-center">
              <button
                onClick={() => increaseQuantity(product.id)}
                className="bg-gray-200 px-4 py-2 rounded"
              >
                +
              </button>
              <span className="mx-2">{cartItem.quantity}</span>
              <button
                onClick={() => decreaseQuantity(product.id)}
                disabled={cartItem.quantity === 1}
                className="bg-gray-200 px-4 py-2 rounded"
              >
                -
              </button>
            </div>
          ) : (
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
