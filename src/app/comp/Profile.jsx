"use client";
import ReadMore from "@/components/ReadMore";
import React from "react";
import ImgWrap from "@/app/comp/ImgWrap";
import { images } from "@/utils";
import Ellipse from "@/components/Ellipse";
import Link from "next/link";
import { useRouter } from "next/navigation";
function Profile() {
  const router = useRouter();
  return (
    <main className="h-full sm:w-auto w-full sm:border-t-0 border-t-[1px] sm:pt-0 pt-6 border-black sm:pl-3 ">
      <div className="w-full  h-[288px] ">
        <ImgWrap
          link={"https://www.instagram.com/iamoyefeso"}
          image={images.profile}
        />
      </div>
      <div className="">
        <div className="flex mt-4 items-center  justify-between w-full">
          <h2 className="">Publica profile O</h2>
          <div
            onClick={() => router.push("https://www.instagram.com/iamoyefeso")}
            className="flex  justify-center  items-center gap-2"
          >
            <Ellipse color={"bg-[#9747FF]"} isup={true} />
            <p className="Mono text-xs hover:no-underline transition-all underline">
              instagram
            </p>
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
