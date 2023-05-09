import { Button, Typography, Radio } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CallApiPaymentAction } from "../../redux/reducers/userReducer";

const Payment = (props) => {
  const { customerInfo, booked, setCurrent } = props;
  const dispatch = useDispatch();
  const scheduleById = useSelector(
    (state) => state.ScheduleReducer.scheduleById
  );
  const [checkedPayment, setCheckedPayment] = useState(false);

  const handleCreatePayment = () => {
    const data = {
      amount: customerInfo.totalMoney,
      orderId: Math.floor(Math.random() * 1000)
    }
    dispatch(CallApiPaymentAction(data));
  }

  return (
    <>
      <div className="payment">
        <Typography.Title level={4} className="payment__title">
          thông tin mua vé
        </Typography.Title>
        <div className="payment__customer">
          <p className="payment__customer__info">Thông tin khách hàng</p>
          <div className="payment__customer__item">
            <Typography.Title level={5}>Họ tên:</Typography.Title>
            <p>{customerInfo.fullName}</p>
          </div>
          <div className="payment__customer__item">
            <Typography.Title level={5}>Số điện thoại:</Typography.Title>
            <p>{customerInfo.phoneNumber}</p>
          </div>
          <div className="payment__customer__item">
            <Typography.Title level={5}>Email:</Typography.Title>
            <p>{customerInfo.email}</p>
          </div>
        </div>
        <div className="payment__routing">
          <p className="payment__customer__info">Thông tin khách hàng</p>
          <div className="payment__routing__item">
            <Typography.Title level={5}>Tuyến xe:</Typography.Title>
            <p>
              {scheduleById.departureAddress.name} {" => "}{" "}
              {scheduleById.destinationAddress.name}
            </p>
          </div>
          <div className="payment__routing__item">
            <Typography.Title level={5}>Số lượng ghế:</Typography.Title>
            <p>{booked.length}</p>
          </div>
          <div className="payment__routing__item">
            <Typography.Title level={5}>Số ghế:</Typography.Title>
            <div className="payment__list">
              {booked.length > 0 &&
                booked.map((item) => {
                  return <p key={item.id}>{item.name}</p>;
                })}
            </div>
          </div>
          <div className="payment__routing__pay">
            <Typography.Title level={5}>Tổng tiền:</Typography.Title>
            <p>
              {customerInfo.totalMoney.toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })}
            </p>
          </div>
        </div>
      </div>
      <div className="payment__checked">
        <img
          src="https://futabus.vn/_nuxt/img/vnpay.de85e9b.png"
          alt=""
        />
        <Radio
          className="payment__checked--radio"
          checked={checkedPayment}
          onClick={() => setCheckedPayment(!checkedPayment)}
        ></Radio>
      </div>
      <div className="payment__group">
        <Button 
          className="payment__group--back" 
          onClick={() => setCurrent(2)}
        >
          Quay lại
        </Button>
        <Button 
          className="payment__group--btn-submit" 
          disabled={!checkedPayment}
          onClick={handleCreatePayment}
        >
          Tiến hành thanh toán
        </Button>
      </div>
    </>
  );
};

export default Payment;
