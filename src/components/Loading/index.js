import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Flex } from "antd";

function Loading() {
  return (
    <Flex justify="center" className="my-6">
      <CircularProgress size={18} sx={{ color: "gray" }} />
      <p className="ml-4 text-[1.4em]">Đang tải dữ liệu...</p>
    </Flex>
  );
}

export default Loading;
