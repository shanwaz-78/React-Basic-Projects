import { useRoutes } from "react-router-dom";
import ROUTES from "../constants/routes.js";
import Chat from "../pages/Chat.jsx";
import Register from "../pages/Register.jsx";
import Login from "../pages/Login.jsx";
import Avatar from '../pages/Avatar.jsx'

function AppRoutes() {
  return useRoutes([
    {
      path: ROUTES.HOME,
      exact: true,
      element: <Chat />,
    },
    {
      path: ROUTES.REGISTER,
      exact: true,
      element: <Register />,
    },
    {
      path: ROUTES.LOGIN,
      exact: true,
      element: <Login />,
    },
    {
      path: ROUTES.AVATAR,
      exact: true,
      element: <Avatar />,
    },
  ]);
}

export default AppRoutes;
