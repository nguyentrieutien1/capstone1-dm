import { Button, Input, Typography } from "antd";
import React, { useState } from "react";
import "./style.scss";
import { useDispatch } from "react-redux";
import { CallApiForgotPasswordUser } from './../../redux/reducers/userReducer';

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const [dataUserInfo, setDataUserInfo] = useState({
    email: "",
    password: "",
  });

  const handleResetPassword = () => {
    dispatch(CallApiForgotPasswordUser(dataUserInfo));
  };

  return (
    <div className="forgot-password">
      <div className="forgot-password__container">
        <Typography.Title level={4}>Đặt lại mật khẩu</Typography.Title>
        <div className="forgot-password__form">
          <div className="forgot-password__item">
            <p>Email:</p>
            <Input
              name="email"
              size="large"
              value={dataUserInfo.email}
              placeholder="Vui lòng nhập email"
              onChange={(event) => setDataUserInfo((prev) => ({
                ...prev,
                email: event.target.value
              }))}
            />
          </div>
          <div className="forgot-password__item">
            <p>Mật khẩu:</p>
            <Input.Password
              name="password"
              size="large"
              value={dataUserInfo.password}
              placeholder="Vui lòng nhập mật khẩu"
              onChange={(event) => setDataUserInfo((prev) => ({
                ...prev,
                password: event.target.value
              }))}
            />
          </div>
          <Button
            className="forgot-password__submit"
            onClick={handleResetPassword}
          >
            Reset Password
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
