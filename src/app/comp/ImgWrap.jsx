import Image from "next/image";
import React from "react";
import { images } from "../../utils";
import Link from "next/link";

function ImgWrap({ image, link }) {
  return (
    <Link href={link}>
      <Image
        src={image}
        alt=""
        className="h-full cursor-pointer bluri w-full object-cover"
      />
    </Link>
  );
}

export default ImgWrap;
