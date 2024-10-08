"use client";
import React, { useState, useEffect } from 'react';
import { MothInfo, MothType } from './mothTypes'
import { RxHeight, RxWidth } from 'react-icons/rx';
import { GiWeight } from 'react-icons/gi';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { GoDotFill } from "react-icons/go";
import { FaExclamationTriangle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Loading from '@/app/loading';
import Image from 'next/image';
import { BackgroundGradient } from '@/components/ui/background-gradient';


const mothData: Record<MothType, MothInfo> = {
    'ПЛАТНЕН': {
      latinName: 'Tineola bisselliella',
      imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/moth-platnen.png',
      appearance: {
        length: '6 - 10 мм',
        height: '1 - 2 мм',
        weight: '0.01 г',
        color: 'Жълтеникаво - кафяво'
      },
      dangers: ['Уврежда тъкани и дрехи'],
      behavior: ['Активен през нощта', 'Обича тъмни и влажни места'],
      reproduction: {
        offspring: '40 - 100',
        gestation: '4 - 10 дни'
      },
      signs: ['Дупки в дрехи и текстилни материали', 'Малки какавиди в тъмни ъгли'],
      desc: 'Платненият молец е известен вредител на тъкани, като предпочита дрехи от естествени материали като вълна и памук. Те често са трудни за забелязване, защото се крият в тъмни места.',
    },
    'ПАУНОВ': {
      latinName: 'Saturnia pyri',
      imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/moth-paunov.png',
      appearance: {
        length: '10 - 15 см',
        height: '2 см',
        weight: '0.5 - 1 г',
        color: 'Кафяво с очи на крилете'
      },
      dangers: ['Няма сериозни опасности за хората'],
      behavior: ['Активен през нощта', 'Предпочита гори и градини'],
      reproduction: {
        offspring: '200 - 300 яйца',
        gestation: '10 - 15 дни'
      },
      signs: ['Големи гъсеници върху листата на дърветата', 'Следи от ядене по дървета'],
      desc: 'Големият нощен паунов молец е един от най-големите молци в Европа. Личинките се хранят с листата на дървета като круши и сливи.',
    },
    'ХРАНИТЕЛЕН': {
      latinName: 'Plodia interpunctella',
      imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/moth-food.png',
      appearance: {
        length: '8 - 10 мм',
        height: '2 мм',
        weight: '0.01 г',
        color: 'Кафяво с жълт оттенък'
      },
      dangers: ['Заразява хранителни продукти'],
      behavior: ['Активен през нощта', 'Размножава се бързо в храни като брашно и зърна'],
      reproduction: {
        offspring: '60 - 300 яйца',
        gestation: '4 - 10 дни'
      },
      signs: ['Какавидни пашкули в хранителни продукти', 'Следи от гъсеници в сухи храни'],
      desc: 'Хранителният молец е вредител, който често се среща в складове и домове. Личинките му заразяват брашно, ориз, ядки и други хранителни продукти.',
    },
    'ПРЪСТЕНОВИДЕН': {
      latinName: 'Malacosoma neustria',
      imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/moth-ring.png',
      appearance: {
        length: '20 - 25 мм',
        height: '2 - 3 мм',
        weight: '0.02 - 0.03 г',
        color: 'Кафяво с пръстеновидни шарки'
      },
      dangers: ['Уврежда овощни дървета'],
      behavior: ['Активен през нощта', 'Предпочита овощни градини'],
      reproduction: {
        offspring: '200 - 300 яйца',
        gestation: '10 - 14 дни'
      },
      signs: ['Гъсеници по листата на дърветата', 'Следи от ядене по овощни култури'],
      desc: 'Пръстеновидният молец е вредител, който напада овощни дървета като ябълки, сливи и круши. Ларвите му могат да причинят сериозни щети на дърветата.',
    },
};

  

const MothInfoComponent: React.FC = () => {
  const [selectedMoth, setSelectedMoth] = useState<MothType>('ПЛАТНЕН');


  const handleMothSelect = (mothType: MothType) => {
    setSelectedMoth(mothType);
  };

  const currentMoth = mothData[selectedMoth];

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
        <InfoBox title="ЛАТИНСКО НАИМЕНОВАНИЕ" content={currentMoth.latinName} />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="КАК ИЗГЛЕЖДА" content={
          <>
          <ul>
        <li className="flex ">
          <RxWidth className="h-6 w-6 text-neutral-500 mr-4" />
          {currentMoth.appearance.length}
        </li>
        <li className="flex ">
          <RxHeight className="h-6 w-6 text-neutral-500 mr-4" />
          {currentMoth.appearance.height}
        </li>
        <li className="flex ">
          <GiWeight className="h-6 w-6 text-neutral-500 mr-4" />
          {currentMoth.appearance.weight}
        </li>
        <li className="flex ">
          <IoColorPaletteOutline className="h-6 w-6 text-neutral-500 mr-4" />
          {currentMoth.appearance.color}
        </li>
      </ul>
          </>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="ВРЕДИ" content={
          <ul>
            {currentMoth.dangers.map((danger, index) => (
              <li key={index}
              className='flex'><FaExclamationTriangle className='mt-1 scale-[0.7] mr-3'/>{danger}</li>
            ))}
          </ul>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="ПОВЕДЕНИЕ, ХРАНЕНЕ И НАВИЦИ" content={
          <ul>
            {currentMoth.behavior.map((behavior, index) => (
              <li key={index}
              className='flex'><GoDotFill className='mt-1 scale-90'/>{behavior}</li>
            ))}
          </ul>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="РАЗМНОЖАВАНЕ" content={
          <>
            <p>{currentMoth.reproduction.offspring}</p>
            <p>{currentMoth.reproduction.gestation}</p>
          </>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="ПРИЗНАЦИ ЗА НАПАДЕНИЕ" content={
          <ul>
            {currentMoth.signs.map((sign, index) => (
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
      >        <MothCard
          selectedMoth={selectedMoth}
          onSelectMoth={handleMothSelect}
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



const MothCard: React.FC<{
  selectedMoth: MothType;
  onSelectMoth: (mothType: MothType) => void;
}> = ({ selectedMoth, onSelectMoth }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageKey, setImageKey] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    setImageKey(prevKey => prevKey + 1);
  }, [selectedMoth]);

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
            {(Object.keys(mothData) as MothType[]).map((mothType) => (
              <button
                key={mothType}
                className={`px-3 py-2 rounded-xl border border-ddblue dark:border-lgreen text-sm sm:text-base ${
                  selectedMoth === mothType ? 'dark:text-white text-white bg-ddblue dark:bg-lgreen' : 'text-ddblue dark:text-neutral-100'
                }`}
                onClick={() => onSelectMoth(mothType)}
              >
                {mothType}
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
          src={mothData[selectedMoth].imageUrl} 
          alt={selectedMoth} 
          fill
          style={{ objectFit: "contain" }}
          className="rounded-lg"
          onLoad={() => setIsLoading(false)}
        />
      </AnimatePresence>
    </motion.div> 

          <h2 className="text-xl font-bold mb-2 mt-4">{selectedMoth}</h2>
          <p className='text-start text-sm sm:text-base'>{mothData[selectedMoth].desc}</p>
        </div>
      </BackgroundGradient>
    </motion.div> 
  );
};

export default MothInfoComponent;