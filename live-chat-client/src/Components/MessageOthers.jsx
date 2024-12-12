import React from "react";

function MessageOthers() {
  var props1 = {
    name: "Shubham",
    message: "Hello bhai kaisa ha ?",
    time: "3:00",
  };
  var props2 = {
    name: "Random User",
    message: "Me bhi bhadiya bhai gibberish likhraa hu wrap test karne ke liye ?",
    time: "3:00",
  };

  return (
    <div>
      <div className="flex items-center px-4 my-2 gap-2 ">
        <div className="bg-green-300 h-10 w-10 flex justify-center items-center rounded-full">
          <p className="icon  ">{props1.name[0]}</p>
        </div>

        <div className="bg-gray-200 px-4 py-1 rounded-[10px]">
          <p className="text-[17px] text-gray-700  max-w-[300px] min-w-[auto]">
            {props1.message}
          </p>
          <p className="text-right text-xs ">{props1.time}</p>
        </div>
      </div>
    </div>
  );
}

export default MessageOthers;
