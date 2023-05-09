import { Button, Input, Select, Typography } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { CallApiUpdateAddressAction, GetListAddressAction } from "../../../redux/reducers/admin/manageAddressReducer";

const ViewDetailAddress = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addressDetail = useSelector(
    (state) => state.ManageAddressReducer.addressDetail
  );
  const [stateAddress, setStateAddress] = useState({
    name: addressDetail.name,
    city: addressDetail.city,
  });
  const [selectActiveAddress, setSelectActiveAddress] = useState(
    addressDetail.isActive
  );

  const handleUpdateAddress = () => {
    const newData = {
      name: stateAddress.name,
      city: stateAddress.city,
      isActive: selectActiveAddress,
    };
    dispatch(CallApiUpdateAddressAction(addressDetail.id, newData));
    dispatch(GetListAddressAction());
  };

  const handleDisableAddress = () => {
    const newData = {
      isActive: false,
    };
    dispatch(CallApiUpdateAddressAction(addressDetail.id, newData));
    dispatch(GetListAddressAction());
  }

  return (
    <div className="view-detail-address">
      <Typography.Title level={4}>Xem chi tiết bến xe</Typography.Title>
      <div className="view-detail-address__form">
        <div className="view-detail-address__row">
          <div className="view-detail-address__row--item">
            <p>Tên bến xe:</p>
            <Input
              name="name"
              value={stateAddress.name}
              onChange={(event) =>
                setStateAddress((prev) => ({
                  ...prev,
                  name: event.target.value,
                }))
              }
            />
          </div>
          <div className="view-detail-address__row--item">
            <p>Tỉnh/ Thành phố:</p>
            <Input
              name="city"
              value={stateAddress.city}
              onChange={(event) =>
                setStateAddress((prev) => ({
                  ...prev,
                  city: event.target.value,
                }))
              }
            />
          </div>
        </div>
        <div className="view-detail-address__row">
          <div className="view-detail-address__row--item">
            <p>Trạng thái bến xe:</p>
            <Select
              defaultValue={selectActiveAddress ? "Đang hoạt động" : "Tạm ẩn"}
              className="router-confirm__top--selected"
              style={{ width:" 100%" }}
              onChange={(value) => setSelectActiveAddress(value)}
              options={[
                { label: "Đang hoạt động", value: true },
                { label: "Tạm ẩn", value: false },
              ]}
            />
          </div>
          <div className="view-detail-address__row--item">
            <p>Ngày tạo bến xe:</p>
            <Input
              disabled
              value={Date(addressDetail.created_at).slice(0, 24)}
            />
          </div>
        </div>
        <div className="view-detail-address__row">
          <div className="view-detail-address__row--item">
            <p>Ngày cập nhật bến xe:</p>
            <Input
              disabled
              value={Date(addressDetail.updated_at).slice(0, 24)}
            />
          </div>
        </div>
      </div>
      <div className="view-detail-address__bottom">
        <Button 
          className="view-detail-address__bottom--back"
          onClick={() => navigate("/admin/manage-bus-station")}
        >Quay lại</Button>
        <div className="view-detail-address__group">
          <Button 
            className="view-detail-address__bottom--disabled"
            onClick={handleDisableAddress}
          >Vô hiệu hóa bến xe</Button>
          <Button 
            className="view-detail-address__bottom--update" 
            onClick={handleUpdateAddress}
          >Cập nhật</Button>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailAddress;
