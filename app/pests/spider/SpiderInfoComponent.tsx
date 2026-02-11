"use client";
import React, { useState, useEffect } from 'react';
import { SpiderInfo, SpiderType } from './spiderTypes'
import { RxHeight, RxWidth } from 'react-icons/rx';
import { GiWeight } from 'react-icons/gi';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { GoDotFill } from "react-icons/go";
import { FaExclamationTriangle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Loading from '@/app/loading';
import Image from 'next/image';
import { BackgroundGradient } from '@/components/ui/background-gradient';


const spiderData: Record<SpiderType, SpiderInfo> = {
  'КЪЩЕН ПАЯК': {
    latinName: 'Tegenaria domestica',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/dompaqk.png',
    appearance: {
      length: '15 - 20 mm',
      height: '10 - 15 mm',
      weight: '2 - 4 g',
      color: 'Кафяв / Сив'
    },
    dangers: ['преносител на заболявания', 'пренасят други вредители', 'замърсяват'],
    behavior: ['социално животно', 'нощен начин на живот', 'добър катерач'],
    reproduction: {
      offspring: '30 - 50',
      gestation: '30 - 40 дни'
    },
    signs: ['Паяжини в ъглите на стаите', 'Паяжини в ъглите на мебелите'],
    desc: 'Къщният паяк е често срещан в домовете и е известен със способността си да изгражда паяжини в ъглите на стаите. Той може да бъде носител на патогени и да предизвика алергични реакции.',
  },
  'КРЪСТОНОСЕН': {
    latinName: 'Araneus diadematus',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/crosspaqk.png',
    appearance: {
      length: '10 - 20 mm',
      height: '8 - 18 mm',
      weight: '1 - 2 g',
      color: 'Черен или тъмен кафяв'
    },
    dangers: ['Може да ухапе при провокация'],
    behavior: ['Нощен', 'Тъче големи кръгли паяжини', 'Предпочита храсталаци и градини'],
    reproduction: {
      offspring: '200 - 500',
      gestation: '30 - 50 дни'
    },
    signs: ['Кръгли паяжини на храсти и дървета', 'Малки паяци в паяжините'],
    desc: 'Кръстоносеца е известен със своите големи кръгли паяжини, които тъче в храсти и дървета. Той е важен за контрола на насекомите, въпреки че ухапванията му могат да бъдат болезнени.',
  },
  'ЧЕРНА ВДОВИЦА': {
    latinName: 'Latrodectus mactans',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/blackwidow.png',
    appearance: {
      length: '8 - 15 mm',
      height: '6 - 10 mm',
      weight: '0.5 - 1 g',
      color: 'Черен с червени точки на гърба'
    },
    dangers: ['Смъртоносна отрова', 'Може да предизвика сериозни здравословни проблеми'],
    behavior: ['Нощен', 'Изгражда гъсти паяжини', 'Предпочита скрити места'],
    reproduction: {
      offspring: '100 - 500',
      gestation: '30 - 45 дни'
    },
    signs: ['Гъсти паяжини в скрити места', 'Чести срещи с паяка'],
    desc: 'Черната вдовица е известна със своята смъртоносна отрова, която може да бъде опасна за хората. Паяците от този вид изграждат гъсти паяжини на скрити места, като например под мебели или в ъгли.',
  },
  'ЖЪЛТ ПАЯК': {
    latinName: 'Cheiracanthium punctorium',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/jultpaqk.png',
    appearance: {
      length: '6 - 10 mm',
      height: '4 - 7 mm',
      weight: '0.3 - 0.8 g',
      color: 'Жълт'
    },
    dangers: ['Може да ухапе', 'Лека болка и дискомфорт при ухапване'],
    behavior: ['Дневен', 'Тъче малки паяжини', 'Предпочита растителност'],
    reproduction: {
      offspring: '20 - 50',
      gestation: '30 - 45 дни'
    },
    signs: ['Малки паяжини в растителността', 'Намира се в близост до растения'],
    desc: 'Жълтият паяк е често срещан в градини и полета. Неговите ухапвания могат да предизвикат леко раздразнение и болка, но обикновено не са опасни.',
  },
  'КАМЕНЕН': {
    latinName: 'Eresus sandaliatus',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/kamenenpaqk.png',
    appearance: {
      length: '8 - 12 mm',
      height: '6 - 10 mm',
      weight: '0.5 - 1 g',
      color: 'Червен с черни отбелязвания'
    },
    dangers: ['Може да ухапе', 'Лека болка при ухапване'],
    behavior: ['Дневен', 'Тъче малки мрежи', 'Предпочита каменисти и скалисти места'],
    reproduction: {
      offspring: '20 - 30',
      gestation: '30 - 45 дни'
    },
    signs: ['Малки паяжини между камъни', 'Паяци в близост до скали'],
    desc: 'Каменният паяк е известен със своето червено и черно оцветяване. Често се среща в каменисти или скалисти райони, където тъче малки мрежи.',
  },
};


const SpiderInfoComponent: React.FC = () => {
  const [selectedSpider, setSelectedSpider] = useState<SpiderType>('КЪЩЕН ПАЯК');


  const handleSpiderSelect = (spiderType: SpiderType) => {
    setSelectedSpider(spiderType);
  };

  const currentSpider = spiderData[selectedSpider];

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
        <InfoBox title="ЛАТИНСКО НАИМЕНОВАНИЕ" content={currentSpider.latinName} />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="КАК ИЗГЛЕЖДА" content={
          <>
          <ul>
        <li className="flex ">
          <RxWidth className="h-6 w-6 text-neutral-500 mr-4" />
          {currentSpider.appearance.length}
        </li>
        <li className="flex ">
          <RxHeight className="h-6 w-6 text-neutral-500 mr-4" />
          {currentSpider.appearance.height}
        </li>
        <li className="flex ">
          <GiWeight className="h-6 w-6 text-neutral-500 mr-4" />
          {currentSpider.appearance.weight}
        </li>
        <li className="flex ">
          <IoColorPaletteOutline className="h-6 w-6 text-neutral-500 mr-4" />
          {currentSpider.appearance.color}
        </li>
      </ul>
          </>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="ВРЕДИ" content={
          <ul>
            {currentSpider.dangers.map((danger, index) => (
              <li key={index}
              className='flex'><FaExclamationTriangle className='mt-1 scale-[0.7] mr-3'/>{danger}</li>
            ))}
          </ul>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="ПОВЕДЕНИЕ, ХРАНЕНЕ И НАВИЦИ" content={
          <ul>
            {currentSpider.behavior.map((behavior, index) => (
              <li key={index}
              className='flex'><GoDotFill className='mt-1 scale-90'/>{behavior}</li>
            ))}
          </ul>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="РАЗМНОЖАВАНЕ" content={
          <>
            <p>{currentSpider.reproduction.offspring}</p>
            <p>{currentSpider.reproduction.gestation}</p>
          </>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="ПРИЗНАЦИ ЗА НАПАДЕНИЕ" content={
          <ul>
            {currentSpider.signs.map((sign, index) => (
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
      >        <SpiderCard
          selectedSpider={selectedSpider}
          onSelectSpider={handleSpiderSelect}
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



const SpiderCard: React.FC<{
  selectedSpider: SpiderType;
  onSelectSpider: (spiderType: SpiderType) => void;
}> = ({ selectedSpider, onSelectSpider }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageKey, setImageKey] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    setImageKey(prevKey => prevKey + 1);
  }, [selectedSpider]);

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
            {(Object.keys(spiderData) as SpiderType[]).map((spiderType) => (
              <button
                key={spiderType}
                className={`px-3 py-2 rounded-xl border border-ddblue dark:border-lgreen text-sm sm:text-base ${
                  selectedSpider === spiderType ? 'dark:text-white text-white bg-ddblue dark:bg-lgreen' : 'text-ddblue dark:text-neutral-100'
                }`}
                onClick={() => onSelectSpider(spiderType)}
              >
                {spiderType}
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
          src={spiderData[selectedSpider].imageUrl} 
          alt={selectedSpider} 
          fill
          style={{ objectFit: "contain" }}
          className="rounded-lg"
          onLoad={() => setIsLoading(false)}
        />
      </AnimatePresence>
    </motion.div> 

          <h2 className="text-xl font-bold mb-2 mt-4">{selectedSpider}</h2>
          <p className='text-start text-sm sm:text-base'>{spiderData[selectedSpider].desc}</p>
        </div>
      </BackgroundGradient>
    </motion.div> 
  );
};

export default SpiderInfoComponent;