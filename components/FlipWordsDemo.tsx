import React from "react";
import { FlipWords } from "./ui/flip-words";
import Image from "next/image";
import { LogoImage } from "./ui/navbar-menu";

export function FlipWordsDemo() {
  const words = ["хлебарки", "гризачи", "дървеници", "бълхи", "мухи", "оси", "стършели", "комари", "кърлежи", "мравки", "змии", "паяци", "птици"];

  return (
    <div className="min-h-[38rem] flex flex-col justify-center items-center px-4 mt-8 sm:mt-12 md:mt-16">
      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-russo mx-auto font-normal text-neutral-600 dark:text-neutral-400 text-center">
        <div className="mb-4 sm:mb-6 md:mb-8 lg:mb-12 flex flex-col sm:flex-row items-center justify-center">
          <span className="mb-2 sm:mb-0">Забравете за</span>
          <div className="sm:ml-4 md:ml-6 lg:ml-8">
            <FlipWords words={words} />
          </div>
        </div>


        <div className="flex flex-col sm:flex-row items-center sm:items-end justify-center">
  <span className="leading-loose mb-4 sm:mb-0 sm:mr-4">Без повече вредители с</span>

  <div className="flex flex-col items-center -translate-x-0 lg:translate-x-5">
    <Image src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/logo/logo-light.png" 
           alt="logo"
           width={150} 
           height={150}
           className="block dark:hidden w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-24 xl:h-24 mb-2" />

    <Image src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/logo/logo-dark.png" 
           alt="logo"
           width={150} 
           height={150}
           className="dark:block hidden w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-24 xl:h-24 mb-2" />
    <span className="text-ddblue dark:text-white mb-4 md:mb-7 ">Bio<span className="text-lgreen">DDD</span></span>
  </div>
</div>


      </div>
      <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20">

      </div>
    </div>
  );
}