import React from "react";
import logo from "../login-icons.svg";
import LoginIcon from "@mui/icons-material/Login";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PasswordIcon from "@mui/icons-material/Password";

function Login() {
  return (
    <div className="flex justify-center items-center w-[100%] p-5  ">
      <div className="side-logo flex-[0.3] p-2  hidden lg:block">
        <img src={logo} alt="" />
      </div>

      {/* <div className=" login-section flex gap-5  flex-[0.7] bg-white justify-center items-center h-full rounded-[15px] border-b-2 border-[#70AF85]">
        <div className="border border-[#C6EBC9] rounded-lg flex flex-col p-7 gap-5  h-[500px] justify-evenly">
          <p className="text-center text-[30px] text-[#222831] rounded-[20px] border-b-2 border-[#C6EBC9] pb-1">
            Enter your Details
          </p>

          <div className="input-border">
            <AlternateEmailIcon className="text-[#70AF85]" />
            <input type="email" placeholder="Enter Email" />
          </div>

          <div className="input-border">
            <PasswordIcon className="text-[#70AF85]" />
            <input type="password" placeholder="Enter Password" />
          </div>

          <button className="bg-[#70AF85] py-[6px] px-4 rounded-[12px] text-white font-semibold text-[22px]">
            Login
          </button>
        </div>
      </div> */}
      <div className="login-section flex gap-5 flex-[0.7] bg-white justify-center items-center h-full rounded-[15px] border-b-2 border-[#70AF85]">
        <form
          className="border border-[#C6EBC9] rounded-lg flex flex-col p-7 gap-5 h-[500px] justify-evenly"
          onSubmit={(e) => {
            e.preventDefault(); 
          }}
        >
          <p className="text-center text-[30px] text-[#70AF85] font-bold rounded-[20px] border-b-2 border-[#C6EBC9] pb-1">
            Login to your account
          </p>

          <div className="input-border">
            <AlternateEmailIcon className="text-[#70AF85]" />
            <input  
              type="email"
              name="email"
              placeholder="Enter Email"
              required
              className="focus:outline-none"
            />
          </div>

          <div className="input-border">
            <PasswordIcon className="text-[#70AF85]" />
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              required
              className="focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="bg-[#70AF85] py-[6px] px-4 rounded-[12px] text-white font-semibold text-[22px] login-btn"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
