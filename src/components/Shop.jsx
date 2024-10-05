import React from "react";
import Ellipse from "./Ellipse";
import Link from "next/link";

function Shop({ link }) {
  return (
    <div className="flex items-center gap-2">
      <Ellipse color={"bg-[#B2191B]"} isup={false} />
      <Link href={link} className=" up ">
        Shop Myhomeetal
      </Link>
    </div>
  );
}

export default Shop;
