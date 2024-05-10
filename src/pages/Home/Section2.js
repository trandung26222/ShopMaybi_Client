import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
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
      text: "Hỗ trợ đổi hàng trong 07 ngày",
    },
    {
      src: "//theme.hstatic.net/1000341902/1001140246/14/policies_icon_4_thumb.png?v=754",
      h3: "Hotline: 0988888888",
      text: "Dịch vụ hỗ trợ bạn 24/7",
    },
  ];

  return (
    <section className="  w-full py-[60px] ">
      <Grid container spacing={2}>
        {items.map((item, index) => (
          <Grid xs={6} md={6} xl={3} key={index}>
            <div
              key={index}
              className="flex  gap-3 xs:items-start min-[650px]:items-center py-5"
            >
              <div>
                <img src={item.src} alt="" width="40" height="40" />
              </div>
              <div>
                <h3 className="font-[700]  text-[1.5em]">{item.h3}</h3>
                <div className="font-[400] text-[1.3em]">{item.text}</div>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </section>
  );
}

Section2.propTypes = {};

export default Section2;
