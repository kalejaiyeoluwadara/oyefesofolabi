import Link from "next/link";
import React from "react";
import { GoArrowDownRight } from "react-icons/go";
function ReadMore({ text, link }) {
  return (
    <Link href={link ? link : ""} className="flex  items-center gap-3">
      <div className="h-[17px] flex-center w-[17px] bg-[#1010FF] rounded-full ">
        <GoArrowDownRight size={10} className="text-white" />
      </div>
      <p className=" hover:no-underline transition-all underline ">{text}</p>
    </Link>
  );
}

export default ReadMore;
