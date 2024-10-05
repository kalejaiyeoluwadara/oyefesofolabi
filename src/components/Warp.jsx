import Image from "next/image";
import React from "react";
import { images } from "../utils";
import ReadMore from "./ReadMore";
function Warp() {
  return (
    <section className="sm:min-h-[451px] border-y-[1px] flex items-center border-black w-full ">
      <div className="mt-6 w-full sm:justify-between flex sm:flex-row flex-col-reverse">
        <div className="sm:w-[404px] sm:py-0 py-10 flex flex-col justify-center w-full ">
          <h2 className="">Warp Virtual Reality </h2>
          <p className="Mono">
            Users travel virtually through time and immerse themselves in
            historical moments. From ancient Rome to the moon landing, as well
            as personal memories stored in their content, I crafted an engaging
            environment where users can fully experience these extraordinary
            events.
          </p>
          <ul className="px-6 mt-[15px] mb-5  ">
            {[
              "historical events and their own content.",
              "Making users feel truly present in the moments they explore.",
              "Relive stored memories, adding a personal touch to the overall experience.",
            ].map((desc, id) => {
              return (
                <li
                  className="leading-[19px] tracking-wider list-disc Mono text-xs"
                  key={id}
                >
                  {desc}
                </li>
              );
            })}
          </ul>
          <div>
            <ReadMore
              link={
                "https://www.behance.net/gallery/182428137/Warp-Virtual-Reality-mobile-App"
              }
              text={"Warp Study"}
            />
          </div>
        </div>
        <div className="sm:flex-1">
          <Image
            src={images.warp}
            alt="warp image"
            className="flex-shrink-0 w-full h-full "
          />
        </div>
      </div>
    </section>
  );
}

export default Warp;
