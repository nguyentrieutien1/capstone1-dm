import React, { useEffect, useState } from "react";
import { Image, Typography, Button } from "antd";
import logo from "../../assets/images/logo-admin.png";
import { Link, Outlet, useLocation } from "react-router-dom";
import { MenuDataDriver } from "./../../utils/menuData";

const DriverTemplate = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);
  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);
  const handleLogoutAdminAction = () => {};

  return (
    <div className="admin-template">
      <div className="admin-template__left">
        <div className="admin-template__left__top">
          <Image preview={false} src={logo} alt="" />
          <Typography.Title level={4}>Tài xế</Typography.Title>
          <p>Chào mừng quay trở lại</p>
        </div>
        <div className="admin-template__left__bottom">
          <ul>
            {MenuDataDriver.data.length > 0 &&
              MenuDataDriver.data.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="admin-template__left__bottom--item"
                  >
                    <Link
                      to={item.path}
                      className={`${active === item.path && "active-menu"}`}
                      onClick={() => setActive(item.path)}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
      <div className="admin-template__right">
        <div className="admin-template__right__top">
          <Button onClick={handleLogoutAdminAction}>
            <i className="fas fa-sign-out-alt"></i>
          </Button>
        </div>
        <div className="admin-template__right__bottom">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DriverTemplate;
