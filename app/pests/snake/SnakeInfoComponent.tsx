"use client";
import React, { useState, useEffect } from 'react';
import { SnakeInfo, SnakeType } from './snakeTypes'
import { RxHeight, RxWidth } from 'react-icons/rx';
import { GiWeight } from 'react-icons/gi';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { GoDotFill } from "react-icons/go";
import { FaExclamationTriangle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Loading from '@/app/loading';
import Image from 'next/image';
import { BackgroundGradient } from '@/components/ui/background-gradient';


const snakeData: Record<SnakeType, SnakeInfo> = {
  'ВОДЕН СМОК': {
    latinName: 'Natrix natrix',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/natrix.png',
    appearance: {
      length: '80 - 150 см',
      height: '3 - 5 см',
      weight: '100 - 300 г',
      color: 'Кафяв / Сив със светли петна'
    },
    dangers: ['Няма сериозни опасности за хората'],
    behavior: ['Полуводен начин на живот', 'Активен през деня', 'Плува много добре'],
    reproduction: {
      offspring: '10 - 30',
      gestation: '30 - 45 дни'
    },
    signs: ['Следи от люспи в близост до водни източници', 'Люспи, открити в тревата'],
    desc: 'Водният смок е неотровна змия, която се среща в близост до водоеми. Той е отличен плувец и се храни с малки земноводни и риби. Често бъркан с опасни видове, но е напълно безвреден за хората.',
  },
  'МЕДЯНКА': {
    latinName: 'Coronella austriaca',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/coronella.png',
    appearance: {
      length: '60 - 80 см',
      height: '3 - 4 см',
      weight: '100 - 200 г',
      color: 'Кафяво с меден отенък'
    },
    dangers: ['Неотровна, няма сериозни опасности за хората'],
    behavior: ['Скрит начин на живот', 'Активна през деня', 'Предпочита сухи места'],
    reproduction: {
      offspring: '4 - 10',
      gestation: '60 - 80 дни'
    },
    signs: ['Люспи в тревата', 'Следи от змии в сухи места'],
    desc: 'Медянката е неотровна змия, която обитава сухи, скалисти терени. Тя е срамежлива и рядко се среща от хората. Медянката се храни с малки гризачи и гущери.',
  },
  'ПЕПЕЛЯНКА': {
    latinName: 'Vipera ammodytes',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/pepelqnka.png',
    appearance: {
      length: '60 - 90 см',
      height: '5 - 7 см',
      weight: '100 - 300 г',
      color: 'Сиво-кафяво с тъмен зигзаг на гърба'
    },
    dangers: ['Отровна, опасна за хора и домашни любимци'],
    behavior: ['Нощна и дневна активност', 'Предпочита скалисти терени'],
    reproduction: {
      offspring: '5 - 10',
      gestation: '90 - 100 дни'
    },
    signs: ['Следи от змии в сухи и скалисти терени', 'Следи от ухапвания на жертвите'],
    desc: 'Пепелянката е най-опасната змия в България. Тя е отровна и ухапванията ѝ могат да бъдат опасни за хора и животни. Обитава предимно скалисти терени и се храни с малки гризачи и птици.',
  },
  'ЖЪЛТОКАФЯВ СМОК': {
    latinName: 'Elaphe quatuorlineata',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/jultsmok.png',
    appearance: {
      length: '120 - 200 см',
      height: '5 - 7 см',
      weight: '500 - 1500 г',
      color: 'Жълто-кафяво с четири дълги ивици'
    },
    dangers: ['Няма сериозни опасности за хората'],
    behavior: ['Наземен ловец', 'Активен през деня', 'Предпочита открити терени'],
    reproduction: {
      offspring: '10 - 16',
      gestation: '50 - 60 дни'
    },
    signs: ['Люспи и следи от змии в открити терени'],
    desc: 'Жълтокафявият смок е голяма неотровна змия, която често се среща в България. Тя е безвредна за хората и се храни предимно с гризачи, които ловува на земята.',
  },
  'УСОЙНИЦА': {
    latinName: 'Vipera berus',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/usoinica.png',
    appearance: {
      length: '50 - 80 см',
      height: '4 - 6 см',
      weight: '50 - 200 г',
      color: 'Сиво-черно със зигзаг шарка'
    },
    dangers: ['Отровна, ухапванията могат да бъдат опасни'],
    behavior: ['Активна през деня', 'Предпочита влажни и сенчести места'],
    reproduction: {
      offspring: '6 - 12',
      gestation: '90 - 110 дни'
    },
    signs: ['Следи от змии във влажни места', 'Следи от ухапвания на жертвите'],
    desc: 'Усойницата е отровна змия, която обитава предимно влажни и сенчести места. Ухапванията ѝ могат да бъдат опасни, особено за деца и домашни любимци. Тя е защитен вид в България.',
  },
};

const SnakeInfoComponent: React.FC = () => {
  const [selectedSnake, setSelectedSnake] = useState<SnakeType>('ВОДЕН СМОК');


  const handleSnakeSelect = (snakeType: SnakeType) => {
    setSelectedSnake(snakeType);
  };

  const currentSnake = snakeData[selectedSnake];

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
        <InfoBox title="ЛАТИНСКО НАИМЕНОВАНИЕ" content={currentSnake.latinName} />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="КАК ИЗГЛЕЖДА" content={
          <>
          <ul>
        <li className="flex ">
          <RxWidth className="h-6 w-6 text-neutral-500 mr-4" />
          {currentSnake.appearance.length}
        </li>
        <li className="flex ">
          <RxHeight className="h-6 w-6 text-neutral-500 mr-4" />
          {currentSnake.appearance.height}
        </li>
        <li className="flex ">
          <GiWeight className="h-6 w-6 text-neutral-500 mr-4" />
          {currentSnake.appearance.weight}
        </li>
        <li className="flex ">
          <IoColorPaletteOutline className="h-6 w-6 text-neutral-500 mr-4" />
          {currentSnake.appearance.color}
        </li>
      </ul>
          </>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="ВРЕДИ" content={
          <ul>
            {currentSnake.dangers.map((danger, index) => (
              <li key={index}
              className='flex'><FaExclamationTriangle className='mt-1 scale-[0.7] mr-3'/>{danger}</li>
            ))}
          </ul>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="ПОВЕДЕНИЕ, ХРАНЕНЕ И НАВИЦИ" content={
          <ul>
            {currentSnake.behavior.map((behavior, index) => (
              <li key={index}
              className='flex'><GoDotFill className='mt-1 scale-90'/>{behavior}</li>
            ))}
          </ul>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="РАЗМНОЖАВАНЕ" content={
          <>
            <p>{currentSnake.reproduction.offspring}</p>
            <p>{currentSnake.reproduction.gestation}</p>
          </>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="ПРИЗНАЦИ ЗА НАПАДЕНИЕ" content={
          <ul>
            {currentSnake.signs.map((sign, index) => (
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
      >        <SnakeCard
          selectedSnake={selectedSnake}
          onSelectSnake={handleSnakeSelect}
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



const SnakeCard: React.FC<{
  selectedSnake: SnakeType;
  onSelectSnake: (snakeType: SnakeType) => void;
}> = ({ selectedSnake, onSelectSnake }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageKey, setImageKey] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    setImageKey(prevKey => prevKey + 1);
  }, [selectedSnake]);

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
            {(Object.keys(snakeData) as SnakeType[]).map((snakeType) => (
              <button
                key={snakeType}
                className={`px-3 py-2 rounded-xl border border-ddblue dark:border-lgreen text-sm sm:text-base ${
                  selectedSnake === snakeType ? 'dark:text-white text-white bg-ddblue dark:bg-lgreen' : 'text-ddblue dark:text-neutral-100'
                }`}
                onClick={() => onSelectSnake(snakeType)}
              >
                {snakeType}
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
          src={snakeData[selectedSnake].imageUrl} 
          alt={selectedSnake} 
          fill
          style={{ objectFit: "contain" }}
          className="rounded-lg"
          onLoad={() => setIsLoading(false)}
        />
      </AnimatePresence>
    </motion.div> 

          <h2 className="text-xl font-bold mb-2 mt-4">{selectedSnake}</h2>
          <p className='text-start text-sm sm:text-base'>{snakeData[selectedSnake].desc}</p>
        </div>
      </BackgroundGradient>
    </motion.div> 
  );
};

export default SnakeInfoComponent;