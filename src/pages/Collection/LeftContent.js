import React, { useEffect } from "react";
import { Checkbox } from "antd";
import { mucgia, loai } from "~/Data/DataCollectionFilter";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

function LeftContent({ settuychon, setarrCheck }) {
  var [soluongcheckbox, setsoluongcheckbox] = useState(5);
  var [expand, setExpand] = useState({ p: "Xem thêm", icon: faChevronDown });
  const onChange = (e, index) => {
    e.preventDefault();
    var { checked } = e.target;
    if (checked) {
      setarrCheck((pre) => [...pre, index]);
      settuychon("filterCost");
    } else {
      setarrCheck((pre) => pre.filter((item) => item !== index));
    }
  };

  return (
    <div className="left w-[250px] h-fit  hidden lg:block pl-3">
      <h1 className="text-[1.5em] my-2 font-[500]">MỨC GIÁ</h1>
      <div className="flex flex-col">
        {mucgia.map((item, index) => {
          return (
            <span key={index} className="my-1">
              <Checkbox
                onChange={(e) => {
                  onChange(e, index);
                }}
              >
                {item}
              </Checkbox>
            </span>
          );
        })}
      </div>
      <h1 className="text-[1.5em] my-2 font-[500]">LOẠI</h1>
      <div className="flex flex-col">
        {loai.slice(0, soluongcheckbox).map((item, index) => {
          return (
            <span key={index} className="my-1">
              <Checkbox onChange={onChange}>{item}</Checkbox>
            </span>
          );
        })}
      </div>

      <button
        className="flex items-center gap-2 text-[1.3em] mt-5"
        onClick={() => {
          if (soluongcheckbox === 5) {
            setsoluongcheckbox(loai.length);
            setExpand({ p: "Thu gọn", icon: faChevronUp });
          } else {
            setsoluongcheckbox(5);
            setExpand({ p: "Xem thêm", icon: faChevronDown });
          }
        }}
      >
        <p>{expand.p}</p>
        <FontAwesomeIcon
          className={`text-[12px] ${expand.p === "Thu gọn" && "mt-1"} `}
          icon={expand.icon}
        />
      </button>
    </div>
  );
}

export default LeftContent;
