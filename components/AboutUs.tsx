import React from "react";
import { FlipWords } from "./ui/flip-words";
import Image from "next/image";
export function AboutUs() {
  const words = ["хлебарки", "гризачи", "дървеници", "бълхи", "мухи", "оси", "комари", "кърлежи", "мравки",];

  return (
<div className="max-w-3xl w-full mt-10">
    <div className=" flex  ">
        <div className="text-3xl font-russo font-normal text-neutral-600 dark:text-neutral-400 ">
            С помоща и услугите на 
        </div>

            <div className="flex flex-col ml-6 -mt-10">
                <div className="ml-7  z-50">
                <Image src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/logo/logo-light.png" 
                    alt="logo"
                    width={80} 
                    height={80}
                    className="block dark:hidden" />

                <Image src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/logo/logo-dark.png" 
                    alt="logo"
                    width={80} 
                    height={80}
                    className="dark:block hidden" />
                </div>
      <div className="dark:text-white text-ddblue  text-4xl flex ">Bio <div className="text-lgreen">DDD</div></div>
    </div>
    </div>

        <div className="text-4xl flex text-neutral-600 dark:text-neutral-400 mt-8">
        Забравете за
        <div className="ml-8">
        <FlipWords words={words} />
        </div>
        </div>
</div>
  );
}