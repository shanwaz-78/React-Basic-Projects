import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes/AppRoutes";
import { Box } from "@mui/material";
import Navbar from "./Components/NavBar/Navbar";

function App() {
  return (
    <Router basename="/Youtube-Clone-v2">
      <Box>
        <Navbar />
        <AppRoutes />
      </Box>
    </Router>
  );
}

export default App;
