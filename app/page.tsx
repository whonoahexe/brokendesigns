"use client"

import { useRef, useEffect } from "react";
import Link from "next/link";

import { getFirstWordLowercase } from "@/utils";
import { sourceCodePro } from "@/lib/fonts";
import Works from "@/components/WorkData";
import WorkCard from "@/components/WorkCard";
import Button from "@/components/core/Button";

const Page = () => {
  const titleRef = useRef<HTMLDivElement | null>(null);
  const allFields = Array.from(new Set(Works.map(work => work.field)));
  const filteredWorks = Works.filter(work => work.homepage === true);

  useEffect(() => {
    const handleScroll = () => {
      if (titleRef.current) {
        const scrollPosition = window.scrollY;
        titleRef.current.style.transform = `translateX(-${scrollPosition}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div ref={titleRef} className={`${sourceCodePro.variable} hidden md:flex justify-between w-full mt-28 tracking-normal`} style={{ fontFamily: "Space Mono, monospace" }}>
          <p className="text-[7.5rem] text-white">..</p>
          <p className="text-[7.5rem] text-white">BROKEN.</p>
      </div>

      <div className="container w-full max-w-[98%] md:max-w-[92%] px-6 md:px-12 mx-auto mt-40 md:mt-20 lg:mt-52">
        <div className="block md:hidden mt-40">
          <p className="text-7xl text-white" style={{ fontFamily: "Space Mono, monospace" }}>BRKN.</p>
        </div>
        <p className="text-xl text-white mt-12 md:mt-0" style={{ fontFamily: "Space Mono, monospace" }}>WHO AM I? Noah here. Motion, Graphic, UI/UX, Web Developer.</p>

        <div className="hidden md:flex justify-center lg:justify-start items-center gap-12 p-12 mt-12 rounded-lg" style={{ backgroundImage: "linear-gradient(270deg,rgba(18,19,20,0) 50%,#005ac1),linear-gradient(180deg,rgba(18,19,20,0) 50%,#005ac1)" }}>
          {allFields.map((field, index) => (
            <Link key={index} href={getFirstWordLowercase(field!)}>
              <span className="text-xl text-white hover:text-[#c4c6d0] transition-all duration-150 ease-in-out-def">{field}</span>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-12 gap-6 h-full">
          {filteredWorks.map((work, index) => (
            <WorkCard key={index} src={work.image} alt={work.title} desc={work.description} cols={index === 0 ? 7 : index === 1 ? 5 : 12} field={work.field!} className="mt-12" />
          ))}
        </div>

        <div className="flex justify-center w-full mt-12">
          <Link href="/motion">
            <Button classname="px-12" text="View More" onClick={() => {}} />
          </Link>
        </div>
      </div>
    </>
  ) 
}

export default Page;
