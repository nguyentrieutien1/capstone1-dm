import React from "react";
import { Typography, Image, Button } from "antd";
import "./style.scss";

const UpdateNews = () => {
  return (
    <div className="update-news">
      <Typography.Title level={5} className="update-news__title">
        TIN TỨC CẬP NHẬT
      </Typography.Title>
      <div className="update-news__list">
        <div className="update-news__item">
          <Image
            className="update-news__item--img"
            preview={false}
            src="https://cdn.vato.vn/google-storage/facecar-29ae7.appspot.com/images/761094a3-f0c8-4f94-9ef1-10e05dc8cb64-1681893338738.png"
            alt=""
          />
          <p>TẬP ĐOÀN PHƯƠNG TRANG – FUTA GROUP KHẲNG ĐỊNH GIÁ TRỊ THƯƠNG</p>
        </div>
        <div className="update-news__item">
          <Image
            className="update-news__item--img"
            preview={false}
            src="https://cdn.vato.vn/google-storage/facecar-29ae7.appspot.com/images/12befd47-eadf-4a4d-b706-cd0d6c230f33-1681893912481.png"
            alt=""
          />
          <p>ƯU ĐÃI ĐẶC BIỆT CỦA VNPAY – MUA VÉ QUA APP FUTA GIẢM NGAY 10K</p>
        </div>
        <div className="update-news__item">
          <Image
            className="update-news__item--img"
            preview={false} src="https://cdn.vato.vn/google-storage/facecar-29ae7.appspot.com/images/13b24454-9a1a-4826-bea9-2a984dfd02b6-1681437080748.png"
            alt=""
          />
          <p>NHẬP MÃ MOMOPT&nbsp;- GIẢM 20K CHO ĐƠN TỪ 200K VỚI LẦN ĐẦU MUA VÉ</p>
        </div>
      </div>
      <Button className="update-news__show">Xem thêm</Button>
      <div className="update-news__list-icon">
        <div className="update-news__list-icon__item">
          <div className="update-news__list-icon__item--icon">
            {/* <i className="fas fa-wreath"></i> */}
            <i className="fas fa-user-shield"></i>
          </div>
          <div className="update-news__list-icon__item--group">
            <Typography.Title level={5} className="">
              NHỮNG QUY ĐỊNH CHUNG
            </Typography.Title>
            <p>Quy định về việc đặt mua vé và quy định chung</p>
          </div>
        </div>
        <div className="update-news__list-icon__item">
          <div className="update-news__list-icon__item--icon">
            <i className="fas fa-truck"></i>
          </div>
          <div className="update-news__list-icon__item--group">
            <Typography.Title level={5} className="">
              VẬN CHUYỂN HÀNG HÓA
            </Typography.Title>
            <p>Quy định về hàng hóa và an toàn vận chuyển</p>
          </div>
        </div>
        <div className="update-news__list-icon__item">
          <div className="update-news__list-icon__item--icon">
            <i className="fas fa-suitcase-rolling"></i>
          </div>
          <div className="update-news__list-icon__item--group">
            <Typography.Title level={5} className="">
              THÔNG TIN HÀNH LÝ
            </Typography.Title>
            <p>Quy định về hành lý xách tay và ký gửi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateNews;
