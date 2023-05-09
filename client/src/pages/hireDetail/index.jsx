/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {
  Button,
  Image,
  Typography,
  Modal,
  Input,
  DatePicker,
  Select,
} from "antd";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CallApiGetDetailCareer } from "../../redux/reducers/careerReducer";
import "./style.scss";
import dayjs from "dayjs";
import { CallApiApplyCVForCareer } from "./../../redux/reducers/careerReducer";

const HireDetail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const customFormat = (value) => `${value.format("DD/MM/YYYY")}`;
  const [resume, setResume] = useState({
    fullName: "",
    gender: "",
    idCard: "",
    dateOfBirth: "",
    phoneNumber: "",
    education: "",
    address: "",
    email: "",
    introduce: "",
  });

  useEffect(() => {
    dispatch(CallApiGetDetailCareer(params.id));
  }, []);

  const careerDetail = useSelector((state) => state.CareerReducer.careerDetail);
  const userProfile = useSelector((state) => state.UserReducer.userProfile);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    dispatch(CallApiApplyCVForCareer(resume, userProfile.id));
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div className="hire-detail">
      <Image
        preview={false}
        className="hire__banner"
        src="https://vieclam.futabus.vn/Images/tuyendung_pn4_20190820.jpg"
        alt=""
      />
      <div className="hire-detail__body">
        <div className="hire-detail__body__top">
          <Typography.Title level={3}>{careerDetail.name}</Typography.Title>
          <Button onClick={showModal}>Nộp hồ sơ nhanh</Button>
        </div>
        <div className="hire-detail__body__center">
          <div className="hire-detail__body__center--item">
            <Typography.Title level={5}>Nơi làm việc:</Typography.Title>
            <p>{careerDetail.workspace}</p>
          </div>
          <div className="hire-detail__body__center--item">
            <Typography.Title level={5}>Cấp bậc:</Typography.Title>
            <p>{careerDetail.level}</p>
          </div>
          <div className="hire-detail__body__center--item">
            <Typography.Title level={5}>Số lượng:</Typography.Title>
            <p>{careerDetail.quantity}</p>
          </div>
          <div className="hire-detail__body__center--item">
            <Typography.Title level={5}>Hình thức:</Typography.Title>
            <p>{careerDetail.formality}</p>
          </div>
          <div className="hire-detail__body__center--item">
            <Typography.Title level={5}>Kinh nghiệm:</Typography.Title>
            <p>{careerDetail.experience}</p>
          </div>
          <div className="hire-detail__body__center--item">
            <Typography.Title level={5}>Mức lương:</Typography.Title>
            <p>{careerDetail.salary}đ</p>
          </div>
        </div>
        <div className="hire-detail__body__bottom">
          <Typography.Title level={5}>Mô tả công việc:</Typography.Title>
          <p>{careerDetail.description}</p>
          <Typography.Title level={5}>Yêu cầu:</Typography.Title>
          <p>{careerDetail.requirement}</p>
          <Typography.Title level={5}>
            Danh sách hồ sơ xin việc:
          </Typography.Title>
          <p>{careerDetail.include}</p>
        </div>
      </div>
      <Modal
        title="Nộp Hồ Sơ"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <div className="hire-detail__modal">
          <div className="hire-detail__modal__row">
            <div className="hire-detail__modal__row--item">
              <p>
                Họ tên ứng viên:<span>(*)</span>
              </p>
              <Input
                placeholder=""
                name="fullName"
                onChange={(e) =>
                  setResume((prev) => ({
                    ...prev,
                    fullName: e.target.value,
                  }))
                }
              />
            </div>
            <div className="hire-detail__modal__row--item">
              <p>
                Giới tính:<span>(*)</span>
              </p>
              <Select
                name="gender"
                defaultValue=""
                style={{
                  width: "100%",
                }}
                onChange={(event) =>
                  setResume((prev) => ({
                    ...prev,
                    gender: event,
                  }))
                }
                options={[
                  { value: "Nam", label: "Nam" },
                  { value: "Nữ", label: "Nữ" },
                ]}
              />
            </div>
          </div>
          <div className="hire-detail__modal__row">
            <div className="hire-detail__modal__row--item">
              <p>
                Số CMND/ Thẻ căn cước:<span>(*)</span>
              </p>
              <Input
                placeholder=""
                name="idCard"
                onChange={(e) =>
                  setResume((prev) => ({
                    ...prev,
                    idCard: e.target.value,
                  }))
                }
              />
            </div>
            <div className="hire-detail__modal__row--item">
              <p>
                Ngày sinh:<span>(*)</span>
              </p>
              <DatePicker
                name="dateOfBirth"
                style={{ width: "100%" }}
                defaultValue={dayjs("2023/04/29", "YYYY/MM/DD")}
                format={customFormat}
                onChange={(d, dateString) =>
                  setResume((prev) => ({
                    ...prev,
                    dateOfBirth: dateString,
                  }))
                }
              />
            </div>
          </div>
          <div className="hire-detail__modal__row">
            <div className="hire-detail__modal__row--item">
              <p>
                Số điện thoại:<span>(*)</span>
              </p>
              <Input
                placeholder=""
                name="phoneNumber"
                onChange={(e) =>
                  setResume((prev) => ({
                    ...prev,
                    phoneNumber: e.target.value,
                  }))
                }
              />
            </div>
            <div className="hire-detail__modal__row--item">
              <p>
                Trình độ học vấn:<span>(*)</span>
              </p>
              <Select
                name="education"
                defaultValue=""
                style={{
                  width: "100%",
                }}
                onChange={(value) =>
                  setResume((prev) => ({
                    ...prev,
                    education: value,
                  }))
                }
                options={[
                  { value: "Đại học", label: "Đại học" },
                  { value: "Cao đẳng", label: "Cao đẳng" },
                  { value: "Trung cấp", label: "Trung cấp" },
                  { value: "THPT", label: "THPT" },
                  { value: "THCS", label: "THCS" },
                  { value: "Tiểu học", label: "Tiểu học" },
                  { value: "Tiến sĩ", label: "Tiến sĩ" },
                ]}
              />
            </div>
          </div>
          <div className="hire-detail__modal__row">
            <div className="hire-detail__modal__row--item">
              <p>
                Địa chỉ:<span>(*)</span>
              </p>
              <Input
                placeholder=""
                name="address"
                onChange={(e) =>
                  setResume((prev) => ({
                    ...prev,
                    address: e.target.value,
                  }))
                }
              />
            </div>
            <div className="hire-detail__modal__row--item">
              <p>
                Email:<span>(*)</span>
              </p>
              <Input
                placeholder=""
                name="email"
                onChange={(e) =>
                  setResume((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
              />
            </div>
          </div>
          <div className="hire-detail__modal__row--item">
            <p>Giới thiệu sơ lược về bản thân:</p>
            <Input
              placeholder=""
              name="introduce"
              onChange={(e) =>
                setResume((prev) => ({
                  ...prev,
                  introduce: e.target.value,
                }))
              }
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default HireDetail;
