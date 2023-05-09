/* eslint-disable react-hooks/exhaustive-deps */
import { Input, Typography, Button } from "antd";
import React, { useEffect, useState } from "react";
import "./style.scss";

const InformationCustomer = (props) => {
  const {
    activeClass,
    handleContinueStepInfo,
    setCurrent,
    setCustomerInfo,
    totalPrice,
  } = props;

  const [cusInfo, setCusInfo] = useState({
    totalMoney: totalPrice,
    fullName: "",
    phoneNumber: "",
    email: "",
    city: "",
    district: "",
    seats: activeClass
});

  useEffect(() => {
    setCustomerInfo(cusInfo)
  }, [cusInfo]);

  return (
    <div className="info-customer">
      <Typography.Title level={4} className="info-customer__title">
        Thông tin khách hàng
      </Typography.Title>
      <div className="info-customer__list">
        <div className="info-customer__item">
          <p>Họ tên khách hàng *</p>
          <Input
            name="fullName"
            value={cusInfo.fullName}
            onChange={(event) => setCusInfo((prev) => ({
              ...prev,
              fullName: event.target.value
            }))} />
        </div>
        <div className="info-customer__item">
          <p>Số điện thoại *</p>
          <Input
            name="phoneNumber"
            value={cusInfo.phoneNumber}
            onChange={(event) => setCusInfo((prev) => ({
              ...prev,
              phoneNumber: event.target.value
            }))} />
        </div>
        <div className="info-customer__item">
          <p>Email *</p>
          <Input
            name="email"
            value={cusInfo.email}
            onChange={(event) => setCusInfo((prev) => ({
              ...prev,
              email: event.target.value
            }))} />
        </div>
        <div className="info-customer__item">
          <p>Tỉnh/ TP *</p>
          <Input
            name="city"
            value={cusInfo.city}
            onChange={(event) => setCusInfo((prev) => ({
              ...prev,
              city: event.target.value
            }))} />
        </div>
        <div className="info-customer__item">
          <p>Quận/ Huyện *</p>
          <Input
            name="district"
            value={cusInfo.district}
            onChange={(event) => setCusInfo((prev) => ({
              ...prev,
              district: event.target.value
            }))} />
        </div>
        <div className="info-customer__group">
          <Button
            className="info-customer__back"
            onClick={() => { setCurrent(1) }}
          >Quay lại</Button>
          <Button className="info-customer__continue" onClick={handleContinueStepInfo}>Tiếp tục</Button>
        </div>
      </div>
    </div>
  );
};

export default InformationCustomer;
