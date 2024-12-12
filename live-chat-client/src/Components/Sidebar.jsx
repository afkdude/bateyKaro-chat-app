import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SearchIcon from "@mui/icons-material/Search";
import NightlightIcon from "@mui/icons-material/Nightlight";
import { IconButton } from "@mui/material";
import ConversationsItems from "./ConversationsItems";
import "./myStyles.css";

function Sidebar() {
  const [conversation, setConversation] = useState([
    {
      name: "Shubham",
      lastMessage: "kal milte ha ",
      timeStamp: "today",
    },
    {
      name: "Divyanshu",
      lastMessage: " hello  ",
      timeStamp: "yesterday",
    },
    {
      name: "Mummy",
      lastMessage: "order recieve karlen ",
      timeStamp: "3:56",
    },
    {
      name: "Papa",
      lastMessage: "Kaise ho?",
      timeStamp: "2 days ago",
    },
    {
      name: "Friend 1",
      lastMessage: "Hey, what's up?",
      timeStamp: "3 days ago",
    },
    {
      name: "Friend 2",
      lastMessage: "Can we meet tomorrow?",
      timeStamp: "4 days ago",
    },
    {
      name: "Colleague",
      lastMessage: "Regarding the project...",
      timeStamp: "5 days ago",
    },
    {
      name: "Boss",
      lastMessage: "Meeting scheduled for 10 AM",
      timeStamp: "6 days ago",
    },
    {
      name: "Client",
      lastMessage: "Payment confirmation",
      timeStamp: "1 week ago",
    },
    {
      name: "Delivery Partner",
      lastMessage: "Your order is out for delivery",
      timeStamp: "2 weeks ago",
    },
  ]);
  return (
    <div className="flex-[0.3]   flex flex-col ">
      {/* sidebar header  */}
      <div className="px-[5px] py-[10px] m-[10px] flex justify-between bg-[white] rounded-[20px]">
        <div>
          <IconButton>
            <AccountCircleIcon className="text-[#70AF85]" />
          </IconButton>
        </div>
        <div>
          <IconButton>
            <PersonAddIcon className="text-[#70AF85]" />
          </IconButton>

          <IconButton>
            <GroupAddIcon className="text-[#70AF85]" />
          </IconButton>

          <IconButton>
            <AddCircleIcon className="text-[#70AF85]" />
          </IconButton>

          <IconButton>
            <NightlightIcon className="text-[#70AF85]" />
          </IconButton>
        </div>
      </div>

      {/* sidebar search  */}
      <div className=" sidebar-search px-[10px] py-[3px] m-[10px] bg-[white] rounded-[20px] flex items-center  text-[22px]">
        <IconButton className="basis-[7%]">
          <SearchIcon className="text-[#31363F]" />
        </IconButton>
        <input
          type="text"
          placeholder="Search Chat"
          className="  outline-none ms-1 basis-[93%]"
        />
      </div>

      {/* sidebar convo section  */}
      <div className=" conversation-items  px-[10px] py-[10px] m-[10px] bg-[white] rounded-[20px] flex-1 overflow-y-scroll">
        {conversation.map((v, i) => {
          return <ConversationsItems details={v} key={i} />;
        })}
      </div>
    </div>
  );
}

export default Sidebar;
