import React from "react";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import { IconButton } from "@mui/material";

function CreateGroups() {
  return (
    <div className="flex flex-col w-[100%] items-center justify-center px-4 gap-2">
      <p className="text-[40px]  font-semibold text-[#FF971D]  italic">
        Sangathan me shakti ha!
      </p>
      <div className=" border-b-2 border-[#C6EBC9] flex w-full bg-white p-2 px-4 rounded-[15px] gap-4 ">
        <input
          type="text"
          className="outline-none flex-1"
          placeholder="Enter your group Name"
        />
        <IconButton>
          <DoneOutlineIcon className="text-[#70AF85]" />
        </IconButton>
      </div>
    </div>
  );
}

export default CreateGroups;
