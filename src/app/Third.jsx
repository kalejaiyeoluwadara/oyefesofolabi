import React from "react";
import Pewton from "@/app/comp/Pewton";
import Homeetal from "@/app/comp/Homeetal";
import Profile from "@/app/comp/Profile";
import Orion from "./comp/Orion";
import Champions from "./comp/Champions";
import Unito from "./comp/Unito";
function Sec() {
  return (
    <div className="h-[560px] py-6 w-full grid grid-cols-4 ">
      <Orion />
      <Champions />
      <Unito />
      <div className="h-full sm:w-auto w-full "></div>
    </div>
  );
}

export default Sec;
