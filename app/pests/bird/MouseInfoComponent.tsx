"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MouseInfo, MouseType } from './mouseTypes'
import { RxHeight, RxWidth } from 'react-icons/rx';
import { GiWeight } from 'react-icons/gi';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { GoDotFill } from "react-icons/go";
import { FaExclamationTriangle } from "react-icons/fa";

import Image from 'next/image';
const mouseData: Record<MouseType, MouseInfo> = {
  'ДОМАШНА МИШКА': {
    latinName: 'Mus musculus',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/Mus-musculus.png',
    appearance: {
      length: '10-15 cm',
      height: '3-5 cm',
      weight: '15-40 g',
      color: 'Кафяв / Сив'
    },
    dangers: ['преносител на заболявания', 'пренасят други вредители', 'замърсяват'],
    behavior: ['социално животно', 'нощен начин на живот', 'добър катерач'],
    reproduction: {
      offspring: '5-10',
      gestation: '19-21 days'
    },
    signs: ['Droppings', 'Gnaw marks on furniture and food packaging'],
  },
  'ЧЕРЕН ПЛЪХ': {
      latinName: 'Rattus rattus',
      imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/Rattus-rattus.png',
      appearance: {
        length: '16-24 cm',
        height: '4-5 cm',
        weight: '150-250 g',
        color: 'Black or dark brown'
      },
      dangers: ['Can carry diseases', 'Can carry parasites', 'Can damage electrical wiring'],
      behavior: ['Nocturnal', 'Good climber', 'Prefers high places'],
      reproduction: {
        offspring: '5-8',
        gestation: '21-23 days'
      },
      signs: ['Droppings', 'Gnaw marks', 'Grease marks on walls from fur'],
    },
  'СИВ ПЛЪХ': {
      latinName: 'Rattus norvegicus',
      imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/Rattus-norvegicus.png',
      appearance: {
        length: '20-25 cm',
        height: '5-7 cm',
        weight: '200-500 g',
        color: 'Brown or gray'
      },
      dangers: ['Can carry diseases', 'Can cause structural damage by gnawing'],
      behavior: ['Nocturnal', 'Good swimmer', 'Prefers low and damp places'],
      reproduction: {
        offspring: '6-12',
        gestation: '21-23 days'
      },
      signs: ['Droppings', 'Gnaw marks on structures and food containers', 'Burrows near buildings'],
    },
  'ПОЛЕВКА': {
      latinName: 'Microtus arvalis',
      imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/Microtus-arvalis.png',
      appearance: {
        length: '8-12 cm',
        height: '2-3 cm',
        weight: '20-50 g',
        color: 'Brown or gray'
      },
      dangers: ['Can damage crops', 'Can carry diseases'],
      behavior: ['Herbivorous', 'Active during day and night', 'Prefers grassy fields'],
      reproduction: {
        offspring: '3-7',
        gestation: '19-21 days'
      },
      signs: ['Runways in grass', 'Gnaw marks on plants and crops'],
    },
};
const MouseInfoComponent: React.FC = () => {
  const [selectedMouse, setSelectedMouse] = useState<MouseType>('ДОМАШНА МИШКА');

  const handleMouseSelect = (mouseType: MouseType) => {
    setSelectedMouse(mouseType);
  };

  const currentMouse = mouseData[selectedMouse];

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-4">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
        <InfoBox title="ЛАТИНСКО НАИМЕНОВАНИЕ" content={currentMouse.latinName} />
        <InfoBox title="КАК ИЗГЛЕЖДА" content={
          <>
          <ul>
        <li className="flex ">
          <RxWidth className="h-6 w-6 text-neutral-500 mr-4" />
          {currentMouse.appearance.length}
        </li>
        <li className="flex ">
          <RxHeight className="h-6 w-6 text-neutral-500 mr-4" />
          {currentMouse.appearance.height}
        </li>
        <li className="flex ">
          <GiWeight className="h-6 w-6 text-neutral-500 mr-4" />
          {currentMouse.appearance.weight}
        </li>
        <li className="flex ">
          <IoColorPaletteOutline className="h-6 w-6 text-neutral-500 mr-4" />
          {currentMouse.appearance.color}
        </li>
      </ul>
          </>
        } />
        <InfoBox title="ВРЕДИ" content={
          <ul>
            {currentMouse.dangers.map((danger, index) => (
              <li key={index}
              className='flex'><FaExclamationTriangle className='mt-1 scale-[0.7] mr-3'/>{danger}</li>
            ))}
          </ul>
        } />
        <InfoBox title="ПОВЕДЕНИЕ, ХРАНЕНЕ И НАВИЦИ" content={
          <ul>
            {currentMouse.behavior.map((behavior, index) => (
              <li key={index}
              className='flex'><GoDotFill className='mt-1 scale-90'/>{behavior}</li>
            ))}
          </ul>
        } />
        <InfoBox title="РАЗМНОЖАВАНЕ" content={
          <>
            <p>{currentMouse.reproduction.offspring}</p>
            <p>{currentMouse.reproduction.gestation}</p>
          </>
        } />
        <InfoBox title="ПРИЗНАЦИ ЗА НАПАДЕНИЕ" content={
          <ul>
            {currentMouse.signs.map((sign, index) => (
              <li key={index}>{sign}</li>
            ))}
          </ul>
        } />
      </div>
      <div className="flex-1">
        <MouseCard
          selectedMouse={selectedMouse}
          onSelectMouse={handleMouseSelect}
        />
      </div>
    </div>
  );
};

const InfoBox: React.FC<{ title: string; content: React.ReactNode }> = ({ title, content }) => (
  
  <motion.div
    className=" border border-gray-200 p-4 rounded-xl hover:shadow-md transition duration-300 "
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <h3 className="text-2xl mb-2">{title}</h3>
    <div className='bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 rounded-xl p-8 justify-center items-center text-center my-auto h-32 flex flex-col text-xl'>
      {typeof content === 'string' ? (
        <p>{content}</p>
      ) : (
        React.isValidElement(content) && 
        React.Children.map(content.props.children, (child, index) => 
          React.cloneElement(child, { key: index })
        )
      )}
    </div>


  </motion.div>
);



const MouseCard: React.FC<{
  selectedMouse: MouseType;
  onSelectMouse: (mouseType: MouseType) => void;
}> = ({ selectedMouse, onSelectMouse }) => (
  <motion.div
    className=" p-4 rounded-lg shadow-md"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
  >
    <div className="flex gap-2 mb-4">
      {(Object.keys(mouseData) as MouseType[]).map((mouseType) => (
        <HoverBorderGradient
          key={mouseType} // <-- Corrected the placement of the key prop
          containerClassName="rounded-full "
          as="button"
          className="dark:bg-black bg-white  dark:text-white flex items-center space-x-2"
        >
          <button
            className={`px-3 py-1 rounded ${
              selectedMouse === mouseType ? 'dark:text-white text-lgreen' : 'text-ddblue dark:text-neutral-400'
            }`}
            onClick={() => onSelectMouse(mouseType)}
          >
            {mouseType}
          </button>
        </HoverBorderGradient>
      ))}
    </div>

    <Image 
      src={mouseData[selectedMouse].imageUrl} 
      alt={selectedMouse} 
      width={400}
      height={400}
      className=" rounded-lg mb-4"
    />
    <h2 className="text-xl font-bold mb-2">{selectedMouse}</h2>
    <p>{mouseData[selectedMouse].latinName}</p>
  </motion.div>
);

export default MouseInfoComponent;