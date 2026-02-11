"use client";
import React, { useState, useEffect } from 'react';
import { WaspInfo, WaspType } from './waspTypes'
import { RxHeight, RxWidth } from 'react-icons/rx';
import { GiWeight } from 'react-icons/gi';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { GoDotFill } from "react-icons/go";
import { FaExclamationTriangle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Loading from '@/app/loading';
import Image from 'next/image';
import { BackgroundGradient } from '@/components/ui/background-gradient';


const waspData: Record<WaspType, WaspInfo> = {
  'ОБИКНОВЕНА': {
    latinName: 'Vespula vulgaris',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/obikosa.png',
    appearance: {
      length: '12 - 17 mm',
      height: '5 - 7 mm',
      weight: '0.1 - 0.2 g',
      color: 'Жълт с черни ивици'
    },
    dangers: ['Може да ужили и причинява алергични реакции', 'Може да бъде агресивен при защита на гнездото'],
    behavior: ['Социални насекоми', 'Активни през деня', 'Строят гнезда от хартия'],
    reproduction: {
      offspring: '2000 - 5000 яйца',
      gestation: '3 - 4 седмици'
    },
    signs: ['Гнезда във външни пространства', 'Чести ухапвания и ужилвания'],
    desc: 'Обикновената оса е социално насекомо, което живее в големи колонии. Те могат да бъдат агресивни и да ужилят, когато се чувстват застрашени. Осите са известни с тяхната способност да строят гнезда от хартия, които могат да се намират в различни външни места.',
  },
  'ГЕРМАНСКА': {
    latinName: 'Vespula germanica',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/germanosa.png',
    appearance: {
      length: '10 - 15 mm',
      height: '4 - 6 mm',
      weight: '0.1 - 0.2 g',
      color: 'Жълт с черни ивици'
    },
    dangers: ['Може да ужили и да предизвика алергични реакции', 'Може да бъде агресивна при защита на гнездото'],
    behavior: ['Социални насекоми', 'Активни през деня', 'Строят гнезда от хартия'],
    reproduction: {
      offspring: '3000 - 5000 яйца',
      gestation: '3 - 4 седмици'
    },
    signs: ['Гнезда в труднодостъпни места', 'Чести ухапвания и ужилвания'],
    desc: 'Германската оса е социално насекомо, което изгражда гнезда от хартия и обитава основно външни пространства. Те могат да бъдат агресивни, особено когато гнездото им е застрашено, и могат да причинят болезнени ужилвания.',
  },
  'ХАРТИЕНА': {
    latinName: 'Polistes dominula',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/hartienaosa.png',
    appearance: {
      length: '8 - 15 mm',
      height: '4 - 7 mm',
      weight: '0.1 - 0.2 g',
      color: 'Кафяв до жълт'
    },
    dangers: ['Може да ужили, причинявайки болезнени реакции', 'Може да бъде агресивна при защита на гнездото'],
    behavior: ['Социални насекоми', 'Активни през деня', 'Строят гнезда под навеси или в труднодостъпни места'],
    reproduction: {
      offspring: '1000 - 3000 яйца',
      gestation: '4 - 5 седмици'
    },
    signs: ['Гнезда под навеси и в скритите места', 'Чести ухапвания и ужилвания'],
    desc: 'Хартиената оса е социално насекомо, известно с изграждането на гнезда от хартия, които се намират в скрити и труднодостъпни места. Те могат да бъдат агресивни при защита на гнездото си и могат да предизвикат болезнени ужилвания.',
  },
  'ЕВРОПЕЙСКИ СТЪРШЕЛ': {
    latinName: 'Vespa crabro',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/euroosa.png',
    appearance: {
      length: '18 - 25 mm',
      height: '6 - 9 mm',
      weight: '0.2 - 0.4 g',
      color: 'Жълт с кафяви и черни ивици'
    },
    dangers: ['Може да ужили и да предизвика алергични реакции', 'Може да бъде много агресивен при защита на гнездото'],
    behavior: ['Социални насекоми', 'Активни през деня', 'Строят гнезда в дървета или в земята'],
    reproduction: {
      offspring: '1000 - 2000 яйца',
      gestation: '4 - 5 седмици'
    },
    signs: ['Гнезда в дървета или в земята', 'Чести ухапвания и ужилвания'],
    desc: 'Европейският стършел е голямо социално насекомо, което изгражда гнезда в дървета или в земята. Те могат да бъдат много агресивни и да предизвикат болезнени ужилвания, особено когато гнездото им е заплашено.',
  },
  'МУТИЛКА': {
    latinName: 'Mutillidae',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/mutilka.png',
    appearance: {
      length: '6 - 12 mm',
      height: '3 - 6 mm',
      weight: '0.05 - 0.2 g',
      color: 'Червен, черен или жълт'
    },
    dangers: ['Може да ужили и да предизвика болезнени реакции'],
    behavior: ['Насекомо с агресивно поведение', 'Активни през деня', 'Предпочита сухи и топли местообитания'],
    reproduction: {
      offspring: '10 - 100 яйца',
      gestation: '2 - 3 седмици'
    },
    signs: ['Прикрепени към растения или почва', 'Чести ухапвания и ужилвания'],
    desc: 'Мутилките са насекоми, известни със своето агресивно поведение и болезнени ужилвания. Те обитават основно сухи и топли местообитания и са активни през деня.',
  },
};

const WaspInfoComponent: React.FC = () => {
  const [selectedWasp, setSelectedWasp] = useState<WaspType>('ОБИКНОВЕНА');


  const handleWaspSelect = (waspType: WaspType) => {
    setSelectedWasp(waspType);
  };

  const currentWasp = waspData[selectedWasp];

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
        <InfoBox title="ЛАТИНСКО НАИМЕНОВАНИЕ" content={currentWasp.latinName} />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="КАК ИЗГЛЕЖДА" content={
          <>
          <ul>
        <li className="flex ">
          <RxWidth className="h-6 w-6 text-neutral-500 mr-4" />
          {currentWasp.appearance.length}
        </li>
        <li className="flex ">
          <RxHeight className="h-6 w-6 text-neutral-500 mr-4" />
          {currentWasp.appearance.height}
        </li>
        <li className="flex ">
          <GiWeight className="h-6 w-6 text-neutral-500 mr-4" />
          {currentWasp.appearance.weight}
        </li>
        <li className="flex ">
          <IoColorPaletteOutline className="h-6 w-6 text-neutral-500 mr-4" />
          {currentWasp.appearance.color}
        </li>
      </ul>
          </>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="ВРЕДИ" content={
          <ul>
            {currentWasp.dangers.map((danger, index) => (
              <li key={index}
              className='flex'><FaExclamationTriangle className='mt-1 scale-[0.7] mr-3'/>{danger}</li>
            ))}
          </ul>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="ПОВЕДЕНИЕ, ХРАНЕНЕ И НАВИЦИ" content={
          <ul>
            {currentWasp.behavior.map((behavior, index) => (
              <li key={index}
              className='flex'><GoDotFill className='mt-1 scale-90'/>{behavior}</li>
            ))}
          </ul>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="РАЗМНОЖАВАНЕ" content={
          <>
            <p>{currentWasp.reproduction.offspring}</p>
            <p>{currentWasp.reproduction.gestation}</p>
          </>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="ПРИЗНАЦИ ЗА НАПАДЕНИЕ" content={
          <ul>
            {currentWasp.signs.map((sign, index) => (
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
      >        <WaspCard
          selectedWasp={selectedWasp}
          onSelectWasp={handleWaspSelect}
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



const WaspCard: React.FC<{
  selectedWasp: WaspType;
  onSelectWasp: (waspType: WaspType) => void;
}> = ({ selectedWasp, onSelectWasp }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageKey, setImageKey] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    setImageKey(prevKey => prevKey + 1);
  }, [selectedWasp]);

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
            {(Object.keys(waspData) as WaspType[]).map((waspType) => (
              <button
                key={waspType}
                className={`px-3 py-2 rounded-xl border border-ddblue dark:border-lgreen text-sm sm:text-base ${
                  selectedWasp === waspType ? 'dark:text-white text-white bg-ddblue dark:bg-lgreen' : 'text-ddblue dark:text-neutral-100'
                }`}
                onClick={() => onSelectWasp(waspType)}
              >
                {waspType}
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
          src={waspData[selectedWasp].imageUrl} 
          alt={selectedWasp} 
          fill
          style={{ objectFit: "contain" }}
          className="rounded-lg"
          onLoad={() => setIsLoading(false)}
        />
      </AnimatePresence>
    </motion.div> 

          <h2 className="text-xl font-bold mb-2 mt-4">{selectedWasp}</h2>
          <p className='text-start text-sm sm:text-base'>{waspData[selectedWasp].desc}</p>
        </div>
      </BackgroundGradient>
    </motion.div> 
  );
};

export default WaspInfoComponent;