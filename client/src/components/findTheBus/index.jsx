/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Button, Radio, Select, Typography, DatePicker } from "antd";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  CallApiListScheduleMoreThanCurrentDate,
  CallApiListScheduleMoreThanCurrentDateFiltered,
} from "./../../redux/reducers/scheduleReducer";
import dayjs from "dayjs";
import moment from "moment";

const { Option } = Select;

const FindTheBus = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const listAddressBus = useSelector(
    (state) => state.AddressReducer.listAddress
  );
  const listScheduleMoreThanCurrentDate = useSelector(
    (state) => state.ScheduleReducer.listScheduleMoreThanCurrentDate
  );
  useEffect(() => {
    dispatch(CallApiListScheduleMoreThanCurrentDate());
  }, []);
  const [chooseBusGo, setChooseBusGo] = useState("");
  const [chooseBusArrive, setChooseBusArrive] = useState("");
  const [dayBusGo, setDayBusGo] = useState("");
  const [dayBusArrive, setDayBusArrive] = useState("");
  const [listBusGo, setListBusGo] = useState([]);
  const [listBusArrive, setListBusArrive] = useState([]);
  const [handleRadio, setHandleRadio] = useState({
    oneWay: true,
    twoWay: false,
  });
  useEffect(() => {
    console.log(listAddressBus);
    listAddressBus.forEach((item) => {
      setListBusGo((prev) => [...prev, item]);
      setListBusArrive((prev) => [...prev, item]);
    });
  }, []);
  const scheduleMoreThanCurrentDateFiltered =
    listScheduleMoreThanCurrentDate.filter(
      (item) => moment.utc(item.startTime).format('DD/MM/YYYY')  === dayBusGo
    );

  const customFormat = (value) => `${value.format("DD/MM/YYYY")}`;
  const handleFindBus = () => {
    navigate("/dat-ve-xe");
    dispatch(CallApiListScheduleMoreThanCurrentDateFiltered(scheduleMoreThanCurrentDateFiltered));
  };

  const handleChangeRadio = () => {
    if (handleRadio.oneWay) {
      setHandleRadio({
        oneWay: false,
        twoWay: true,
      });
    } else {
      setHandleRadio({
        oneWay: true,
        twoWay: false,
      });
    }
  };

  return (
    <div className="find-bus">
      <div className="find-bus__top">
        <Radio
          defaultChecked
          checked={handleRadio.oneWay}
          onChange={handleChangeRadio}
        >
          Một chiều
        </Radio>
        <Radio
          defaultChecked={false}
          checked={handleRadio.twoWay}
          onChange={handleChangeRadio}
        >
          Khứ hồi
        </Radio>
      </div>
      <div className="find-bus__list">
        <div className="find-bus__booking">
          <div className="find-bus__booking--item">
            <Typography.Title level={5}>Điểm đi</Typography.Title>

            <Select onChange={(value) => {
                setChooseBusGo(value);
                setListBusArrive(listBusArrive.filter(item => item.name !== value));
                }}>
              {listBusGo.length > 0 &&
                listBusGo.map((item) => {
                  return (
                    <Option key={item.id} value={item.name}>
                      {item.name}
                    </Option>
                  );
                })}
            </Select>
          </div>
          <div className="find-bus__booking--item">
            <Typography.Title level={5}>Điểm đến</Typography.Title>
            <Select onChange={(value) => setChooseBusArrive(value)}>
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
        </div>

        <div className="find-bus__group">
          <div className="find-bus__group--item">
            <Typography.Title level={5}>Ngày đi</Typography.Title>
            <DatePicker
              style={{ width: "100%" }}
              defaultValue={dayjs("2023/04/29", "YYYY/MM/DD")}
              format={customFormat}
              onChange={(d, dateString) => setDayBusGo(dateString)}
            />
          </div>
          <div className="find-bus__group--item">
            <Typography.Title level={5}>Ngày về</Typography.Title>
            <DatePicker
              disabled={handleRadio.oneWay}
              style={{ width: "100%" }}
              defaultValue={dayjs("2023/04/29", "YYYY/MM/DD")}
              format={customFormat}
              onChange={(d, dateString) => setDayBusArrive(dateString)}
            />
          </div>
        </div>
      </div>
      <Button className="find-bus__btn-search" onClick={handleFindBus}>
        <i className="fas fa-search"></i>
        TÌM CHUYẾN XE
      </Button>
    </div>
  );
};

export default FindTheBus;
