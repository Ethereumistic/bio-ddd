"use client";
import React, { useState, useEffect } from 'react';
import { FleaInfo, FleaType } from './fleaTypes'
import { RxHeight, RxWidth } from 'react-icons/rx';
import { GiWeight } from 'react-icons/gi';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { GoDotFill } from "react-icons/go";
import { FaExclamationTriangle } from "react-icons/fa";
import Image from 'next/image';
import { BackgroundGradient } from '@/components/ui/background-gradient';
import { motion, AnimatePresence } from "framer-motion";
import Loading from '@/app/loading';

const fleaData: Record<FleaType, FleaInfo> = {
  'КОТЕШКА': {
    latinName: 'Ctenocephalides felis',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/catflea.png',
    appearance: {
      length: '1 - 2 мм',
      height: '0.5 - 1 мм',
      weight: '0.1 - 0.5 мг',
      color: 'Кафяво / Червеникаво'
    },
    dangers: ['Пренася болести', 'Ухапвания със сърбеж и раздразнение', 'Преносител на паразити'],
    behavior: ['Активна през нощта', 'Достига до високи места чрез скачане', 'Паразитира върху животни'],
    reproduction: {
      offspring: '20 - 50 яйца на ден',
      gestation: '2 - 12 дни от снасяне'
    },
    signs: ['Ухапвания по кожата', 'Кръвни петна върху постелки и кожа'],
    desc: 'Котешката бълха е паразит, който се храни с кръвта на животни и понякога на хора. Тя е разпространена и в селскостопански райони, и в градовете, и може да предава различни болести.',
  },
  'КУЧЕШКА': {
    latinName: 'Ctenocephalides canis',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/dogflea.png',
    appearance: {
      length: '2 - 3 мм',
      height: '0.7 - 1 мм',
      weight: '0.2 - 0.6 мг',
      color: 'Тъмнокафяво / Черно'
    },
    dangers: ['Пренася болести', 'Причинява алергии при животни', 'Преносител на тении'],
    behavior: ['Активна през деня', 'Обича влажни и сенчести места', 'Паразитира върху кучета'],
    reproduction: {
      offspring: '20 - 50 яйца на ден',
      gestation: '2 - 10 дни от снасяне'
    },
    signs: ['Ухапвания по кожата', 'Повишена сърбеж по кожата на животни'],
    desc: 'Кучешката бълха паразитира основно върху кучета, но може да се храни и от други животни, включително хора. Тя е известна с това, че предава тении и причинява раздразнение на кожата.',
  },
  'ЧОВЕШКА': {
    latinName: 'Pulex irritans',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/humflea.png',
    appearance: {
      length: '1.5 - 2 мм',
      height: '0.6 - 0.8 мм',
      weight: '0.1 - 0.4 мг',
      color: 'Тъмнокафяво / Сивкаво'
    },
    dangers: ['Пренася болести', 'Причинява кожни раздразнения', 'Преносител на бактерии'],
    behavior: ['Активна през нощта', 'Обича топли и влажни условия', 'Паразитира върху хора'],
    reproduction: {
      offspring: '8 - 12 яйца на ден',
      gestation: '4 - 12 дни от снасяне'
    },
    signs: ['Ухапвания по кожата', 'Кожни раздразнения и възпаления'],
    desc: 'Човешката бълха се среща предимно в бедни и нехигиенични условия, където лесно се размножава. Тя може да предизвика сериозни кожни раздразнения и да пренася опасни болести.',
  },
  'ПЛЪХОВА': {
    latinName: 'Xenopsylla cheopis',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/ratflea.png',
    appearance: {
      length: '1 - 2 мм',
      height: '0.5 - 1 мм',
      weight: '0.1 - 0.4 мг',
      color: 'Тъмнокафяво / Черно'
    },
    dangers: ['Пренася чумата', 'Разпространява тиф', 'Паразитира върху гризачи'],
    behavior: ['Паразитира върху плъхове и други гризачи', 'Активна през ноща', 'Пренася смъртоносни болести'],
    reproduction: {
      offspring: '20 - 30 яйца на ден',
      gestation: '2 - 10 дни от снасяне'
    },
    signs: ['Наличие на ухапвания по кожата', 'Увеличен брой плъхове в близост'],
    desc: 'Плъховата бълха е известна с това, че пренася опасни болести като чумата и тифа. Тя паразитира основно върху плъхове, но може да предава заболявания и на хора.',
  },
  'ЗАЙЧА': {
    latinName: 'Spilopsyllus cuniculi',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/bunnyflea.png',
    appearance: {
      length: '1 - 2 мм',
      height: '0.5 - 1 мм',
      weight: '0.1 - 0.4 мг',
      color: 'Кафяво / Сиво'
    },
    dangers: ['Преносител на миксоматоза', 'Причинява раздразнения при зайци', 'Пренася паразити'],
    behavior: ['Паразитира върху зайци', 'Активна през деня и нощта', 'Предпочита сухи места'],
    reproduction: {
      offspring: '30 - 50 яйца на ден',
      gestation: '7 - 14 дни от снасяне'
    },
    signs: ['Ухапвания по кожата на зайци', 'Сърбеж и разчесване при домашни любимци'],
    desc: 'Зайчата бълха е паразит, който се храни с кръвта на зайци и други дребни бозайници. Тя е основен преносител на миксоматоза, опасна болест за дивите и домашните зайци.',
  },
};

const FleaInfoComponent: React.FC = () => {
  const [selectedFlea, setSelectedFlea] = useState<FleaType>('КОТЕШКА');


  const handleFleaSelect = (fleaType: FleaType) => {
    setSelectedFlea(fleaType);
  };

  const currentFlea = fleaData[selectedFlea];

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
        <InfoBox title="ЛАТИНСКО НАИМЕНОВАНИЕ" content={currentFlea.latinName} />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="КАК ИЗГЛЕЖДА" content={
          <>
          <ul>
        <li className="flex ">
          <RxWidth className="h-6 w-6 text-neutral-500 mr-4" />
          {currentFlea.appearance.length}
        </li>
        <li className="flex ">
          <RxHeight className="h-6 w-6 text-neutral-500 mr-4" />
          {currentFlea.appearance.height}
        </li>
        <li className="flex ">
          <GiWeight className="h-6 w-6 text-neutral-500 mr-4" />
          {currentFlea.appearance.weight}
        </li>
        <li className="flex ">
          <IoColorPaletteOutline className="h-6 w-6 text-neutral-500 mr-4" />
          {currentFlea.appearance.color}
        </li>
      </ul>
          </>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="ВРЕДИ" content={
          <ul>
            {currentFlea.dangers.map((danger, index) => (
              <li key={index}
              className='flex'><FaExclamationTriangle className='mt-1 scale-[0.7] mr-3'/>{danger}</li>
            ))}
          </ul>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="ПОВЕДЕНИЕ, ХРАНЕНЕ И НАВИЦИ" content={
          <ul>
            {currentFlea.behavior.map((behavior, index) => (
              <li key={index}
              className='flex'><GoDotFill className='mt-1 scale-90'/>{behavior}</li>
            ))}
          </ul>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="РАЗМНОЖАВАНЕ" content={
          <>
            <p>{currentFlea.reproduction.offspring}</p>
            <p>{currentFlea.reproduction.gestation}</p>
          </>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="ПРИЗНАЦИ ЗА НАПАДЕНИЕ" content={
          <ul>
            {currentFlea.signs.map((sign, index) => (
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
      >        <FleaCard
          selectedFlea={selectedFlea}
          onSelectFlea={handleFleaSelect}
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



const FleaCard: React.FC<{
  selectedFlea: FleaType;
  onSelectFlea: (fleaType: FleaType) => void;
}> = ({ selectedFlea, onSelectFlea }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageKey, setImageKey] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    setImageKey(prevKey => prevKey + 1);
  }, [selectedFlea]);

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
            {(Object.keys(fleaData) as FleaType[]).map((fleaType) => (
              <button
                key={fleaType}
                className={`px-3 py-2 rounded-xl border border-ddblue dark:border-lgreen text-sm sm:text-base ${
                  selectedFlea === fleaType ? 'dark:text-white text-white bg-ddblue dark:bg-lgreen' : 'text-ddblue dark:text-neutral-100'
                }`}
                onClick={() => onSelectFlea(fleaType)}
              >
                {fleaType}
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
          src={fleaData[selectedFlea].imageUrl} 
          alt={selectedFlea} 
          fill
          style={{ objectFit: "contain" }}
          className="rounded-lg"
          onLoad={() => setIsLoading(false)}
        />
      </AnimatePresence>
    </motion.div> 

          <h2 className="text-xl font-bold mb-2 mt-4">{selectedFlea}</h2>
          <p className='text-start text-sm sm:text-base'>{fleaData[selectedFlea].desc}</p>
        </div>
      </BackgroundGradient>
    </motion.div> 
  );
};

export default FleaInfoComponent;