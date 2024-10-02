import Nav from "@/components/Nav";
import Image from "next/image";
import { images } from "@/utils";
import ReadMore from "@/components/ReadMore";
import Warp from "@/components/Warp";
import Sec from "@/app/Sec";
import Third from "@/app/Third";
import Banner from "@/app/Banner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen px-5 sm:px-[88px] flex flex-col items-start  w-screen overflow-x-hidden">
      <Nav />
      <section className="w-full  py-[86px] flex flex-col items-center justify-center ">
        <Image src={images.afolabi} alt="image" height={292} width={292} />
        <p className="sm:text-center w-full sm:w-[751px] Cooper mt-10 sm:text-3xl text-2xl font-[100]">
          <span className=" text-[#1010FF]">Unbridled</span> might of
          self-expression. I leverage this superpower in websites, mobile and
          web apps design. I'm <span className=" text-[#1010FF]">Oyefeso</span>,
          a product designer based in{" "}
          <span className=" text-[#1010FF]">Lagos-Nigeria.</span>{" "}
        </p>
      </section>
      <Warp />
      <Sec />
      <Third />
      <Banner />
      <Footer />
    </main>
  );
}
