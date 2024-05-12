import React from "react";
import { Checkbox } from "antd";
import { mucgia, loai } from "../../components/Data/DataCollectionFilter";

function LeftContent() {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div className="left w-[250px] h-fit  hidden lg:block pl-3">
      <h1 className="text-[1.5em] my-2 font-[500]">MỨC GIÁ</h1>
      <div className="flex flex-col">
        {mucgia.map((item, index) => {
          return (
            <span key={index} className="my-1">
              <Checkbox onChange={onChange}>{item}</Checkbox>
            </span>
          );
        })}
      </div>
      <h1 className="text-[1.5em] my-2 font-[500]">LOẠI</h1>
      <div className="flex flex-col">
        {loai.map((item, index) => {
          return (
            <span key={index} className="my-1">
              <Checkbox onChange={onChange}>{item}</Checkbox>
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default LeftContent;
