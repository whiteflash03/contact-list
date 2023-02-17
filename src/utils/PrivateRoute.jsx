import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  return window.localStorage.getItem("Token") ? children : <Navigate to="/" />;
};

export default PrivateRoute;
