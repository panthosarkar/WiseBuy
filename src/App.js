import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Body from "./Components/ContentBody/Body.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer.jsx";
function App() {
  return (
    <div className="WiseBuy">
      <BrowserRouter>
        <Navigation />
        <div className="backdrop-filter">
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/home" element={<Body />} />
            <Route path="/shop" element={<Body />} />
            <Route path="/contact" element={<Body />} />
            <Route path="/about" element={<Body />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
