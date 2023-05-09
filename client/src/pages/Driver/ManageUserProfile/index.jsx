import { Button, Input, Typography } from "antd";
import React from "react";
import "./style.scss";

const ManageUserProfile = () => {
  return (
    <div className="manage-profile">
      <Typography.Title className="manage-profile__title" level={4}>
        Quản lý thông tin cá nhân
      </Typography.Title>
      <div className="manage-profile__data">
        <div className="manage-profile__row">
          <div className="manage-profile__item">
            <p>Họ và tên:</p>
            <Input />
          </div>
          <div className="manage-profile__item">
            <p>Ngày sinh:</p>
            <Input />
          </div>
        </div>
        <div className="manage-profile__row">
          <div className="manage-profile__item">
            <p>Số điện thoại:</p>
            <Input />
          </div>
          <div className="manage-profile__item">
            <p>Thẻ CMND/CCCD:</p>
            <Input />
          </div>
        </div>
        <div className="manage-profile__row">
          <div className="manage-profile__item">
            <p>Giới tính:</p>
            <Input />
          </div>
          <div className="manage-profile__item">
            <p>Email:</p>
            <Input />
          </div>
        </div>
        <div className="manage-profile__row">
          <div className="manage-profile__item">
            <p>Tỉnh/Thành phố:</p>
            <Input />
          </div>
          <div className="manage-profile__item">
            <p>Quận/ Huyện:</p>
            <Input />
          </div>
        </div>
      </div>
      <div className="manage-profile__bottom">
        <Button>Quay lại</Button>
        <Button>Cập nhật</Button>
      </div>
    </div>
  );
};

export default ManageUserProfile;
