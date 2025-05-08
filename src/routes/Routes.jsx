import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../components/Home/Home";
import Bills from "../components/Bills/Bills";
import MyProfile from "../components/MyProfile/MyProfile";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import ForgetPassword from "../components/ForgetPassword/ForgetPassword";
import PageDetails from "../components/Bills/PageDetails";
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
        loader: () => fetch("../billsData.json"),
        element: (
          <PrivateRoute>
            <Bills></Bills>
          </PrivateRoute>
        ),
      },
      {
        path: "pageDetails/:id",

        element: (
          <PrivateRoute>
            {" "}
            <PageDetails></PageDetails>{" "}
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
        path: "/updateProfile",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/forget-password",
        element: <ForgetPassword></ForgetPassword>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      { path: "/register", element: <Register /> },
    ],
  },
]);
