import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useCart from "../hooks/useCart";
import toast from "react-hot-toast";

export default function Navbar() {
  const { user, signOutUser } = useAuth();
  const { cartData } = useCart();

  const links = (
    <>
      <NavLink to="/">
        <li>Home</li>
      </NavLink>
      <NavLink to="/contact">
        <li>Contact Us</li>
      </NavLink>
      <NavLink to="/dashboard">
        <li>Dashboard</li>
      </NavLink>
      <NavLink to="/our-menu">
        <li>Our menu</li>
      </NavLink>
      <NavLink to="/our-shop">
        <li>Our shop</li>
      </NavLink>
    </>
  );
  const handleSignOut = () => {
    signOutUser().then(() => {
      toast.success("Logout successful");
    });
  };
  return (
    <div className="fixed top-0 z-10 bg-black/20 text-white w-full">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bistro Boss Restaurant</a>
        </div>
        <div className="navbar-end">
          <div className=" hidden lg:flex items-center justify-center">
            <ul className="menu menu-horizontal px-1 uppercase gap-4">
              {links}
            </ul>
            <Link to="/dashboard/my-cart">
              <button className="btn">
                Cart
                <div className="badge badge-secondary">+{cartData?.length}</div>
              </button>
            </Link>
          </div>
          {user ? (
            <div className="flex gap-2">
              <div className="">
                <img
                  alt="user"
                  className="w-10 h-10 object-cover rounded-full"
                  src={user?.photoURL}
                />
              </div>
              <Link
                onClick={handleSignOut}
                className="btn bg-gradient-to-r from-primary to-secondary text-white"
              >
                Logout
              </Link>
            </div>
          ) : (
            <>
              <Link to="/login">
                <button className="btn">Login</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
