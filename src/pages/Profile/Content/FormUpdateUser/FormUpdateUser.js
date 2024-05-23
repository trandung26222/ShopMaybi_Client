import React from "react";
import { Button, Form, Input, Select, DatePicker } from "antd";
import {
  propsMainForm,
  propGioiTinh,
  propLuu,
  propNgaySinh,
  propSodienthoai,
  propUserName,
} from "../FormUpdateUser/PropForm";
import { optionChonGioiTinh } from "../FormUpdateUser/PropForm";
import { useSelector } from "react-redux";
import moment from "moment";

const dateFormat = "YYYY/MM/DD";

const FormUpdateUser = () => {
  var CurrentUser = useSelector((s) => s.CurrentUserSlice.CurrentUser);
  let date = new Date(CurrentUser.ngaysinh);
  const initngaysinh = moment(date.toString());

  return (
    <Form
      {...propsMainForm}
      initialValues={{
        username: CurrentUser.username,
        phonenumber: CurrentUser.phonenumber,
        gioitinh: CurrentUser.gioitinh,
        ngaysinh: initngaysinh,
      }}
    >
      <Form.Item {...propUserName}>
        <Input placeholder="Nhập tên của bạn" />
      </Form.Item>
      <Form.Item {...propSodienthoai}>
        <Input placeholder="Nhập số điện thoại của bạn" />
      </Form.Item>
      <Form.Item {...propGioiTinh}>
        <Select
          style={{
            width: 90,
          }}
          options={optionChonGioiTinh}
          placeholder="Chọn giới tính"
        />
      </Form.Item>
      <Form.Item {...propNgaySinh}>
        <DatePicker format={dateFormat} placeholder="Chọn ngày sinh của bạn" />
      </Form.Item>
      <Form.Item {...propLuu}>
        <Button type="primary" htmlType="submit">
          Lưu
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormUpdateUser;
