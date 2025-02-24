import React from "react";
import useAuth from "../hooks/useAuth";
import AdminHome from "./AdminHome";
import UserHome from "./user/UserHome";
import useRole from "../hooks/useRole";
import LoadingSpinner from "../components/LoadingSpinner";

export default function SharedHome() {
  const [role, roleLoading] = useRole();
  console.log(role);
  if (roleLoading) return <LoadingSpinner></LoadingSpinner>;
  return (
    <div>
      Welcome back
      {role === "admin" ? <AdminHome></AdminHome> : <UserHome></UserHome>}
    </div>
  );
}
