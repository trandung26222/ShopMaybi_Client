import React from "react";

function Newin({ props }) {
  return (
    props.newin && (
      <span className="z-[1] absolute left-0 text-[1.3em] font-[500]  bg-[#bf660e] px-2 py-1 rounded-md text-white">
        NEW-IN
      </span>
    )
  );
}

export default Newin;
