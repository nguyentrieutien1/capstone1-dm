import React, { useState } from "react";
import { Typography, Input, Select, Button, DatePicker } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UpdateUserAction } from "../../../redux/reducers/admin/manageCareerReducer";

const ViewDetailCareer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const careerDetail = useSelector(
    (state) => state.ManageCareerReducer.careerDetail
  );
  const [careerDetailClone, setCareerDetailClone] = useState({
    name: careerDetail.name,
    quantity: careerDetail.quantity,
    formality: careerDetail.formality,
    salary: careerDetail.salary,
    workspace: careerDetail.workspace,
    welfare: careerDetail.welfare,
    description: careerDetail.description,
    requirement: careerDetail.requirement,
    contact: careerDetail.contact,
    include: careerDetail.include,
    isActive: careerDetail.isActive,
  });
  const [levelCareer, setLevelCareer] = useState(careerDetail.level);
  const [deadlineCareer, setDeadlineCareer] = useState(careerDetail.deadline);
  const [expCareer, setExpCareer] = useState(careerDetail.experience);
  const handleChangeValue = (event) => { 
    const name = event.target.name;
    setCareerDetailClone((prev) => ({
      ...prev,
      [name]: event.target.value
    }))
  };

  const handleDisabledCareer = () => { 
    const newData = {
      isActive: false,
    }
    dispatch(UpdateUserAction(careerDetail.id, newData));
  };
  const handleUpdateCareer = () => { 
    const newData = {
      name: careerDetailClone.name,
      level: levelCareer,
      quantity: careerDetailClone.quantity,
      formality: careerDetailClone.formality,
      experience: expCareer,
      salary: careerDetailClone.salary,
      workspace: careerDetailClone.workspace,
      deadline: deadlineCareer,
      welfare: careerDetailClone.welfare,
      description: careerDetailClone.description,
      requirement: careerDetailClone.requirement,
      contact: careerDetailClone.contact,
      include: careerDetailClone.include,
      isActive: true,
    }
    console.log(careerDetail.id, newData);
    dispatch(UpdateUserAction(careerDetail.id, newData));
  };

  return (
    <div>
      <Typography.Title level={5} className="car-detail__title">
        Xem Chi Tiết Tuyển Dụng
      </Typography.Title>
      <div className="car-detail__data">
        <div className="car-detail__data__row">
          <div className="car-detail__data__item">
            <p>Vị trí tuyển dụng:</p>
            <Input
              name="name"
              value={careerDetailClone.name}
              onChange={handleChangeValue}
            />
          </div>
          <div className="car-detail__data__item">
            <p>Lương:</p>
            <Input
              name="salary"
              value={careerDetailClone.salary}
              onChange={handleChangeValue}
            />
          </div>
        </div>
        <div className="car-detail__data__row">
          <div className="car-detail__data__item">
            <p>Cấp bậc:</p>
            <Select
              defaultValue={levelCareer}
              className="router-confirm__top--selected"
              onChange={(value) => setLevelCareer(value)}
              options={[
                { value: "Nhân viên", label: "Nhân viên" },
                {
                  value: "Trưởng phòng/ Giám sát",
                  label: "Trưởng phòng/ Giám sát",
                },
                { value: "Quản lý", label: "Quản lý" },
                { value: "Phó giám đốc", label: "Phó giám đốc" },
                { value: "Giám đốc", label: "Giám đốc" },
                { value: "Phó tổng giám đốc", label: "Phó tổng giám đốc" },
                { value: "Tổng giám đốc", label: "Tổng giám đốc" },
                { value: "Chuyên viên", label: "Chuyên viên" },
              ]}
              style={{ width: "100%" }}
            />
          </div>
          <div className="car-detail__data__item">
            <p>Nơi làm việc:</p>
            <Input
              name="workspace"
              value={careerDetailClone.workspace}
              onChange={handleChangeValue}
            />
          </div>
        </div>
        <div className="car-detail__data__row">
          <div className="car-detail__data__item">
            <p>Số lượng tuyển:</p>
            <Input
              name="quantity"
              value={careerDetailClone.quantity}
              onChange={handleChangeValue}
            />
          </div>
          <div className="car-detail__data__item">
            <p>Hạn nộp:</p>
            <DatePicker
              style={{ width: "100%" }}
              onChange={(d, dateString) => {
                setDeadlineCareer(new Date(dateString).toISOString());
              }}
            />
          </div>
        </div>
        <div className="car-detail__data__row">
          <div className="car-detail__data__item">
            <p>Hình thức:</p>
            <Input
              name="formality"
              value={careerDetailClone.formality}
              onChange={handleChangeValue}
            />
          </div>
          <div className="car-detail__data__item">
            <p>Phúc lợi:</p>
            <Input
              name="nameDiver"
              value={careerDetailClone.welfare}
              onChange={handleChangeValue}
            />
          </div>
        </div>
        <div className="car-detail__data__row">
          <div className="car-detail__data__item">
            <p>Kinh nghiệm:</p>
            <Select
              defaultValue={expCareer}
              className="router-confirm__top--selected"
              onChange={(value) => setExpCareer(value)}
              options={[
                { value: "Chưa có kinh nghiệm", label: "Chưa có kinh nghiệm" },
                { value: "0 - 1 năm", label: "0 - 1 năm" },
                { value: "1- 2 năm", label: "1- 2 năm" },
                { value: "2 -3 năm", label: "2 -3 năm" },
                { value: "3- 4 năm", label: "3- 4 năm" },
                { value: "Trên 5 năm kinh nghiệm", label: "Trên 5 năm kinh nghiệm" },
                { value: "Trên 10 năm kinh nghiệm", label: "Trên 10 năm kinh nghiệm" },
              ]}
              style={{ width: "100%" }}
            />
          </div>
          <div className="car-detail__data__item">
            <p>Mô tả công việc:</p>
            <Input
              name="description"
              value={careerDetailClone.description}
              onChange={handleChangeValue}
            />
          </div>
        </div>
        <div className="car-detail__data__row">
          <div className="car-detail__data__item">
            <p>Yêu cầu:</p>
            <Input
              name="requirement"
              value={careerDetailClone.requirement}
              onChange={handleChangeValue}
            />
          </div>
          <div className="car-detail__data__item">
            <p>Liên hệ:</p>
            <Input
              name="contact"
              value={careerDetailClone.contact}
              onChange={handleChangeValue}
            />
          </div>
        </div>
        <div className="car-detail__data__row">
          <div className="car-detail__data__item">
            <p>Hồ sơ bao gồm:</p>
            <Input
              name="include"
              value={careerDetailClone.include}
              onChange={handleChangeValue}
            />
          </div>
          <div className="car-detail__data__item">
            <p>Ngày tạo:</p>
            <Input
              disabled
              name="created_at"
              value={Date(careerDetailClone.created_at).slice(0, 15)}
            />
          </div>
        </div>
        <div className="car-detail__data__row">
          <div className="car-detail__data__item">
            <p>Ngày cập nhật:</p>
            <Input
              disabled
              name="updated_at"
              value={Date(careerDetailClone.updated_at).slice(0, 15)}
            />
          </div>
        </div>
      </div>
      <div className="car-detail__function">
        <Button
          className="car-detail__function--back"
          onClick={() => navigate("/admin/manage-hire")}
        >
          Quay lại
        </Button>
        <div className="car-detail__group">
          <Button
            className="car-detail__group--disabled"
            onClick={handleDisabledCareer}
          >
            Vô hiệu hóa
          </Button>
          <Button
            className="car-detail__group--update"
            onClick={handleUpdateCareer}
          >
            Cập nhật
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailCareer;
