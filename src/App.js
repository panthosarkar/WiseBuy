import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Body from "./Components/ContentBody/Body.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer.jsx";
import GetInTouch from "./Components/GetInTouch/GetInTouch.jsx";
import { Cart } from "./Components/Cart/Cart.jsx";
import Shop from "./Components/Shop/Shop.jsx";

function App() {
  return (
    <div className="WiseBuy">
      <BrowserRouter>
        <Navigation />
        <div className="app-routes">
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/contact" element={<GetInTouch />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<Body />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
