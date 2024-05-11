import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb";

function Signup(props) {
  return (
    <div className="w-full h-auto text-[16px] flex flex-col items-center">
      <BreadCrumb links={["Trang chủ", "Tài khoản"]} typography={"Đăng ký"} />
      <div class="max-w-4xl mx-auto font-[sans-serif] text-[#333] p-6">
        <div class="text-center mb-16">
          <h4 class="text-[1.4rem] font-semibold mt-3">THÔNG TIN CÁ NHÂN</h4>
          <p class="text-[0.8rem]">
            Bạn đã có tài khoản ? Đăng nhập{" "}
            <Link className="text-blue-600 " to={"/account/login"}>
              tại đây
            </Link>
          </p>
        </div>
        <form>
          <div class="grid sm:grid-cols-2 gap-y-7 gap-x-12">
            <div>
              <label class="text-sm mb-2 block">First Name</label>
              <input
                name="name"
                type="text"
                class="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500"
                placeholder="Enter name"
              />
            </div>
            <div>
              <label class="text-sm mb-2 block">Last Name</label>
              <input
                name="lname"
                type="text"
                class="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500"
                placeholder="Enter last name"
              />
            </div>
            <div>
              <label class="text-sm mb-2 block">Email Id</label>
              <input
                name="email"
                type="text"
                class="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500"
                placeholder="Enter email"
              />
            </div>
            <div>
              <label class="text-sm mb-2 block">Mobile No.</label>
              <input
                name="number"
                type="number"
                class="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500"
                placeholder="Enter mobile number"
              />
            </div>
            <div>
              <label class="text-sm mb-2 block">Password</label>
              <input
                name="password"
                type="password"
                class="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500"
                placeholder="Enter password"
              />
            </div>
            <div>
              <label class="text-sm mb-2 block">Confirm Password</label>
              <input
                name="cpassword"
                type="password"
                class="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500"
                placeholder="Enter confirm password"
              />
            </div>
          </div>
          <div class="!mt-10">
            <button
              type="button"
              class="min-w-[150px] py-3 px-4 text-sm font-semibold rounded text-white bg-blue-500 hover:bg-blue-600 focus:outline-none"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

Signup.propTypes = {};

export default Signup;
