/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Input, Typography, Select } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UpdateOneCarAction, CreateSeatForCar, GetOneCarDetailAction } from "../../../redux/reducers/admin/manageCarReducer";
import "./style.scss";
import { useNavigate } from "react-router-dom";

const ViewDetailCar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const carDetail = useSelector((state) => state.ManageCarReducer.carDetail);
  const [carDetailClone, setCarDetailClone] = useState({
    name: carDetail.name,
    toltalRow: carDetail.toltalRow,
    totalColumn: carDetail.totalColumn,
    numberOfFloor: carDetail.numberOfFloor,
    phoneNumber: carDetail.phoneNumber,
    seats: carDetail.seats
  });
  const [typeCar, setTypeCar] = useState(carDetail.type);
  const [stateActive, setStateActive] = useState(carDetail.isActive);
  useEffect(() => {
    setCarDetailClone({
      name: carDetail.name,
      toltalRow: carDetail.toltalRow,
      totalColumn: carDetail.totalColumn,
      numberOfFloor: carDetail.numberOfFloor,
      phoneNumber: carDetail.phoneNumber,
      seats: carDetail.seats
    });
    setTypeCar(carDetail.type);
    setStateActive(carDetail.isActive);
  }, [carDetail]);

  const handleChangeValue = (event) => {
    const name = event.target.name;
    setCarDetailClone((prev) => ({
      ...prev,
      [name]: event.target.value,
    }));
  };

  const handleUpdateCar = () => {
    const newData = {
      name: carDetailClone.name,
      type: typeCar,
      toltalRow: Number(carDetailClone.toltalRow),
      totalColumn: Number(carDetailClone.totalColumn),
      numberOfFloor: Number(carDetailClone.numberOfFloor),
      isActive: Boolean(stateActive),
      phoneNumber: carDetailClone.phoneNumber,
    };
    console.log(newData);
    dispatch(UpdateOneCarAction(carDetail.id, newData));
  };

  const handleDisabledCar = () => {
    const newData = { isActive: stateActive };
    dispatch(UpdateOneCarAction(carDetail.id, newData));
  };

  const handleCreateNewSeatForCar = () => {
    if(carDetailClone.seats.length === 0) {
      dispatch(CreateSeatForCar(carDetail.id));
      dispatch(GetOneCarDetailAction(carDetail.id))
    }
    navigate(`/admin/manage-seat-of-car/${carDetail.id}`);
  }

  return (
    <div className="car-detail">
      <Typography.Title level={5} className="car-detail__title">
        Xem Chi Tiết Xe
      </Typography.Title>
      <div className="car-detail__data">
        <div className="car-detail__data__row">
          <div className="car-detail__data__item">
            <p>Tên xe:</p>
            <Input
              name="name"
              value={carDetailClone.name}
              onChange={handleChangeValue}
            />
          </div>
          <div className="car-detail__data__item">
            <p>Loại xe:</p>
            <Select
              defaultValue={typeCar}
              className="router-confirm__top--selected"
              onChange={(value) => setTypeCar(value)}
              options={[
                { value: "bed", label: "Giường" },
                { value: "chair", label: "Ghế" },
                { value: "limousine", label: "Limousine" },
              ]}
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="car-detail__data__row">
          <div className="car-detail__data__item">
            <p>Tổng số hàng:</p>
            <Input
              name="toltalRow"
              value={carDetailClone.toltalRow}
              onChange={handleChangeValue}
            />
          </div>
          <div className="car-detail__data__item">
            <p>Số điện thoại:</p>
            <Input
              name="phoneNumber"
              value={carDetailClone.phoneNumber}
              onChange={handleChangeValue}
            />
          </div>
        </div>
        <div className="car-detail__data__row">
          <div className="car-detail__data__item">
            <p>Tổng số cột:</p>
            <Input
              name="totalColumn"
              value={carDetailClone.totalColumn}
              onChange={handleChangeValue}
            />
          </div>
          <div className="car-detail__data__item">
            <p>Trạng thái:</p>
            <Select
              defaultValue={stateActive ? "Đang hoạt động" : "Hư hỏng"}
              className="router-confirm__top--selected"
              onChange={(value) => setStateActive(value)}
              options={[
                { value: "true", label: "Đang hoạt động" },
                { value: "false", label: "Hư hỏng" },
              ]}
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="car-detail__data__row">
          <div className="car-detail__data__item">
            <p>Số tầng:</p>
            <Input
              name="numberOfFloor"
              value={carDetailClone.numberOfFloor}
              onChange={handleChangeValue}
            />
          </div>
          <div className="car-detail__data__item">
            <p>Tài xế:</p>
            <Input disabled name="nameDiver" value={carDetail.user.name} />
          </div>
        </div>
        <div className="car-detail__data__row">
          <div className="car-detail__data__item">
            <p>Ngày tạo:</p>
            <Input
              disabled
              name="created_at"
              value={Date(carDetailClone.created_at).slice(0, 15)}
            />
          </div>
          <div className="car-detail__data__item">
            <p>Ngày cập nhật:</p>
            <Input
              disabled
              name="updated_at"
              value={Date(carDetailClone.updated_at).slice(0, 15)}
            />
          </div>
        </div>
      </div>
      <div className="car-detail__function">
        <Button
          className="car-detail__function--back"
          onClick={() => navigate("/admin/manage-car")}
        >
          Quay lại
        </Button>
        <div className="car-detail__group">
          <Button
            className="car-detail__group--disabled"
            onClick={handleDisabledCar}
          >
            Vô hiệu hóa
          </Button>
          <Button className="manage-car__top--chair"
            onClick={handleCreateNewSeatForCar}
          >
            Quản lý ghế <i className="fas fa-chair"></i>
          </Button>
          <Button
            className="car-detail__group--update"
            onClick={handleUpdateCar}
          >
            Cập nhật
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailCar;
