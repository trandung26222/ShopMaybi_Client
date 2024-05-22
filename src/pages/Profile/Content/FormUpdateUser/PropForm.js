import {
  usernameValidator,
  phoneNumberValidator,
  GioiTinhValidator,
  NgaysinhValidator,
} from "./ValidateForm";
import { UpdateProfile } from "./UpdateProfile";

const onFinish = (values) => {
  values.ngaysinh = values.ngaysinh.$d;
  console.log("Success:", values);
  UpdateProfile(values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export var propsMainForm = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 18,
  },
  style: {
    maxWidth: 510,
  },
  onFinish: onFinish,
  onFinishFailed: onFinishFailed,
  autoComplete: "off",
  labelAlign: "left",
  scrollToFirstError: true,
  initialValues: { username: localStorage.getItem("username") },
};
export var propUserName = {
  label: "Tên",
  name: "username",
  rules: [{ validator: usernameValidator }],
  wrapperCol: {
    span: 12,
  },
  hasFeedback: true,
};
export var propSodienthoai = {
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
export var propGioiTinh = {
  name: "gioitinh",
  label: "Giới tính",
  rules: [
    {
      validator: GioiTinhValidator,
    },
  ],
};
export var propNgaySinh = {
  name: "ngaysinh",
  label: "Ngày sinh",
  rules: [
    {
      validator: NgaysinhValidator,
    },
  ],
};
export var propLuu = {
  wrapperCol: {
    offset: 10,
  },
};

export const optionChonGioiTinh = [
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
