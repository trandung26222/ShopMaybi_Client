import React from "react";
import PropTypes from "prop-types";

function Section2(props) {
  return (
    <section className="flex gap-[18px] w-full justify-center py-[33px] mb-3">
      <div className="policies-item">
        <div className="policies-image">
          <img
            src="//theme.hstatic.net/1000341902/1001140246/14/policies_icon_1_thumb.png?v=754"
            width="40"
            height="40"
            alt=""
          />
        </div>
        <div className="policies-info">
          <h3 className="policies-title">Vận chuyển nhanh chóng</h3>
          <div className="policies-desc">Nhận hàng trong vòng 3 ngày</div>
        </div>
      </div>
      <div className="policies-item">
        <div className="policies-image">
          <img
            src="//theme.hstatic.net/1000341902/1001140246/14/policies_icon_2_thumb.png?v=754"
            width="40"
            height="40"
            alt=""
          />
        </div>
        <div className="policies-info">
          <h3 className="policies-title">Nhiều khuyến mãi hấp dẫn</h3>
          <div className="policies-desc">
            Ưu đãi lên đến 50% - Giá chỉ từ 89K{" "}
          </div>
        </div>
      </div>
      <div className="policies-item">
        <div className="policies-image">
          <img
            src="//theme.hstatic.net/1000341902/1001140246/14/policies_icon_3_thumb.png?v=754"
            width="40"
            height="40"
            alt=""
          />
        </div>
        <div className="policies-info">
          <h3 className="policies-title">Bảo đảm chất lượng</h3>
          <div className="policies-desc">
            Hỗ trợ đổi hàng trong vòng 07 ngày
          </div>
        </div>
      </div>
      <div className="policies-item">
        <div className="policies-image">
          <img
            src="//theme.hstatic.net/1000341902/1001140246/14/policies_icon_4_thumb.png?v=754"
            alt=""
            width="40"
            height="40"
          />
        </div>
        <div className="policies-info">
          <h3 className="policies-title">Hotline: 0911571166</h3>
          <div className="policies-desc">Dịch vụ hỗ trợ bạn 24/7</div>
        </div>
      </div>
    </section>
  );
}

Section2.propTypes = {};

export default Section2;
