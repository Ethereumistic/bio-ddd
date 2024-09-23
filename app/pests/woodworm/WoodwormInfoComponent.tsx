"use client";
import React, { useState, useEffect } from 'react';
import { WoodwormInfo, WoodwormType } from './woodwormTypes'
import { RxHeight, RxWidth } from 'react-icons/rx';
import { GiWeight } from 'react-icons/gi';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { GoDotFill } from "react-icons/go";
import { FaExclamationTriangle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Loading from '@/app/loading';
import Image from 'next/image';
import { BackgroundGradient } from '@/components/ui/background-gradient';


const woodwormData: Record<WoodwormType, WoodwormInfo> = {
    'ОБИКНОВЕН': {
      latinName: 'Anobium punctatum',
      imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/durvoqd-obiknoven.png',
      appearance: {
        length: '2 - 5 мм',
        height: '0.5 - 1 мм',
        weight: '0.1 - 0.2 гр',
        color: 'Кафяво / Черно'
      },
      dangers: ['Може да увреди дървени мебели и конструкции'],
      behavior: ['Храни се с дървесина', 'Предпочита суха дървесина'],
      reproduction: {
        offspring: '20 - 50 яйца',
        gestation: '3 - 4 седмици'
      },
      signs: ['Малки дупки в дървесината', 'Фини дървени частици'],
      desc: 'Обикновеният дървояд е най-разпространеният вид в домовете, който уврежда дървени мебели, греди и подови настилки.'
    },
    'ГОЛЯМ': {
      latinName: 'Xestobium rufovillosum',
      imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/durvoqd-golqm.png',
      appearance: {
        length: '4 - 7 мм',
        height: '1 - 1.5 мм',
        weight: '0.2 - 0.4 гр',
        color: 'Кафяво с черни петна'
      },
      dangers: ['Уврежда стари дървени структури'],
      behavior: ['Предпочита влажна дървесина', 'Активен през пролетта и лятото'],
      reproduction: {
        offspring: '30 - 60 яйца',
        gestation: '4 - 5 седмици'
      },
      signs: ['Шум от дъвчене на дървото', 'Овални дупки в дървесината'],
      desc: 'Големият дървояд се среща в стари сгради и може да причини сериозни щети на дървени конструкции.'
    },
    'КАФЯВ': {
      latinName: 'Hylotrupes bajulus',
      imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/durvoqd-kafqv.png',
      appearance: {
        length: '8 - 20 мм',
        height: '2 - 3 мм',
        weight: '0.5 - 1 гр',
        color: 'Тъмнокафяво / Черно'
      },
      dangers: ['Може да разруши дървени конструкции и покриви'],
      behavior: ['Предпочита иглолистна дървесина', 'Храни се с дървесината на сгради'],
      reproduction: {
        offspring: '50 - 100 яйца',
        gestation: '2 - 3 седмици'
      },
      signs: ['Големи дупки в дървесината', 'Фини дървесни стърготини'],
      desc: 'Кафявият дървояд е един от най-опасните вредители за дървени конструкции и мебели в сгради.'
    },
    'ДОМАШЕН': {
      latinName: 'Lyctus brunneus',
      imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/durvoqd-domashen.png',
      appearance: {
        length: '3 - 7 мм',
        height: '0.5 - 1 мм',
        weight: '0.1 - 0.2 гр',
        color: 'Червеникаво-кафяво'
      },
      dangers: ['Може да увреди нова дървесина'],
      behavior: ['Храни се с нишестена дървесина', 'Предпочита твърда дървесина като дъб и ясен'],
      reproduction: {
        offspring: '20 - 40 яйца',
        gestation: '3 - 6 седмици'
      },
      signs: ['Фини прахови частици', 'Малки дупки в дървесината'],
      desc: 'Домашният дървояд е насекомо, което обича нова дървесина и често атакува дървени мебели и подове.'
    },
  };
  
  

const WoodwormInfoComponent: React.FC = () => {
  const [selectedWoodworm, setSelectedWoodworm] = useState<WoodwormType>('ОБИКНОВЕН');


  const handleWoodwormSelect = (woodwormType: WoodwormType) => {
    setSelectedWoodworm(woodwormType);
  };

  const currentWoodworm = woodwormData[selectedWoodworm];

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
        <InfoBox title="ЛАТИНСКО НАИМЕНОВАНИЕ" content={currentWoodworm.latinName} />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="КАК ИЗГЛЕЖДА" content={
          <>
          <ul>
        <li className="flex ">
          <RxWidth className="h-6 w-6 text-neutral-500 mr-4" />
          {currentWoodworm.appearance.length}
        </li>
        <li className="flex ">
          <RxHeight className="h-6 w-6 text-neutral-500 mr-4" />
          {currentWoodworm.appearance.height}
        </li>
        <li className="flex ">
          <GiWeight className="h-6 w-6 text-neutral-500 mr-4" />
          {currentWoodworm.appearance.weight}
        </li>
        <li className="flex ">
          <IoColorPaletteOutline className="h-6 w-6 text-neutral-500 mr-4" />
          {currentWoodworm.appearance.color}
        </li>
      </ul>
          </>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="ВРЕДИ" content={
          <ul>
            {currentWoodworm.dangers.map((danger, index) => (
              <li key={index}
              className='flex'><FaExclamationTriangle className='mt-1 scale-[0.7] mr-3'/>{danger}</li>
            ))}
          </ul>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="ПОВЕДЕНИЕ, ХРАНЕНЕ И НАВИЦИ" content={
          <ul>
            {currentWoodworm.behavior.map((behavior, index) => (
              <li key={index}
              className='flex'><GoDotFill className='mt-1 scale-90'/>{behavior}</li>
            ))}
          </ul>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="РАЗМНОЖАВАНЕ" content={
          <>
            <p>{currentWoodworm.reproduction.offspring}</p>
            <p>{currentWoodworm.reproduction.gestation}</p>
          </>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="ПРИЗНАЦИ ЗА НАПАДЕНИЕ" content={
          <ul>
            {currentWoodworm.signs.map((sign, index) => (
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
      >        <WoodwormCard
          selectedWoodworm={selectedWoodworm}
          onSelectWoodworm={handleWoodwormSelect}
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



const WoodwormCard: React.FC<{
  selectedWoodworm: WoodwormType;
  onSelectWoodworm: (woodwormType: WoodwormType) => void;
}> = ({ selectedWoodworm, onSelectWoodworm }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageKey, setImageKey] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    setImageKey(prevKey => prevKey + 1);
  }, [selectedWoodworm]);

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
            {(Object.keys(woodwormData) as WoodwormType[]).map((woodwormType) => (
              <button
                key={woodwormType}
                className={`px-3 py-2 rounded-xl border border-ddblue dark:border-lgreen text-sm sm:text-base ${
                  selectedWoodworm === woodwormType ? 'dark:text-white text-white bg-ddblue dark:bg-lgreen' : 'text-ddblue dark:text-neutral-100'
                }`}
                onClick={() => onSelectWoodworm(woodwormType)}
              >
                {woodwormType}
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
          src={woodwormData[selectedWoodworm].imageUrl} 
          alt={selectedWoodworm} 
          fill
          style={{ objectFit: "contain" }}
          className="rounded-lg"
          onLoad={() => setIsLoading(false)}
        />
      </AnimatePresence>
    </motion.div> 

          <h2 className="text-xl font-bold mb-2 mt-4">{selectedWoodworm}</h2>
          <p className='text-start text-sm sm:text-base'>{woodwormData[selectedWoodworm].desc}</p>
        </div>
      </BackgroundGradient>
    </motion.div> 
  );
};

export default WoodwormInfoComponent;