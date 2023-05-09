import React, { useEffect, useState } from "react";
import { checkSeat } from "../../utils/checkSeat";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "antd";
import {UpdateStatusSeatAction} from "../../redux/reducers/admin/manageCarReducer"
export default function ListSeat({ listSeat, handleSeat, isCheck, car }) {
  console.log(listSeat);
  const seatOfCar = useSelector((state) => state.ManageCarReducer.carDetail);
  const [seatOfCarClone, setSeatOfCarClone] = useState({});
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState({
    id: 0,
    name: "",
    status: "",
  });
  console.log(car);
  useEffect(() => {
    setSeatOfCarClone({
      id: seatOfCar.id,
      name: seatOfCar.name,
      type: seatOfCar.type,
      toltalRow: seatOfCar.toltalRow,
      totalColumn: seatOfCar?.totalColumn,
      numberOfFloor: seatOfCar.numberOfFloor,
      isActive: seatOfCar.isActive,
      phoneNumber: seatOfCar.phoneNumber,
      seats: seatOfCar.seats,
    });
  }, []);
  const handleOk = () => {
    if (selectedTicket.status === "available") {
      dispatch(
        UpdateStatusSeatAction(selectedTicket.id, { status: "unavailable" })
      );
    } else {
      dispatch(
        UpdateStatusSeatAction(selectedTicket.id, { status: "available" })
      );
    }
    setIsModalOpen(false);
    setTimeout(() => {
      handleSeat();
    }, 2000);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const showModal = (value) => {
    setSelectedTicket({
      id: value.id,
      name: value.name,
      status: value.status,
    });
    setIsModalOpen(true);
  };
  return listSeat.map((list, index) => {
    return (
      <div
        style={{
          margin: "0 20px",
          width: "50%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <h2 style={{ width: "100%", textAlign: "center" }}>
          {checkSeat(index)}
        </h2>

        <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          {selectedTicket.status === "available" ? (
            <p>
              Bạn có muốn ẩn ghế <b> {selectedTicket.name}</b> của xe{" "}
              <b>{seatOfCarClone.name} </b>
              không ?
            </p>
          ) : (
            <p>
              Bạn có muốn hiện ghế <b> {selectedTicket.name}</b> của xe{" "}
              <b>{seatOfCarClone.name} </b>
              không ?
            </p>
          )}
        </Modal>
        {list.map((seat) => {
          return (
            <div
              onClick={isCheck == true ? () => showModal(seat) : () => {}}
              style={{
                width: `${100/car?.totalColumn - 3}%`,
                color: "white",
                cursor: "pointer",

                textAlign: "center",
                background:
                  seat?.ordered === true
                    ? "#ECA96C"
                    : seat?.status === "available"
                    ? "#7DCE80"
                    : "#9747FF",
                margin: "20px 0",
                padding: "20px",
              }}
            >
              {seat.name}
            </div>
          );
        })}
      </div>
    );
  });
}
