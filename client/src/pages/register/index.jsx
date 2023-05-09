import React from "react";
import { Form, Button, Input, Select } from "antd";
import "./style.scss";
import { useDispatch } from "react-redux";
import { CallApiRegisterUser } from "./../../redux/reducers/userReducer";

const { Option } = Select;

const Register = () => {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(CallApiRegisterUser(values));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="register">
      <div className="register__container">
        <Form
          name="register-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <p className="register__title">Đăng Ký</p>

          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item
            name="IdCard"
            rules={[{ required: true, message: "Please input your Id Card!" }]}
          >
            <Input placeholder="IdCard" />
          </Form.Item>
          <Form.Item
            name="phoneNumber"
            rules={[
              { required: true, message: "Please input your phone number!" },
            ]}
          >
            <Input placeholder="Phone Number" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="city"
            rules={[{ required: true, message: "Please input your city!" }]}
          >
            <Input placeholder="City" />
          </Form.Item>
          <Form.Item
            name="district"
            rules={[{ required: true, message: "Please input your district!" }]}
          >
            <Input placeholder="District" />
          </Form.Item>
          <Form.Item name="role">
            {/* <Typography.Title
              level={5}
            >
              Điểm đi
            </Typography.Title> */}
            <Select>
              <Option value={2}>Tài xế</Option>
              <Option value={3}>Thành viên</Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <div className="register__button-submit">
              <Button type="primary" htmlType="submit">
                Đăng ký
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
