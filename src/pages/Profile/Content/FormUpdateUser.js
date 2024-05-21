import React from "react";
import { Button, Form, Input, Select, DatePicker } from "antd";
import { phoneNumberValidator, usernameValidator } from "./ValidateForm";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const handlechoosegioitinh = (checkedValues) => {
  console.log("checked = ", checkedValues);
};
const handlechonngaysinh = (date, dateString) => {
  console.log(date, dateString);
};
const onValuesChange = (changedValues, allValues) => {
  console.log(changedValues, allValues);
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

var propsMainForm = {
  name: "basic",
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 18,
  },
  style: {
    maxWidth: 510,
  },
  initialValues: {
    remember: true,
  },
  onFinish: onFinish,
  onFinishFailed: onFinishFailed,
  autoComplete: "off",
  // onValuesChange: onValuesChange,
  labelAlign: "left",
};
var propUserName = {
  label: "Tên",
  name: "username",
  rules: [{ validator: usernameValidator }],
  wrapperCol: {
    span: 12,
  },
  hasFeedback: true,
};
var propSodienthoai = {
  label: "Số điện thoại",
  name: "phonenumber",
  rules: [
    {
      validator: phoneNumberValidator,
    },
  ],

  wrapperCol: {
    span: 12,
  },
  hasFeedback: true,
};
var propGioiTinh = {
  name: "remember",
  label: "Giới tính",
  valuePropName: "checked",
  rules: [
    {
      required: true,
      message: "Vui lòng chọn giới tính của bạn!",
    },
  ],
};
var propNgaySinh = {
  name: "remember",
  label: "Ngày sinh",
  valuePropName: "checked",
  rules: [
    {
      required: true,
      message: "Vui lòng chọn ngày sinh của bạn!",
    },
  ],
};
var propLuu = {
  wrapperCol: {
    offset: 10,
  },
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
