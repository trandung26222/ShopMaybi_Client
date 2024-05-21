import { usernameValidator, phoneNumberValidator } from "./ValidateForm";

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export var propsMainForm = {
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
export var propNgaySinh = {
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
export var propLuu = {
  wrapperCol: {
    offset: 10,
  },
};
