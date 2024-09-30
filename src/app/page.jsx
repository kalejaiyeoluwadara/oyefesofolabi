import Nav from "@/components/Nav";
import Image from "next/image";
import { images } from "@/utils";
export default function Home() {
  return (
    <main className="min-h-screen px-[108px] flex flex-col items-start  w-full">
      <Nav />
      <section className="w-full py-[86px] flex flex-col items-center justify-center ">
        <Image src={images.logo} alt="image" height={292} width={292} />
        <p className="text-center sm:w-[751px] mt-10 text-3xl">
          <span className=" text-[#1010FF]">Unbridled</span> might of
          self-expression. I leverage this superpower in websites, mobile and
          web apps design. I'm <span className=" text-[#1010FF]">Oyefeso</span>,
          a product designer based in{" "}
          <span className=" text-[#1010FF">Lagos-Nigeria.</span>{" "}
        </p>
      </section>
    </main>
  );
}
