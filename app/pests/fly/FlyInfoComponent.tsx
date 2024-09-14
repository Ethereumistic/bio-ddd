"use client";
import React, { useState, useEffect } from 'react';
import { FlyInfo, FlyType } from './flyTypes'
import { RxHeight, RxWidth } from 'react-icons/rx';
import { GiWeight } from 'react-icons/gi';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { GoDotFill } from "react-icons/go";
import { FaExclamationTriangle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Loading from '@/app/loading';
import Image from 'next/image';
import { BackgroundGradient } from '@/components/ui/background-gradient';


const flyData: Record<FlyType, FlyInfo> = {
  'ДОМАШНА': {
    latinName: 'Musca domestica',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/domashnamuha.png',
    appearance: {
      length: '6 - 9 мм',
      height: '2 - 4 мм',
      weight: '0.1 - 0.2 мг',
      color: 'Сивкаво / Черно'
    },
    dangers: ['Преносител на заболявания', 'Замърсява храни и повърхности', 'Причинява неприятен мирис'],
    behavior: ['Активна през деня', 'Обича топли и влажни места', 'Често се среща в дома'],
    reproduction: {
      offspring: '100 - 150 яйца на снасяне',
      gestation: '8 - 20 часа след снасяне'
    },
    signs: ['Мръсни отпадъци и остатъци от храна', 'Слепи места около кухня и боклукови контейнери'],
    desc: 'Домашната муха е често срещан вредител, който се храни с хранителни отпадъци и други органични вещества. Тя е известна с това, че пренася различни бактерии и вируси, и може да замърси храната и повърхностите.',
  },
  'СИНЯ': {
    latinName: 'Calliphora vomitoria',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/sinqmuha.png',
    appearance: {
      length: '10 - 14 мм',
      height: '4 - 6 мм',
      weight: '0.3 - 0.5 мг',
      color: 'Синьо / Металическо зелено'
    },
    dangers: ['Преносител на болести', 'Може да замърси храни и повърхности', 'Може да причини инфекция на рани'],
    behavior: ['Активна през деня', 'Обитава места с гниещи органични вещества', 'Обича топли и влажни места'],
    reproduction: {
      offspring: '100 - 200 яйца на снасяне',
      gestation: '1 - 2 дни след снасяне'
    },
    signs: ['Наличието на гниещи органични вещества', 'Инфекции на открити рани'],
    desc: 'Синята муха, известна и като гниеща муха, е често срещана в райони с гниеща органична материя. Тя може да бъде опасна, тъй като пренася патогени и може да инфектира рани при хора и животни.',
  },
  'ЗЕЛЕНА': {
    latinName: 'Lucilia sericata',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/zelenamuha.png',
    appearance: {
      length: '8 - 10 мм',
      height: '3 - 5 мм',
      weight: '0.2 - 0.4 мг',
      color: 'Зелено / Металическо зелено'
    },
    dangers: ['Преносител на заболявания', 'Може да причинява инфекция на рани', 'Може да замърси храни'],
    behavior: ['Активна през деня', 'Обитава места с разлагащи се органични вещества', 'Често се среща в животновъдни стопанства'],
    reproduction: {
      offspring: '100 - 150 яйца на снасяне',
      gestation: '1 - 2 дни след снасяне'
    },
    signs: ['Гниещи органични вещества', 'Инфекции на рани'],
    desc: 'Зелената муха, известна със способността си да разлага органични вещества, е важен вредител в животновъдството. Тя може да пренася патогени и да причини инфекция на рани, както и да замърси храни.',
  },
  'МАЛКА': {
    latinName: 'Fannia canicularis',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/malkadomashnamuha.png',
    appearance: {
      length: '4 - 6 мм',
      height: '2 - 3 мм',
      weight: '0.1 - 0.3 мг',
      color: 'Сивкаво / Кафяво'
    },
    dangers: ['Преносител на болести', 'Може да замърси храни', 'Може да причини дискомфорт'],
    behavior: ['Активна през деня', 'Често се среща в близост до храни', 'Обича топли и влажни места'],
    reproduction: {
      offspring: '100 - 150 яйца на снасяне',
      gestation: '1 - 2 дни след снасяне'
    },
    signs: ['Наличие на мухарски яйца и ларви в близост до храни', 'Замърсяване на повърхности'],
    desc: 'Малката муха е често срещана в домакинствата и е известна със способността си да се размножава бързо. Тя може да замърси храни и повърхности и да пренася патогени.',
  },
  'ГОВЕЖДА': {
    latinName: 'Stomoxys calcitrans',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/govejdamuha.png',
    appearance: {
      length: '6 - 8 мм',
      height: '3 - 4 мм',
      weight: '0.2 - 0.4 мг',
      color: 'Сивкаво / Кафяво'
    },
    dangers: ['Преносител на заболявания', 'Може да причинява дискомфорт на животните', 'Може да замърси храни'],
    behavior: ['Активна през деня', 'Обича влажни и топли места', 'Паразитира основно върху животни'],
    reproduction: {
      offspring: '100 - 500 яйца на снасяне',
      gestation: '2 - 4 дни от снасяне'
    },
    signs: ['Муха около животни', 'Раздразнена кожа при животни'],
    desc: 'Говедовата муха е паразитна муха, която е известна със своето хранене на кръвта на животни, като крави и коне. Тя може да предава различни заболявания и да причинява дискомфорт на животните.',
  },
};

const FlyInfoComponent: React.FC = () => {
  const [selectedFly, setSelectedFly] = useState<FlyType>('ДОМАШНА');


  const handleFlySelect = (flyType: FlyType) => {
    setSelectedFly(flyType);
  };

  const currentFly = flyData[selectedFly];

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
        <InfoBox title="ЛАТИНСКО НАИМЕНОВАНИЕ" content={currentFly.latinName} />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="КАК ИЗГЛЕЖДА" content={
          <>
          <ul>
        <li className="flex ">
          <RxWidth className="h-6 w-6 text-neutral-500 mr-4" />
          {currentFly.appearance.length}
        </li>
        <li className="flex ">
          <RxHeight className="h-6 w-6 text-neutral-500 mr-4" />
          {currentFly.appearance.height}
        </li>
        <li className="flex ">
          <GiWeight className="h-6 w-6 text-neutral-500 mr-4" />
          {currentFly.appearance.weight}
        </li>
        <li className="flex ">
          <IoColorPaletteOutline className="h-6 w-6 text-neutral-500 mr-4" />
          {currentFly.appearance.color}
        </li>
      </ul>
          </>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="ВРЕДИ" content={
          <ul>
            {currentFly.dangers.map((danger, index) => (
              <li key={index}
              className='flex'><FaExclamationTriangle className='mt-1 scale-[0.7] mr-3'/>{danger}</li>
            ))}
          </ul>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="ПОВЕДЕНИЕ, ХРАНЕНЕ И НАВИЦИ" content={
          <ul>
            {currentFly.behavior.map((behavior, index) => (
              <li key={index}
              className='flex'><GoDotFill className='mt-1 scale-90'/>{behavior}</li>
            ))}
          </ul>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="РАЗМНОЖАВАНЕ" content={
          <>
            <p>{currentFly.reproduction.offspring}</p>
            <p>{currentFly.reproduction.gestation}</p>
          </>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="ПРИЗНАЦИ ЗА НАПАДЕНИЕ" content={
          <ul>
            {currentFly.signs.map((sign, index) => (
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
      >        <FlyCard
          selectedFly={selectedFly}
          onSelectFly={handleFlySelect}
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



const FlyCard: React.FC<{
  selectedFly: FlyType;
  onSelectFly: (flyType: FlyType) => void;
}> = ({ selectedFly, onSelectFly }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageKey, setImageKey] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    setImageKey(prevKey => prevKey + 1);
  }, [selectedFly]);

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
            {(Object.keys(flyData) as FlyType[]).map((flyType) => (
              <button
                key={flyType}
                className={`px-3 py-2 rounded-xl border border-ddblue dark:border-lgreen text-sm sm:text-base ${
                  selectedFly === flyType ? 'dark:text-white text-white bg-ddblue dark:bg-lgreen' : 'text-ddblue dark:text-neutral-100'
                }`}
                onClick={() => onSelectFly(flyType)}
              >
                {flyType}
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
          src={flyData[selectedFly].imageUrl} 
          alt={selectedFly} 
          fill
          style={{ objectFit: "contain" }}
          className="rounded-lg"
          onLoad={() => setIsLoading(false)}
        />
      </AnimatePresence>
    </motion.div> 

          <h2 className="text-xl font-bold mb-2 mt-4">{selectedFly}</h2>
          <p className='text-start text-sm sm:text-base'>{flyData[selectedFly].desc}</p>
        </div>
      </BackgroundGradient>
    </motion.div> 
  );
};

export default FlyInfoComponent;