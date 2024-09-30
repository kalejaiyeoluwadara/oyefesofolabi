import Image from "next/image";
import React from "react";
import { images } from "@/utils";
import Ellipse from "@/components/Ellipse";
function Banner() {
  return (
    <main className="h-auto mt-10 border-y-[2px] border-black py-10 w-full  grid sm:grid-cols-2 justify-between ">
      <section className="w-full h-full pr-[15px] border-r-[0.2px] border-black ">
        <div className="w-full relative justify-start items-end flex p-5 h-[221px] bg-[#001314]">
          <Image
            src={images.spotify}
            alt=""
            width={78}
            height={78}
            className=""
          />
        </div>
        <section className="mt-5 flex items-center gap-3">
          <Ellipse isup={true} color={"bg-[#005F26]"} />
          <p className="up">Checkout my playlist </p>
        </section>
      </section>
      <section className="w-full h-full  pl-[15px] border-l-[0.2px] border-black ">
        <Image
          src={images.banner}
          alt="banner"
          className="w-full object-cover h-[221px]"
        />
        <section className="mt-5 flex items-center gap-3">
          <Ellipse isup={false} color={"bg-black"} />
          <p className="">Currently Watching Billions</p>
        </section>
      </section>
    </main>
  );
}

export default Banner;
