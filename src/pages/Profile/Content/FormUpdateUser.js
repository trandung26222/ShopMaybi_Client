import React from "react";
import { Button, Form, Input, Select, DatePicker } from "antd";
import {
  propsMainForm,
  propGioiTinh,
  propLuu,
  propNgaySinh,
  propSodienthoai,
  propUserName,
} from "./PropForm";

const handlechoosegioitinh = (checkedValues) => {
  console.log("checked = ", checkedValues);
};
const handlechonngaysinh = (date, dateString) => {
  console.log(date, dateString);
};

const FormUpdateUser = () => {
  return (
    <Form {...propsMainForm}>
      <Form.Item {...propUserName}>
        <Input placeholder="Nhập tên của bạn" />
      </Form.Item>
      <Form.Item {...propSodienthoai}>
        <Input placeholder="Nhập số điện thoại của bạn" />
      </Form.Item>
      <Form.Item {...propGioiTinh}>
        <Select
          style={{
            width: 120,
          }}
          options={options}
          onChange={handlechoosegioitinh}
          placeholder="Chọn giới tính"
        />
      </Form.Item>
      <Form.Item {...propNgaySinh}>
        <DatePicker
          placeholder="Chọn ngày sinh của bạn"
          onChange={handlechonngaysinh}
        />
      </Form.Item>
      <Form.Item {...propLuu}>
        <Button type="primary" htmlType="submit">
          Lưu
        </Button>
      </Form.Item>
    </Form>
  );
};

const options = [
  {
    label: "Nam",
    value: "nam",
  },
  {
    label: "Nữ",
    value: "nu",
  },
  {
    label: "Khác",
    value: "other",
  },
];
export default FormUpdateUser;
