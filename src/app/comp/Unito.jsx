import ReadMore from "@/components/ReadMore";
import React from "react";
import ImgWrap from "@/app/comp/ImgWrap";
import { images } from "@/utils";

function Unito() {
  return (
    <main className="h-full sm:w-auto w-full pl-3 ">
      <div className="w-full  h-[195px] ">
        <ImgWrap image={images.unito} />
      </div>
      <div className="">
        <h2 className="text-xl mt-4">Unito Charity</h2>
        <p className="Mono text-xs leading-[19px] ">
          Unito is set to transform the way individuals interact with charitable
          causes.
        </p>
        <p className="Mono text-xs leading-[19px] ">
          Designed to empower users to engage in giving with ease and
          transparency. With features like donation analysis, secure
          transactions, and anonymous donations
        </p>
        <section className="mt-5">
          <ReadMore text={"Learn more"} />
        </section>
      </div>
    </main>
  );
}

export default Unito;
