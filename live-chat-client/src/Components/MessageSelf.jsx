import React from 'react'

function MessageSelf() {
 var props = {
   message:
     "Bhadiya hu bhaii tu  bata !",
 };
  return (
    <div className="flex items-center px-4 my-2 gap-2 justify-end ">
      <div className="bg-green-200 px-4 py-1 rounded-[10px]">
        <p className="text-[17px] text-gray-700 max-w-[300px] min-w-[auto]">{props.message}</p>
        <p className="text-right text-xs ">3:10 </p>
      </div>
    </div>
  );
}

export default MessageSelf