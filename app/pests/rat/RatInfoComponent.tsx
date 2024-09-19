"use client";
import React, { useState, useEffect } from 'react';
import { RatInfo, RatType } from './ratTypes'
import { RxHeight, RxWidth } from 'react-icons/rx';
import { GiHighGrass, GiWeight } from 'react-icons/gi';
import { IoColorPaletteOutline, IoShareSocialOutline } from 'react-icons/io5';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { GoDotFill } from "react-icons/go";
import { FaExclamationTriangle, FaLeaf, FaMoon, FaTemperatureHigh, FaTree, FaWater } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Loading from '@/app/loading';
import Image from 'next/image';
import { BackgroundGradient } from '@/components/ui/background-gradient';
import { BsLadder } from 'react-icons/bs';
import { IoMdCloudyNight } from 'react-icons/io';

const getBehaviorIcon = (behavior: string) => {
  if (behavior.includes('Социално животно')) return IoShareSocialOutline;
  if (behavior.includes('Нощна активност')) return FaMoon;
  if (behavior.includes('Добър катерач')) return BsLadder ;
  if (behavior.includes('Високи места')) return FaTree  ;
  if (behavior.includes('Добър плувец')) return FaWater ;
  if (behavior.includes('Ниски и влажни места')) return FaTemperatureHigh;
  if (behavior.includes('Тревопасен')) return FaLeaf ;
  if (behavior.includes('Нощна и дневна активност')) return IoMdCloudyNight ;
  if (behavior.includes('Предпочита тревисти поля')) return GiHighGrass;
  // Add more conditions for other behaviors
  return GoDotFill; // Default icon
};
const ratData: Record<RatType, RatInfo> = {
  'ДОМАШНА МИШКА': {
    latinName: 'Mus musculus',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/Mus-musculus.png',
    appearance: {
      length: '7 - 10 см',
      height: '2 - 4 см',
      weight: '12 - 30 г',
      color: 'Кафяв или сив'
    },
    dangers: ['Преносител на заболявания', 'Пренася паразити', 'Замърсява хранителни запаси'],
    behavior: ['Социално животно', 'Нощна активност', 'Добър катерач'],
    reproduction: {
      offspring: '5 - 10 на бременност',
      gestation: '19 - 21 дни бременност'
    },
    signs: ['Изпражнения', 'Следи от гризане по мебели и опаковки'],
    desc: 'Домашната мишка е дребен гризач, често срещан в жилища и складове. Бързо се размножава и лесно се приспособява към различни среди. Може да причини значителни щети на хранителни запаси и имущество, а също така е известна с разпространението на болести.',
  },
  'ЧЕРЕН ПЛЪХ': {
    latinName: 'Rattus rattus',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/Rattus-rattus.png',
    appearance: {
      length: '16 - 24 см',
      height: '4 - 6 см',
      weight: '150 - 250 г',
      color: 'Черно или тъмнокафяво'
    },
    dangers: ['Преносител на заболявания', 'Пренася паразити', 'Повреди над електрически системи'],
    behavior: ['Нощна активност', 'Добър катерач', 'Високи места'],
    reproduction: {
      offspring: '5 - 8 на бременност',
      gestation: '21 - 23 дни бременност'
    },
    signs: ['Изпражнения', 'Следи от гризане', 'Мазни следи по стени от козината'],
    desc: 'Черният плъх, наричан още корабен плъх, живее в по-топлите райони. По-малък е от сивия плъх и обикновено се среща в тавани и дървета. Известен е с разрушителното си поведение спрямо електрически инсталации и строителни материали.',
  },
  'СИВ ПЛЪХ': {
    latinName: 'Rattus norvegicus',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/Rattus-norvegicus.png',
    appearance: {
      length: '20 - 25 см',
      height: '5 - 7 см',
      weight: '200 - 500 г',
      color: 'Сив или кафяв'
    },
    dangers: ['Преносител на заболявания', 'Причинява структурни щети с гризане'],
    behavior: ['Нощна активност', 'Добър плувец', 'Ниски и влажни места'],
    reproduction: {
      offspring: '6 - 12 на бременност',
      gestation: '21 - 23 дни бременност'
    },
    signs: ['Изпражнения', 'Следи от гризане', 'Тунели и дупки близо до сгради'],
    desc: 'Сивият плъх, известен също като норвежки плъх, е по-голям и по-силен от черния плъх. Живее предимно в канализации и подземни системи. Неговото агресивно поведение и способността му да разрушава структури го правят сериозен вредител.',
  },
  'ПОЛЕВКА': {
    latinName: 'Microtus arvalis',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/Microtus-arvalis.png',
    appearance: {
      length: '8 - 12 см',
      height: '2 - 3 см',
      weight: '20 - 50 г',
      color: 'Кафяв или сив'
    },
    dangers: ['Може да причини щети на култури', 'Може да пренася заболявания'],
    behavior: ['Тревопасен', 'Нощна и дневна активност', 'Предпочита тревисти поля'],
    reproduction: {
      offspring: '3 - 7 на бременност',
      gestation: '19 - 21 дни бременност'
    },
    signs: ['Следи в тревата', 'Следи от гризане на растения и култури'],
    desc: 'Полевката е дребен гризач, който обитава полета и земеделски райони. Известна е със способността си да унищожава култури и градини, причинявайки значителни икономически загуби. Полевките могат да бъдат трудни за контролиране в земеделските зони.',
  },
};


const RatInfoComponent: React.FC = () => {
  const [selectedRat, setSelectedRat] = useState<RatType>('ДОМАШНА МИШКА');


  const handleRatSelect = (ratType: RatType) => {
    setSelectedRat(ratType);
  };

  const currentRat = ratData[selectedRat];

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
        <InfoBox title="ЛАТИНСКО НАИМЕНОВАНИЕ" content={currentRat.latinName} />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="КАК ИЗГЛЕЖДА" content={
          <>
          <ul>
        <li className="flex ">
          <RxWidth className="h-6 w-6 text-neutral-500 mr-4" />
          {currentRat.appearance.length}
        </li>
        <li className="flex ">
          <RxHeight className="h-6 w-6 text-neutral-500 mr-4" />
          {currentRat.appearance.height}
        </li>
        <li className="flex ">
          <GiWeight className="h-6 w-6 text-neutral-500 mr-4" />
          {currentRat.appearance.weight}
        </li>
        <li className="flex ">
          <IoColorPaletteOutline className="h-6 w-6 text-neutral-500 mr-4" />
          {currentRat.appearance.color}
        </li>
      </ul>
          </>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="ВРЕДИ" content={
          <ul>
            {currentRat.dangers.map((danger, index) => (
              <li key={index}
              className='flex'><FaExclamationTriangle className='mt-1 scale-[0.7] mr-3'/>{danger}</li>
            ))}
          </ul>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="ПОВЕДЕНИЕ, ХРАНЕНЕ И НАВИЦИ" content={
          <ul>
            {currentRat.behavior.map((behavior, index) => {
              const IconComponent = getBehaviorIcon(behavior);
              return (
                <li key={index} className='flex items-center'>
                  <IconComponent className='mt-1 mr-3 text-neutral-500' />
                  {behavior}
                </li>
              );
            })}
          </ul>
        } />
      </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="РАЗМНОЖАВАНЕ" content={
          <>
            <p>{currentRat.reproduction.offspring}</p>
            <p>{currentRat.reproduction.gestation}</p>
          </>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="ПРИЗНАЦИ ЗА НАПАДЕНИЕ" content={
          <ul>
            {currentRat.signs.map((sign, index) => (
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
      >        <RatCard
          selectedRat={selectedRat}
          onSelectRat={handleRatSelect}
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
          React.Children.map(content.props.children, (child, index) => 
            React.cloneElement(child, { key: index })
          )
        )}
      </div>
    </div>
  </div>
);



const RatCard: React.FC<{
  selectedRat: RatType;
  onSelectRat: (ratType: RatType) => void;
}> = ({ selectedRat, onSelectRat }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageKey, setImageKey] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    setImageKey(prevKey => prevKey + 1);
  }, [selectedRat]);

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
            {(Object.keys(ratData) as RatType[]).map((ratType) => (
              <button
                key={ratType}
                className={`px-3 py-2 rounded-xl border border-ddblue dark:border-lgreen text-sm sm:text-base ${
                  selectedRat === ratType ? 'dark:text-white text-white bg-ddblue dark:bg-lgreen' : 'text-ddblue dark:text-neutral-100'
                }`}
                onClick={() => onSelectRat(ratType)}
              >
                {ratType}
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
          src={ratData[selectedRat].imageUrl} 
          alt={selectedRat} 
          fill
          style={{ objectFit: "contain" }}
          className="rounded-lg"
          onLoad={() => setIsLoading(false)}
        />
      </AnimatePresence>
    </motion.div> 

          <h2 className="text-xl font-bold mb-2 mt-4">{selectedRat}</h2>
          <p className='text-start text-sm sm:text-base'>{ratData[selectedRat].desc}</p>
        </div>
      </BackgroundGradient>
    </motion.div> 
  );
};

export default RatInfoComponent;