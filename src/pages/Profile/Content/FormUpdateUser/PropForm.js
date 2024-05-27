import {
  usernameValidator,
  phoneNumberValidator,
  GioiTinhValidator,
  NgaysinhValidator,
} from "./ValidateForm";

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
  onFinishFailed: onFinishFailed,
  autoComplete: "off",
  labelAlign: "left",
  scrollToFirstError: true,
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
