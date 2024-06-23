import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Body from "./Components/ContentBody/Body.jsx";
import LoginSignup from "./Components/Modals/LoginSignup.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/home" element={<Body />} />
          <Route path="/shop" element={<Body />} />
          <Route path="/contact" element={<Body />} />
          <Route path="/about" element={<Body />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
