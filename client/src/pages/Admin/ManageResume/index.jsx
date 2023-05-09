/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Button, Select, Pagination } from "antd";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  GetListResumesAction,
  GetDetailResumeAction,
} from "./../../../redux/reducers/admin/manageCareerReducer";
import moment from "moment";

const ManageResume = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetListResumesAction());
  }, []);

  const listResumes = useSelector(
    (state) => state.ManageCareerReducer.listResume
  );
  const [listResumesFilter, setListResumesFilter] = useState([]);
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    setListResumesFilter(listResumes.slice(0, 10));
  }, [listResumes]);
  const handleChange = (value) => {
    console.log(value);
    if(value === "All") {
      setListResumesFilter(listResumes.slice(0, 10));
    } else {
      const filtered = listResumes.filter((item) => item.status === value);
      setListResumesFilter(filtered);
    }
  };

  const handleChangeSliceCareerList = (e) => {
    setCurrent(e);
    setListResumesFilter(listResumes.slice(10 * (e - 1), e * 10));
  };

  return (
    <div className="manage-cv">
      <div className="manage-cv__top">
        <p>Lọc theo:</p>
        <Select
          defaultValue="All"
          style={{
            width: 120,
          }}
          onChange={handleChange}
          options={[
            { value: "All", label: "All" },
            { value: "New", label: "New" },
            { value: "Approved", label: "Approved" },
            { value: "Rejected", label: "Rejected" },
          ]}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Vị trí tuyển dụng</th>
            <th>Nơi làm việc</th>
            <th>Họ và tên</th>
            <th>Ngày nộp</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {listResumesFilter.length > 0 ? (
            listResumesFilter.map((item) => {
              return (
                <tr
                  key={item.id}
                  className={
                    item.status === "Rejected"
                      ? "manage-cv__rejected"
                      : item.status === "Approved"
                      ? "manage-cv__approved"
                      : ""
                  }
                >
                  <td>{item.career.name}</td>
                  <td>{item.career.workspace}</td>
                  <td>{item.fullName}</td>
                  <td>{moment(item.created_at).utc().format("DD/MM/YYYY")}</td>
                  <td>
                    <Button
                      onClick={() => {
                        dispatch(GetDetailResumeAction(item.id));
                      }}
                    >
                      Xem chi tiết
                    </Button>
                  </td>
                </tr>
              );
            })
          ) : (
            <p>Không tìm thấy dữ liệu</p>
          )}
        </tbody>
      </table>      
      <div className="bus-info__pagination">
        <Pagination
          current={current}
          total={listResumes.length}
          onChange={handleChangeSliceCareerList}
        />
      </div>
    </div>
  );
};

export default ManageResume;
