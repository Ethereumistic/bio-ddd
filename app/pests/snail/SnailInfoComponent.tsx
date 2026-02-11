"use client";
import React, { useState, useEffect } from 'react';
import { SnailInfo, SnailType } from './snailTypes'
import { RxHeight, RxWidth } from 'react-icons/rx';
import { GiWeight } from 'react-icons/gi';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { GoDotFill } from "react-icons/go";
import { FaExclamationTriangle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Loading from '@/app/loading';
import Image from 'next/image';
import { BackgroundGradient } from '@/components/ui/background-gradient';


const snailData: Record<SnailType, SnailInfo> = {
    'ГОЛ ОХЛЮВ': {
      latinName: 'Arion vulgaris',
      imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/snail-gol.png',
      appearance: {
        length: '10 - 15 см',
        height: '2 - 3 см',
        weight: '20 - 50 г',
        color: 'Кафяво / Червено-оранжево'
      },
      dangers: ['Може да уврежда растения, но няма опасности за хората'],
      behavior: ['Активен през нощта', 'Предпочита влажни места', 'Бавно движение'],
      reproduction: {
        offspring: '100 - 400 яйца на година',
        gestation: '20 - 40 дни'
      },
      signs: ['Слузести следи по земята', 'Увредени растения в градини'],
      desc: 'Голият охлюв е инвазивен вид в България, който често уврежда селскостопански култури и градински растения. Той обича влажни места и се храни предимно с растителност.',
    },
    'ВИНЕН ОХЛЮВ': {
      latinName: 'Helix pomatia',
      imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/snail-vinen.png',
      appearance: {
        length: '3 - 10 см',
        height: '3 - 4 см',
        weight: '25 - 40 г',
        color: 'Жълто-кафяво с ивици'
      },
      dangers: ['Няма опасности за хората'],
      behavior: ['Активен след дъжд', 'Предпочита влажни гори и ливади', 'Бавно се придвижва'],
      reproduction: {
        offspring: '50 - 100 яйца на година',
        gestation: '20 - 30 дни'
      },
      signs: ['Слузести следи по земята', 'Увредени листа по растения'],
      desc: 'Виненият охлюв е широко разпространен в България и често се среща в горите и ливадите. Той се използва за храна в много страни, включително и в България.',
    },
    'ОБИКНОВЕНА СТОНОЖКА': {
      latinName: 'Lithobius forficatus',
      imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/stonojka-obiknovena.png',
      appearance: {
        length: '3 - 4 см',
        height: '0.5 - 1 см',
        weight: '1 - 2 г',
        color: 'Червеникаво-кафяво'
      },
      dangers: ['Няма опасности за хората, но може да ухапе при заплаха'],
      behavior: ['Активна през нощта', 'Живее под камъни и листа', 'Бързо бягане'],
      reproduction: {
        offspring: '10 - 20 яйца',
        gestation: '1 - 2 месеца'
      },
      signs: ['Наличие на малки тунели и скрити гнезда под камъни'],
      desc: 'Обикновената стоножка е широко разпространена в България и се среща най-често в градини и под камъни. Тя е хищник, който се храни с малки насекоми и други безгръбначни.',
    },
    'ДОМАШНА СТОНОЖКА': {
      latinName: 'Scutigera coleoptrata',
      imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/stonojka-domashna.png',
      appearance: {
        length: '2 - 4 см',
        height: '0.5 - 1 см',
        weight: '1 - 3 г',
        color: 'Светложълто с тъмни ивици'
      },
      dangers: ['Няма опасности за хората, ухапването е рядко'],
      behavior: ['Активна през нощта', 'Предпочита влажни и тъмни места в домовете'],
      reproduction: {
        offspring: '15 - 20 яйца',
        gestation: '1 - 2 месеца'
      },
      signs: ['Наличие на стоножки в бани и влажни помещения'],
      desc: 'Домашната стоножка е обитател на влажни и тъмни места в домовете. Тя е полезна, защото се храни с насекоми като мухи и комари, които също обитават дома.',
    },
  };
  
  

const SnailInfoComponent: React.FC = () => {
  const [selectedSnail, setSelectedSnail] = useState<SnailType>('ГОЛ ОХЛЮВ');


  const handleSnailSelect = (snailType: SnailType) => {
    setSelectedSnail(snailType);
  };

  const currentSnail = snailData[selectedSnail];

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
        <InfoBox title="ЛАТИНСКО НАИМЕНОВАНИЕ" content={currentSnail.latinName} />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="КАК ИЗГЛЕЖДА" content={
          <>
          <ul>
        <li className="flex ">
          <RxWidth className="h-6 w-6 text-neutral-500 mr-4" />
          {currentSnail.appearance.length}
        </li>
        <li className="flex ">
          <RxHeight className="h-6 w-6 text-neutral-500 mr-4" />
          {currentSnail.appearance.height}
        </li>
        <li className="flex ">
          <GiWeight className="h-6 w-6 text-neutral-500 mr-4" />
          {currentSnail.appearance.weight}
        </li>
        <li className="flex ">
          <IoColorPaletteOutline className="h-6 w-6 text-neutral-500 mr-4" />
          {currentSnail.appearance.color}
        </li>
      </ul>
          </>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="ВРЕДИ" content={
          <ul>
            {currentSnail.dangers.map((danger, index) => (
              <li key={index}
              className='flex'><FaExclamationTriangle className='mt-1 scale-[0.7] mr-3'/>{danger}</li>
            ))}
          </ul>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="ПОВЕДЕНИЕ, ХРАНЕНЕ И НАВИЦИ" content={
          <ul>
            {currentSnail.behavior.map((behavior, index) => (
              <li key={index}
              className='flex'><GoDotFill className='mt-1 scale-90'/>{behavior}</li>
            ))}
          </ul>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="РАЗМНОЖАВАНЕ" content={
          <>
            <p>{currentSnail.reproduction.offspring}</p>
            <p>{currentSnail.reproduction.gestation}</p>
          </>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="ПРИЗНАЦИ ЗА НАПАДЕНИЕ" content={
          <ul>
            {currentSnail.signs.map((sign, index) => (
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
      >        <SnailCard
          selectedSnail={selectedSnail}
          onSelectSnail={handleSnailSelect}
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



const SnailCard: React.FC<{
  selectedSnail: SnailType;
  onSelectSnail: (snailType: SnailType) => void;
}> = ({ selectedSnail, onSelectSnail }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageKey, setImageKey] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    setImageKey(prevKey => prevKey + 1);
  }, [selectedSnail]);

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
            {(Object.keys(snailData) as SnailType[]).map((snailType) => (
              <button
                key={snailType}
                className={`px-3 py-2 rounded-xl border border-ddblue dark:border-lgreen text-sm sm:text-base ${
                  selectedSnail === snailType ? 'dark:text-white text-white bg-ddblue dark:bg-lgreen' : 'text-ddblue dark:text-neutral-100'
                }`}
                onClick={() => onSelectSnail(snailType)}
              >
                {snailType}
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
          src={snailData[selectedSnail].imageUrl} 
          alt={selectedSnail} 
          fill
          style={{ objectFit: "contain" }}
          className="rounded-lg"
          onLoad={() => setIsLoading(false)}
        />
      </AnimatePresence>
    </motion.div> 

          <h2 className="text-xl font-bold mb-2 mt-4">{selectedSnail}</h2>
          <p className='text-start text-sm sm:text-base'>{snailData[selectedSnail].desc}</p>
        </div>
      </BackgroundGradient>
    </motion.div> 
  );
};

export default SnailInfoComponent;