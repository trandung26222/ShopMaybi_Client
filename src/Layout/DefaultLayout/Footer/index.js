import React, { useLayoutEffect } from "react";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { useSelector } from "react-redux";

var classNameTitle = "text-[1.3em] font-[800] font-['Mali'] ";

function Footer(props) {
  useLayoutEffect(() => {
    const footerLinks = document.querySelectorAll("footer a");
    footerLinks.forEach((link) => {
      link.addEventListener("mouseenter", (e) => {
        e.target.style.opacity = "0.8";
      });

      link.addEventListener("mouseleave", (e) => {
        e.target.style.opacity = "1";
      });
    });
  }, []);

  return (
    <footer
      className="text-[#393939] sticky 
     w-full h-fit pb-[40px] bg-[#F4ECDE] shadow-lg"
    >
      <Container className=" px-[15px] py-[80px]">
        <Grid columnSpacing={3} rowSpacing={3} container>
          <Grid item md={3} xs={12}>
            <Grid1 />
          </Grid>
          <Grid item md={3} xs={12}>
            <Grid2 />
          </Grid>
          <Grid item md={3} xs={12}>
            <Grid3 />
          </Grid>
          <Grid item md={3} xs={12}>
            <Grid4 />
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

var Grid1 = () => (
  <div className=" flex flex-col text-[1.4em] font-[300]">
    <a href="/" className="mb-3">
      <img
        src="https://theme.hstatic.net/1000341902/1001140246/14/logo-footer_medium.png?v=755"
        alt=""
        className="w-[164px] mb-2"
      />
    </a>
    <div className="flex items-start gap-4 mb-2 ">
      <span className="mt-[2px]">
        <FontAwesomeIcon icon={faLocationDot} />
      </span>
      <span>
        Địa chỉ: Store: 49 Nguyễn Huệ, Phường Bến Nghé, Quận 1, Tphcm.
      </span>
    </div>
    <div className="flex items-start gap-4 mb-2">
      <span>
        <FontAwesomeIcon icon={faMobileScreenButton} />
      </span>
      <span>Số điện thoại: 0911571166</span>
    </div>

    <div className="flex items-start gap-3 mb-2">
      <span>
        <FontAwesomeIcon icon={faEnvelope} />
      </span>
      <span>Email: cs@maybi.com</span>
    </div>
  </div>
);
var Grid2 = () => {
  var currentWidth = useSelector((state) => state.responsive.currentWidth);
  return (
    <div
      className={`flex flex-col gap-3 text-[1.4em] font-[300] ${
        currentWidth < 900 ? "px-0" : "px-8"
      } `}
    >
      <span className={classNameTitle}>THÔNG TIN LIÊN HỆ</span>
      <a href="/">Thông tin liên hệ</a>
      <a href="/">Tuyển dụng</a>
      <a href="/">Về Maybi</a>
    </div>
  );
};
var Grid3 = () => {
  return (
    <div className="flex flex-col gap-3 text-[1.4em] font-[300] ">
      <span className={classNameTitle}>CHÍNH SÁCH</span>
      <a href="/">Chính sách đổi trả</a>
      <a href="/">Ưu đãi khách hàng thân thiết</a>
      <a href="/">Giao hàng - Thanh toán</a>
      <a href="/">Bảo mật thông tin</a>
      <a href="/">Chính sách nhượng quyền thương hiệu</a>
    </div>
  );
};
var Grid4 = () => {
  return (
    <div className="flex flex-col text-[1.4em] font-[300]">
      <span className={classNameTitle}>MẠNG XÃ HỘI</span>
      <span className="relative mt-3">
        <div className="flex gap-5">
          <a
            href="https://www.facebook.com/maybi.official"
            title="Theo dõi Facebook MAYBI - Thời trang nữ thiết kế - Chất lượng vượt trội - Giá cả hợp lý"
          >
            <img
              src="//theme.hstatic.net/1000341902/1001140246/14/facebook.png?v=755"
              width="32"
              height="32"
              alt="facebook"
            />
          </a>
          <a
            href="https://www.instagram.com/maybi_official/"
            title="Theo dõi instgram MAYBI - Thời trang nữ thiết kế - Chất lượng vượt trội - Giá cả hợp lý"
          >
            <img
              src="//theme.hstatic.net/1000341902/1001140246/14/instagram.png?v=755"
              width="32"
              height="32"
              alt="instgram"
            />
          </a>
          <a
            href="https://www.youtube.com/@thoitrangmaybi4893"
            title="Theo dõi youtube MAYBI - Thời trang nữ thiết kế - Chất lượng vượt trội - Giá cả hợp lý"
          >
            <img
              src="//theme.hstatic.net/1000341902/1001140246/14/youtube.png?v=755"
              width="32"
              height="32"
              alt="youtube"
            />
          </a>
        </div>
      </span>
    </div>
  );
};

export default Footer;
