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
    element: <Dashboard></Dashboard>,
    children: [
      {
        index: true,
        element: <AdminHome></AdminHome>,
      },
      {
        path: "manage",
        element: <ManageItems></ManageItems>,
      },
    ],
  },
]);
export default router;
