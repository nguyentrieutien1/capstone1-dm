/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import SlickSwiper from "./../../components/slickSwiper/index";
import "./style.scss";
import { Select, Button } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Schedule = () => {
  const navigate = useNavigate();
  const selectSchedule = useSelector(state => state.ScheduleReducer.listScheduleMoreThanCurrentDate);
  const [listSchedule, setListSchedule] = useState([]);
  const [scheduleGo, setScheduleGo] = useState([]);
  const [scheduleArrive, setScheduleArrive] = useState([]);

  const [chooseGo, setChooseGo] = useState("");
  const [chooseArrive, setChooseArrive] = useState("");

  useEffect(() => {
    setListSchedule(selectSchedule);
    selectSchedule.forEach(item => {
      const newSelectedScheduleGo = {
        label: item.departureAddress.name,
        value: item.departureAddress.city
      }
      const newSelectedScheduleArrive = {
        label: item.destinationAddress.name,
        value: item.destinationAddress.city
      }
      setScheduleGo((prev) => ([...prev, newSelectedScheduleGo]));
      setScheduleArrive((prev) => ([...prev, newSelectedScheduleArrive]));
    })
  }, []);

  const handleFilterSchedule = () => {
    setListSchedule([]);
    selectSchedule.forEach(item => {
      if (item.departureAddress.city === chooseGo && item.destinationAddress.city === chooseArrive) {
        setListSchedule((prev) => ([...prev, item]));
      }
    })
  };

  const handleFindBus = () => {
    navigate("/dat-ve-xe");
    // dispatch(CallApiListScheduleMoreThanCurrentDateFiltered(scheduleMoreThanCurrentDateFiltered));
  };

  return (
    <div className="schedule">
      <SlickSwiper />
      <div className="schedule__filter">
        <div className="schedule__filter__control">
          <p>Điểm đi</p>
          <Select
            showSearch
            className="schedule__filter__control--select"
            placeholder="-- Chọn điểm đi --"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={scheduleGo}
            onChange={(value) => setChooseGo(value)}
          />
        </div>
        <div className="schedule__filter__control">
          <p>Điểm đến</p>
          <Select
            showSearch
            className="schedule__filter__control--select"
            placeholder="-- Chọn điểm đến --"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={scheduleArrive}
            onChange={(value) => setChooseArrive(value)}
          />
        </div>
        <Button className="schedule__filter__btn-search" onClick={handleFilterSchedule}>
          <i className="fas fa-search"></i>
          Tìm kiếm
        </Button>
      </div>
      <div className="schedule__list">
        <table>
          <thead>
            <tr className="schedule__list__head">
              <th>Điểm đi</th>
              <th>Điểm đến</th>
              <th>Quãng đường</th>
              <th>Thời gian hành trình</th>
              <th>Giá vé</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {listSchedule.map((item) => {
              return <tr key={item.id}>
                <td>{item.departureAddress.city}</td>
                <td>{item.destinationAddress.city}</td>
                <td>{item.distance}</td>
                <td></td>
                <td>{item.price.toLocaleString("it-IT", {
                  style: "currency",
                  currency: "VND",
                })}</td>
                <td>
                  <Button
                    onClick={handleFindBus}
                  >
                    Đặt vé
                  </Button>
                </td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Schedule;
