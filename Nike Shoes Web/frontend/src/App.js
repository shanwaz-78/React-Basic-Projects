import "./App.css";
import Hero from "./Components/NavBar/Hero/Hero";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Hero />
      </Router>
    </div>
  );
}

export default App;
