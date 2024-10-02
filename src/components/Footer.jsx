import Image from "next/image";
import React from "react";
import { images } from "@/utils";
import Ellipse from "./Ellipse";
import Link from "next/link";
function Footer() {
  return (
    <div className="w-full">
      <div className="w-full h-[359px] bg-black flex-col flex-center">
        <div>
          <Image
            height={112}
            width={112}
            src={images.mark}
            alt="mark"
            className="mb-6"
          />
        </div>
        <div className="text-white flex-center flex-col">
          <p className="text-lg">Embark on that journey</p>
          <p className="text-center leading-[19px] w-[292px] ">
            Supercharge your product’s user-centric design—let’s schedule a call
            to elevate your vision together!
          </p>
          <div className="flex mt-5 items-center gap-2">
            <Ellipse isup={true} color={"bg-green-500 text-black"} />
            <Link
              href={"https://cal.com/iamoyefeso"}
              className="hover:underline p cursor-pointer"
            >
              Schedule a call
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t-[1.3px]  mt-10 mb-10 border-black w-full ">
        <section className="sm:flex sm:flex-row w-full items-center  mt-[17px] justify-between ">
          <p className="text-xs Mono">Copyright © 2024 Oyefeso Afolabi</p>

          <section className="flex gap-3 text-xs Mono ">
            <p>
              Built by{" "}
              <Link
                target="_blank"
                href={"https://portfolio-3v84.vercel.app/"}
                className="up Mono"
              >
                Dara Kalejaiye
              </Link>
            </p>
          </section>
        </section>
      </div>
    </div>
  );
}

export default Footer;
