import { message } from "antd";

// show thông báo toast
export const showMessage = (type, content) => {
  const messageAPI = message[type];
  messageAPI(content);
};

export const typeMessage = {
  success: "success",
  error: "error",
  warning: "warning",
};
