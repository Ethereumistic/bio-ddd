import React from "react";
import { FlipWords } from "./ui/flip-words";
import Image from "next/image";
export function DisinfectionWords() {
  const words = ["болести", "вируси", "бактерии", "миркоби", "вредители", "COVID-19",];

  return (
    <div className="h-[22rem] flex justify-center items-center px-4 mt-16">
      <div className="text-4xl font-russo mx-auto  text-neutral-600 dark:text-neutral-400">
    <div className="mb-12 flex flex-col">
        Дезинфекцията на вашата територия е една от <br></br>главните превантивни мерки против
        <div className="translate-x-[700px] -translate-y-10 ">
        <FlipWords words={words} />
        </div>
        </div>
        {/* Без повече вредители с <span className="dark:text-white text-ddblue ml-8">Bio <span className="text-lgreen">DDD</span></span>
        <div className=" translate-x-[848px] -translate-y-[220px]">
            <Image src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/logo/logo-light.png" 
                    alt="logo"
                    width={150} 
                    height={150}
                    className="block dark:hidden" />

            <Image src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/logo/logo-dark.png" 
                    alt="logo"
                    width={150} 
                    height={150}
                    className="dark:block hidden" />
        </div> */}
      </div>
    </div>
  );
}