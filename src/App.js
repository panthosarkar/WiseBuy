import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Body from "./Components/ContentBody/Body.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer.jsx";
import GetInTouch from "./Components/GetInTouch/GetInTouch.jsx";
import { Cart } from "./Components/Cart/Cart.jsx";
import Shop from "./Components/Shop/Shop.jsx";
import ProductDetails from "./Components/ProductDetails/ProductDetails.jsx";
import { CartProvider } from "./Context/cartContext"; // Import CartProvider

function App() {
  return (
    <div className="WiseBuy">
      <CartProvider>
        {" "}
        {/* Wrap your app with CartProvider */}
        <BrowserRouter>
          <Navigation />
          <div className="app-routes">
            <Routes>
              <Route path="/" element={<Body />} />
              <Route path="/contact" element={<GetInTouch />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/about" element={<Body />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/product/:productId" element={<ProductDetails />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
