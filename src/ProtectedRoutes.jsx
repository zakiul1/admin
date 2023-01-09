import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = ({ token }) => {
  return token ? <Outlet /> : <Navigate to={"/login"} />;
};
