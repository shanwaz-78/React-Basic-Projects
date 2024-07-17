import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/index.jsx";
import NavBar from "./Components/NavBar/Navbar.jsx";
import ShopContext from "./Context/ShopContext.jsx";

function App() {
  return (
    <div>
      <ShopContext>
        <Router>
          <NavBar />
          <AppRoutes />
        </Router>
      </ShopContext>
    </div>
  );
}

export default App;
