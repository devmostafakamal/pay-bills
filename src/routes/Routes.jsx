import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../components/Home/Home";
import Bills from "../components/Bills/Bills";
import MyProfile from "../components/MyProfile/MyProfile";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoute from "./PrivateRoute";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/bills",
        element: (
          <PrivateRoute>
            <Bills></Bills>
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      { path: "/register", element: <Register /> },
    ],
  },
]);
