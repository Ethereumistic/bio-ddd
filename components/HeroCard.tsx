"use client";
import { motion, useInView } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highcard";
import Image from "next/image";
import { useRef } from "react";

export function HeroCard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <HeroHighlight>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-xl px-4 md:text-2xl lg:text-3xl font-bold text-neutral-700 dark:text-white max-w-xl leading-relaxed lg:leading-snug text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{
              delay: 0.2,
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
          >
            <Image src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/logo/logo-light.png" 
                   alt="logo"
                   width={150} 
                   height={150}
                   className="block dark:hidden w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 mx-auto mb-4" />

            <Image src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/logo/logo-dark.png" 
                   alt="logo"
                   width={150} 
                   height={150}
                   className="dark:block hidden w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 mx-auto mb-4" />
          </motion.div>
          С <span className="text-ddblue dark:text-white">Bio</span> <span className="text-lgreen">DDD</span> всичко е {" "}
          <Highlight className="text-black dark:text-white">
            ефективно, последователно и на високо ниво!
          </Highlight>
        </motion.h1>
      </motion.div>
    </HeroHighlight>
  );
}