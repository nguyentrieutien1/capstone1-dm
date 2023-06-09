import React from "react";
import "./style.scss";
import SlickSwiper from "./../../components/slickSwiper/index";
import { Typography, Input, Button  } from "antd";

const { TextArea } = Input;

const Contact = () => {
  return (
    <div className="contact">
      <SlickSwiper />
      <div className="contact__bus">
        <Typography.Title level={5} className="contact__bus__title">
          Liên hệ Mika Bus Lines
        </Typography.Title>
        <p className="contact__bus__thank">
          Cảm ơn bạn đã ghé thăm website của chúng tôi. Nếu bạn muốn nhận được
          thông tin từ chúng tôi dễ dàng, hãy điền vào form dưới đây.
        </p>
        <div className="contact__bus__form">
          <div className="contact__bus__left">
            <div className="contact__bus__left--control">
              <p>Họ và tên *</p>
              <Input placeholder="Nhập họ và tên" />
            </div>
            <div className="contact__bus__left--control">
              <p>Số điện thoại *</p>
              <Input placeholder="Nhập số điện thoại" />
            </div>
            <div className="contact__bus__left--control">
              <p>Email *</p>
              <Input placeholder="Nhập email" />
            </div>
            <div className="contact__bus__left--control">
              <p>Tiêu đề *</p>
              <Input placeholder="Nhập tiêu đề" />
            </div>
            <div className="contact__bus__left--control">
              <p>Nội dung *</p>
              <TextArea rows={4} placeholder="Nhập nội dung" />
            </div>
            <Button className="contact__bus__left--send"><i className="fas fa-check"></i>Gửi</Button>
          </div>
          <div className="contact__bus__right">
            <div className="contact__bus__right--map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.134385460534!2d106.70968287577641!3d10.801017958738187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528a50bffa563%3A0xd897a227921f218e!2zWGUgS2jDoWNoIFBoxrDGoW5nIFRyYW5nIFRy4bqhbSBIw6BuZyBYYW5o!5e0!3m2!1svi!2s!4v1682435809594!5m2!1svi!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              <Typography.Title level={3}>
                Công ty cổ phần xe khách Mika Bus Lines
              </Typography.Title>
              <p>Địa chỉ: Số 01 Tô Hiến Thành, Phường 3, Thành phố Đà Lạt, Tỉnh Lâm Đồng, Việt Nam.</p>
              <p>Điện thoại: <span>0987654321</span></p>
              <p>Fax: <span>0987654321</span></p>
              <p>Email: <span>hotro@mika.vn</span> | Website: <span>mikabus.vn</span></p>
              <p>Tổng đài đặt vé: <span className="contact__bus__right--phone">19001080</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
