// BackgroundGradientDemo.tsx
// BackgroundGradientDemo.tsx
"use client";
import React, { useState } from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import { PestButton } from "./PestButton";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

import { RxWidth, RxHeight  } from "react-icons/rx";
import { GiWeight } from "react-icons/gi";
import { IoColorPaletteOutline } from "react-icons/io5";
import { FaPaw  } from 'react-icons/fa';
import { GiBrokenBone } from 'react-icons/gi';
import { MdWarning } from 'react-icons/md';
import { BsCalendar2Heart } from "react-icons/bs";
import { FaRegMoon } from "react-icons/fa";
import { PiBowlFoodBold } from "react-icons/pi";

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const LatinName = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 ">
    <div className="font-russo font-bold text-xl text-neutral-600 dark:text-neutral-200 flex mx-auto justify-center items-center">
    Mus musculus
    </div>
  </div>
);

const Look = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 ">
    <div className="font-russo font-bold text-xl text-neutral-600 dark:text-neutral-200 flex mx-auto justify-center items-center">
      {/* <Image src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/rat.png" width={100} height={50} alt="dummy image" className="block dark:hidden" />
      <Image src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/rat.png" width={100} height={50} alt="dummy image" className="dark:block hidden" /> */}
      <ul>
        <li className="flex ">
          <RxWidth className="h-6 w-6 text-neutral-500 mr-4" />
          15cm
        </li>
        <li className="flex ">
          <RxHeight className="h-6 w-6 text-neutral-500 mr-4" />
          2-5cm
        </li>
        <li className="flex ">
          <GiWeight className="h-6 w-6 text-neutral-500 mr-4" />
          15-40g
        </li>

        <li className="flex ">
          <IoColorPaletteOutline className="h-6 w-6 text-neutral-500 mr-4" />
            тъмносив
        </li>

      </ul>
    </div>
  </div>
);

const Harm = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 ">
    <div className="font-russo font-bold text-xl text-neutral-600 dark:text-neutral-200 flex mx-auto justify-center items-center">
      {/* <Image src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/rat.png" width={100} height={50} alt="dummy image" className="block dark:hidden" />
      <Image src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/rat.png" width={100} height={50} alt="dummy image" className="dark:block hidden" /> */}
      <ul className="space-y-2">
        <li className="flex text-sm">
          <MdWarning  className="h-6 w-6 text-neutral-500 mr-4" />
          преносител на заболявания
        </li>
        <li className="flex text-sm">
          <GiBrokenBone className="h-6 w-6 text-neutral-500 mr-4" />
          замърсяват 
        </li>
        <li className="flex text-sm">
          <GiWeight className="h-6 w-6 text-neutral-500 mr-4" />
          пренасят други вредители
        </li>


      </ul>
    </div>
  </div>
);

const Breed = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 ">
    <div className="font-russo font-bold text-xl text-neutral-600 dark:text-neutral-200 flex mx-auto justify-center items-center">
      {/* <Image src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/rat.png" width={100} height={50} alt="dummy image" className="block dark:hidden" />
      <Image src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/rat.png" width={100} height={50} alt="dummy image" className="dark:block hidden" /> */}
      <ul className="space-y-2">
        <li className="flex text-md">
          <FaPaw  className="h-6 w-6 text-neutral-500 mr-4" />
          ражда 4 - 7 малки
        </li>
        <li className="flex text-md">
          <BsCalendar2Heart className="h-6 w-6 text-neutral-500 mr-4" />
          19 дни бременност 
        </li>
      </ul>
    </div>
  </div>
);

const Doing = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 ">
    <div className="font-russo font-bold text-xl text-neutral-600 dark:text-neutral-200 flex mx-auto justify-center items-center">
      {/* <Image src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/rat.png" width={100} height={50} alt="dummy image" className="block dark:hidden" />
      <Image src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/rat.png" width={100} height={50} alt="dummy image" className="dark:block hidden" /> */}
      <ul className="space-y-2">
        <li className="flex text-md">
          <FaRegMoon  className="h-6 w-6 text-neutral-500 mr-4" />
          води нощен начин на живот
        </li>
        <li className="flex text-md">
          <PiBowlFoodBold  className="h-6 w-6 text-neutral-500 mr-4" />
          яде всякакъв вид храна 
        </li>
      </ul>
    </div>
  </div>
);

const items = [
  {
    title: "ЛАТИНСКО НАИМЕНОВАНИЕ",
    // description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <LatinName />,
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "КАК ИЗГЛЕЖДА",
    // description: "Dive into the transformative power of technology.",
    header: <Look />,
    // icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "ВРЕДИ",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Harm />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "ПОВЕДЕНИЕ, ХРАНЕНЕ И НАВИЦИ",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Doing />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "РАЗМНОЖАВАНЕ",
    description: "Join the quest for understanding and enlightenment.",
    header: <Breed />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "ПРИЗНАЦИ ЗА НАПАДЕНИЕ",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];

export const BentoGridDemo = () => {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}


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

}: BackgroundGradientDemoProps) {
  const [content, setContent] = useState({
    imageSrc: imageSrc1,
    title: title1,
    description: description1,
  });

  const handleButtonClick = (imageSrc: string, title: string, description: string) => {
    setContent({ imageSrc, title, description });
  };

  return (
    <div className="flex space-x-8">

      <BentoGridDemo />
<div>
<div className=" flex justify-center text-center my-8 space-x-4">
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
        <div className="mt-8 flex space-x-2 -translate-x-6">



        </div>
      </BackgroundGradient>
    </div>
    </div>
  );
}
