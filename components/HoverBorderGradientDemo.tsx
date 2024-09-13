"use client";
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

export function HoverBorderGradientDemo() {
  return (
    <div className="flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-1 sm:space-x-2 
                   px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 lg:px-5 lg:py-3
                   text-sm sm:text-sm md:text-base lg:text-lg transition-all duration-300"
      >
        <AceternityLogo />
        <span className="font-russo">Свържете се с нас!</span>
      </HoverBorderGradient>
    </div>
  );
}

const AceternityLogo = () => {
  return (
    <div className="text-sm sm:text-base md:text-lg lg:text-xl">📞</div>
  );
};