"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

export function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      
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
        className="text-xl xs:px-24 sm:px-16 md:px-8 lg:px-64 xl:px-32 2xl:px-96 xs:text-lg sm:text-xl  md:text-3xl lg:text-4xl font-bold text-neutral-700 dark:text-white w-full leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Вашият доверен партньор <br />за професионална{" "}<br />
        <Highlight className="text-black dark:text-white">
        Дезинфекция, Дезинсекция и Дератизация
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
