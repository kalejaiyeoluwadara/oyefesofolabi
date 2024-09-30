import Nav from "@/components/Nav";
import Image from "next/image";
import { images } from "@/utils";
import ReadMore from "@/components/ReadMore";
export default function Home() {
  return (
    <main className="min-h-screen px-[108px] flex flex-col items-start  w-full">
      <Nav />
      <section className="w-full  py-[86px] flex flex-col items-center justify-center ">
        <Image src={images.afolabi} alt="image" height={292} width={292} />
        <p className="text-center sm:w-[751px] mt-10 text-3xl font-bold">
          <span className=" text-[#1010FF]">Unbridled</span> might of
          self-expression. I leverage this superpower in websites, mobile and
          web apps design. I'm <span className=" text-[#1010FF]">Oyefeso</span>,
          a product designer based in{" "}
          <span className=" text-[#1010FF">Lagos-Nigeria.</span>{" "}
        </p>
      </section>
      {/* section 2 */}
      <section className="min-h-screen border-t-[2px] border-black w-full ">
        <div className="mt-6 w-full sm:justify-between flex sm:flex-row flex-col">
          <div className="sm:w-[404px] flex flex-col justify-center w-full ">
            <h2 className="text-[22px] ">Warp Virtual Reality </h2>
            <p className="Mono">
              Users travel virtually through time and immerse themselves in
              historical moments. From ancient Rome to the moon landing, as well
              as personal memories stored in their content, I crafted an
              engaging environment where users can fully experience these
              extraordinary events.
            </p>
            <ul className="px-4 mt-[15px] mb-5 ">
              {[
                "historical events and their own content.",
                "Making users feel truly present in the moments they explore.",
                "Relive stored memories, adding a personal touch to the overall experience.",
              ].map((desc, id) => {
                return (
                  <li
                    className=" tracking-widest  leading-[19px] list-disc Mono"
                    key={id}
                  >
                    {desc}
                  </li>
                );
              })}
            </ul>
            <div>
              <ReadMore text={"Warp Text"} />
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
    </main>
  );
}
