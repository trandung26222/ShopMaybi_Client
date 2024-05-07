import React from "react";
import PropTypes from "prop-types";

function Section2(props) {
  var items = [
    {
      src: "//theme.hstatic.net/1000341902/1001140246/14/policies_icon_1_thumb.png?v=754",
      h3: "Vận chuyển nhanh chóng",
      text: "Nhận hàng trong vòng 3 ngày",
    },
    {
      src: "//theme.hstatic.net/1000341902/1001140246/14/policies_icon_2_thumb.png?v=754",
      h3: "Nhiều khuyến mãi hấp dẫn",
      text: "Ưu đãi lên đến 50% - Giá chỉ từ 89K",
    },
    {
      src: "//theme.hstatic.net/1000341902/1001140246/14/policies_icon_3_thumb.png?v=754",
      h3: "Bảo đảm chất lượng",
      text: "Hỗ trợ đổi hàng trong vòng 07 ngày",
    },
    {
      src: "//theme.hstatic.net/1000341902/1001140246/14/policies_icon_4_thumb.png?v=754",
      h3: "Hotline: 0988888888",
      text: "Dịch vụ hỗ trợ bạn 24/7",
    },
  ];

  return (
    <section className="flex justify-between w-full py-[33px] mb-3 px-3">
      {items.map((item, index) => (
        <div key={index} className="flex justify-between gap-2 items-center">
          <div className="">
            <img src={item.src} alt="" width="40" height="40" />
          </div>
          <div className="policies-info">
            <h3 className="font-[700] text-[16px]">{item.h3}</h3>
            <div className="font-[400] text-[14px]">{item.text}</div>
          </div>
        </div>
      ))}
    </section>
  );
}

Section2.propTypes = {};

export default Section2;
