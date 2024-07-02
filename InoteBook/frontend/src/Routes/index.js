import { useRoutes } from "react-router-dom";
import { ROUTES } from "../Constants/routes";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import React from "react";

function AppRoutes() {
  return useRoutes([
    {
      path: ROUTES.HOME,
      element: <Home />,
    },
    {
      path: ROUTES.ABOUT,
      element: <About />,
    },
  ]);
}

export default AppRoutes;
