"use client";
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

export function HoverBorderGradientDemo() {
  return (
    <div className=" flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <AceternityLogo />
        <span className="font-russo">Свържете се с нас!</span>
      </HoverBorderGradient>
    </div>
  );
}

const AceternityLogo = () => {
  return (
      <div className="text-lg">📞</div>
  );
};
