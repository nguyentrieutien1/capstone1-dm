/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Button, Image, Select, Typography, Pagination } from "antd";
import { hire } from "../../utils/menuData";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { CallApiGetListCareers } from "./../../redux/reducers/careerReducer";
import { Link } from "react-router-dom";

const Hire = () => {
  const dispatch = useDispatch();
  const listCareers = useSelector((state) => state.CareerReducer.listCareers);
  const [dataCareer, setDataCareer] = useState(listCareers);
  const [dataCareerFiltered, setDataCareerFiltered] = useState([]);
  useEffect(() => {
    dispatch(CallApiGetListCareers());
  }, []);
  const handleChangeSliceCareerList = (e) => {
    setDataCareer(listCareers.slice(10 * (e - 1), e * 10));
  };
  const handleSearchCareer = () => {
    setDataCareer(dataCareerFiltered);
  }

  return (
    <div className="hire">
      <Image
        preview={false}
        className="hire__banner"
        src="https://vieclam.futabus.vn/Images/tuyendung_pn4_20190820.jpg"
        alt=""
      />
      <div className="hire__list">
        <div className="hire__control">
          <p>Tên công việc</p>
          <Select
            showSearch
            className="hire__control--select"
            onChange={(value) => {
              if (dataCareerFiltered.length === 0) {
                setDataCareerFiltered(listCareers.filter((item) => item.name === value));
              } else {
                setDataCareerFiltered(dataCareerFiltered.filter((item) => item.name === value));
              }
            }}
            placeholder="--Chọn công việc--"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            options={hire.nameWork}
          />
        </div>
        <div className="hire__control">
          <p>Cấp bậc</p>
          <Select
            showSearch
            className="hire__control--select"
            onChange={(value) => {
              if (dataCareerFiltered.length === 0) {
                setDataCareerFiltered(listCareers.filter((item) => item.level === value));
              } else {
                setDataCareerFiltered(dataCareerFiltered.filter((item) => item.level === value));
              }
            }}
            placeholder="--Chọn cấp bậc--"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            options={hire.levelWork}
          />
        </div>
        <div className="hire__control">
          <p>Hình thức</p>
          <Select
            showSearch
            className="hire__control--select"
            onChange={(value) => {
              if (dataCareerFiltered.length === 0) {
                setDataCareerFiltered(listCareers.filter((item) => item.formality === value));
              } else {
                setDataCareerFiltered(dataCareerFiltered.filter((item) => item.formality === value));
              }
            }}
            placeholder="--Chọn hình thức--"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            options={hire.formWork}
          />
        </div>
        <div className="hire__control">
          <p>Số năm kinh nghiệm</p>
          <Select
            showSearch
            className="hire__control--select"
            onChange={(value) => {
              if (dataCareerFiltered.length === 0) {
                setDataCareerFiltered(listCareers.filter((item) => item.experience === value));
              } else {
                setDataCareerFiltered(dataCareerFiltered.filter((item) => item.experience === value));
              }
            }}
            placeholder="--Chọn kinh nghiệm--"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            options={hire.expWork}
          />
        </div>
        <div className="hire__control">
          <p>Tỉnh/ TP</p>
          <Select
            showSearch
            className="hire__control--select"
            onChange={(value) => {
              if (dataCareerFiltered.length === 0) {
                setDataCareerFiltered(listCareers.filter((item) => item.workspace === value));
              } else {
                setDataCareerFiltered(dataCareerFiltered.filter((item) => item.workspace === value));
              }
            }}
            placeholder="--Chọn tỉnh/ tp--"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            options={hire.locationWork}
          />
        </div>
      </div>
      <Button className="hire__btn-search" onClick={handleSearchCareer}>
        <i className="fas fa-search"></i>
        Tìm kiếm
      </Button>
      {dataCareer.length > 0 ? (
        <div className="hire__data">
          {dataCareer.length > 0 &&
            dataCareer.map((item) => {
              return (
                <Link
                  key={item.id}
                  className="hire__data__item"
                  to={`/tuyen-dung/${item.id}`}
                >
                  <Typography.Title level={5}>{item.name}</Typography.Title>
                  <div className="hire__data__item--bottom">
                    <p>
                      <i className="fas fa-map-marker-alt"></i>
                      {item.workspace}
                    </p>
                    <p>
                      <i className="fas fa-dollar-sign"></i>
                      {item.salary}đ
                    </p>
                  </div>
                </Link>
              );
            })}
          <div className="hire__data__bottom">
            <Pagination
              defaultCurrent={1}
              total={listCareers.length}
              onChange={handleChangeSliceCareerList}
            />
          </div>
        </div>
      ) : (
        <p className="hire__empty">Không tìm thấy kết quả phù hợp</p>
      )}
    </div>
  );
};

export default Hire;
