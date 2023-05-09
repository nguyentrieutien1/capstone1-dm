import React from "react"
import "./style.scss";
import { Typography, Image } from "antd";
import Quantity from './../../components/quantity/index';

const AboutUs = () => {
  return (
    <div className="about-us">
      <Typography.Title level={2} className="about-us__title">
        Mika
      </Typography.Title>
      <p className="about-us__intro">
        "Chất lượng là danh dự"
      </p>
      <div className="about-us__introduce">
        <Typography.Title level={4} className="about-us__title-section">
          Giới thiệu
        </Typography.Title>
        <Image preview={false} src="https://futabus.vn/_nuxt/img/aboutus-01.86f1c35.jpg" alt="" />
        <p>Công ty Phương Trang được thành lập năm 2001. Trải qua 20 năm phát triển đặt khách hàng làm trọng tâm, chúng tôi tự hào trở thành doanh nghiệp vận tải nòng cốt đóng góp tích cực vào sự phát triển chung của ngành vận tải nói riêng và nền kinh tế đất nước nói chung. Luôn cải tiến mang đến chất lượng dịch vụ tối ưu nhất dành cho khách hàng, Công ty Phương Trang được ghi nhận qua nhiều danh hiệu danh giá như “Top 5 Công ty Uy tín ngành Vận Tải và Logistics”, “Top 50 Nhãn hiệu nổi tiếng Việt Nam”, “Sản phẩm và Dịch vụ Chất lượng Châu Á”, “Top 10 Thương hiệu chất lượng Châu Á”,…</p>

        <Image preview={false} src="https://futabus.vn/_nuxt/img/aboutus-02.dabdcab.png" alt="" />
        <p>Tuân thủ phương châm “Chất lượng là danh dự”, Công ty Cổ phần Xe Khách Phương Trang – FUTA Bus Lines hiện đang khai thác hơn 60 tuyến vận tải hành khách liên tỉnh cố định trải dài từ Nam ra Bắc với hơn 250 phòng vé và trạm trung chuyển, hơn 2,000 đầu xe các loại, phục vụ hơn 20 triệu lượt khách mỗi năm.</p>

        <Image preview={false} src="https://futabus.vn/_nuxt/img/aboutus-04.54f0854.jpg" alt="" />
        <p>Song hành cùng sự phát triển của xe khách Phương Trang, chúng tôi nhận thấy một nhu cầu tất yếu là vận chuyển hàng hóa đi kèm với hành khách và hàng hóa không đi kèm với hành khách. Đáp ứng nhu cầu cũng như sự tin tưởng của khách hàng dành cho Phương Trang, Công ty Cổ phần Dịch vụ chuyển phát nhanh Phương Trang - FUTA Express được thành lập. Qua một thập kỷ phát triển, FUTA Express dần trở thành đơn vị vận chuyển hàng hóa đáng tin cậy, hỗ trợ khách hàng giao thương, trao gửi hàng hóa và phát triển kinh doanh. FUTA Express đã và đang đầu tư thêm nhiều phòng giao dịch, phương tiện và dịch vụ vận chuyển riêng biệt đảm bảo phục vụ khách hàng một cách nhanh chóng và an toàn.</p>

        <Image preview={false} src="https://futabus.vn/_nuxt/img/aboutus-08.7cbf1e8.png" alt="" />
        <p>Đối với mảng bất động sản, Phương Trang đã đạt những thành tựu nhất định với các sản phẩm chất lượng cao như Khu căn hộ Đà Nẵng Plaza, Khu căn hộ cao cấp New Pearl, Dự án Royal Garden 1 và 2, Khải Thông Plaza… và một số dự án đang hoàn thiện như Đà Nẵng Times Square, Khu đô thị mới Thuận Phước.</p>
      </div>
      <Quantity />
      <div className="about-us__service">
        <Typography.Title level={4} className="about-us__title-section">
          các dịch vụ của chúng tôi
        </Typography.Title>
        <div className="about-us__service__list">
          <div className="about-us__service__item">
            <p>xe khách liên tỉnh</p>
            <Image preview={false} src="https://futabus.vn/_nuxt/img/buslines.d9bb215.jpg" alt="" />
          </div>
          <div className="about-us__service__item">
            <p>chuyển phát nhanh</p>
            <Image preview={false} src="https://futabus.vn/_nuxt/img/express.04ed28d.jpg" alt="" />
          </div>
          <div className="about-us__service__item">
            <p>xe buýt nội thành</p>
            <Image preview={false} src="https://futabus.vn/_nuxt/img/citybus.9ec40fa.jpg" alt="" />
          </div>
          <div className="about-us__service__item">
            <p>taxi</p>
            <Image preview={false} src="https://futabus.vn/_nuxt/img/taxi.6e1775c.jpg" alt="" />
          </div>
          <div className="about-us__service__item">
            <p>trạm dừng chân</p>
            <Image preview={false} src="https://futabus.vn/_nuxt/img/reststop.7e2e4fc.jpg" alt="" />
          </div>
          <div className="about-us__service__item">
            <p>bất động sản</p>
            <Image preview={false} src="https://futabus.vn/_nuxt/img/realestate.d6ec426.jpg" alt="" />
          </div>
          <div className="about-us__service__item">
            <p>dịch vụ quảng cáo</p>
            <Image preview={false} src="https://futabus.vn/_nuxt/img/advertising.9aaf119.jpg" alt="" />
          </div>
          <div className="about-us__service__item">
            <p>mika group</p>
            <Image preview={false} src="https://futabus.vn/_nuxt/img/futagroup.f102cd2.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs