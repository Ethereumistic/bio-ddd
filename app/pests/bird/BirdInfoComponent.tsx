"use client";
import React, { useState, useEffect } from 'react';
import { BirdInfo, BirdType } from './birdTypes'
import { RxHeight, RxWidth } from 'react-icons/rx';
import { GiMeat, GiNestBirds, GiScalpelStrike, GiWeight } from 'react-icons/gi';
import { IoColorPaletteOutline, IoShareSocialOutline } from 'react-icons/io5';
import { GoDotFill } from "react-icons/go";
import { FaBrain, FaBuilding, FaEgg, FaExclamationTriangle, FaPoo, FaSun, FaTrash } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';
import Loading from '@/app/loading';
import { BackgroundGradient } from '@/components/ui/background-gradient';
import { IconCalendarMonth } from '@tabler/icons-react';

const getBehaviorIcon = (behavior: string) => {
  if (behavior.includes('Живее на големи ята')) return GiNestBirds;
  if (behavior.includes('Активен през деня')) return FaSun;
  if (behavior.includes('Адаптивен към градска среда')) return FaBuilding;
  if (behavior.includes('Интелигентен')) return FaBrain ;
  if (behavior.includes('Социален')) return IoShareSocialOutline ;
  if (behavior.includes('Всеяден')) return GiMeat;
  if (behavior.includes('Агресивно поведение през размножителния период')) return GiScalpelStrike;
  if (behavior.includes('Замърсяване с изпражнения')) return FaPoo;
  if (behavior.includes('Разпространение на боклук')) return FaTrash;
  // Add more conditions for other behaviors
  return GoDotFill; // Default icon
};
const birdData: Record<BirdType, BirdInfo> = {
  'ГЪЛЪБ': {
    latinName: 'Columba livia',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/pidgeon.png',
    appearance: {
      length: '29 - 37 см',
      height: '20 - 25 см',
      weight: '300 - 500 г',
      color: 'Сиво-син с бели и черни петна'
    },
    dangers: ['преносител на заболявания', 'замърсяване с изпражнения', 'замърсяване на сгради'],
    behavior: ['Живее на големи ята', 'Активен през деня', 'Адаптивен към градска среда'],
    reproduction: {
      offspring: '1 - 2 яйца на люпило',
      gestation: '17 - 19 дни след снасяне'
    },
    signs: ['Струпване на птици', 'Бели изпражнения по сгради', 'Шум от гукане'],
    desc: 'Градският гълъб е често срещан в градовете по целия свят. Той е известен с адаптивността си към градската среда и способността да се размножава бързо. Гълъбите могат да причинят значителни щети на сгради чрез техните изпражнения и да пренасят различни заболявания. Контролът на популацията им е важен за поддържането на чистота и хигиена в градските райони.',
  },
  'ГАРВАН': {
    latinName: 'Corvus corax',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/raven.png',
    appearance: {
      length: '54 - 67 см',
      height: '30 - 40 см',
      weight: '800 - 1600 г',
      color: 'Черен с лилав или син блясък'
    },
    dangers: ['може да атакува малки животни', 'разпространява боклук', 'силен шум'],
    behavior: ['Интелигентен', 'Социален', 'Всеяден'],
    reproduction: {
      offspring: '3 - 7 яйца на люпило',
      gestation: '20 - 25 дни след снасяне'
    },
    signs: ['Силно грачене', 'Големи черни птици', 'Разпръснат боклук'],
    desc: 'Гарванът е една от най-интелигентните птици, известна със способността си да решава проблеми и да използва инструменти. Въпреки че не са типични вредители, в градски условия могат да причинят неудобства чрез шума си и навика да разпръскват боклук. Гарваните са всеядни и могат да се адаптират към различни хранителни източници, което ги прави успешни в различни среди.',
  },
  'ЧАЙКА': {
    latinName: 'Larus argentatus',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/seagull.png',
    appearance: {
      length: '55 - 67 см',
      height: '30 - 35 см',
      weight: '800 - 1250 г',
      color: 'Бяло тяло със сиви криле'
    },
    dangers: ['Агресивно поведение през размножителния период', 'Замърсяване с изпражнения', 'Разпространение на боклук'],
    behavior: ['Живее на големи ята', 'Активен през деня', 'Всеяден'],
    reproduction: {
      offspring: '2 - 3 яйца на люпило',
      gestation: '27 - 31 дни след снасяне'
    },
    signs: ['Силни писъци', 'Струпване край водоеми и сметища', 'Нападения над хора за храна'],
    desc: 'Чайката е морска птица, която често се среща в крайбрежни градове. Те са известни с агресивното си поведение, особено когато защитават гнездата си или търсят храна. Чайките могат да бъдат проблем в градските райони поради навика им да ровят в боклука и да замърсяват с изпражненията си. Контролът на популацията им може да бъде предизвикателство поради защитения им статус в много страни.',
  },
'ГЛАРУС': {
    latinName: 'Larus michahellis',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/geagull.png',
    appearance: {
      length: '52 - 58 см',
      height: '30 - 35 см',
      weight: '800 - 1200 г',
      color: 'Бяло тяло със сребристо-сиви криле и жълт клюн'
    },
    dangers: ['Агресивно поведение през размножителния период', 'Замърсяване с изпражнения', 'Разпространение на боклук'],
    behavior: ['Живее на големи ята', 'Активен през деня', 'Всеяден'],
    reproduction: {
      offspring: '2 - 3 яйца на люпило',
      gestation: '27 - 31 дни след снасяне'
    },
    signs: ['Силни крясъци', 'Струпване край водоеми и сметища', 'Нападения над хора за храна'],
    desc: 'Гларусът (жълтокрак) е голяма морска птица, често срещана по Черноморието и вътрешните водоеми на България. Известен е с агресивното си поведение, особено когато защитава територията си или търси храна. Гларусите могат да бъдат проблем в крайбрежните градове и курорти поради навика им да ровят в боклука, да крадат храна от хората и да замърсяват с изпражненията си. Те са изключително адаптивни и са се научили да оцеляват в градска среда, което понякога води до конфликти с хората. Въпреки това, гларусите играят важна роля в екосистемата и са защитени от закона, което прави контрола на популацията им предизвикателство.',
  },
};
const BirdInfoComponent: React.FC = () => {
  const [selectedBird, setSelectedBird] = useState<BirdType>('ГЪЛЪБ');


  const handleBirdSelect = (birdType: BirdType) => {
    setSelectedBird(birdType);
  };

  const currentBird = birdData[selectedBird];

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
        <InfoBox title="ЛАТИНСКО НАИМЕНОВАНИЕ" content={currentBird.latinName} />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="КАК ИЗГЛЕЖДА" content={
          <>
          <ul>
        <li className="flex ">
          <RxWidth className="h-6 w-6 text-neutral-500 mr-4" />
          {currentBird.appearance.length}
        </li>
        <li className="flex ">
          <RxHeight className="h-6 w-6 text-neutral-500 mr-4" />
          {currentBird.appearance.height}
        </li>
        <li className="flex ">
          <GiWeight className="h-6 w-6 text-neutral-500 mr-4" />
          {currentBird.appearance.weight}
        </li>
        <li className="flex ">
          <IoColorPaletteOutline className="h-6 w-6 text-neutral-500 mr-4" />
          {currentBird.appearance.color}
        </li>
      </ul>
          </>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="ВРЕДИ" content={
          <ul>
            {currentBird.dangers.map((danger, index) => (
              <li key={index}
              className='flex'><FaExclamationTriangle className='mt-1 scale-[0.7] mr-3'/>{danger}</li>
            ))}
          </ul>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="ПОВЕДЕНИЕ, ХРАНЕНЕ И НАВИЦИ" content={
          <ul>
            {currentBird.behavior.map((behavior, index) => {
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
          <div className=" justify-center items-center">
            <p className='flex'><FaEgg className='mt-1  mr-2'/>{currentBird.reproduction.offspring}</p>
            <p className='flex'><IconCalendarMonth className='mt-1  mr-2'/>{currentBird.reproduction.gestation}</p>
            </div>
          </>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="ПРИЗНАЦИ ЗА НАПАДЕНИЕ" content={
          <ul>
            {currentBird.signs.map((sign, index) => (
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
      >        <BirdCard
          selectedBird={selectedBird}
          onSelectBird={handleBirdSelect}
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



const BirdCard: React.FC<{
  selectedBird: BirdType;
  onSelectBird: (birdType: BirdType) => void;
}> = ({ selectedBird, onSelectBird }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageKey, setImageKey] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    setImageKey(prevKey => prevKey + 1);
  }, [selectedBird]);

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
            {(Object.keys(birdData) as BirdType[]).map((birdType) => (
              <button
                key={birdType}
                className={`px-3 py-2 rounded-xl border border-ddblue dark:border-lgreen text-sm sm:text-base ${
                  selectedBird === birdType ? 'dark:text-white text-white bg-ddblue dark:bg-lgreen' : 'text-ddblue dark:text-neutral-100'
                }`}
                onClick={() => onSelectBird(birdType)}
              >
                {birdType}
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
          src={birdData[selectedBird].imageUrl} 
          alt={selectedBird} 
          fill
          style={{ objectFit: "contain" }}
          className="rounded-lg"
          onLoad={() => setIsLoading(false)}
        />
      </AnimatePresence>
    </motion.div> 

          <h2 className="text-xl font-bold mb-2 mt-4">{selectedBird}</h2>
          <p className='text-start text-sm sm:text-base'>{birdData[selectedBird].desc}</p>
        </div>
      </BackgroundGradient>
    </motion.div> 
  );
};

export default BirdInfoComponent;