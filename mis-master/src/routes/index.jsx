import { useRoutes } from "react-router-dom";
import ROUTES from "../Constants/routes.jsx";
import Drinks from "../Components/Drinks/Drinks.jsx";
import NewsLetter from "../Components/NewsLetter.jsx";

function AppRoutes() {
  return useRoutes([
    {
      path: ROUTES.HOME,
      exact: true,
      element: <Drinks />,
    },
    {
      path: ROUTES.NEWSlETTER,
      exact: true,
      element: <NewsLetter />,
    },
  ]);
}

export default AppRoutes;
