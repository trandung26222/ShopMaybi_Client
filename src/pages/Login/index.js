import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "~/components/BreadCrumb";
import { signInWithGoogle } from "~/firebase";
import { Carousel } from "antd";
import { GoogleIcon, EyeIcon } from "~/components/Icon/Icon";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { LoginEmailPassword } from "~/redux/CallFireBase/LoginEmailPassword";
import { statusFetch } from "~/utils/statusFetch";
import { useNavigate } from "react-router-dom";

const ImgRight = () => {
  var imgarray = [
    "https://pubcdn.ivymoda.com/files/news/2024/05/03/df3852d98da6dc06910d437bcca0c423.jpg",
    "https://pubcdn.ivymoda.com/files/news/2024/05/02/9828684ac902e49fc3901372aa81a81a.jpg",
    "https://pubcdn.ivymoda.com/files/news/2024/05/02/6f84db0019f35d69b3ff99161a3a35b0.jpg",
    "https://pubcdn.ivymoda.com/files/product/thumab/400/2023/09/16/28f3b3317c557d464734f5b8b017c255.JPG",
    "https://pubcdn.ivymoda.com/files/product/thumab/400/2023/05/12/df29fc5f6111cc36e5a8138bd66f68ec.jpg",
    "https://pubcdn.ivymoda.com/files/product/thumab/400/2020/12/24/71155df5f81157f11dda9be5b8f06da0.JPG",
  ];
  return (
    <div className="md:block hidden w-[40%]">
      <Carousel autoplay effect="fade" autoplaySpeed={2000}>
        {imgarray.map((item, index) => {
          return (
            <img
              key={index}
              className="rounded-2xl object-contain cursor-pointer"
              src={imgarray[index]}
              alt=""
            />
          );
        })}
      </Carousel>
    </div>
  );
};

const LoginWithGoogle = () => {
  var tmp =
    "bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]";
  return (
    <button onClick={signInWithGoogle} className={tmp}>
      <GoogleIcon />
      Đăng nhập với Google
    </button>
  );
};
const BtnAnHienPassWord = () => (
  <button
    onClick={(e) => {
      e.preventDefault();
      console.log("ok");
    }}
  >
    <EyeIcon />
  </button>
);

function Login() {
  var navigate = useNavigate();
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  var [stateLogin, setStateLogin] = useState(statusFetch.IDLE);

  const handlelogin = (e) => {
    e.preventDefault();
    LoginEmailPassword(email, password, setStateLogin, navigate);
  };

  return (
    <div className="w-full h-auto">
      <BreadCrumb links={["Trang chủ"]} typography={"Đăng nhập"} />
      <section className=" m-[50px] flex items-center justify-center">
        <div className="bg-gray-100 flex rounded-2xl shadow-xl max-w-[55rem] p-5 items-center ">
          <div className="md:w-1/2 px-8 md:px-16">
            <h2 className="font-bold text-2xl text-[black]">Đăng nhập</h2>
            <p className="text-[11px] mt-4 text-[#666]">
              Đăng nhập để nhận được giá ưu đãi!
            </p>

            <form onSubmit={handlelogin} className="flex flex-col gap-4">
              <input
                value={email}
                className="p-2 mt-8 rounded-xl border"
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <div className="relative">
                <input
                  value={password}
                  className="p-2 rounded-xl border w-full"
                  type="password"
                  name="current-password"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <BtnAnHienPassWord />
              </div>
              <button className="bg-[#002D74] items-center flex justify-center rounded-xl text-white py-2 hover:scale-105 duration-300">
                {stateLogin === statusFetch.LOADING && (
                  <Spin
                    indicator={
                      <LoadingOutlined
                        style={{
                          fontSize: 18,
                          color: "white",
                        }}
                        spin
                      />
                    }
                  />
                )}

                <p className="ml-3">Đăng nhập</p>
              </button>
            </form>

            <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400" />
              <p className="text-center text-sm">hoặc</p>
              <hr className="border-gray-400" />
            </div>

            <LoginWithGoogle />

            <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
              <a href="#">Quên mật khẩu?</a>
            </div>

            <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
              <p>Bạn chưa có tài khoản?</p>
              <Link
                to={"/account/signup"}
                className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"
              >
                Đăng ký
              </Link>
            </div>
          </div>

          <ImgRight />
        </div>
      </section>
    </div>
  );
}

export default Login;
