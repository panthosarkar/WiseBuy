import { Link } from "react-router-dom";
import { useCart } from "../../Context/cartContext";
import "../../assets/styles/cart.css";

const SHIPPING_CHARGES = 25;

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();

  const cartTotal = () => {
    return cart.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );
  };

  const round = (value, decimals) => {
    return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
  };

  return (
    <div className="p-4 w-full h-[100vh]">
      <div className="bg-white shadow-md rounded-lg p-6">
        {cart.length >= 1 ? (
          <div className="grid gap-4">
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              {cart.map((item) => (
                <div className="flex items-center mb-4" key={item.product.id}>
                  <img
                    src={item.product.image}
                    alt=""
                    className="w-20 h-20 object-cover mr-4"
                  />
                  <div className="flex-1">
                    <Link
                      to={"/product/" + item.product.id}
                      className="text-lg font-medium"
                    >
                      {item.product.title}
                    </Link>
                    <div className="text-gray-500">
                      ${round(item.product.price * item.quantity, 2)}
                    </div>
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() => increaseQuantity(item.product.id)}
                        className="bg-gray-200 px-2 py-1 rounded"
                      >
                        +
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        onClick={() => decreaseQuantity(item.product.id)}
                        disabled={item.quantity === 1}
                        className="bg-gray-200 px-2 py-1 rounded"
                      >
                        -
                      </button>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-red-500 ml-4"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-xl font-bold mb-4">Payment Summary</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>${round(cartTotal(), 2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping Fee:</span>
                  <span>${SHIPPING_CHARGES}</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Total:</span>
                  <span>${round(cartTotal() + SHIPPING_CHARGES, 2)}</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-500">
            <p>Cart is empty</p>
          </div>
        )}
      </div>
    </div>
  );
};

export { Cart };
