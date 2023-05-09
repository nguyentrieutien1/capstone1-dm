/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Pagination } from "antd";
import { GetOneTicketDetailAction } from "../../../redux/reducers/admin/manageTicketReducer";
import "./style.scss";
import { GetListTicketAction } from './../../../redux/reducers/admin/manageTicketReducer';

const ManageTicket = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(GetListTicketAction());
  },[]);
  const listTicket = useSelector(
    (state) => state.ManageTicketReducer.listTicket
  );
  const [listTicketClone, setListTicketClone] = useState([]);
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    setListTicketClone(listTicket.slice(0,10));
  },[listTicket]);

  const handleViewDetailTicket = (ticketId) => {
    dispatch(GetOneTicketDetailAction(ticketId));
    navigate(`/admin/manage-ticket/${ticketId}`);
  };

  const handleChangeSliceCareerList = (e) => {
    setCurrent(e);
    setListTicketClone(listTicket.slice(10 * (e - 1), e * 10));
  };

  return (
    <div className="manage-ticket">
      <table>
        <thead>
          <tr>
            <th>Họ và tên</th>
            <th>Số điện thoại</th>
            <th>Trạng thái</th>
            <th>Khoảng cách di chuyển</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {listTicketClone.length > 0 &&
            listTicketClone.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.fullname}</td>
                  <td>{item.phoneNumber}</td>
                  <td>{item.status}</td>
                  <td>{item.schedule.distance}</td>
                  <td>
                    <Button onClick={() => handleViewDetailTicket(item.id)}>
                      Xem chi tiết
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div className="bus-info__pagination">
        <Pagination
          current={current}
          total={listTicket.length}
          onChange={handleChangeSliceCareerList}
        />
      </div>
    </div>
  );
};

export default ManageTicket;
