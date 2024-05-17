import React from "react";
import { Tooltip } from "@mui/material";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import { MappingColors } from "./MappingColor";

function ColorItem({ props, setindexColorClick, indexColorClick }) {
  return (
    <div className="flex gap-2 items-center">
      {props.color.map((item, index) => {
        return (
          <button
            key={index}
            className="cursor-pointer relative inline-flex"
            onClick={() => {
              if (setindexColorClick) {
                setindexColorClick(index);
              }
            }}
          >
            <Tooltip
              placement="top"
              arrow
              title={<div>{props.color[index]}</div>}
            >
              <div
                className={`absolute ${
                  indexColorClick === index ? "opacity-100" : "opacity-0"
                } rounded-full border border-gray-700 w-full h-full transition-opacity duration-300 hover:opacity-100`}
              ></div>
            </Tooltip>

            <Brightness1Icon
              sx={{
                color: MappingColors[props.color[index]],
              }}
            />
          </button>
        );
      })}
    </div>
  );
}

export default ColorItem;
