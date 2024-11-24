import React from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <News />
      </Router>
    </div>
  );
};

export default App;
