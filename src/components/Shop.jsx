import React from "react";
import Ellipse from "./Ellipse";

function Shop() {
  return (
    <div className="flex items-center gap-2">
      <Ellipse color={"bg-[#B2191B]"} isup={false} />
      <p className=" underline ">Shop Myhomeetal</p>
    </div>
  );
}

export default Shop;
