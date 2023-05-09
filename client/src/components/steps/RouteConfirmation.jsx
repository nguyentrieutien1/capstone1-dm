/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { dataBooking } from "../../utils/menuData";
import { Select, Typography, Button } from "antd";
import "./style.scss";
import { useSelector } from "react-redux";

const RouteConfirmation = (props) => {
  const {
    handleChangeFilterBooking,
    onChangeChoose,
    showChair,
    booked,
    setBooked,
    handleContinueStep,
    activeClass,
    setActiveClass,
    chairExist,
    setChairExist,
    totalPrice,
    setTotalPrice,
  } = props;
  const [disableBtn, setDisableBtn] = useState(true);
  const scheduleFiltered = useSelector(
    (state) => state.ScheduleReducer.scheduleMoreThanCurrentDateFiltered
  );
  const scheduleById = useSelector(
    (state) => state.ScheduleReducer.scheduleById
  );

  useEffect(() => {
    setChairExist([]);
    if (scheduleFiltered.length > 0 && chairExist.length === 0) {
      scheduleById.tickets?.forEach(item => {
        setChairExist((prev) => ([
          ...prev,
          item.seat.id
        ]))
      })
    }
  }, []);

  useEffect(() => {
    if (booked.length > 0) {
      setTotalPrice(booked.length * scheduleById.price);
      setDisableBtn(false);
    } else {
      setTotalPrice(0);
      setDisableBtn(true);
    }
  }, [booked]);
  

  const handleSelectChairOnCar = async (data) => {
    if (activeClass.includes(data.id)) {
      const newdata = await activeClass.filter(item => item !== data.id)
      setActiveClass(newdata);
    } else {
      setActiveClass((prev) => [...prev, data.id]);
    }
    if (booked.includes(data)) {
      const newdata = await booked.filter(item => item.id !== data.id)
      setBooked(newdata);
    } else {
      setBooked((prev) => [...prev, data]);
    }
  };

  return (
    <div className="route-confirm">
      <div className="route-confirm__top">
        <Select
          defaultValue="Giá"
          className="router-confirm__top--selected"
          onChange={handleChangeFilterBooking}
          options={dataBooking.typePrice}
        />
        <Select
          defaultValue="Loại Xe"
          className="router-confirm__top--selected"
          onChange={handleChangeFilterBooking}
          options={dataBooking.typeCar}
        />
        <Select
          defaultValue="Giờ"
          className="router-confirm__top--selected"
          onChange={handleChangeFilterBooking}
          options={dataBooking.typeHours}
        />
      </div>
      <div className="route-confirm__list">
        {scheduleFiltered.length > 0 ? (
          scheduleFiltered.map((item) => {
            return (
              <div key={item.id} className="route-confirm__item">
                <p className="route-confirm__item--header">
                  {Date(item.startTime).slice(16, 21)}
                  <img
                    alt="fromto"
                    width="28"
                    height="7"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAOCAYAAAB6pd+uAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAOKADAAQAAAABAAAADgAAAAAjNiV1AAABjklEQVRIDWNgGGQgraTRO7OiXZBazmKilkHUMuffPwaFX39+ZaSXN+lTw8xB50FGRgYmxn8MbH9//w9ILmoMLezr46TEo4POg/8ZgV6EAiBD68uTL5nAJKsEEyOVZiZVA63VG1nYWzIwMHIg2cP+7+9ffWMrRw4/d4eHBw4c+IckR5A56GIQGGtY3fT/P4PFk0+MqSlVreIEfYWkAKthSPJ0ZyInUSyWizH+/JuaVNJk+f//f3hSxqIOLjToPMgALGTgrsPCAHqMmenff7fUsubY3IYGPixKUITwGoaikk4cYAlKnJv+/lf88YUxM7W8SRuf04gzDJ8JVJYjkERRbPv/j4Hj/+//IamFjYG5kyaxo0hCOYwpRY312CSGntj/j0ysHOtmdVY8Qnb7oItBZMeRxmbk//f7ZyKwceAcumoVvPobRh6EBAewaLXhP3kjOa24QQQkwmxk6egAkRqcJDBP/mcAImDpCkQgBgMom/4DYmBFAaorgMUSAwMEMzL+BSr5BxTkBNabeqZ2Tp8BQTlvqFxYe+QAAAAASUVORK5CYII="
                    data-v-008a65cb=""
                  />
                  {Date(item.endTime).slice(16, 21)}
                </p>
                <p className="route-confirm__item--center">
                  {item.price.toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND",
                  })}
                </p>
                <div className="route-confirm__item__bottom">
                  <div className="route-confirm__item__bottom--left">
                    <p>
                      {item.departureAddress.name}
                      <img
                        alt="fromto"
                        width="28"
                        height="7"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAOCAYAAAB6pd+uAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAOKADAAQAAAABAAAADgAAAAAjNiV1AAABjklEQVRIDWNgGGQgraTRO7OiXZBazmKilkHUMuffPwaFX39+ZaSXN+lTw8xB50FGRgYmxn8MbH9//w9ILmoMLezr46TEo4POg/8ZgV6EAiBD68uTL5nAJKsEEyOVZiZVA63VG1nYWzIwMHIg2cP+7+9ffWMrRw4/d4eHBw4c+IckR5A56GIQGGtY3fT/P4PFk0+MqSlVreIEfYWkAKthSPJ0ZyInUSyWizH+/JuaVNJk+f//f3hSxqIOLjToPMgALGTgrsPCAHqMmenff7fUsubY3IYGPixKUITwGoaikk4cYAlKnJv+/lf88YUxM7W8SRuf04gzDJ8JVJYjkERRbPv/j4Hj/+//IamFjYG5kyaxo0hCOYwpRY312CSGntj/j0ysHOtmdVY8Qnb7oItBZMeRxmbk//f7ZyKwceAcumoVvPobRh6EBAewaLXhP3kjOa24QQQkwmxk6egAkRqcJDBP/mcAImDpCkQgBgMom/4DYmBFAaorgMUSAwMEMzL+BSr5BxTkBNabeqZ2Tp8BQTlvqFxYe+QAAAAASUVORK5CYII="
                        data-v-008a65cb=""
                      />
                      {item.destinationAddress.name}
                    </p>
                    <span>Lộ trình: {item.distance}</span>
                  </div>
                  <Button
                    onClick={() => onChangeChoose(item.id)}
                    className="route-confirm__item__bottom--right"
                  >
                    Xem lịch
                  </Button>
                </div>
                {showChair && scheduleById.id === item.id && (
                  <div className="route-chair">
                    <Typography.Title level={5}>Danh sách ghế</Typography.Title>
                    {scheduleById.scheduleToCars?.map((ele) => {
                      return (
                        <>
                          {ele.car.numberOfFloor === 1 ? (
                            <div key={ele.id} className="route-chair__single">
                              <div className="route-chair__bottom">
                                <div className="route-chair__list">
                                  {ele.car.seats?.length > 0 &&
                                    ele.car.seats?.map((seat) => {
                                      return (
                                        <button
                                          key={seat.id}
                                          disabled={chairExist.includes(seat.id)}
                                          onClick={() =>
                                            handleSelectChairOnCar(seat)
                                          }
                                          className={chairExist.includes(seat.id) ? "route-chair__list--chose" : activeClass.includes(seat.id) ? "route-chair__list--choosing" : "route-chair__list--empty"}
                                        >
                                          {seat.name}
                                        </button>
                                      );
                                    })
                                  }
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="route-chair__group">
                              <div className="route-chair__bottom">
                                <p>Tầng trên</p>
                                <div className="route-chair__list">
                                  {ele.car.seats?.length > 0 &&
                                    ele.car.seats?.map((seat) => {
                                      return (
                                        <button
                                          key={seat.id}
                                          disabled={chairExist.includes(seat.id)}
                                          onClick={() =>
                                            handleSelectChairOnCar(seat)
                                          }
                                          className={chairExist.includes(seat.id) ? "route-chair__list--chose" : activeClass.includes(seat.id) ? "route-chair__list--choosing" : "route-chair__list--empty"}
                                        >
                                          {seat.name}
                                        </button>
                                      );
                                    })}
                                </div>
                              </div>
                              <div className="route-chair__bottom">
                                <p>Tầng dưới</p>
                                <div className="route-chair__list">
                                  {ele.car.seats?.length > 0 &&
                                    ele.car.seats?.map((seat) => {
                                      return (
                                        <button
                                          key={seat.id}
                                          disabled={chairExist.includes(seat.id)}
                                          onClick={() =>
                                            handleSelectChairOnCar(seat)
                                          }
                                          className={chairExist.includes(seat.id) ? "route-chair__list--chose" : activeClass.includes(seat.id) ? "route-chair__list--choosing" : "route-chair__list--empty"}
                                        >
                                          {seat.name}
                                        </button>
                                      );
                                    })}
                                </div>
                              </div>
                            </div>
                          )}
                          <div className="route-chair__note">
                            <div className="route-chair__note__item">
                              <span className="route-chair__note__item--empty"></span>
                              <p>Trống</p>
                            </div>
                            <div className="route-chair__note__item">
                              <span className="route-chair__note__item--choosing"></span>
                              <p>Đang chọn</p>
                            </div>
                            <div className="route-chair__note__item">
                              <span className="route-chair__note__item--chose"></span>
                              <p>Đã đặt</p>
                            </div>
                          </div>
                          <div className="route-chair__payment">
                            <div className="route-chair__payment__left">
                              <p>
                                {booked.length} vé:
                                {booked.map((item) => {
                                  return (
                                    <span key={item.id}>{item.name + " "}</span>
                                  );
                                })}
                              </p>
                              <p>Tổng tiền: {totalPrice.toLocaleString("it-IT", {
                                style: "currency",
                                currency: "VND",
                              })}</p>
                            </div>
                            <Button
                              className="route-chair__payment__right"
                              onClick={handleContinueStep}
                              disabled={disableBtn}
                            >
                              Tiếp tục
                            </Button>
                          </div>
                        </>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <p>Không tìm thấy lịch phù hợp</p>
        )}
      </div>
    </div>
  );
};

export default RouteConfirmation;
