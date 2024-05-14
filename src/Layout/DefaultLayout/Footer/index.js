import React from "react";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { useSelector } from "react-redux";

function Footer(props) {
  const footerLinks = document.querySelectorAll("footer a");
  var currentWidth = useSelector((state) => state.responsive.currentWidth);
  footerLinks.forEach((link) => {
    link.addEventListener("mouseenter", (e) => {
      e.target.style.color = "blue"; // Thay đổi màu sắc khi hover vào
    });

    link.addEventListener("mouseleave", (e) => {
      e.target.style.color = ""; // Đặt lại màu sắc ban đầu khi rời chuột
    });
  });

  return (
    <footer className="block z-[1000] w-full h-fit pb-[40px] bg-[#F4ECDE] font-[Mulish] text-[15px]">
      <Container className=" px-[15px] py-[80px]">
        <Grid columnSpacing={3} rowSpacing={3} container>
          <Grid item md={3} xs={12}>
            <div className=" flex flex-col ">
              <a href="/" className="mb-3">
                <img
                  src="https://theme.hstatic.net/1000341902/1001140246/14/logo-footer_medium.png?v=755"
                  alt=""
                  className="w-[164px] mb-2"
                />
              </a>
              <div className="flex items-start gap-4 mb-2">
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
          </Grid>
          <Grid item md={3} xs={12}>
            <div
              className={`flex flex-col gap-3 ${
                currentWidth < 900 ? "px-0" : "px-8"
              } `}
            >
              <span className="text-[17px] font-[800]">THÔNG TIN LIÊN HỆ</span>
              <a href="/" className="text-[15px]">
                Thông tin liên hệ
              </a>
              <a href="/" className="text-[15px]">
                Tuyển dụng
              </a>
              <a href="/" className="text-[15px]">
                Về Maybi
              </a>
            </div>
          </Grid>
          <Grid item md={3} xs={12}>
            <div className="flex flex-col gap-3  ">
              <span className="text-[17px] font-[800]">CHÍNH SÁCH</span>
              <a href="/">Chính sách đổi trả</a>
              <a href="/">Ưu đãi khách hàng thân thiết</a>
              <a href="/">Giao hàng - Thanh toán</a>
              <a href="/">Bảo mật thông tin</a>
              <a href="/">Chính sách nhượng quyền thương hiệu</a>
            </div>
          </Grid>
          <Grid item md={3} xs={12}>
            <div className="flex flex-col ">
              <span className="text-[17px] font-[800] mb-3">MẠNG XÃ HỘI</span>
              <span className="relative">
                {/* <input
                  type="text"
                  className="w-[281px] py-[12px] rounded-full border-[1px] border-[black] px-3 mb-5"
                  placeholder="Nhập địa chỉ email"
                />
                <button className="absolute top-1 right-[-6px] px-[15px] bg-black py-[9px] text-white rounded-full">
                  Đăng ký
                </button> */}
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
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

Footer.propTypes = {};

export default Footer;
