/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Button, Input, Modal, Select, Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { GetListUserAction, GetDetailUserAction, CreateNewUserAction } from './../../../redux/reducers/admin/manageUserReducer';
import "./style.scss";

const ManageUser = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetListUserAction());
  }, [])
  const listUser = useSelector(state => state.ManageUserReducer.listUser);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [userRegister, setUserRegister] = useState({
    name: "",
    username: "",
    password: "",
    IdCard: "",
    phoneNumber: "", 
    email: "",
    city: "",
    district: "",
  });
  const [current, setCurrent] = useState(1);
  const [roleRegister, setRoleRegister] = useState(3);
  const [listUserClone, setListUserClone] = useState([]);

  useEffect(() => {
    setListUserClone(listUser.slice(0,10));
  },[listUser]);
  const showModal = () => setOpen(true);
  const handleCancel = () => setOpen(false);

  const handleChangeValueModal = (event) => {
    const name = event.target.name;
    setUserRegister((prev) => ({
      ...prev,
      [name]: event.target.value,
    }))
  };

  const handleOk = () => {
    const newData = {
      name: userRegister.name,
      username: userRegister.username,
      password: userRegister.password,
      IdCard: userRegister.IdCard,
      phoneNumber: userRegister.phoneNumber, 
      email: userRegister.email,
      city: userRegister.city,
      district: userRegister.district,
      role: roleRegister
    };
    dispatch(CreateNewUserAction(newData));
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleViewDetailUser = (userId) => {
    dispatch(GetDetailUserAction(userId));
  }

  const handleChangeSliceCareerList = (e) => {
    setCurrent(e);
    setListUserClone(listUser.slice(10 * (e - 1), e * 10));
  };

  return (
    <div className="manage-user">
      <div className="manage-user__top">
        <Button className="manage-user__top--add" onClick={showModal}>
          Tạo tài khoản mới <i className="fas fa-plus"></i>
        </Button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Tên tài khoản</th>
            <th>Số điện thoại</th>
            <th>Vại trò</th>
            <th>Trạng thái</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {listUserClone.length > 0 &&
            listUserClone.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.username}</td>
                  <td>{item.phoneNumber}</td>
                  <td>{item.role.code}</td>
                  <td>{item.isActive ? "Đang hoạt động" : "Tạm ẩn"}</td>
                  <td>
                    <Button onClick={() => handleViewDetailUser(item.id)}>Xem chi tiết</Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>

      <div className="bus-info__pagination">
        <Pagination
          current={current}
          total={listUser.length}
          onChange={handleChangeSliceCareerList}
        />
      </div>

      <Modal
        open={open} title="Thêm tài khoản mới" onOk={handleOk} onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Hủy
          </Button>,
          <Button
            key="submit" type="primary" loading={loading} onClick={handleOk}
          >
            Thêm tài khoản
          </Button>,
        ]}
      >
        <div className="manage-user__modal">
          <div className="manage-user__modal__row">
            <div className="manage-user__modal__item">
              <p>Họ tên:</p>
              <Input placeholder="" name="name" value={userRegister.name} onChange={handleChangeValueModal} />
            </div>
            <div className="manage-user__modal__item">
              <p>Email:</p>
              <Input placeholder="" name="email" value={userRegister.email} onChange={handleChangeValueModal} />
            </div>
          </div>
          <div className="manage-user__modal__row">
            <div className="manage-user__modal__item">
              <p>Tên tài khoản:</p>
              <Input placeholder="" name="username" value={userRegister.username} onChange={handleChangeValueModal} />
            </div>
            <div className="manage-user__modal__item">
              <p>Thẻ CMND/ CCCD:</p>
              <Input placeholder="" name="IdCard" value={userRegister.IdCard} onChange={handleChangeValueModal} />
            </div>
          </div>
          <div className="manage-user__modal__row">
            <div className="manage-user__modal__item">
              <p>Mật khẩu:</p>
              <Input.Password placeholder="" name="password" value={userRegister.password} onChange={handleChangeValueModal} />
            </div>
            <div className="manage-user__modal__item">
              <p>Số điện thoại:</p>
              <Input placeholder="" name="phoneNumber" value={userRegister.phoneNumber} onChange={handleChangeValueModal} />
            </div>
          </div>
          <div className="manage-user__modal__row">
            <div className="manage-user__modal__item">
              <p>Quận/ Huyện:</p>
              <Input placeholder="" name="district" value={userRegister.district} onChange={handleChangeValueModal} />
            </div>
            <div className="manage-user__modal__item">
              <p>Tỉnh/ TP:</p>
              <Input placeholder="" name="city" value={userRegister.city} onChange={handleChangeValueModal} />
            </div>
          </div>
          <div className="manage-user__modal__row">
            <div className="manage-user__modal__item">
              <p>Phân quyền:</p>
              <Select
                defaultValue="-- Phân quyền --"
                className="router-confirm__top--selected"
                onChange={(value) => setRoleRegister(value)}
                options={[
                  {label: "Admin", value: 1},
                  {label: "Tài xế", value: 2},
                  {label: "Người dùng", value: 3},
                ]}
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ManageUser;
