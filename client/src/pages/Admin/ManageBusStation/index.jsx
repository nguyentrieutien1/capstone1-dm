import React, { useEffect, useState } from "react";
import { Button, Modal, Input, Pagination } from "antd";
import "./style.scss";
import { useSelector, useDispatch } from "react-redux";
import { GetListAddressAction, CreateNewAddressAction } from "../../../redux/reducers/admin/manageAddressReducer";
import { GetOneAddressDetailAction } from './../../../redux/reducers/admin/manageAddressReducer';
import { useNavigate } from "react-router-dom";

const ManageBusStation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const listAddress = useSelector(state => state.ManageAddressReducer.listAddress);
  const [listAddressClone, setListAddressClone] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [current, setCurrent] = useState(1);
  const [newAddress, setNewAddress] = useState({
    name: "", city: ""
  });

  useEffect(() => {
    setListAddressClone(listAddress);
  },[listAddress]);

  const showModal = () => setOpen(true);
  const handleCancel = () => setOpen(false);

  const handleChangeValueModal = (event) => {
    const name = event.target.name;
    setNewAddress((prev) => ({
      ...prev,
      [name]: event.target.value,
    }))
  }
  const handleOk = () => {
    dispatch(CreateNewAddressAction(newAddress))
    setLoading(true);
    setTimeout(() => {
      dispatch(GetListAddressAction());
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleViewDetailAddress = (addressId) => {
    dispatch(GetOneAddressDetailAction(addressId));
    navigate(`/admin/manage-bus-station/${addressId}`)
  }

  const handleChangeSliceCareerList = (e) => {
    setCurrent(e);
    setListAddressClone(listAddress.slice(10 * (e - 1), e * 10));
  };

  return (
    <div className="bus-station">
      <div className="bus-station__top">
        <Button className="bus-station__top--add" onClick={showModal}>
          Tạo bến xe mới <i className="fas fa-plus"></i>
        </Button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Tên bến xe</th>
            <th>Thành phố</th>
            <th>Trạng thái</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            listAddressClone.length > 0 && listAddressClone.map(item => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.city}</td>
                  <td>{item.isActive ? "Đang hoạt động" : "Tạm ẩn"}</td>
                  <td><Button onClick={() => handleViewDetailAddress(item.id)}>Xem chi tiết</Button></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <div className="bus-info__pagination">
        <Pagination
          current={current}
          total={listAddress.length}
          onChange={handleChangeSliceCareerList}
        />
      </div>
      <Modal
        open={open} title="Thêm mới xe" onOk={handleOk} onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Hủy
          </Button>,
          <Button
            key="submit" type="primary" loading={loading} onClick={handleOk}
          >
            Thêm mới bến xe
          </Button>,
        ]}
      >
        <div className="manage-car__modal">
          <div className="manage-car__modal__row">
            <div className="manage-car__modal__item">
              <p>Tên bến xe:</p>
              <Input placeholder="Nhập tên bến xe" name="name" 
              value={newAddress.name} onChange={handleChangeValueModal} 
              />
            </div>
            <div className="manage-car__modal__item">
              <p>Tỉnh/ Thành phố:</p>
              <Input placeholder="Nhập tỉnh hoặc thành phố" name="city" 
              value={newAddress.city} onChange={handleChangeValueModal} 
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ManageBusStation;
