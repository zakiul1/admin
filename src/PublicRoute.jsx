import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = ({ token }) => {
  return token ? <Navigate to={"/dashboard/home"} /> : <Outlet />;
};

export default PublicRoute;
