import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { IconButton } from "@mui/material";
import "./myStyles.css";
import React, { useState } from "react";
import MessageOthers from "./MessageOthers";
import MessageSelf from "./MessageSelf";

function ChatArea() {

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
    <div className="flex-[0.7] m-[10px] rounded-[20px] flex flex-col gap-4 ">
      {/* chat header */}
      <div className="chat-header  bg-white rounded-[20px]  px-[10px] py-[10px] flex items-center justify-between">
        <div className="flex gap-4 items-center ">
          <div className="bg-[#70AF85] rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold text-white">
            <p>{conversation[0].name[0]}</p>
          </div>

          <div className="flex-1">
            <p className="font-semibold text-[18px]">Shubham</p>
            <p className="text-gray-400 text-[12px]">Online</p>
          </div>
        </div>
        <div>
          <IconButton>
            <DeleteIcon className="text-red-500" />
          </IconButton>
        </div>
      </div>

      {/* chat text area */}
      <div className="chat-text-area bg-white flex-1 rounded-[20px]  pt-3  ">
        <MessageOthers />
        <MessageSelf />
        <MessageOthers />
        <MessageSelf />
        <MessageOthers />
        <MessageSelf />
        <MessageOthers />
        <MessageSelf />
        <MessageOthers />
        <MessageSelf />
        <MessageOthers />
        <MessageSelf />
      </div>

      {/* chat input area  */}
      <div className="chat-input bg-white rounded-[20px]  px-[10px] flex items-center gap-2">
        <input
          type="text"
          placeholder="Type your Message"
          className="flex-1 text-[25px] px-2 py-2 outline-none text-wrap"
        />

        <IconButton>
          <SendIcon className="text-[#70AF85]" />
        </IconButton>
      </div>
    </div>
  );
}

export default ChatArea;
