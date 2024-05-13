import React from "react";
import { Select } from "antd";

function TieuDeVaSapXep({ nametypography, settuychon }) {
  var options = [
    {
      value: "default",
      label: "Tùy chọn",
    },
    {
      value: "az",
      label: "Tên A -> Z",
    },
    {
      value: "za",
      label: "Tên Z -> A",
    },
    {
      value: "giatangdan",
      label: "Giá tăng dần",
    },
    {
      value: "giagiamdan",
      label: "Giá giảm dần",
    },
    {
      value: "hangmoi",
      label: "Hàng mới",
    },
  ];
  const handleChange = (value) => {
    settuychon(value);
  };
  return (
    <div className="flex justify-between items-center mb-4 ">
      <h2 className="text-[2.5em]">{nametypography}</h2>
      <div className="text-[1.3em] flex items-center gap-3">
        <p>Sắp xếp:</p>
        <Select
          defaultValue="Tùy chọn"
          style={{
            width: 120,
          }}
          onChange={handleChange}
          options={options}
        />
      </div>
    </div>
  );
}

export default TieuDeVaSapXep;
