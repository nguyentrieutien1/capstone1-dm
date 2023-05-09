import React from "react";
import Header from "../../components/header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer";
import "./style.scss";

const UserTemplate = () => {
  return (
    <div className="layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default UserTemplate;
