"use client";
import React, { useState, useEffect } from 'react';
import { MosquitoInfo, MosquitoType } from './mosquitoTypes'
import { RxHeight, RxWidth } from 'react-icons/rx';
import { GiWeight } from 'react-icons/gi';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { GoDotFill } from "react-icons/go";
import { FaExclamationTriangle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Loading from '@/app/loading';
import Image from 'next/image';
import { BackgroundGradient } from '@/components/ui/background-gradient';


const mosquitoData: Record<MosquitoType, MosquitoInfo> = {
  'ТИГРОВ КОМАР': {
    latinName: 'Aedes albopictus',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/tigermosq.png',
    appearance: {
      length: '4 - 10 мм',
      height: '2 - 4 мм',
      weight: '0.5 - 1 мг',
      color: 'Черно с бели и сребристи ивици'
    },
    dangers: ['Преносител на заболявания като денга и зика', 'Може да причини дискомфорт и сърбеж', 'Може да разпространява вируси'],
    behavior: ['Активен през деня и вечерта', 'Предпочита влажни места', 'Размножава се в малки водни басейни'],
    reproduction: {
      offspring: '50 - 100 яйца на снасяне',
      gestation: '2 - 3 дни от снасяне'
    },
    signs: ['Наличие на комари в близост до водоеми', 'Сърбящи ухапвания'],
    desc: 'Тигровият комар е известен със своите бели и сребристи ивици по краката и тялото. Той е преносител на редица вирусни заболявания и е активен през деня. Предпочита да се размножава в малки водни басейни.',
  },
  'КОМАР': {
    latinName: 'Culex pipiens',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/komar.png',
    appearance: {
      length: '4 - 7 мм',
      height: '2 - 3 мм',
      weight: '0.2 - 0.5 мг',
      color: 'Сивкаво / Кафяво'
    },
    dangers: ['Преносител на заболявания като западнонилска треска', 'Може да предизвика алергични реакции', 'Може да причинява сърбеж'],
    behavior: ['Активен през нощта', 'Предпочита влажни и тъмни места', 'Размножава се в стояща вода'],
    reproduction: {
      offspring: '100 - 300 яйца на снасяне',
      gestation: '2 - 3 дни от снасяне'
    },
    signs: ['Сърбящи ухапвания', 'Наличие на комари в близост до стояща вода'],
    desc: 'Обикновеният комар е разпространен в градски и селски райони и е известен със своето активност през нощта. Той е преносител на различни заболявания и се размножава в стояща вода.',
  },
  'ТРЕСКОВ КОМАР': {
    latinName: 'Aedes aegypti',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/treskmosq.png',
    appearance: {
      length: '4 - 7 мм',
      height: '2 - 4 мм',
      weight: '0.5 - 1 мг',
      color: 'Черно с бели ивици и жълти петна'
    },
    dangers: ['Преносител на заболявания като денга и зика', 'Може да предизвика дискомфорт и сърбеж', 'Може да разпространява вируси'],
    behavior: ['Активен през деня', 'Предпочита влажни и топли места', 'Размножава се в малки водни басейни'],
    reproduction: {
      offspring: '100 - 200 яйца на снасяне',
      gestation: '1 - 3 дни от снасяне'
    },
    signs: ['Наличие на комари в близост до водоеми', 'Сърбящи ухапвания'],
    desc: 'Тресковият комар е известен със своите жълти петна и бели ивици. Той е активен през деня и е преносител на сериозни заболявания като денга и зика. Размножава се в малки водни басейни и може да бъде опасен за здравето.',
  },
  'АНОФЕЛЕС': {
    latinName: 'Anopheles maculipennis',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/makuli.png',
    appearance: {
      length: '4 - 7 мм',
      height: '2 - 4 мм',
      weight: '0.2 - 0.5 мг',
      color: 'Сивкаво / Кафяво'
    },
    dangers: ['Преносител на малария', 'Може да предизвика алергични реакции', 'Може да разпространява паразити'],
    behavior: ['Активен през нощта', 'Предпочита влажни и застояли води', 'Размножава се в различни водоеми'],
    reproduction: {
      offspring: '100 - 200 яйца на снасяне',
      gestation: '2 - 3 дни от снасяне'
    },
    signs: ['Сърбящи ухапвания', 'Наличие на комари в близост до застояла вода'],
    desc: 'Антифелесът е известен основно с това, че пренася малария. Активен е през нощта и предпочита влажни, стоящи води за размножаване. Може да бъде опасен за здравето поради предаването на паразити, причиняващи малария.',
  },
  'СИВ КОМАР': {
    latinName: 'Aedes cinereus',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/graymosq.png',
    appearance: {
      length: '6 - 8 мм',
      height: '2 - 4 мм',
      weight: '0.3 - 0.5 мг',
      color: 'Сив / Сивкаво'
    },
    dangers: ['Преносител на заболявания', 'Може да причини дискомфорт', 'Може да разпространява вируси'],
    behavior: ['Активен през деня и вечерта', 'Предпочита влажни и топли места', 'Размножава се в малки водоеми и мокри повърхности'],
    reproduction: {
      offspring: '100 - 200 яйца на снасяне',
      gestation: '2 - 3 дни от снасяне'
    },
    signs: ['Наличие на комари около водоеми', 'Сърбящи ухапвания'],
    desc: 'Сивият комар е известен със своето разпространение в топли и влажни райони. Той може да бъде носител на различни вируси и да причини дискомфорт чрез сърбящи ухапвания. Размножава се в малки водоеми и влажни повърхности.',
  },
};

const MosquitoInfoComponent: React.FC = () => {
  const [selectedMosquito, setSelectedMosquito] = useState<MosquitoType>('ТИГРОВ КОМАР');


  const handleMosquitoSelect = (mosquitoType: MosquitoType) => {
    setSelectedMosquito(mosquitoType);
  };

  const currentMosquito = mosquitoData[selectedMosquito];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.2, // Start slightly before the grid items
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (

    <div className="flex flex-col xl:flex-row gap-8 p-4 mx-4">
            <motion.div 
        className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
      {/* <div className="flex-1 grid grid-cols-1 sm:grid-cols-2  gap-4"> */}
      <motion.div variants={itemVariants}>
        <InfoBox title="ЛАТИНСКО НАИМЕНОВАНИЕ" content={currentMosquito.latinName} />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="КАК ИЗГЛЕЖДА" content={
          <>
          <ul>
        <li className="flex ">
          <RxWidth className="h-6 w-6 text-neutral-500 mr-4" />
          {currentMosquito.appearance.length}
        </li>
        <li className="flex ">
          <RxHeight className="h-6 w-6 text-neutral-500 mr-4" />
          {currentMosquito.appearance.height}
        </li>
        <li className="flex ">
          <GiWeight className="h-6 w-6 text-neutral-500 mr-4" />
          {currentMosquito.appearance.weight}
        </li>
        <li className="flex ">
          <IoColorPaletteOutline className="h-6 w-6 text-neutral-500 mr-4" />
          {currentMosquito.appearance.color}
        </li>
      </ul>
          </>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="ВРЕДИ" content={
          <ul>
            {currentMosquito.dangers.map((danger, index) => (
              <li key={index}
              className='flex'><FaExclamationTriangle className='mt-1 scale-[0.7] mr-3'/>{danger}</li>
            ))}
          </ul>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="ПОВЕДЕНИЕ, ХРАНЕНЕ И НАВИЦИ" content={
          <ul>
            {currentMosquito.behavior.map((behavior, index) => (
              <li key={index}
              className='flex'><GoDotFill className='mt-1 scale-90'/>{behavior}</li>
            ))}
          </ul>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="РАЗМНОЖАВАНЕ" content={
          <>
            <p>{currentMosquito.reproduction.offspring}</p>
            <p>{currentMosquito.reproduction.gestation}</p>
          </>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="ПРИЗНАЦИ ЗА НАПАДЕНИЕ" content={
          <ul>
            {currentMosquito.signs.map((sign, index) => (
              <li key={index}>{sign}</li>
            ))}
          </ul>
        } />
        </motion.div>
      {/* </div> */}
            </motion.div>

      <motion.div 
        className="flex-1"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >        <MosquitoCard
          selectedMosquito={selectedMosquito}
          onSelectMosquito={handleMosquitoSelect}
        />
      </motion.div>

    </div>
  );
};

const InfoBox: React.FC<{ title: string; content: React.ReactNode }> = ({ title, content }) => (
  <div className='border border-gray-200 p-4 rounded-xl hover:shadow-md transition duration-300 flex flex-col h-full'>
    <h3 className="text-lg sm:text-xl md:text-2xl mb-2">{title}</h3>
    <div className='bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 rounded-xl p-3 sm:p-4 md:p-5 flex-grow overflow-auto flex items-center justify-center'>
      <div className='text-xs sm:text-sm md:text-base lg:text-lg items-center justify-center mx-auto'>
        {typeof content === 'string' ? (
          <p>{content}</p>
        ) : (
          React.isValidElement(content) && 
          React.Children.map((content.props as { children?: React.ReactNode }).children, (child, index) => 
            React.cloneElement(child as React.ReactElement, { key: index })
          )
        )}
      </div>
    </div>
  </div>
);



const MosquitoCard: React.FC<{
  selectedMosquito: MosquitoType;
  onSelectMosquito: (mosquitoType: MosquitoType) => void;
}> = ({ selectedMosquito, onSelectMosquito }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageKey, setImageKey] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    setImageKey(prevKey => prevKey + 1);
  }, [selectedMosquito]);

  return (
    <motion.div  
      className="p-4 rounded-lg shadow-md"
      initial={{ opacity: 1, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <BackgroundGradient className="rounded-[22px] p-4 sm:p-6 md:p-8 bg-white dark:bg-zinc-900">
        <div className='rounded-lg'>
          <div className="flex flex-col sm:flex-row gap-2 mb-4 items-center justify-center">
            {(Object.keys(mosquitoData) as MosquitoType[]).map((mosquitoType) => (
              <button
                key={mosquitoType}
                className={`px-3 py-2 rounded-xl border border-ddblue dark:border-lgreen text-sm sm:text-base ${
                  selectedMosquito === mosquitoType ? 'dark:text-white text-white bg-ddblue dark:bg-lgreen' : 'text-ddblue dark:text-neutral-100'
                }`}
                onClick={() => onSelectMosquito(mosquitoType)}
              >
                {mosquitoType}
              </button>
            ))}
          </div>
          <motion.div  
      className="relative h-[250px] sm:h-[350px] md:h-[450px]"
      initial={{ opacity: 1, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1.1 }}
      transition={{ duration: 0.4 }}
    >
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Loading />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        <Image 
          key={imageKey}
          src={mosquitoData[selectedMosquito].imageUrl} 
          alt={selectedMosquito} 
          fill
          style={{ objectFit: "contain" }}
          className="rounded-lg"
          onLoad={() => setIsLoading(false)}
        />
      </AnimatePresence>
    </motion.div> 

          <h2 className="text-xl font-bold mb-2 mt-4">{selectedMosquito}</h2>
          <p className='text-start text-sm sm:text-base'>{mosquitoData[selectedMosquito].desc}</p>
        </div>
      </BackgroundGradient>
    </motion.div> 
  );
};

export default MosquitoInfoComponent;