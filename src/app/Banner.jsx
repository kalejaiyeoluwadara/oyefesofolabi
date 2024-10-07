import Image from "next/image";
import React from "react";
import { images } from "@/utils";
import Ellipse from "@/components/Ellipse";
import Link from "next/link";
function Banner() {
  return (
    <main className="h-auto mt-10 border-y-[2px] border-black py-10 w-full  grid sm:grid-cols-2 sm:gap-0 gap-6 justify-between ">
      <section className="w-full h-full sm:pr-[15px] sm:border-r-[0.2px] border-black ">
        <Link
          href={
            "https://open.spotify.com/user/g2odg599t3r8tfk72nqvy0xvz?si=77463cead4ca47b8"
          }
        >
          <div className="w-full relative justify-start items-end flex p-5 h-[221px] bg-[#001314]">
            <Image src={images.spotify} alt="" width={78} height={78} />
          </div>
        </Link>
        <section className="mt-5 flex items-center gap-3">
          <Ellipse isup={true} color={"bg-[#005F26]"} />
          <Link
            target="_blank"
            href={
              "https://open.spotify.com/user/g2odg599t3r8tfk72nqvy0xvz?si=77463cead4ca47b8"
            }
            className="up "
          >
            Checkout my playlist{" "}
          </Link>
        </section>
      </section>
      <section className="w-full sm:h-full  sm:pl-[15px] sm:border-l-[0.2px] border-black ">
        <Link href={"https://en.wikipedia.org/wiki/Billions_(TV_series)"}>
          <Image
            src={images.banner}
            alt="banner"
            className="w-full bluri object-cover h-[221px]"
          />
        </Link>
        <section className="mt-5 flex items-center gap-3">
          <Ellipse isup={false} color={"bg-black"} />
          <Link
            target="_blank"
            href={"https://en.wikipedia.org/wiki/Billions_(TV_series)"}
            className="Mono text-xs"
          >
            Currently Watching Billions
          </Link>
        </section>
      </section>
    </main>
  );
}

export default Banner;
