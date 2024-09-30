import React from "react";

function ReadMore({ text }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-[17px] w-[17px] bg-[#1010FF] rounded-full " />
      <p className=" underline ">{text}</p>
    </div>
  );
}

export default ReadMore;
