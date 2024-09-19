"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider-disinfection";
import { HoverBorderGradientDemo } from "./HoverBorderGradientDemo";

export function ImagesSliderRat() {
  const images = [
    "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/images/rattrap.jpg",
    "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/images/rattrap2.jpg",
    "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/images/ratpoison1.jpg",
    "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/images/18.png",
    "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/images/29.png",

  ];
  return (
    <ImagesSlider className="h-[520px] rounded-lg" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        {/* <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Доверете се на <br /> експертите
        </motion.p> */}
        {/* <button className="px-4 py-2 backdrop-blur-sm border bg-red-300/10 border-red-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Свържете се с нас →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-red-500 to-transparent" />
        </button> */}
        {/* <HoverBorderGradientDemo /> */}
      </motion.div>
    </ImagesSlider>
  );
}
