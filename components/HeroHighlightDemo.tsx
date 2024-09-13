"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

export function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <div className="w-screen ">
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
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl
        font-bold text-neutral-700 dark:text-white  
        leading-relaxed lg:leading-snug text-center  
        "
      >
        Вашият доверен партньор <br />за професионална{" "}<br />
        <Highlight className="text-black dark:text-white whitespace-nowrap inline-block">
        Дезинфекция,<br className="sm:hidden block" /> Дезинсекция и Дератизация
        </Highlight>
      </motion.h1>
      </div>
    </HeroHighlight>
  );
}
