import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router";

function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext);
  // console.log(user);
  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }
  return children;
}

export default PrivateRoute;
