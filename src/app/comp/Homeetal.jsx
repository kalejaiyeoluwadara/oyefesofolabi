import ReadMore from "@/components/ReadMore";
import Shop from "@/components/Shop";
import React from "react";
import ImgWrap from "@/app/comp/ImgWrap";
import { images } from "@/utils";

function Homeetal() {
  return (
    <main className="h-full sm:w-auto w-full px-3 sm:border-x-[1px] border-black col-span-2 ">
      <div className="w-full h-[288px] ">
        <ImgWrap image={images.homeetal} />
      </div>
      <div className="">
        <h2 className="text-xl mt-4">My Home etal E-commerce Store</h2>
        <p className="Mono text-xs leading-[19px] ">
          My Home et al is a retail company, proudly rooted in Nigeria and
          founded in 2012. The design process is a systematic approach that
          moves from understanding users and defining their needs to generating
          ideas, creating prototypes, and testing solutions.
        </p>
        <p className="Mono text-xs leading-[19px] ">
          Each step ensures the final product is user-centered and refined
          through iteration.
        </p>
        <section className="flex mt-5 gap-4">
          <ReadMore
            link={
              "https://www.behance.net/gallery/206976401/My-Home-etal-Product-Design"
            }
            text={"Read on Behance"}
          />
          <Shop />
        </section>
      </div>
    </main>
  );
}

export default Homeetal;
