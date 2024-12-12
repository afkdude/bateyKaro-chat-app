import React from "react";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import "./myStyles.css";

function ConversationsItems({ details }) {
  return (
    <div className="grid grid-cols-[40px_auto_auto] gap-4 p-4 items-center convo-component">
      {/* Avatar or Initials */}
      <div className="bg-[#70AF85] rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold text-white">
        {details.name[0]}
      </div>
      {/* Details */}
      <div>
        <p className="text-base font-semibold text-gray-900">{details.name}</p>
        <p className="text-sm text-gray-500">{details.lastMessage}</p>
      </div>

      <div className="flex flex-col  items-end">
        <p className="text-xs text-gray-400">{details.timeStamp}</p>
      </div>
    </div>
  );
}

export default ConversationsItems;
