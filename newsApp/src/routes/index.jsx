import React from "react";
import { useRoutes } from "react-router-dom";
import { ROUTES } from "../Constants/routes";
import News from "../Components/News";

const AppRoutes = () => {
  return useRoutes([
    {
      path: ROUTES.HOME,
      element: <News />,
      exact: true,
    },
    {
      path: ROUTES.FEATURES,
      element: <News />,
      exact: true,
    },
    {
      path: ROUTES.PRICING,
      element: <News />,
      exact: true,
    },
  ]);
};

export default AppRoutes;
