import React, { useEffect, useState } from "react";
import { Input, Typography, Select, Button, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import "./style.scss";
import { useNavigate, useParams } from "react-router-dom";
import {
  UpdateBusInfoAction,
  GetListBusInfoAction,
} from "../../../redux/reducers/admin/manageBusInfoReducer";
import axios from "axios";
import constant from "../../../constant";
import { openNotificationWithIcon } from "../../../components/notification";
import ListSeat from "../../../components/listSeat/ListSeat"
const { Option } = Select;

const ViewDetailBusInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const listAddressBus = useSelector(
    (state) => state.AddressReducer.listAddress
  );
  const busInfoDetail = useSelector(
    (state) => state.ManageBusInfoReducer.busInfoDetail
  );
  const [busInfoDetailClone, setBusInfoDetailClone] = useState({
    price: 0,
    startTime: "",
    endTime: "",
    distance: "",
    isActive: true,
  });
  const [listBusGo, setListBusGo] = useState([]);
  const [listBusArrive, setListBusArrive] = useState([]);
  const [chooseBusGo, setChooseBusGo] = useState("");
  const [chooseBusArrive, setChooseBusArrive] = useState("");
  const [modal2Open, setModal2Open] = useState(false);
  const [cars, setCars] = useState([]);
  const [carName, setCarName] = useState("");
  const [carId, setCarId] = useState(0);
  const [isShowCar, setIsShowCar] = useState(false)
  const [listSeat, setListSeat] = useState([])
  const [car, setCar] = useState({})
  const {id} = useParams();

  useEffect(() => {
    setBusInfoDetailClone({
      price: busInfoDetail.price,
      startTime: busInfoDetail.startTime,
      endTime: busInfoDetail.endTime,
      distance: busInfoDetail.distance,
      isActive: busInfoDetail.isActive,
    });
    setChooseBusGo(busInfoDetail.departureAddress.name);
    setChooseBusArrive(busInfoDetail.destinationAddress.name);
  }, []);

  useEffect(() => {
    listAddressBus.forEach((item) => {
      setListBusGo((prev) => [...prev, item]);
      setListBusArrive((prev) => [...prev, item]);
    });
  }, []);
  const getAllCar = async () => {
    const listCar = await axios.get(`${constant._SERVER_LINK}/car`);
    setCars([...listCar.data]);
  };
  useEffect(() => {
    getAllCar();
  }, []);
  const handleChangeValue = (event) => {
    const name = event.target.name;
    setBusInfoDetailClone((prev) => ({
      ...prev,
      [name]: event.target.value,
    }));
  };
  useEffect(() => {
  handleCreateSchedule()
}, [])
  const handleDisableSchedule = () => {
    dispatch(UpdateBusInfoAction(busInfoDetail.id, { isActive: false }));
    dispatch(GetListBusInfoAction());
    navigate("/admin/manage-bus-information");
  };

  const handleUpdateSchedule = () => {
    const newData = {
      price: Number(busInfoDetailClone.price),
      distance: busInfoDetailClone.distance,
      isActive: busInfoDetailClone.isActive,
      // departureAddress: {
      //   name: chooseBusGo,
      // },
      // destinationAddress: {
      //   name: chooseBusArrive,
      // }
    };
    dispatch(UpdateBusInfoAction(busInfoDetail.id, newData));
    dispatch(GetListBusInfoAction());
    navigate("/admin/manage-bus-information");
  };
  const handleCreateSchedule = async() => {
    const schedule = await axios.get(
      `${constant._SERVER_LINK}/schedule/ticket/${id}`
    );
    const { scheduleToCars } = schedule.data;
    const filterSchedule = scheduleToCars.map(schedule => {

      const s = {...schedule}
      const { numberOfFloor, seats } = s.car;
      const pageSize = seats.length / numberOfFloor;
      const newSearts = [];
      const sortSeatForRow = [];
      let filterSeatByCharacter = [];
      const character = [
        ...new Set(seats.map((seat) => seat.name.slice(0, 1))),
      ].sort();
      character.forEach((char) => {
        for (let i = 0; i < seats.length; i++) {
          if (seats[i].name.includes(char)) {
            newSearts.push(seats[i]);
          }
        }
      });

      if (numberOfFloor > 1) {
        for (let i = 1; i <= numberOfFloor; i++) {
          sortSeatForRow.push([...getDataForPage(i)]);
        }
        filterSeatByCharacter = [...sortSeatForRow];
      } else {
        filterSeatByCharacter = [...[newSearts]];
      }
      function getDataForPage(pageNumber) {
        const startIndex = (pageNumber - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        return newSearts.slice(startIndex, endIndex);
      }
      s['filterSeatByCharacter'] = filterSeatByCharacter;
      return s;
    })
    console.log(filterSchedule);
  }
  const handleSetInfoCar = (name, id) => {
    setCarName(name);
    setCarId(id);

  }
  return (
    <div className="detail-schedule">
      <Typography.Title level={4}>Xem chi tiết chuyến xe</Typography.Title>
      <div className="detail-schedule__top">
        <div className="detail-schedule__top__row">
          <div className="detail-schedule__top__item">
            <p>Giá:</p>
            <Input
              name="price"
              value={busInfoDetailClone.price.toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })}
              onChange={handleChangeValue}
            />
          </div>
          <div className="detail-schedule__top__item">
            <p>Giờ khởi hành:</p>
            <Input
              name="startTime"
              value={moment.utc(busInfoDetailClone.startTime).format("hh:mm")}
              onChange={handleChangeValue}
            />
          </div>
        </div>
        <div className="detail-schedule__top__row">
          <div className="detail-schedule__top__item">
            <p>Điểm đi:</p>
            <Select
              onChange={(value) => {
                setChooseBusGo(value);
                setListBusArrive(
                  listAddressBus.filter((item) => item.name !== value)
                );
              }}
              defaultValue={busInfoDetail.departureAddress.name}
              style={{ width: "100%" }}
            >
              {listBusGo.length > 0 &&
                listBusGo.map((item) => {
                  return (
                    <Option key={item.id} value={item?.name}>
                      {item?.name}
                    </Option>
                  );
                })}
            </Select>
          </div>
          <div className="detail-schedule__top__item">
            <p>Giờ kết thúc:</p>
            <Input
              name="endTime"
              value={moment.utc(busInfoDetailClone.endTime).format("hh:mm")}
              onChange={handleChangeValue}
            />
          </div>
        </div>
        <div className="detail-schedule__top__row">
          <div className="detail-schedule__top__item">
            <p>Điểm đến:</p>
            <Select
              onChange={(value) => {
                setChooseBusArrive(value);
                setListBusGo(
                  listAddressBus.filter((item) => item.name !== value)
                );
              }}
              defaultValue={busInfoDetail.destinationAddress.name}
              style={{ width: "100%" }}
            >
              {listBusArrive.length > 0 &&
                listBusArrive.map((item) => {
                  return (
                    <Option key={item.id} value={item.name}>
                      {item.name}
                    </Option>
                  );
                })}
            </Select>
          </div>
          <div className="detail-schedule__top__item">
            <p>Ngày tạo:</p>
            <Input
              disabled
              value={moment
                .utc(busInfoDetail.created_at)
                .format("DD/MM/YYYY - hh:mm")}
            />
          </div>
        </div>
        <div className="detail-schedule__top__row">
          <div className="detail-schedule__top__item">
            <p>Khoảng cách:</p>
            <Input
              name="distance"
              value={busInfoDetailClone.distance}
              onChange={handleChangeValue}
            />
          </div>
          <div className="detail-schedule__top__item">
            <p>Ngày cập nhật:</p>
            <Input
              disabled
              value={moment
                .utc(busInfoDetail.updated_at)
                .format("DD/MM/YYYY - hh:mm")}
            />
          </div>
        </div>

        <Modal
          centered
          open={modal2Open}
          onOk={() => handleCreateSchedule()}
          onCancel={() => setModal2Open(false)}
        >
          <h3 style={{ textAlign: "center" }}>Thêm xe </h3>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
            className="choose-car"
          >
            {cars.map((car) => {
              return (
                <div
                  onClick={() => handleSetInfoCar(car.name, car.id)}
                  style={{
                    border: `1px solid`,
                    borderColor: `${carId == car.id ? "#4096FF" : ""}`,
                    width: "30%",
                    backgroundColor: "#D9D9D9",
                    textAlign: "center",
                    margin: "20px 0",
                    padding: 20,
                    cursor: "pointer",
                  }}
                  className="choose-one__car"
                >
                  {car.name}
                </div>
              );
            })}
          </div>
        </Modal>
        <div className="detail-schedule__top__row">
          <div
            className="detail-schedule__top__add-car"
            style={{ display: "flex", alignItems: "center" }}
          >
            <p>Thêm xe</p>
            {isShowCar && (
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    width: "max-content",
                    marginRight: "15px",
                    backgroundColor: "#D9D9D9",
                    padding: 10,
                  }}
                >
                  {carName}
                </div>
                <i class="fas fa-trash"></i>
              </div>
            )}
          </div>
        </div>
      </div>

     
        {listSeat.map((listSeat) => {
          return <ListSeat car={car} listSeat={listSeat} isCheck={false} />;
        })}

      <div className="detail-schedule__bottom">
        <Button
          onClick={() => setModal2Open(true)}
          className="detail-schedule__bottom--plus"
        >
          <i className="fas fa-plus"></i>
        </Button>
        <div className="detail-schedule__group">
          <Button
            onClick={() => {
              navigate("/admin/manage-bus-information");
            }}
          >
            Quay lại
          </Button>
          <div className="detail-schedule__group__item">
            <Button
              className="detail-schedule__group__item--disable"
              onClick={handleDisableSchedule}
            >
              Vô hiệu hóa
            </Button>
            <Button
              className="detail-schedule__group__item--update"
              onClick={handleUpdateSchedule}
            >
              Cập nhật
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailBusInfo;
