// BackgroundGradientDemo.tsx
"use client";
import React, { useState } from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

interface BackgroundGradientDemoProps {
  
  imageSrc1: string;
  title1: string;
  description1: string;
  button1: string;

  imageSrc2: string;
  title2: string;
  description2: string;
  button2: string;

  imageSrc3: string;
  title3: string;
  description3: string;
  button3: string;

  imageSrc4: string;
  title4: string;
  description4: string;
  button4: string;

  onButtonClick: (title: string, description: string, imageSrc: string, button: string) => void;
}

export function BackgroundGradientDemo({
  imageSrc1,
  title1,
  description1,
  button1,

  imageSrc2,
  title2,
  description2,
  button2,

  imageSrc3,
  title3,
  description3,
  button3,

  imageSrc4,
  title4,
  description4,
  button4,

  onButtonClick,
}: BackgroundGradientDemoProps) {
  const [content, setContent] = useState({
    imageSrc: imageSrc1,
    title: title1,
    description: description1,
  });

  const handleButtonClick = (imageSrc: string, title: string, description: string) => {
    setContent({ imageSrc, title, description });
    onButtonClick(title, description, imageSrc, button3); // Update parent state
  };

  return (
    <div>
      <div className="flex justify-center text-center my-8 space-x-4">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
          onClick={() => handleButtonClick(imageSrc1, title1, description1)}
        >
          {button1}
        </HoverBorderGradient>

        <HoverBorderGradient
          containerClassName="rounded-full "
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
          onClick={() => handleButtonClick(imageSrc2, title2, description2)}
        >
          {button2}
        </HoverBorderGradient>

        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
          onClick={() => handleButtonClick(imageSrc3, title3, description3)}
        >
          {button3}
        </HoverBorderGradient>

        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
          onClick={() => handleButtonClick(imageSrc4, title4, description4)}
        >
          {button4}
        </HoverBorderGradient>
      </div>

      <BackgroundGradient className="rounded-[22px] max-w-[612px] p-4 sm:px-10 bg-white dark:bg-zinc-900">
        <Image
          src={content.imageSrc}
          alt="image"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 font-russo">
          {content.title}
        </p>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 font-russo">
          {content.description}
        </p>
        <div className="mt-8 flex space-x-2 -translate-x-6"></div>
      </BackgroundGradient>
    </div>
  );
}
