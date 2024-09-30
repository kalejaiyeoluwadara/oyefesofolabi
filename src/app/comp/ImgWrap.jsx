import Image from "next/image";
import React from "react";
import { images } from "../../utils";
function ImgWrap({ image }) {
  return <Image src={image} alt="" className="h-full w-full object-cover" />;
}

export default ImgWrap;
