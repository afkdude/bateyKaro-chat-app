import React from "react";
import logo from '../live-chat.png'
import './myStyles.css'

function Welcome() {
  return (
    <div className=" welcome-icon flex-[0.7] bg-white m-[10px] rounded-[20px] flex justify-center items-center  ">
      <div className=" flex flex-col justify-center items-center ">
        <img src={logo} alt="welcome" />
        <p className="text-gray-500">View and text directly to your Friends or in Groups🌟</p>
      </div>
    </div>
  );
}

export default Welcome;
