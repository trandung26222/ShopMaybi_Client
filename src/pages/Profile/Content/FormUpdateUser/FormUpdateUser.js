import React, { useEffect, useLayoutEffect } from "react";
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
            width: 90,
          }}
          options={optionChonGioiTinh}
          placeholder="Chọn giới tính"
        />
      </Form.Item>
      <Form.Item {...propNgaySinh}>
        <DatePicker placeholder="Chọn ngày sinh của bạn" />
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
