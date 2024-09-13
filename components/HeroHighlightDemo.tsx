"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

export function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <div className="w-full ">
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className=" text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-700 dark:text-white  
        leading-relaxed lg:leading-snug text-center 
        mx-auto px-0 xs:px-0 sm:px-8 md:px-8 lg:px-20 xl:px-52 2xl:px-80 3xl:px-96"
      >
        Вашият доверен партньор <br />за професионална{" "}<br />
        <Highlight className="text-black dark:text-white  whitespace-normal sm:whitespace-nowrap ">
        Дезинфекция, Дезинсекция и Дератизация
        </Highlight>
      </motion.h1>
      </div>
    </HeroHighlight>
  );
}
