import React from "react";
import SlickSwiper from "./../../components/slickSwiper/index";
import { Typography, Image } from "antd";
import futaVnPay from "../../assets/images/futa-vnpay.png";
import square from "../../assets/images/square.png";
import NewsOne from "../../assets/images/news-1.png";
import NewsTwo from "../../assets/images/news-2.jpg";
import NewsThree from "../../assets/images/news-3.png";
import NewsFour from "../../assets/images/news-4.png";
import UpdateOne from "../../assets/images/update-1.png";
import UpdateTwo from "../../assets/images/update-2.png";
import UpdateThree from "../../assets/images/update-3.png";
import UpdateFour from "../../assets/images/update-4.png";
import "./style.scss";

const News = () => {
  return (
    <div>
      <SlickSwiper />
      {/* start tin nổi bật */}
      <div className="hot-news">
        <Typography.Title className="hot-news__title" level={5}>
          <img src={square} alt="" />
          Tin nổi bật
        </Typography.Title>
        <div className="hot-news__list">
          <div className="hot-news__list__left">
            <Image preview={false} src={futaVnPay} alt="" />
            <Typography.Title className="" level={5}>
              TẶNG MÃ KHUYẾN MÃI TRỰC TIẾP KHI&nbsp;THANH TOÁN MUA VÉ FUTA BUS
              LINES BẰNG&nbsp;VNPAY QR
            </Typography.Title>
            <p>
              Tháng 4 được xem là thời gian tuyệt đẹp dành cho du khách tham
              quan và trải nghiệm những điều mới mẻ từ các địa điểm du lịch.
              Những ngày đầu tháng tư, khi cơn mưa rào đã dần ẩn mình để trả lại
              bầu không khí trong trẻo, đầy cảnh sắc của trời về với thiên
              nhiên. Cả miền Bắc, miền Trung, miền Nam đều ngập tràn những tia
              nắng ấm áp đầu hè.
            </p>
          </div>
          <div className="hot-news__list__right">
            <div className="hot-news__list__item">
              <Image preview={false} src={NewsOne} alt="" />
              <div className="hot-news__list__item--group">
                <p>PHƯƠNG TRANG CHÍNH THỨC MỞ CỔNG GIỮ CHỖ...</p>
                <span>31/10/2022</span>
              </div>
            </div>
            <div className="hot-news__list__item">
              <Image preview={false} src={NewsTwo} alt="" />
              <div className="hot-news__list__item--group">
                <p>MỞ VÍ MOMO - MUA VÉ PHƯƠNG TRANG LIỀN TAY</p>
                <span>04/06/2022</span>
              </div>
            </div>
            <div className="hot-news__list__item">
              <Image preview={false} src={NewsThree} alt="" />
              <div className="hot-news__list__item--group">
                <p>PHƯƠNG TRANG THỰC HIỆN “CHUYẾN XE NGHĨA TÌNH, KẾT...</p>
                <span>23/10/2021</span>
              </div>
            </div>
            <div className="hot-news__list__item">
              <Image preview={false} src={NewsFour} alt="" />
              <div className="hot-news__list__item--group">
                <p>PHƯƠNG TRANG PHÁT HÀNH THẺ XE BUÝT – TIỆN LỢI VÀ TIẾT KIỆM</p>
                <span>30/04/2021</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* start update */}
      <div className="update">
        <Typography.Title className="hot-news__title" level={5}>
          <img src={square} alt="" />
          Mới cập nhật
        </Typography.Title>
        <div className="update__list">
          <div className="update__item">
            <Image preview={false} src={UpdateOne} alt="" />
            <p>TẬP ĐOÀN PHƯƠNG TRANG – FUTA GROUP KHẲNG ĐỊNH GIÁ TRỊ...</p>
            <span>19/04/2023</span>
          </div>
          <div className="update__item">
            <Image preview={false} src={UpdateTwo} alt="" />
            <p>ƯU ĐÃI ĐẶC BIỆT CỦA VNPAY – MUA VÉ QUA APP FUTA GIẢM NGAY...</p>
            <span>19/04/2023</span>
          </div>
          <div className="update__item">
            <Image preview={false} src={UpdateThree} alt="" />
            <p>NHẬP MÃ MOMOPT - GIẢM 20K CHO ĐƠN TỪ 200K VỚI LẦN ĐẦU...</p>
            <span>14/04/2023</span>
          </div>
          <div className="update__item">
            <Image preview={false} src={UpdateFour} alt="" />
            <p>LỄ KHÔNG TĂNG GIÁ CÒN GIẢM NGAY 10K KHI MUA VÉ PHƯƠNG...</p>
            <span>10/04/2023</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
