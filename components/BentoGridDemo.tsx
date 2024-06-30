"use client";
import { cn } from "@/utils/cn";
import React, { useState } from "react";
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
import { BackgroundGradientDemo } from "./BackgroundGradientDemo";
import Image from "next/image";
import { RxWidth, RxHeight  } from "react-icons/rx";
import { GiWeight } from "react-icons/gi";
import { IoColorPaletteOutline } from "react-icons/io5";
import { FaPaw  } from 'react-icons/fa';
import { GiSpermWhale } from 'react-icons/gi';
import { GiBrokenBone } from 'react-icons/gi';
import { MdWarning } from 'react-icons/md';
import { BsCalendar2Heart } from "react-icons/bs";
import { GiRat } from 'react-icons/gi';
import { FaRegMoon } from "react-icons/fa";
import { PiBowlFoodBold } from "react-icons/pi";

interface BentoGridDemoProps {
  content: any;
}

export function BentoGridDemo() {
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
    title: "Латинско Наименование",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <LatinName />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "КАК ИЗГЛЕЖДА",
    description: "Dive into the transformative power of technology.",
    header: <Look />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
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
