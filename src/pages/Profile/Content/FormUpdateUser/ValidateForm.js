var messagecustom = (p) => {
  return (
    <p className="text-[12px] text-[rgba(255, 121, 103, 0.8)] my-[10px] font-[400]">
      {p}
    </p>
  );
};

const isNumber = (char) => {
  return /^\d$/.test(char);
};

export const phoneNumberValidator = (_, value) => {
  if (!/^\d+$/.test(value)) {
    return Promise.reject(messagecustom("Số điện thoại không hợp lệ!"));
  }
  if (value.length < 8) {
    return Promise.reject(messagecustom("Số điện thoại phải có ít nhất 8 số!"));
  }
  if (value.length > 10) {
    return Promise.reject(
      messagecustom("Số điện thoại không được vượt quá 10 số!")
    );
  }
  return Promise.resolve();
};

export const usernameValidator = (_, value) => {
  if (!value) return Promise.reject(messagecustom("Vui lòng nhập tên!"));
  if (isNumber(value[0]) === true) {
    return Promise.reject(
      messagecustom("Tên tài khoản không được bắt đầu bằng số!")
    );
  }
  if (value.length < 6) {
    return Promise.reject(messagecustom("Tên tài khoản có ít nhất 6 ký tự!"));
  }
  if (value.length > 20) {
    return Promise.reject(messagecustom("Tên tài khoản có tối đa 20 ký tự!"));
  }
  return Promise.resolve();
};
export const GioiTinhValidator = (_, value) => {
  if (!value) {
    return Promise.reject(messagecustom("Vui lòng chọn giới tính!"));
  }
  return Promise.resolve();
};

export const NgaysinhValidator = (_, value) => {
  if (!value) return Promise.reject(messagecustom("Vui lòng chọn ngày sinh!"));

  var ngayduocchon = new Date(value.$d);
  ngayduocchon = new Date(
    ngayduocchon.getFullYear(),
    ngayduocchon.getMonth(),
    ngayduocchon.getDate()
  );
  var ngayhomnay = new Date();
  ngayhomnay = new Date(
    ngayhomnay.getFullYear(),
    ngayhomnay.getMonth(),
    ngayhomnay.getDate()
  );

  if (ngayduocchon.getTime() >= ngayhomnay.getTime()) {
    return Promise.reject(messagecustom("Ngày sinh không hợp lệ!"));
  }
  return Promise.resolve();
};
