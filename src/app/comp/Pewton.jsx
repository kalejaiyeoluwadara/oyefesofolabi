import ReadMore from "@/components/ReadMore";
import React from "react";
import ImgWrap from "@/app/comp/ImgWrap";
import { images } from "@/utils";

function Pewton() {
  return (
    <main className="h-full sm:w-auto w-full pr-3 ">
      <div className="w-full  h-[288px] ">
        <ImgWrap image={images.pewton} />
      </div>
      <div className="">
        <h2 className="mt-4">Pewton Technologies</h2>
        <p className="text-xs leading-[19px] ">
          Pewton provides sustainable energy solution.
        </p>
        <p className="text-xs leading-[19px] ">
          In 2023, I designed a user-centric website that showcases cohesive
          branding and thoughtful color choices, conveying a sense of energy and
          environmental consciousness through innovative technology.
        </p>
        <section className="mt-5">
          <ReadMore
            text={"Read on Behance"}
            link={
              "https://www.behance.net/gallery/196203303/Pewton-Technologies-A-Branding-and-Website-Design"
            }
          />
        </section>
      </div>
    </main>
  );
}

export default Pewton;
