import React from "react";
import { useRoutes } from "react-router-dom";
import ROUTES from "../Constants/Routes";
import Signup from "../components/Auth/Signup";
import Login from "../components/Auth/Login";
import DashboardLayout from "../components/Dashboard/DashboardLayout";

const AppRoutes = () => {
  return useRoutes([
    {
      path: ROUTES.HOME,
      exact: true,
      element: <Signup />,
    },
    {
      path: ROUTES.SIGNUP,
      exact: true,
      element: <Signup />,
    },
    {
      path: ROUTES.LOGIN,
      exact: true,
      element: <Login />,
    },
    {
      path: ROUTES.DASHBOARD,
      exact: true,
      element: <DashboardLayout />,
    },
  ]);
};

export default AppRoutes;