import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes/AppRoutes";
import { Box } from "@mui/material";
import Navbar from "./Components/NavBar/Navbar";

function App() {
  return (
    <Router>
      <Box>
        <Navbar />
        <AppRoutes />
      </Box>
    </Router>
  );
}

export default App;
