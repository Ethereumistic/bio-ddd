"use client";
import React from 'react'

import { TimelineInsects } from '@/components/TimelineInsects';
import { MdPestControlRodent } from 'react-icons/md';
import { FaViruses } from 'react-icons/fa';
import { CanvasRevealEffectDemo } from '@/components/CanvasRevealEffectDemo';
import { MobileCanvasRevealEffectDemo } from '@/components/MobileCanvasRevealEffectDemo';

const cards = [
    {
      href: "/disinfection",
      title: "Дезинфекция",
      icon: <FaViruses className="text-emerald-500" size={120} />,
      canvasProps: {
        animationSpeed: 5.1,
        containerClassName: "bg-emerald-900",
      },
      children: "Кажете чао на невидимите микроби и бактерии!",
    },
    {
      href: "/deratization",
      title: "Дератизация",
      icon: <MdPestControlRodent className="text-gray-300" size={120} />,
      canvasProps: {
        animationSpeed: 3,
        containerClassName: "bg-slate-400",
        colors: [
          [125, 211, 252],
        ],
        dotSize: 2,
      },
      children: "Изпратете на кино миризливите и гнусни мишки!",
    },
  ];
  
export default function DisinsectionPage() {
    return (
        <div className=''>
            <TimelineInsects />

            <div className=" ">
                <h1 className='text-center text-2xl md:text-4xl lg:text-5xl font-bold mt-24 '>Разгледайте и нашите други услуги!</h1>
            <div className="hidden lg:flex lg:flex-row">
            <CanvasRevealEffectDemo cards={cards} />      
            </div>

            <div className="lg:hidden block">
            <MobileCanvasRevealEffectDemo cards={cards} />
            </div>

            </div>


        </div>
    )
}