import React, { useState } from "react";
import { Typography, Input, Button } from "antd";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { CallApiCreateContentRating } from "../../redux/reducers/userReducer";

const { TextArea } = Input;

const Rating = () => {
  const dispatch = useDispatch();
  const oneOrderHistory = useSelector(
    (state) => state.UserReducer.oneOrderHistory
  );
  const [] = useState()
  const [content, setContent] = useState("");

  const onChange = (e) => {
    setContent(e.target.value);
  };

  const handleCreateRating = () => {
    const data = {
      content: content
    }
    dispatch(CallApiCreateContentRating(data, oneOrderHistory.id));
  }

  return (
    <div className="rating">
      <Typography.Title level={4} className="rating__title">
        Thông tin mua vé
      </Typography.Title>
      <p className="rating__top">Thông tin khách hàng</p>
      <div className="rating__body">
        <div className="rating__body__header">
          <div className="rating__body__header--item">
            <Typography.Title level={5}>Họ tên:</Typography.Title>
            <p>{oneOrderHistory.fullname}</p>
          </div>
          <div className="rating__body__header--item">
            <Typography.Title level={5}>Số điện thoại:</Typography.Title>
            <p>{oneOrderHistory.phoneNumber}</p>
          </div>
          <div className="rating__body__header--item">
            <Typography.Title level={5}>Email:</Typography.Title>
            <p>{oneOrderHistory.email}</p>
          </div>
          <div className="rating__body__header--item">
            <Typography.Title level={5}>Tổng tiền thanh toán:</Typography.Title>
            <p>
              {oneOrderHistory.totalMoney.toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })}
            </p>
          </div>
        </div>
        <div className="rating__body__center">
          <p>thanh toán thành công</p>
        </div>
        <div className="rating__body__bottom">
          <p>Nhận xét</p>
          <TextArea rows={6} placeholder="Viết nhận xét..." allowClear onChange={onChange} />
          <Button onClick={handleCreateRating}>Đánh giá</Button>
        </div>
      </div>
    </div>
  );
};

export default Rating;
