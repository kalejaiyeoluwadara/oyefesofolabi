import React from "react";
import Pewton from "@/app/comp/Pewton";
import Homeetal from "@/app/comp/Homeetal";
import Profile from "@/app/comp/Profile";
import Orion from "./comp/Orion";
import Champions from "./comp/Champions";
import Unito from "./comp/Unito";
function Sec() {
  return (
    <div className="sm:h-[560px] sm:gap-0 gap-6 h-auto py-6 w-full flex flex-col sm:grid grid-cols-4 ">
      <Orion />
      <Champions />
      <Unito />
      <div className="h-full sm:w-auto w-full "></div>
    </div>
  );
}

export default Sec;
