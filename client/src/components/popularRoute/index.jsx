import React from "react";
import { Typography, Image } from "antd";
import "./style.scss";

const PopularRoute = () => {
  return (
    <div className="popular-route">
      <Typography.Title level={5} className="popular-route__title">
        TUYẾN PHỔ BIẾN
      </Typography.Title>
      <div className="popular-route__list">
        <div className="popular-route__item">
          <Image className="popular-route__item--img" preview={false} src="https://media.istockphoto.com/id/466190296/photo/seascape-sunset-at-halong-bay.jpg?s=612x612&w=0&k=20&c=quKNfkTZlQiHZ87BojL_ofdEm2dE7tKOsiEsl73dXgg=" alt="" />
          <div className="popular-route__group">
            <Typography.Title level={5} className="popular-route__group--title">
              SÀI GÒN ⇒ ĐÀ LẠT
            </Typography.Title>
            <div className="popular-route__content">
              <p><i className="fas fa-map-marker-alt"></i> 350km</p>
              <p><i className="far fa-clock"></i> 8h</p>
              <p><i className="fas fa-money-bill-wave-alt"></i> 500.000đ</p>
            </div>
          </div>
        </div>
        <div className="popular-route__item">
          <Image className="popular-route__item--img" preview={false} src="https://media.istockphoto.com/id/466190296/photo/seascape-sunset-at-halong-bay.jpg?s=612x612&w=0&k=20&c=quKNfkTZlQiHZ87BojL_ofdEm2dE7tKOsiEsl73dXgg=" alt="" />
          <div className="popular-route__group">
            <Typography.Title level={5} className="popular-route__group--title">
              SÀI GÒN ⇒ ĐÀ LẠT
            </Typography.Title>
            <div className="popular-route__content">
              <p><i className="fas fa-map-marker-alt"></i> 350km</p>
              <p><i className="far fa-clock"></i> 8h</p>
              <p><i className="fas fa-money-bill-wave-alt"></i> 500.000đ</p>
            </div>
          </div>
        </div>
        <div className="popular-route__item">
          <Image className="popular-route__item--img" preview={false} src="https://media.istockphoto.com/id/466190296/photo/seascape-sunset-at-halong-bay.jpg?s=612x612&w=0&k=20&c=quKNfkTZlQiHZ87BojL_ofdEm2dE7tKOsiEsl73dXgg=" alt="" />
          <div className="popular-route__group">
            <Typography.Title level={5} className="popular-route__group--title">
              SÀI GÒN ⇒ ĐÀ LẠT
            </Typography.Title>
            <div className="popular-route__content">
              <p><i className="fas fa-map-marker-alt"></i> 350km</p>
              <p><i className="far fa-clock"></i> 8h</p>
              <p><i className="fas fa-money-bill-wave-alt"></i> 500.000đ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularRoute;
