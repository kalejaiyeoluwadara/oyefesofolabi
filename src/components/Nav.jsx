"use client";
import React, { useState } from "react";
import { images, links } from "../utils";
import Image from "next/image";
import Link from "next/link";
function Nav() {
  const [socials, setSocials] = useState(links.links);
  return (
    <nav className="sm:flex sm:flex-row w-full items-center  mt-[37px] flex-col sm-gap-[44px] gap-[24px]">
      <section className="flex gap-2 items-center">
        <Image height={16} width={16} src={images.crown} alt="" className="" />
        <p className="text-xs Mono">The Greatest</p>
      </section>
      <section className="flex bg-red-300 flex-1 items-center justify-center">
        <div className="h-[2px] bg-black w-full rounded-full " />
      </section>
      <section className="flex gap-3 text-xs Mono ">
        {socials.map((link, id) => {
          return (
            <Link className="capitalize Mono" key={id} href={link.link}>
              {link.name}
            </Link>
          );
        })}
      </section>
    </nav>
  );
}

export default Nav;
