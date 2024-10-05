import ReadMore from "@/components/ReadMore";
import Shop from "@/components/Shop";
import ImgWrap from "@/app/comp/ImgWrap";
import React from "react";
import { images } from "@/utils";
function Orion() {
  return (
    <main className="h-full sm:w-auto w-full pr-3  border-black col-span-2 ">
      <div className="w-full border-[1px] border-black h-[288px] ">
        <ImgWrap image={images.orion} />
      </div>
      <div className="">
        <h2 className="mt-4">Orion edition smartwatch</h2>
        <p className="Mono text-xs leading-[19px] ">
          Orion is a new line of wearable devices designed to elevate iTech
          Wearables’ product offerings. It focuses on enhancing user experience
          by integrating cutting-edge technology with sleek, modern design
        </p>
        <ul className="px-6 mt-[15px] mb-5  ">
          {[
            "Thinner Bezels for Maximized Display",
            "User interface updates",
            "operating system redesign",
            "Side Button",
          ].map((desc, id) => {
            return (
              <li
                className=" tracking-widest text-xs leading-[19px] list-disc Mono"
                key={id}
              >
                {desc}
              </li>
            );
          })}
        </ul>
        <section className="flex mt-5 gap-2">
          <ReadMore
            link={
              "https://www.behance.net/gallery/208518345/Orion-Smart-Watch-Design"
            }
            text={"Read on Behance"}
          />
        </section>
      </div>
    </main>
  );
}

export default Orion;
