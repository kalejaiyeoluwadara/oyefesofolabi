import ReadMore from "@/components/ReadMore";
import React from "react";
import ImgWrap from "@/app/comp/ImgWrap";
import { images } from "@/utils";
function Champions() {
  return (
    <main className="h-full sm:border-x-[1px] border-black sm:px-3 sm:w-auto w-full sm:pr-3 sm:border-y-0 border-y-[1px] sm:py-0 py-6  ">
      <div className="w-full  h-[246px] ">
        <ImgWrap
          link={"https://championlogistics.org.ng/"}
          image={images.champion}
        />
      </div>
      <div className="">
        <h2 className="mt-4">Champions Logistics</h2>
        <p className="Mono text-xs leading-[19px] ">
          Across Nigeria and beyond, thousands of businesses rely on Champions
          Logistics to move their goods faster, more efficiently, & reliably.
        </p>
        <p className="Mono text-xs leading-[19px] ">
          Early 2024, I worked with a dynamic logistics brand based in Lagos to
          enhance their core product experience and lead a UI redesign aligned
          with the company's rebranding efforts. We created a seamless interface
          and developed tools to help users navigate the platform efficiently.
        </p>
        <section className="mt-5">
          <ReadMore
            link={"https://championlogistics.org.ng/"}
            text={"Champions story"}
          />
        </section>
      </div>
    </main>
  );
}

export default Champions;
