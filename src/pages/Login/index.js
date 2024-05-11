import React from "react";
import BreadCrumb from "../../components/BreadCrumb";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";

function Login() {
  return (
    <div className="w-full h-auto text-[16px] flex flex-col items-center">
      <BreadCrumb links={["Trang chủ", "Tài khoản"]} typography={"Đăng nhập"} />
      <div class="container w-[65%] h-full px-6 py-24">
        <div class="flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div class="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              class="w-full"
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              alt=""
            />
          </div>

          <div class="md:w-8/12 lg:ms-6 lg:w-5/12">
            <form>
              <div class="relative mb-6 " data-twe-input-wrapper-init>
                <TextField
                  id="outlined-basic"
                  label="Username"
                  variant="outlined"
                  sx={{ width: "100%" }}
                />
              </div>

              <div class="relative mb-6" data-twe-input-wrapper-init>
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  sx={{ width: "100%" }}
                />
              </div>

              <div class="mb-6 flex items-center justify-between">
                <div class="mb-[0.125rem] block min-h-[1.5rem] ps-[1.5rem]">
                  <Checkbox defaultChecked />
                  <label
                    class="inline-block ps-[0.15rem] hover:cursor-pointer"
                    for="exampleCheck3"
                  >
                    Nhớ mật khẩu?
                  </label>
                </div>

                <a
                  href="/"
                  class="text-primary focus:outline-none dark:text-primary-400"
                >
                  Quên mật khẩu?
                </a>
              </div>

              <button
                type="submit"
                class="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                data-twe-ripple-init
                data-twe-ripple-color="light"
              >
                Sign in
              </button>

              <div class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
                <p class="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                  OR
                </p>
              </div>

              <a
                class="mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                style={{ backgroundColor: "#3b5998" }}
                href="#!"
                role="button"
                data-twe-ripple-init
                data-twe-ripple-color="light"
              >
                <span class="me-2 fill-white [&>svg]:mx-auto [&>svg]:h-3.5 [&>svg]:w-3.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                  </svg>
                </span>
                Continue with Facebook
              </a>
              <a
                class="mb-3 flex w-full items-center justify-center rounded bg-info px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-info-3 transition duration-150 ease-in-out hover:bg-info-accent-300 hover:shadow-info-2 focus:bg-info-accent-300 focus:shadow-info-2 focus:outline-none focus:ring-0 active:bg-info-600 active:shadow-info-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                style={{ backgroundColor: "#55acee" }}
                href="#!"
                role="button"
                data-twe-ripple-init
                data-twe-ripple-color="light"
              >
                <span class="me-2 fill-white [&>svg]:h-3.5 [&>svg]:w-3.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                  </svg>
                </span>
                Continue with X
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
