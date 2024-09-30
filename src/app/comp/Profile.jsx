import ReadMore from "@/components/ReadMore";
import React from "react";
import ImgWrap from "@/app/comp/ImgWrap";
import { images } from "@/utils";

function Profile() {
  return (
    <main className="h-full sm:w-auto w-full pl-3 ">
      <div className="w-full  h-[288px] ">
        <ImgWrap image={images.profile} />
      </div>
      <div className="">
        <div className="flex mt-4 items-center  justify-between w-full">
          <h2 className="text-xl ">Publica profile O</h2>
          <div className="flex  justify-center  items-center gap-2">
            <div className="h-[17px] w-[17px] rounded-full bg-[#9747FF]  "></div>
            <p className="Mono text-xs underline">instagram</p>
          </div>
        </div>
        <p className="Mono text-xs leading-[19px] ">
          In 2023, I advanced my career in design, focusing on principles that
          influence day-to-day design practices.
        </p>
        <p className="Mono text-xs leading-[19px] ">
          What began as basic sketches quickly evolved into ideations that shape
          user experiences.
        </p>
        <p className="Mono text-xs leading-[19px] ">
          Heavily inspired by art and film, my creative process draws influences
          to shape and refine my design philosophy.
        </p>
      </div>
    </main>
  );
}

export default Profile;
