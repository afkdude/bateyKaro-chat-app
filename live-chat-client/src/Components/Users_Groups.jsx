import React from "react";
import PublicIcon from "@mui/icons-material/Public";
import "./myStyles.css";

import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";

function Users_Groups() {
  return (
    <div className="flex-[0.7]  flex flex-col ">
      <div className="online-header bg-white  px-[10px] py-[10px] m-[10px] flex items-center  justify-between gap-2 rounded-[20px]  ">
        <div className="flex items-center gap-3">
          <PublicIcon className="text-[#70AF85]" />
          <p className="text-[25px] text-[#31363F] font-semibold">
            Online users/groups
          </p>
        </div>

        <div className="border-2 border-[#70A585] px-[10px] rounded-full  flex items-center gap-2">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <input
            type="text"
            placeholder="Search for available users!"
            className="outline-none text-[17px] font-semibold"
          />
        </div>
      </div>

      <div className="flex flex-col flex-1 bg-white m-[10px] rounded-[15px] list-parent ">
        <Users_list />
        <Users_list />
        <Users_list />
        <Users_list />
        <Users_list />
        <Users_list />
        <Users_list />
        <Users_list />
        <Users_list />
        <Users_list />
        <Users_list />
        <Users_list />
      </div>
    </div>
  );
}

function Users_list() {
  return (
    <div className="flex items-center online-users-list gap-2 p-2 px-[10px] m-2">
      <div className="bg-[#70AF85] rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold text-white">
        <p>S</p>
      </div>
      <p className="text-[20px] font-semibold">Test User</p>
    </div>
  );
}

export default Users_Groups;
