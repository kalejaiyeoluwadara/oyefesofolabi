import ReadMore from "@/components/ReadMore";
import React from "react";

function Pewton() {
  return (
    <main className="h-full sm:w-auto w-full pr-4 ">
      <div className="w-full bg-black h-[288px] "></div>
      <div className="">
        <h2 className="text-xl mt-4">Pewton Technologies</h2>
        <p className="Mono text-xs leading-[19px] ">
          Pewton provides sustainable energy solution.
        </p>
        <p className="Mono text-xs leading-[19px] ">
          In 2023, I designed a user-centric website that showcases cohesive
          branding and thoughtful color choices, conveying a sense of energy and
          environmental consciousness through innovative technology.
        </p>
        <ReadMore text={"Read on Behance"} />
      </div>
    </main>
  );
}

export default Pewton;
