import React from "react";
import { Typography } from "antd";
import "./style.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const PopularDestination = () => {
  return (
    <div className="pop-des">
      <Typography.Title level={5} className="pop-des__title">
        ĐIỂM ĐẾN PHỔ BIẾN
      </Typography.Title>
      <p className="pop-des__intro">
        Gợi ý những điểm du lịch được ưa thích trong năm
      </p>

      <div className="pop-des__list">
        <Swiper
          navigation={true}
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={60}
          slidesPerView="auto"
        >
          <SwiperSlide
            className="pop-des__item"
            style={{
              backgroundImage:
                'url("https://futabus.vn/_nuxt/img/commonDest_item11.7baf682.png")',
            }}
          >
            <div className="pop-des__item__content">
              <p>
                <i className="fas fa-map-marker-alt"></i>
                TP. Hồ Chí Minh
              </p>
              <Typography.Title level={5} className="">
                Sài gòn
              </Typography.Title>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="pop-des__item"
            style={{
              backgroundImage:
                'url("https://futabus.vn/_nuxt/img/commonDest_item11.7baf682.png")',
            }}
          >
            <div className="pop-des__item__content">
              <p>
                <i className="fas fa-map-marker-alt"></i>
                TP. Hồ Chí Minh
              </p>
              <Typography.Title level={5} className="">
                Sài gòn
              </Typography.Title>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="pop-des__item"
            style={{
              backgroundImage:
                'url("https://futabus.vn/_nuxt/img/commonDest_item11.7baf682.png")',
            }}
          >
            <div className="pop-des__item__content">
              <p>
                <i className="fas fa-map-marker-alt"></i>
                TP. Hồ Chí Minh
              </p>
              <Typography.Title level={5} className="">
                Sài gòn
              </Typography.Title>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="pop-des__item"
            style={{
              backgroundImage:
                'url("https://futabus.vn/_nuxt/img/commonDest_item11.7baf682.png")',
            }}
          >
            <div className="pop-des__item__content">
              <p>
                <i className="fas fa-map-marker-alt"></i>
                TP. Hồ Chí Minh
              </p>
              <Typography.Title level={5} className="">
                Sài gòn
              </Typography.Title>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="pop-des__item"
            style={{
              backgroundImage:
                'url("https://futabus.vn/_nuxt/img/commonDest_item11.7baf682.png")',
            }}
          >
            <div className="pop-des__item__content">
              <p>
                <i className="fas fa-map-marker-alt"></i>
                TP. Hồ Chí Minh
              </p>
              <Typography.Title level={5} className="">
                Sài gòn
              </Typography.Title>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="pop-des__item"
            style={{
              backgroundImage:
                'url("https://futabus.vn/_nuxt/img/commonDest_item11.7baf682.png")',
            }}
          >
            <div className="pop-des__item__content">
              <p>
                <i className="fas fa-map-marker-alt"></i>
                TP. Hồ Chí Minh
              </p>
              <Typography.Title level={5} className="">
                Sài gòn
              </Typography.Title>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="pop-des__item"
            style={{
              backgroundImage:
                'url("https://futabus.vn/_nuxt/img/commonDest_item11.7baf682.png")',
            }}
          >
            <div className="pop-des__item__content">
              <p>
                <i className="fas fa-map-marker-alt"></i>
                TP. Hồ Chí Minh
              </p>
              <Typography.Title level={5} className="">
                Sài gòn
              </Typography.Title>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="pop-des__item"
            style={{
              backgroundImage:
                'url("https://futabus.vn/_nuxt/img/commonDest_item11.7baf682.png")',
            }}
          >
            <div className="pop-des__item__content">
              <p>
                <i className="fas fa-map-marker-alt"></i>
                TP. Hồ Chí Minh
              </p>
              <Typography.Title level={5} className="">
                Sài gòn
              </Typography.Title>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="pop-des__item"
            style={{
              backgroundImage:
                'url("https://futabus.vn/_nuxt/img/commonDest_item11.7baf682.png")',
            }}
          >
            <div className="pop-des__item__content">
              <p>
                <i className="fas fa-map-marker-alt"></i>
                TP. Hồ Chí Minh
              </p>
              <Typography.Title level={5} className="">
                Sài gòn
              </Typography.Title>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="pop-des__item"
            style={{
              backgroundImage:
                'url("https://futabus.vn/_nuxt/img/commonDest_item11.7baf682.png")',
            }}
          >
            <div className="pop-des__item__content">
              <p>
                <i className="fas fa-map-marker-alt"></i>
                TP. Hồ Chí Minh
              </p>
              <Typography.Title level={5} className="">
                Sài gòn
              </Typography.Title>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="pop-des__item"
            style={{
              backgroundImage:
                'url("https://futabus.vn/_nuxt/img/commonDest_item11.7baf682.png")',
            }}
          >
            <div className="pop-des__item__content">
              <p>
                <i className="fas fa-map-marker-alt"></i>
                TP. Hồ Chí Minh
              </p>
              <Typography.Title level={5} className="">
                Sài gòn
              </Typography.Title>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="pop-des__item"
            style={{
              backgroundImage:
                'url("https://futabus.vn/_nuxt/img/commonDest_item11.7baf682.png")',
            }}
          >
            <div className="pop-des__item__content">
              <p>
                <i className="fas fa-map-marker-alt"></i>
                TP. Hồ Chí Minh
              </p>
              <Typography.Title level={5} className="">
                Sài gòn
              </Typography.Title>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="pop-des__item"
            style={{
              backgroundImage:
                'url("https://futabus.vn/_nuxt/img/commonDest_item11.7baf682.png")',
            }}
          >
            <div className="pop-des__item__content">
              <p>
                <i className="fas fa-map-marker-alt"></i>
                TP. Hồ Chí Minh
              </p>
              <Typography.Title level={5} className="">
                Sài gòn
              </Typography.Title>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default PopularDestination;
