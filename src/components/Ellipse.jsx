import React from "react";
import { LuArrowUpRight } from "react-icons/lu";
import { GoArrowDownRight } from "react-icons/go";
function Ellipse({ color, isup }) {
  return (
    <div
      className={`h-[17px] w-[17px] text-white rounded-full ${color} flex items-center justify-center  `}
    >
      {isup ? <LuArrowUpRight size={9} /> : <GoArrowDownRight size={9} />}
    </div>
  );
}

export default Ellipse;
