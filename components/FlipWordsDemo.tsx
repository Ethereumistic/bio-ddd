import React from "react";
import { FlipWords } from "./ui/flip-words";
import Image from "next/image";
export function FlipWordsDemo() {
  const words = ["хлебарки", "гризачи", "дървеници", "бълхи", "мухи", "оси", "комари", "кърлежи", "мравки",];

  return (
    <div className="h-[38rem] flex justify-center items-center px-4 mt-16">
      <div className="text-6xl font-russo mx-auto  font-normal text-neutral-600 dark:text-neutral-400">
    <div className="mb-12 flex">
        Забравете за
        <div className="ml-8">
        <FlipWords words={words} />
        </div> <br />
        </div>
        Без повече вредители с <span className="dark:text-white text-ddblue ml-8">Bio <span className="text-lgreen">DDD</span></span>
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
        </div>
      </div>
    </div>
  );
}
