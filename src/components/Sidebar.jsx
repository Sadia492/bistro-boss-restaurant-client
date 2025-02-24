import React from "react";
import {
  FaBars,
  FaBook,
  FaEnvelope,
  FaHome,
  FaShoppingBag,
  FaUser,
} from "react-icons/fa";
import { FaSpoon } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";

export default function Sidebar() {
  const { cartData } = useCart();
  const [role, roleLoading] = useRole();
  console.log(role);

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu space-y-4 text-base-content min-h-full w-80 p-8  bg-[#D1A054]">
            <h2 className="text-center font-bold text-3xl">
              BISTRO BOSS <br /> Restaurant
            </h2>
            {/* Sidebar content here */}
            {role === "admin" ? (
              <>
                <NavLink
                  to="/dashboard"
                  className="flex items-center gap-2  mt-8 text-2xl"
                >
                  <FaHome></FaHome>
                  <li>Admin Home</li>
                </NavLink>
                <NavLink
                  to="/dashboard/add"
                  className="flex items-center gap-2 text-2xl"
                >
                  <FaSpoon></FaSpoon>
                  <li>Add Items</li>
                </NavLink>
                <NavLink
                  to="/dashboard/manage"
                  className="flex  items-center gap-2 text-2xl"
                >
                  <FaBars></FaBars>
                  <li>Manage Items({cartData?.length})</li>
                </NavLink>
                <NavLink
                  to="/dashboard/bookings"
                  className="flex  items-center gap-2 text-2xl"
                >
                  <FaBook></FaBook>
                  <li>Manage bookings</li>
                </NavLink>
                <NavLink
                  to="/dashboard/bookings"
                  className="flex  items-center gap-2 text-2xl"
                >
                  <FaUser></FaUser>
                  <li>All Users</li>
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  to="/dashboard"
                  className="flex items-center gap-2  mt-8 text-2xl"
                >
                  <FaHome></FaHome>
                  <li>User Home</li>
                </NavLink>
                <NavLink
                  to="/dashboard/reservation"
                  className="flex items-center gap-2 text-2xl"
                >
                  <FaSpoon></FaSpoon>
                  <li>Reservation</li>
                </NavLink>
                <NavLink
                  to="/dashboard/payment-history"
                  className="flex  items-center gap-2 text-2xl"
                >
                  <FaBars></FaBars>
                  <li>Payment History</li>
                </NavLink>
                <NavLink
                  to="/dashboard/my-cart"
                  className="flex  items-center gap-2 text-2xl"
                >
                  <FaBook></FaBook>
                  <li>My Cart</li>
                </NavLink>
                <NavLink
                  to="/dashboard/add-review"
                  className="flex  items-center gap-2 text-2xl"
                >
                  <FaUser></FaUser>
                  <li>Add Review</li>
                </NavLink>
                <NavLink
                  to="/dashboard/my-bookings"
                  className="flex  items-center gap-2 text-2xl"
                >
                  <FaUser></FaUser>
                  <li>My Bookings</li>
                </NavLink>
              </>
            )}

            <div className="divider bg-white h-1"></div>
            <NavLink to="/" className="flex items-center gap-2  mt-8 text-2xl">
              <FaHome></FaHome>
              <li>Home</li>
            </NavLink>
            <NavLink
              to="/our-menu"
              className="flex  items-center gap-2 text-2xl"
            >
              <FaBars></FaBars>
              <li>Menu</li>
            </NavLink>
            <NavLink
              to="/our-shop"
              className="flex  items-center gap-2 text-2xl"
            >
              <FaShoppingBag></FaShoppingBag>
              <li>Shop</li>
            </NavLink>
            <NavLink
              to="/contact"
              className="flex  items-center gap-2 text-2xl"
            >
              <FaEnvelope></FaEnvelope>
              <li>Contact</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}
