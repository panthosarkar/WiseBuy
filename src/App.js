import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Body from "./Components/Content-Body/Body";
import LoginSignup from "./Components/Modals/LoginSignup.jsx";
function App() {
  return (
    <div className="App">
      <Navigation />
      <LoginSignup />
    </div>
  );
}

export default App;
