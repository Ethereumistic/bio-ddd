"use client";
import React, { useState, useEffect } from 'react';
import { CockroachInfo, CockroachType } from './cockroachTypes'
import { RxHeight, RxWidth } from 'react-icons/rx';
import { GiWeight } from 'react-icons/gi';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { GoDotFill } from "react-icons/go";
import { FaExclamationTriangle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';
import { BackgroundGradient } from '@/components/ui/background-gradient';
import Loading from '@/app/loading';

const cockroachData: Record<CockroachType, CockroachInfo> = {
  'ОРИЕНТАЛСКА': {
    latinName: 'Mus musculus',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/o-cockroach.png',
    appearance: {
      length: '10-15 cm',
      height: '3-5 cm',
      weight: '15-40 g',
      color: 'Кафяв / Сив'
    },
    dangers: ['преносител на заболявания', 'пренасят други вредители', 'замърсяват'],
    behavior: ['социално животно', 'нощен начин на живот', 'добър катерач'],
    reproduction: {
      offspring: '5-10',
      gestation: '19-21 days'
    },
    signs: ['Droppings', 'Gnaw marks on furniture and food packaging'],
    desc: 'Mалък гризач, често срещан в домовете. Тя е известна с бързото си размножаване и адаптивност. Мишките могат да причинят сериозни щети на имущество и храна, а също така са носители на различни заболявания. Превенцията и контрола на мишките са от съществено значение за здравословната среда в дома.',
  },
'АМЕРИКАНСКА': {
    latinName: 'Periplaneta americana',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/a-cockroach.png',
    appearance: {
        length: '3.4-5.3 см',
        height: 'N/A',
        weight: '0.8-1.4 г',
        color: 'Жълтеникаво кафяво'
    },
    dangers: ['Пренася болести', 'Замърсява храната', 'Предизвиква алергии и астма'],
    behavior: ['Нощна активност', 'Лети на къси разстояния', 'Топли и влажни среди'],
    reproduction: {
        offspring: '14-16 на яйчна капсула (оотека)',
        gestation: '29-58 дни'
    },
    signs: ['Изпражнения, наподобяващи черен пипер', 'Яйчни капсули (оотеки)', 'Миризма на плесен'],
    desc: 'Американската хлебарка е един от най-разпространените видове хлебарки в световен мащаб. Тя предпочита топли и влажни среди като канализация и мазета. Този вид е известен с бързото си размножаване и способността да разпространява патогени чрез контакт с храни и повърхности.'
},
'ГЕРМАНСКА': {
    latinName: 'Blattella germanica',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/g-cockroach.png',
    appearance: {
        length: '1.1-1.6 см',
        height: 'N/A',
        weight: '0.2-0.4 г',
        color: 'Светлокафяв'
    },
    dangers: ['Пренася болести', 'Замърсява храната', 'Предизвиква алергии'],
    behavior: ['Нощна активност', 'Бързо се размножава', 'Предпочита топли и влажни места'],
    reproduction: {
        offspring: '30-40 на яйчна капсула (оотека)',
        gestation: '20-30 дни'
    },
    signs: ['Изпражнения като малки черни зърна', 'Яйчни капсули (оотеки)', 'Миризма на мухъл'],
    desc: 'Германската хлебарка е един от най-честите видове в домове и заведения. Тя предпочита топли и влажни условия, като често се среща в кухнята и други влажни помещения. Известна е със способността си да се размножава бързо и да разпространява патогени, което я прави проблем за хигиената.'
},
};
const CockroachInfoComponent: React.FC = () => {
  const [selectedCockroach, setSelectedCockroach] = useState<CockroachType>('АМЕРИКАНСКА');


  const handleCockroachSelect = (cockroachType: CockroachType) => {
    setSelectedCockroach(cockroachType);
  };

  const currentCockroach = cockroachData[selectedCockroach];

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
        <InfoBox title="ЛАТИНСКО НАИМЕНОВАНИЕ" content={currentCockroach.latinName} />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="КАК ИЗГЛЕЖДА" content={
          <>
          <ul>
        <li className="flex ">
          <RxWidth className="h-6 w-6 text-neutral-500 mr-4" />
          {currentCockroach.appearance.length}
        </li>
        <li className="flex ">
          <RxHeight className="h-6 w-6 text-neutral-500 mr-4" />
          {currentCockroach.appearance.height}
        </li>
        <li className="flex ">
          <GiWeight className="h-6 w-6 text-neutral-500 mr-4" />
          {currentCockroach.appearance.weight}
        </li>
        <li className="flex ">
          <IoColorPaletteOutline className="h-6 w-6 text-neutral-500 mr-4" />
          {currentCockroach.appearance.color}
        </li>
      </ul>
          </>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="ВРЕДИ" content={
          <ul>
            {currentCockroach.dangers.map((danger, index) => (
              <li key={index}
              className='flex'><FaExclamationTriangle className='mt-1 scale-[0.7] mr-3'/>{danger}</li>
            ))}
          </ul>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="ПОВЕДЕНИЕ, ХРАНЕНЕ И НАВИЦИ" content={
          <ul>
            {currentCockroach.behavior.map((behavior, index) => (
              <li key={index}
              className='flex'><GoDotFill className='mt-1 scale-90'/>{behavior}</li>
            ))}
          </ul>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="РАЗМНОЖАВАНЕ" content={
          <>
            <p>{currentCockroach.reproduction.offspring}</p>
            <p>{currentCockroach.reproduction.gestation}</p>
          </>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="ПРИЗНАЦИ ЗА НАПАДЕНИЕ" content={
          <ul>
            {currentCockroach.signs.map((sign, index) => (
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
      >        <CockroachCard
          selectedCockroach={selectedCockroach}
          onSelectCockroach={handleCockroachSelect}
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



const CockroachCard: React.FC<{
  selectedCockroach: CockroachType;
  onSelectCockroach: (cockroachType: CockroachType) => void;
}> = ({ selectedCockroach, onSelectCockroach }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageKey, setImageKey] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    setImageKey(prevKey => prevKey + 1);
  }, [selectedCockroach]);

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
            {(Object.keys(cockroachData) as CockroachType[]).map((cockroachType) => (
              <button
                key={cockroachType}
                className={`px-3 py-2 rounded-xl border border-ddblue dark:border-lgreen text-sm sm:text-base ${
                  selectedCockroach === cockroachType ? 'dark:text-white text-white bg-ddblue dark:bg-lgreen' : 'text-ddblue dark:text-neutral-100'
                }`}
                onClick={() => onSelectCockroach(cockroachType)}
              >
                {cockroachType}
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
                src={cockroachData[selectedCockroach].imageUrl} 
                alt={selectedCockroach} 
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
                onLoadingComplete={() => setIsLoading(false)}
              />
            </AnimatePresence>
          </motion.div> 

          <h2 className="text-xl font-bold mb-2 mt-4">{selectedCockroach}</h2>
          <p className='text-start text-sm sm:text-base'>{cockroachData[selectedCockroach].desc}</p>
        </div>
      </BackgroundGradient>
    </motion.div> 
  );
};

export default CockroachInfoComponent;