import React from "react";
import { Typography, Image } from "antd";
import DaThongBao from "../../assets/images/DaThongBao.png";
import iconFb from "../../assets/images/facebook.png";
import iconYoutube from "../../assets/images/youtube.png";
import { Link } from "react-router-dom";
import "./style.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__top__contact">
            <Typography.Title level={5}>
              TỔNG ĐÀI ĐẶT VÉ VÀ CSKH
              <p>19001080</p>
            </Typography.Title>
            <Image preview={false} src={DaThongBao} alt="da-thong-bao" />
          </div>
          <div className="footer__top__desc">
            <p>CÔNG TY CỔ PHẦN XE KHÁCH MIKA BUS LINES</p>
            <p>
              Địa chỉ: Số 01 Tô Hiến Thành, Phường 3, Thành phố Đà Lạt, Tỉnh Lâm
              Đồng, Việt Nam.
            </p>
            <p>
              Email: <Link to="/">hotro@mika.vn</Link>
            </p>
            <p>Điện thoại: 098765431 &nbsp;&nbsp;&nbsp; Fax: 013546789</p>
          </div>
        </div>
        <div className="footer__center">
          <Typography.Title level={5}>KẾT NỐI VỚI CHÚNG TÔI</Typography.Title>
          <div>
            <Image preview={false} src={iconFb} alt="" />
            <Image preview={false} src={iconYoutube} alt="" />
          </div>
        </div>
        <div className="footer__bottom">
          <Typography.Title level={5}>MIKA BUS LINES</Typography.Title>
          <div className="footer__bottom__list">
            <ul>
              <li>
              <i class="fas fa-angle-double-right" style={{color: "#637280"}}></i> Về chúng tôi
              </li>
              <li>
                <i className="fas fa-angle-double-right" style={{color: "#637280"}}></i> Lịch trình
              </li>
              <li>
                <i className="fas fa-angle-double-right" style={{color: "#637280"}}></i> Tin tức
              </li>
              <li>
                <i className="fas fa-angle-double-right" style={{color: "#637280"}}></i> Tuyển dụng
              </li>
              <li>
                <i className="fas fa-angle-double-right" style={{color: "#637280"}}></i> Tra cứu thông tin
                đặt vé
              </li>
            </ul>
            <ul>
              <li>
                <i className="fas fa-angle-double-right" style={{color: "#637280"}}></i> Điều khoản sử dụng
              </li>
              <li>
                <i className="fas fa-angle-double-right" style={{color: "#637280"}}></i> Hỏi đáp
              </li>
              <li>
                <i className="fas fa-angle-double-right" style={{color: "#637280"}}></i> Hướng dẫn đặt vé
                trên Web
              </li>
              <li>
                <i className="fas fa-angle-double-right" style={{color: "#637280"}}></i> Hướng dẫn đặt vé
                trên App
              </li>
              <li>
                <i className="fas fa-angle-double-right" style={{color: "#637280"}}></i> Mạng lưới văn
                phòng
              </li>
            </ul>
          </div>
        </div>
        <p className="footer__intro">
          © 2023 | Bản quyền thuộc về Công ty Cổ Phần Xe Khách Mika Bus Lines |
          www.mikabus.vn
        </p>
      </div>
    </div>
  );
};

export default Footer;
