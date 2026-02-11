"use client";
import React, { useState, useEffect } from 'react';
import { TickInfo, TickType } from './tickTypes'
import { RxHeight, RxWidth } from 'react-icons/rx';
import { GiWeight } from 'react-icons/gi';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { GoDotFill } from "react-icons/go";
import { FaExclamationTriangle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Loading from '@/app/loading';
import Image from 'next/image';
import { BackgroundGradient } from '@/components/ui/background-gradient';


const tickData: Record<TickType, TickInfo> = {
  'КУЧЕШКИ': {
    latinName: 'Ixodes ricinus',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/dogtick.png',
    appearance: {
      length: '3 - 5 mm',
      height: '2 - 3 mm',
      weight: '0.1 - 0.3 g',
      color: 'Черен или тъмнокафяв'
    },
    dangers: ['Може да пренася заболявания като лаймска болест и анapлазмоза'],
    behavior: ['Паразитира основно на бозайници', 'Активен през пролетта и лятото', 'Предпочита влажни и гористи места'],
    reproduction: {
      offspring: '3000 - 6000 яйца',
      gestation: '1 - 2 седмици'
    },
    signs: ['Прикрепени към домашни любимци, хора', 'Малки подутини на кожата от ухапване'],
    desc: 'Кучешкият кърлеж е често срещан паразит, който може да предава сериозни заболявания на хора и животни. Те се срещат основно в гористи и влажни области, където активно се хранят с кръв на техните хостове.',
  },
  'КАФЯВ КУЧЕШКИ': {
    latinName: 'Rhipicephalus sanguineus',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/bogtick.png',
    appearance: {
      length: '3 - 5 mm',
      height: '2 - 3 mm',
      weight: '0.1 - 0.3 g',
      color: 'Кафяв'
    },
    dangers: ['Може да пренася заболявания като бабезия и ерлихиоза'],
    behavior: ['Активен през топлите месеци', 'Предпочита обитаеми райони', 'Често се среща на домашни любимци'],
    reproduction: {
      offspring: '2000 - 5000 яйца',
      gestation: '2 - 4 седмици'
    },
    signs: ['Прикрепени към домашни любимци', 'Малки червени подутини от ухапване'],
    desc: 'Кафявият кучешки кърлеж е основен паразит на кучета и може да предава различни заболявания. Често се среща в райони, обитавани от хора и животни, и е активен основно през топлите месеци.',
  },
  'ЛИВАДЕН': {
    latinName: 'Dermacentor reticulatus',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/livtick.png',
    appearance: {
      length: '4 - 6 mm',
      height: '2 - 3 mm',
      weight: '0.1 - 0.2 g',
      color: 'Кафяв с мрежести маркировки'
    },
    dangers: ['Може да пренася заболявания като ерлихиоза и бабезия'],
    behavior: ['Активен през пролетта и лятото', 'Често се среща на ливади и в полета', 'Паразитира на различни животни'],
    reproduction: {
      offspring: '1000 - 3000 яйца',
      gestation: '2 - 3 седмици'
    },
    signs: ['Прикрепени към животни или хора', 'Малки подутини от ухапване'],
    desc: 'Ливадният кърлеж е основен паразит на различни животни и понякога на хора. Те са активни през топлите месеци и могат да пренасят сериозни заболявания.',
  },
  'ХИАЛОМА': {
    latinName: 'Hyalomma marginatum',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/hyalomma.png',
    appearance: {
      length: '8 - 12 mm',
      height: '5 - 7 mm',
      weight: '0.2 - 0.5 g',
      color: 'Кафяв с бели и червени маркировки'
    },
    dangers: ['Може да пренася заболявания като Кримска хеморагична треска'],
    behavior: ['Активен през топлите месеци', 'Предпочита сухи и гористи места', 'Паразитира на големи бозайници'],
    reproduction: {
      offspring: '1000 - 2000 яйца',
      gestation: '2 - 4 седмици'
    },
    signs: ['Прикрепени към хостове', 'Подутини на кожата от ухапване'],
    desc: 'Хиаломма е кърлеж, който може да предава сериозни заболявания и е активен основно през топлите месеци. Те предпочитат сухи и гористи райони, където паразитират на големи животни.',
  },
  'ГЪЛЪБОВ': {
    latinName: 'Argas reflexus',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/gulubtick.png',
    appearance: {
      length: '5 - 8 mm',
      height: '3 - 5 mm',
      weight: '0.1 - 0.3 g',
      color: 'Кафяв до червеникав'
    },
    dangers: ['Може да пренася заболявания като Птичи лаймска болест'],
    behavior: ['Активен през нощта', 'Предпочита гнезда на птици', 'Може да нахапе хора и животни'],
    reproduction: {
      offspring: '1000 - 2000 яйца',
      gestation: '1 - 2 седмици'
    },
    signs: ['Прикрепени към гнезда на птици', 'Подутини от ухапвания'],
    desc: 'Гълъбовият кърлеж е основен паразит на гнезда на птици, но може да нахапе и хора и животни. Те могат да пренасят заболявания и обикновено са активни през нощта.',
  },
  'КРИМСКИ': {
    latinName: 'Haemaphysalis punctata',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/krimtick.png',
    appearance: {
      length: '3 - 4 mm',
      height: '2 - 3 mm',
      weight: '0.1 - 0.2 g',
      color: 'Кафяв с бели маркировки'
    },
    dangers: ['Може да пренася заболявания като Кримска хеморагична треска'],
    behavior: ['Активен през топлите месеци', 'Предпочита гористи и полеви райони', 'Паразитира на различни животни'],
    reproduction: {
      offspring: '1000 - 2000 яйца',
      gestation: '1 - 2 седмици'
    },
    signs: ['Прикрепени към домашни любимци, хора', 'Подутини от ухапване'],
    desc: 'Кримският кърлеж е известен със способността си да предава сериозни заболявания. Той се среща основно в гористи и полеви райони и паразитира на различни животни.',
  },
};

const TickInfoComponent: React.FC = () => {
  const [selectedTick, setSelectedTick] = useState<TickType>('КУЧЕШКИ');


  const handleTickSelect = (tickType: TickType) => {
    setSelectedTick(tickType);
  };

  const currentTick = tickData[selectedTick];

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
        <InfoBox title="ЛАТИНСКО НАИМЕНОВАНИЕ" content={currentTick.latinName} />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="КАК ИЗГЛЕЖДА" content={
          <>
          <ul>
        <li className="flex ">
          <RxWidth className="h-6 w-6 text-neutral-500 mr-4" />
          {currentTick.appearance.length}
        </li>
        <li className="flex ">
          <RxHeight className="h-6 w-6 text-neutral-500 mr-4" />
          {currentTick.appearance.height}
        </li>
        <li className="flex ">
          <GiWeight className="h-6 w-6 text-neutral-500 mr-4" />
          {currentTick.appearance.weight}
        </li>
        <li className="flex ">
          <IoColorPaletteOutline className="h-6 w-6 text-neutral-500 mr-4" />
          {currentTick.appearance.color}
        </li>
      </ul>
          </>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="ВРЕДИ" content={
          <ul>
            {currentTick.dangers.map((danger, index) => (
              <li key={index}
              className='flex'><FaExclamationTriangle className='mt-1 scale-[0.7] mr-3'/>{danger}</li>
            ))}
          </ul>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="ПОВЕДЕНИЕ, ХРАНЕНЕ И НАВИЦИ" content={
          <ul>
            {currentTick.behavior.map((behavior, index) => (
              <li key={index}
              className='flex'><GoDotFill className='mt-1 scale-90'/>{behavior}</li>
            ))}
          </ul>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="РАЗМНОЖАВАНЕ" content={
          <>
            <p>{currentTick.reproduction.offspring}</p>
            <p>{currentTick.reproduction.gestation}</p>
          </>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="ПРИЗНАЦИ ЗА НАПАДЕНИЕ" content={
          <ul>
            {currentTick.signs.map((sign, index) => (
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
      >        <TickCard
          selectedTick={selectedTick}
          onSelectTick={handleTickSelect}
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



const TickCard: React.FC<{
  selectedTick: TickType;
  onSelectTick: (tickType: TickType) => void;
}> = ({ selectedTick, onSelectTick }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageKey, setImageKey] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    setImageKey(prevKey => prevKey + 1);
  }, [selectedTick]);

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
            {(Object.keys(tickData) as TickType[]).map((tickType) => (
              <button
                key={tickType}
                className={`px-3 py-2 rounded-xl border border-ddblue dark:border-lgreen text-sm sm:text-base ${
                  selectedTick === tickType ? 'dark:text-white text-white bg-ddblue dark:bg-lgreen' : 'text-ddblue dark:text-neutral-100'
                }`}
                onClick={() => onSelectTick(tickType)}
              >
                {tickType}
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
          src={tickData[selectedTick].imageUrl} 
          alt={selectedTick} 
          fill
          style={{ objectFit: "contain" }}
          className="rounded-lg"
          onLoad={() => setIsLoading(false)}
        />
      </AnimatePresence>
    </motion.div> 

          <h2 className="text-xl font-bold mb-2 mt-4">{selectedTick}</h2>
          <p className='text-start text-sm sm:text-base'>{tickData[selectedTick].desc}</p>
        </div>
      </BackgroundGradient>
    </motion.div> 
  );
};

export default TickInfoComponent;