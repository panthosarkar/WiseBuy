import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Body from "./Components/Content-Body/Body";
import LoginSignup from "./Components/Modals/LoginSignup.jsx";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </div>
  );
}

export default App;
