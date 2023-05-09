import React, { useState } from "react";
import { MenuData } from "../../utils/menuData";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Image, Button, Drawer, Dropdown } from "antd";
import facebookLogo from "../../assets/images/facebook.png";
import youtubeLogo from "../../assets/images/youtube.png";
import useDeviceDetect from "./../../hooks/useDeviceDetect";
import "./style.scss";
import { useSelector, useDispatch } from "react-redux";
import { CallApiLogoutUser, CallApiUserProfileReducer } from './../../redux/reducers/userReducer';
import { removeLocal } from "../../utils/config";
import logo from "../../assets/images/logo.png";
import { getStringLocal } from "../../utils/config";

const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [active, setActive] = useState(location.pathname);
  const [open, setOpen] = useState(false);
  const { isMobile } = useDeviceDetect();
  const userInfo = useSelector((state) => state.UserReducer.userLogin);
  const userToken = getStringLocal("token");
  const items = [
    {
      label: <Link to={"/lich-su-dat-ve"}>Lịch sử mua vé</Link>,
      key: "0",
    },
    {
      label: <Link onClick={() => dispatch(CallApiUserProfileReducer(userInfo.id))}>Thông tin cá nhân</Link>,
      key: "1",
    },
    {
      label: <Link onClick={() => {
        dispatch(CallApiLogoutUser());
        removeLocal("token");
      }}>
        Đăng xuất</Link>,
      key: "2",
    },
  ];

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="header">
      {!isMobile && (
        <div className="header-top">
          <div className="header-top__container">
            <div className="header-top__left">
              <p>
                <i className="fas fa-phone-alt"></i> 19001080
              </p>
              <p>
                <i className="fas fa-envelope"></i> hotro@mika.vn
              </p>
            </div>
            <div className="header-top__right">
              <Image
                className="header-top__right--icon"
                src={facebookLogo}
                preview={false}
              />
              <Image
                className="header-top__right--icon"
                src={youtubeLogo}
                preview={false}
              />
              {(Object.keys(userInfo).length > 0 && userToken) ? (
                <Dropdown
                  menu={{
                    items,
                  }}
                  trigger={["click"]}
                  className="header-top__right--dropdown-user"
                >
                  <Link onClick={(e) => e.preventDefault()}>
                    Xin chào, {userInfo.name}
                  </Link>
                </Dropdown>
              ) : (
                <Button
                  className="header-top__right--login"
                  onClick={() => navigate("/login")}
                >
                  <i className="fas fa-user-circle"></i>
                  Đăng nhập
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
      <div className="header-bottom">
        <div className="header-bottom__container">
          <Link className="header-bottom__left" to="/">
            <Image
              className="header-bottom__left--logo"
              src={logo}
              preview={false}
            />
          </Link>
          {!isMobile ? (
            <div className="header-bottom__center">
              {MenuData.data.length > 0 &&
                MenuData.data.map((item) => {
                  return (
                    <Link
                      key={item.id}
                      to={item.path}
                      className={`header-bottom__center--item ${active === item.path && "active-menu"
                        }`}
                      onClick={() => setActive(item.path)}
                    >
                      {item.name}
                    </Link>
                  );
                })}
            </div>
          ) : (
            <Button onClick={showDrawer}>
              <i className="fas fa-bars"></i>
            </Button>
          )}
        </div>
      </div>
      <Drawer placement="left" width={350} onClose={onClose} open={open}>
        <ul>
          {MenuData.data.length > 0 &&
            MenuData.data.map((item) => {
              return (
                <li key={item.id}>
                  <Link to={item.path} className="header-mobile__center--item">
                    {item.name}
                  </Link>
                </li>
              );
            })}
          <li>
            <Link className="header-mobile__center--item">Đăng nhập</Link>
          </li>
        </ul>
      </Drawer>
    </div>
  );
};

export default Header;
