import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { getStringLocal } from "../../utils/config";

const ProtectedRoleUser = () => {
  const userProfile = useSelector((state) => state.UserReducer.userLogin);
  const user = getStringLocal("token");
  if (userProfile.role === "member" && user) {
    return <Outlet />
  } else {
    return <Navigate to="/login" replace />;
  }
}

export default ProtectedRoleUser