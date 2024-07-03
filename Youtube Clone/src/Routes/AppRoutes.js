import React from "react";
import { useRoutes } from "react-router-dom";
import { ROUTES } from "../Constants/Routes";

import { Feed, VideoDetail, ChannelDetails, Search } from "./index";
function AppRoutes() {
  return useRoutes([
    {
      path: ROUTES.HOME,
      exact: true,
      element: <Feed />,
    },
    {
      path: ROUTES.VIDEO,
      exact: true,
      element: <VideoDetail />,
    },
    {
      path: ROUTES.CHANNEL,
      exact: true,
      element: <ChannelDetails />,
    },
    {
      path: ROUTES.SEARCH,
      exact: true,
      element: <Search />,
    },
  ]);
}

export default AppRoutes;
