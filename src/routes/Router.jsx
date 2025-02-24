import { createBrowserRouter, Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import OurMenu from "../pages/OurMenu";
import OurShop from "../pages/OurShop";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/Dashboard";
import AdminHome from "../pages/AdminHome";
import ManageItems from "../pages/ManageItems";
import UserHome from "../pages/user/UserHome";
import MyCart from "../pages/user/MyCart";
import useAuth from "../hooks/useAuth";
import SharedHome from "../pages/sharedHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/our-menu",
        element: (
          <PrivateRoute>
            <OurMenu></OurMenu>
          </PrivateRoute>
        ),
      },
      {
        path: "/our-shop",
        element: (
          <PrivateRoute>
            <OurShop></OurShop>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <SharedHome></SharedHome>,
      },
      {
        path: "manage",
        element: <ManageItems></ManageItems>,
      },
      {
        path: "my-cart",
        element: <MyCart></MyCart>,
      },
    ],
  },
]);
export default router;
