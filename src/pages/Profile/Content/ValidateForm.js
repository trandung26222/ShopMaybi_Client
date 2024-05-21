var messagecustom = (p) => {
  return <p className="text-[12px] text-red-400 my-[10px] font-[400]">{p}</p>;
};

const isNumber = (char) => {
  return /^\d$/.test(char);
};

export const phoneNumberValidator = (_, value) => {
  if (!/^\d+$/.test(value)) {
    return Promise.reject(messagecustom("Số điện thoại không hợp lệ"));
  }
  if (value.length < 8) {
    return Promise.reject(messagecustom("Số điện thoại phải có ít nhất 8 số"));
  }
  if (value.length > 10) {
    return Promise.reject(
      messagecustom("Số điện thoại không được vượt quá 10 số")
    );
  }
  return Promise.resolve();
};

export const usernameValidator = (_, value) => {
  if (isNumber(value[0]) === true) {
    return Promise.reject(
      messagecustom("Tên tài khoản không được bắt đầu bằng số")
    );
  }
  if (value.length < 6) {
    return Promise.reject(messagecustom("Tên tài khoản có ít nhất 6 ký tự"));
  }
  if (value.length > 10) {
    return Promise.reject(messagecustom("Tên tài khoản có tối đa 10 ký tự"));
  }
  return Promise.resolve();
};
