import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";

export default function PrivateRouter() {
  const { isLoggedIn } = useContext(AuthContext);
    let auth = { token: isLoggedIn ? true : false };
  // let auth = { token: true };
  return auth.token ? <Outlet /> : <Navigate to="/" />;
}
