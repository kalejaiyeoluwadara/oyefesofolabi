import React from "react";
import Pewton from "@/app/comp/Pewton";
import Homeetal from "@/app/comp/Homeetal";
import Profile from "@/app/comp/Profile";
function Sec() {
  return (
    <div className="sm:h-auto h-auto sm:gap-0 gap-6 py-6 w-full flex flex-col sm:grid grid-cols-4 ">
      <Pewton />
      <Homeetal />
      <Profile />
      {/* <div className="h-full sm:w-auto w-full "></div> */}
    </div>
  );
}

export default Sec;
