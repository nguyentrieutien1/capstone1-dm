import React from "react";
import { Typography } from "antd";
import "./style.scss";

const Quantity = () => {
  return (
    <div className="quantity">
      <Typography.Title level={3} className="quantity__title">
        MIKA - CHẤT LƯỢNG LÀ DANH DỰ
      </Typography.Title>
      <div className="quantity__list">
        <div className="quantity__item">
          <div className="quantity__item--icon">
            <i className="fas fa-users"></i>
          </div>
          <div className="quantity__group">
            <Typography.Title level={3} className="">
              20M
            </Typography.Title>
            <div>
              <Typography.Title level={5} className="">
                Hơn 20 triệu lượt khách
              </Typography.Title>
              <p>Phương Trang phục vụ hơn 20 triệu lượt khách/bình quân 1 năm trên toàn quốc</p>
            </div>
          </div>
        </div>

        <div className="quantity__item">
          <div className="quantity__item--icon">
            <i className="fas fa-gas-pump"></i>
          </div>
          <div className="quantity__group">
            <Typography.Title level={3} className="">
              250
            </Typography.Title>
            <div>
              <Typography.Title level={5} className="">
                Hơn 250 phòng vé, phòng hàng
              </Typography.Title>
              <p>Phương Trang có hơn 250 phòng vé, trạm trung chuyển, bến xe... trên toàn hệ thống</p>
            </div>
          </div>
        </div>

        <div className="quantity__item">
          <div className="quantity__item--icon">
            <i className="fas fa-bus"></i>
          </div>
          <div className="quantity__group">
            <Typography.Title level={3} className="">
              1,600
            </Typography.Title>
            <div>
              <Typography.Title level={5} className="">
                Hơn 1,600 chuyến mỗi ngày
              </Typography.Title>
              <p>Phương Trang phục vụ hơn 1600 chuyến xe đường dài và liên tỉnh mỗi ngày</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quantity;
