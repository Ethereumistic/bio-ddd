"use client";
import React, { useState, useEffect } from 'react';
import { MoleInfo, MoleType } from './moleTypes'
import { RxHeight, RxWidth } from 'react-icons/rx';
import { GiWeight } from 'react-icons/gi';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { GoDotFill } from "react-icons/go";
import { FaExclamationTriangle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Loading from '@/app/loading';
import Image from 'next/image';
import { BackgroundGradient } from '@/components/ui/background-gradient';


const moleData: Record<MoleType, MoleInfo> = {
    'ОБИКНОВЕНА': {
      latinName: 'Talpa europaea',
      imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/mole-obiknovena.png',
      appearance: {
        length: '10 - 15 см',
        height: '3 - 4 см',
        weight: '70 - 130 г',
        color: 'Тъмнокафяво / Черно'
      },
      dangers: ['Няма сериозни опасности за хората'],
      behavior: ['Подземен начин на живот', 'Активна през цялата година', 'Изгражда сложни тунелни системи'],
      reproduction: {
        offspring: '2 - 7',
        gestation: '30 - 40 дни'
      },
      signs: ['Изкопани тунели и малки купчини пръст на повърхността'],
      desc: 'Обикновената къртица е често срещана в България. Тя прекарва почти целия си живот под земята, където се храни с насекоми и червеи. Къртиците са полезни за почвата, но могат да причинят щети в градините.',
    },
    'БАЛКАНСКА': {
      latinName: 'Talpa stankovici',
      imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/mole-balkan.png',
      appearance: {
        length: '8 - 14 см',
        height: '3 - 4 см',
        weight: '60 - 110 г',
        color: 'Черно с кафеникав оттенък'
      },
      dangers: ['Няма сериозни опасности за хората'],
      behavior: ['Предпочита планински райони', 'Активна целогодишно', 'Изгражда подземни тунели'],
      reproduction: {
        offspring: '2 - 5',
        gestation: '30 - 40 дни'
      },
      signs: ['Тунели и купчини пръст в планински терени'],
      desc: 'Балканската къртица е разпространена предимно в южната част на Балканите. Тя живее под земята и се храни с различни почвени организми. Този вид е по-малко известен и срещан от обикновената къртица.',
    },
    'РУМЕЛИЙСКА': {
      latinName: 'Talpa levantis',
      imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/mole-rum.png',
      appearance: {
        length: '9 - 13 см',
        height: '3 - 4 см',
        weight: '50 - 100 г',
        color: 'Тъмнокафяво / Черно'
      },
      dangers: ['Няма сериозни опасности за хората'],
      behavior: ['Подземен начин на живот', 'Предпочита влажни места'],
      reproduction: {
        offspring: '3 - 6',
        gestation: '30 - 35 дни'
      },
      signs: ['Тунели и купчини пръст в близост до влажни зони'],
      desc: 'Румелийската къртица се среща в източната част на Балканите, включително в България. Тя предпочита влажни местообитания и изгражда обширни тунелни системи под земята. Обича да се храни с насекоми и други безгръбначни.',
    },
    'МАЛКА': {
      latinName: 'Talpa caeca',
      imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/mole-malka.png',
      appearance: {
        length: '7 - 12 см',
        height: '2 - 3 см',
        weight: '40 - 90 г',
        color: 'Тъмнокафяво'
      },
      dangers: ['Няма сериозни опасности за хората'],
      behavior: ['Подземен живот в планински райони', 'Активна през цялата година'],
      reproduction: {
        offspring: '3 - 5',
        gestation: '30 - 35 дни'
      },
      signs: ['Малки тунели и купчини пръст в планински терени'],
      desc: 'Малката къртица е най-малкият вид къртица, срещан в България. Тя живее на по-висока надморска височина и се храни предимно с малки безгръбначни, които открива в почвата.',
    },
  };
  

const MoleInfoComponent: React.FC = () => {
  const [selectedMole, setSelectedMole] = useState<MoleType>('ОБИКНОВЕНА');


  const handleMoleSelect = (moleType: MoleType) => {
    setSelectedMole(moleType);
  };

  const currentMole = moleData[selectedMole];

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
        <InfoBox title="ЛАТИНСКО НАИМЕНОВАНИЕ" content={currentMole.latinName} />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="КАК ИЗГЛЕЖДА" content={
          <>
          <ul>
        <li className="flex ">
          <RxWidth className="h-6 w-6 text-neutral-500 mr-4" />
          {currentMole.appearance.length}
        </li>
        <li className="flex ">
          <RxHeight className="h-6 w-6 text-neutral-500 mr-4" />
          {currentMole.appearance.height}
        </li>
        <li className="flex ">
          <GiWeight className="h-6 w-6 text-neutral-500 mr-4" />
          {currentMole.appearance.weight}
        </li>
        <li className="flex ">
          <IoColorPaletteOutline className="h-6 w-6 text-neutral-500 mr-4" />
          {currentMole.appearance.color}
        </li>
      </ul>
          </>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="ВРЕДИ" content={
          <ul>
            {currentMole.dangers.map((danger, index) => (
              <li key={index}
              className='flex'><FaExclamationTriangle className='mt-1 scale-[0.7] mr-3'/>{danger}</li>
            ))}
          </ul>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="ПОВЕДЕНИЕ, ХРАНЕНЕ И НАВИЦИ" content={
          <ul>
            {currentMole.behavior.map((behavior, index) => (
              <li key={index}
              className='flex'><GoDotFill className='mt-1 scale-90'/>{behavior}</li>
            ))}
          </ul>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="РАЗМНОЖАВАНЕ" content={
          <>
            <p>{currentMole.reproduction.offspring}</p>
            <p>{currentMole.reproduction.gestation}</p>
          </>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="ПРИЗНАЦИ ЗА НАПАДЕНИЕ" content={
          <ul>
            {currentMole.signs.map((sign, index) => (
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
      >        <MoleCard
          selectedMole={selectedMole}
          onSelectMole={handleMoleSelect}
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



const MoleCard: React.FC<{
  selectedMole: MoleType;
  onSelectMole: (moleType: MoleType) => void;
}> = ({ selectedMole, onSelectMole }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageKey, setImageKey] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    setImageKey(prevKey => prevKey + 1);
  }, [selectedMole]);

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
            {(Object.keys(moleData) as MoleType[]).map((moleType) => (
              <button
                key={moleType}
                className={`px-3 py-2 rounded-xl border border-ddblue dark:border-lgreen text-sm sm:text-base ${
                  selectedMole === moleType ? 'dark:text-white text-white bg-ddblue dark:bg-lgreen' : 'text-ddblue dark:text-neutral-100'
                }`}
                onClick={() => onSelectMole(moleType)}
              >
                {moleType}
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
          src={moleData[selectedMole].imageUrl} 
          alt={selectedMole} 
          fill
          style={{ objectFit: "contain" }}
          className="rounded-lg"
          onLoad={() => setIsLoading(false)}
        />
      </AnimatePresence>
    </motion.div> 

          <h2 className="text-xl font-bold mb-2 mt-4">{selectedMole}</h2>
          <p className='text-start text-sm sm:text-base'>{moleData[selectedMole].desc}</p>
        </div>
      </BackgroundGradient>
    </motion.div> 
  );
};

export default MoleInfoComponent;