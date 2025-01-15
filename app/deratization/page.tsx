"use client";
import React from 'react'

import { TimelineRats } from '@/components/TimelineRats';
import { CanvasRevealEffectDemo } from '@/components/CanvasRevealEffectDemo';
import { MobileCanvasRevealEffectDemo } from '@/components/MobileCanvasRevealEffectDemo';
import { FaViruses } from 'react-icons/fa';
import { HiBugAnt } from 'react-icons/hi2';

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
    href: "/disinsection",
    title: "Дезинсекция",
    icon: <HiBugAnt className="text-red-700" size={120} />,
    canvasProps: {
      animationSpeed: 3,
      containerClassName: "bg-red-900",
      colors: [
        [255, 22, 22],
        [255, 26, 26],
      ],
      dotSize: 2,
    },
    children: "Оттървете се от насекомите още СЕГА!",
  },

];


export default function DeratizationPage() {
    return (
        <div className=''>
            <TimelineRats />
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