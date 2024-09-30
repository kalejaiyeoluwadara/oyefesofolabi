import React from "react";
import Pewton from "@/app/comp/Pewton";
import Homeetal from "@/app/comp/Homeetal";
import Profile from "@/app/comp/Profile";
function Sec() {
  return (
    <div className="h-[560px] py-6 w-full grid grid-cols-4 ">
      <Pewton />
      <Homeetal />
      <Profile />
      <div className="h-full sm:w-auto w-full "></div>
    </div>
  );
}

export default Sec;
