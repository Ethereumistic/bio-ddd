"use client";
import React from 'react'
import { FlipWordsDemo } from '@/components/FlipWordsDemo'
import { CardHoverEffectDemo } from '@/components/CardHoverEffectDemo'
import { DisinfectionWords } from '@/components/DisinfectionWords';
import { CardSpotlightDemo } from '@/components/CardSpotlightDemo';
import { TimelineDisinfect } from '@/components/TimelineDisinfect';
import { CanvasRevealEffectDemo } from '@/components/CanvasRevealEffectDemo';
import { MobileCanvasRevealEffectDemo } from '@/components/MobileCanvasRevealEffectDemo';
import { HiBugAnt } from 'react-icons/hi2';
import { MdPestControlRodent } from 'react-icons/md';

const cards = [

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
      children: "Мишкие нямат място тук. Отървете се от тях бързо и ефективно.",
    },
  ];
  
export default function DisinfectionPage() {
    return (
        <div className=''>
            <TimelineDisinfect />

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