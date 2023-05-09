import React, { useEffect, useState } from "react";
import { Typography, Input, Button, Select } from "antd";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { UpdateUserAction } from "../../../redux/reducers/admin/manageUserReducer";

const ViewDetailUser = () => {
  const userDetail = useSelector((state) => state.ManageUserReducer.userDetail);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({
    name: userDetail.name,
    username: userDetail.username,
    password: "",
    idCard: userDetail.idCard,
    phoneNumber: userDetail.phoneNumber,
    email: userDetail.email,
    city: userDetail.city,
    district: userDetail.district,
    role: {
      id: userDetail.role.id,
      code: userDetail.role.code,
    },
  });
  const [userActive, setUserActive] = useState(userDetail.isActive);
  const [userRole, setUserRole] = useState(userDetail.role.id);
  useEffect(() => {
    if (userRole === 1) {
      setUserInfo((prev) => ({
        ...prev,
        role: { id: 1, code: "admin" },
      }));
    } else if (userRole === 2) {
      setUserInfo((prev) => ({
        ...prev,
        role: { id: 2, code: "driver" },
      }));
    } else {
      setUserInfo((prev) => ({
        ...prev,
        role: { id: 3, code: "member" },
      }));
    }
  }, [userRole]);

  const handleChangeValue = (event) => {
    const name = event.target.name;
    setUserInfo((prev) => ({
      ...prev,
      [name]: event.target.value,
    }))
  };
  const handleDisabledUser = () => {
    const newData = {
      isActive: false
    }
    dispatch(UpdateUserAction(userDetail.id, newData));
  };

  const handleUpdateUser = () => {
    const newData = {
      name: userInfo.name,
      username: userInfo.username,
      password: userInfo.password,
      idCard: userInfo.idCard,
      phoneNumber: userInfo.phoneNumber,
      email: userInfo.email,
      isActive: userActive,
      city: userInfo.city,
      district: userInfo.district,
      role: userInfo.role
    };
    dispatch(UpdateUserAction(userDetail.id, newData));
  };
  return (
    <div className="user-detail">
      <Typography.Title level={5} className="user-detail__title">
        Xem Chi Tiết Người Dùng
      </Typography.Title>
      <div className="user-detail__data">
        <div className="car-detail__data__row">
          <div className="car-detail__data__item">
            <p>Tên tài khoản:</p>
            <Input name="username" value={userInfo.username} onChange={handleChangeValue} />
          </div>
          <div className="car-detail__data__item">
            <p>Vai trò:</p>
            <Select
              defaultValue={
                userRole === 1
                  ? "Admin"
                  : userRole === 2
                    ? "Tài xế"
                    : "Người dùng"
              }
              className="router-confirm__top--selected"
              onChange={(value) => setUserRole(value)}
              options={[
                { value: 1, label: "Admin" },
                { value: 2, label: "Tài xế" },
                { value: 3, label: "Người dùng" },
              ]}
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="car-detail__data__row">
          <div className="car-detail__data__item">
            <p>Mật khẩu:</p>
            <Input.Password name="password" value={userInfo.password} onChange={handleChangeValue} />
          </div>
          <div className="car-detail__data__item">
            <p>Trạng thái:</p>
            <Select
              defaultValue={userActive ? "Đang hoạt động" : "Tạm ẩn"}
              className="router-confirm__top--selected"
              onChange={(value) => setUserActive(value)}
              options={[
                { value: true, label: "Đang hoạt động" },
                { value: false, label: "Tạm ẩn" },
              ]}
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="car-detail__data__row">
          <div className="car-detail__data__item">
            <p>Họ và tên:</p>
            <Input name="name" value={userInfo.name} onChange={handleChangeValue} />
          </div>
          <div className="car-detail__data__item">
            <p>Thẻ CMND/CCCD:</p>
            <Input name="idCard" value={userInfo.idCard} onChange={handleChangeValue} />
          </div>
        </div>
        <div className="car-detail__data__row">
          <div className="car-detail__data__item">
            <p>Số điện thoại:</p>
            <Input name="phoneNumber" value={userInfo.phoneNumber} onChange={handleChangeValue} />
          </div>
          <div className="car-detail__data__item">
            <p>Email:</p>
            <Input name="email" value={userInfo.email} onChange={handleChangeValue} />
          </div>
        </div>
        <div className="car-detail__data__row">
          <div className="car-detail__data__item">
            <p>Quận/Huyện:</p>
            <Input name="district" value={userInfo.district} onChange={handleChangeValue} />
          </div>
          <div className="car-detail__data__item">
            <p>Tỉnh/Thành phố:</p>
            <Input name="city" value={userInfo.city} onChange={handleChangeValue} />
          </div>
        </div>
        <div className="car-detail__data__row">
          <div className="car-detail__data__item">
            <p>Ngày tạo:</p>
            <Input disabled value={Date(userDetail.created_at).slice(0, 21)} />
          </div>
          <div className="car-detail__data__item">
            <p>Ngày cập nhật:</p>
            <Input disabled value={Date(userDetail.updated_at).slice(0, 21)} />
          </div>
        </div>
      </div>
      <div className="user-detail__function">
        <Button
          className="user-detail__function--back"
          onClick={() => navigate("/admin/manage-user")}
        >
          Quay lại
        </Button>
        <div className="user-detail__group">
          <Button
            className="user-detail__group--disabled"
            onClick={handleDisabledUser}
          >
            Vô hiệu hóa
          </Button>
          <Button
            className="user-detail__group--update"
            onClick={handleUpdateUser}
          >
            Cập nhật
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailUser;
