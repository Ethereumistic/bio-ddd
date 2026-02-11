"use client";
import React, { useState, useEffect } from 'react';
import { AntInfo, AntType } from './antTypes'
import { RxHeight, RxWidth } from 'react-icons/rx';
import { GiWeight } from 'react-icons/gi';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { GoDotFill } from "react-icons/go";
import { FaExclamationTriangle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Suspense } from 'react';
import Image from 'next/image';
import { BackgroundGradient } from '@/components/ui/background-gradient';
import Loading from '@/app/loading';


const antData: Record<AntType, AntInfo> = {
  'ЧЕРНА ГРАДИНСКА': {
    latinName: 'Lasius niger',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/mravkan.png',
    appearance: {
      length: '3 - 5 мм',
      height: '1 - 2 мм',
      weight: '1 - 5 мг',
      color: 'Черен'
    },
    dangers: ['Може да ухапе', 'Привлича други насекоми', 'Замърсява храната'],
    behavior: ['Социално насекомо', 'Активна през деня', 'Изгражда сложни колонии'],
    reproduction: {
      offspring: '5000 - 10000 на година',
      gestation: '10 - 20 дни от снасяне'
    },
    signs: ['Пътеки от мравки', 'Малки купчинки пръст', 'Мравки около сладки храни'],
    desc: 'Черната градинска мравка е често срещан вид в градини и домове. Тя формира големи колонии и може да бъде проблем, когато навлезе в сгради в търсене на храна. Въпреки че не представлява директна заплаха за здравето, може да замърси храната и да привлече други вредители.',
  },
  'ФАРАОНОВА': {
    latinName: 'Monomorium pharaonis',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/faraonova.png',
    appearance: {
      length: '2 - 3 мм',
      height: '0.5 - 1 мм',
      weight: '0.5 - 2 мг',
      color: 'Жълто-кафяв'
    },
    dangers: ['Пренася болести', 'Замърсява храната', 'Трудна за контролиране'],
    behavior: ['Образува множество колонии', 'Активна денонощно', 'Предпочита топли места'],
    reproduction: {
      offspring: '350 - 400 на кралица',
      gestation: '7 - 10 дни от снасяне'
    },
    signs: ['Малки жълтеникави мравки', 'Множество пътеки', 'Гнезда в скрити места'],
    desc: 'Фараоновата мравка е дребен, но проблематичен вид, особено в сгради. Тя е известна с бързото си размножаване и способността да образува множество колонии. Този вид може да пренася болести и е труден за контролиране поради своята адаптивност и скритост.',
  },
  'ЧЕРВЕНА ГОРСКА': {
    latinName: 'Formica rufa',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/chervenamrakva.png',
    appearance: {
      length: '6-9 мм',
      height: '2-3 мм',
      weight: '5-10 мг',
      color: 'Червено-кафяв'
    },
    dangers: ['Пръска мравчена киселина', 'Агресивна защита на територията', 'Може да ухапе болезнено'],
    behavior: ['Изгражда големи мравуняци', 'Активна през деня', 'Наранява растенията и им вреди'],
    reproduction: {
      offspring: '20000 - 100000 яйца на колония',
      gestation: '10 - 24 дни от снасяне'
    },
    signs: ['Големи мравуняци', 'Пътеки в гората', 'Агресивно поведение при безпокойство'],
    desc: 'Червената горска мравка е важен вид за горските екосистеми. Тя изгражда големи мравуняци и играе ключова роля в контрола на други насекоми. Въпреки че рядко е проблем в домовете, може да бъде агресивна, ако е обезпокоена, и да пръска мравчена киселина за защита.',
  },
  'ЖЪЛТА': {
    latinName: 'Lasius flavus',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/jultamravka.png',
    appearance: {
      length: '2 - 4 мм',
      height: '1 - 2 мм',
      weight: '1 - 3 мг',
      color: 'Жълт'
    },
    dangers: ['Може да повреди корените на растенията', 'Привлича листни въшки'],
    behavior: ['Живее под земята', 'Отглежда листни въшки', 'Избягва светлината'],
    reproduction: {
      offspring: '3000 - 5000 на година',
      gestation: '15 - 25 дни от снасяне'
    },
    signs: ['Малки купчинки пръст в тревата', 'Жълти мравки около корените', 'Увеличен брой листни въшки'],
    desc: 'Жълтата мравка е подземен вид, който рядко се вижда на повърхността. Тя е известна с отглеждането на листни въшки за техните сладки секрети. Въпреки че не е директна заплаха за хората, може да бъде проблем в градините, тъй като поощрява разпространението на листни въшки.',
  },
  'КАМЕННА': {
    latinName: 'Tetramorium caespitum',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/kamennamravka.png',
    appearance: {
      length: '2.5 - 4 мм',
      height: '1 - 1.5 мм',
      weight: '1 - 4 мг',
      color: 'Тъмнокафяв до черен'
    },
    dangers: ['Може да ухапе', 'Навлиза в домове', 'Нанася щети на настилки'],
    behavior: ['Гнезда под камъни и настилки', 'Активна през деня', 'Агресивна към други мравки'],
    reproduction: {
      offspring: '1000 - 2000 на година',
      gestation: '16 - 30 дни от снасяне'
    },
    signs: ['Малки купчинки пясък между плочки', 'Мравки по пътеки и настилки', 'Агресивно поведение'],
    desc: 'Каменната мравка е често срещан вид в градски среди. Тя предпочита да гнезди под камъни, плочки и настилки, което може да причини проблеми в градините и дворовете. Въпреки малкия си размер, този вид е известен със своята агресивност към други мравки и понякога може да ухапе хора.',
  },
  'КАДИФЕНА': {
    latinName: 'Mutillidae',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/mutilka.png',
    appearance: {
      length: '5 - 15 мм',
      height: '2 - 5 мм',
      weight: '10 - 30 мг',
      color: 'Черен с червени или оранжеви петна'
    },
    dangers: ['Болезнено ужилване', 'Агресивна защита', 'Може да предизвика алергични реакции'],
    behavior: ['Самотен начин на живот', 'Активна през деня', 'Паразитира по други насекоми'],
    reproduction: {
      offspring: '20 - 100 на женска',
      gestation: '2 - 3 дни преди да се излюпят ларви'
    },
    signs: ['Женски без крила по земята', 'Мъжки летящи наоколо', 'Червеникави насекоми с космати тела'],
    desc: 'Кадифената мравка, известна още като кадифена оса, всъщност не е истинска мравка, а вид оса. Женските нямат крила и приличат на едри, космати мравки. Известни са с болезненото си ужилване, което използват за защита. Те са паразити, които снасят яйцата си в гнездата на други насекоми.',
  },
};
const AntInfoComponent: React.FC = () => {
  const [selectedAnt, setSelectedAnt] = useState<AntType>('ЧЕРНА ГРАДИНСКА');


  const handleAntSelect = (antType: AntType) => {
    setSelectedAnt(antType);
  };

  const currentAnt = antData[selectedAnt];

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
        <InfoBox title="ЛАТИНСКО НАИМЕНОВАНИЕ" content={currentAnt.latinName} />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="КАК ИЗГЛЕЖДА" content={
          <>
          <ul>
        <li className="flex ">
          <RxWidth className="h-6 w-6 text-neutral-500 mr-4" />
          {currentAnt.appearance.length}
        </li>
        <li className="flex ">
          <RxHeight className="h-6 w-6 text-neutral-500 mr-4" />
          {currentAnt.appearance.height}
        </li>
        <li className="flex ">
          <GiWeight className="h-6 w-6 text-neutral-500 mr-4" />
          {currentAnt.appearance.weight}
        </li>
        <li className="flex ">
          <IoColorPaletteOutline className="h-6 w-6 text-neutral-500 mr-4" />
          {currentAnt.appearance.color}
        </li>
      </ul>
          </>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="ВРЕДИ" content={
          <ul>
            {currentAnt.dangers.map((danger, index) => (
              <li key={index}
              className='flex'><FaExclamationTriangle className='mt-1 scale-[0.7] mr-3'/>{danger}</li>
            ))}
          </ul>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="ПОВЕДЕНИЕ, ХРАНЕНЕ И НАВИЦИ" content={
          <ul>
            {currentAnt.behavior.map((behavior, index) => (
              <li key={index}
              className='flex'><GoDotFill className='mt-1 scale-90'/>{behavior}</li>
            ))}
          </ul>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="РАЗМНОЖАВАНЕ" content={
          <>
            <p>{currentAnt.reproduction.offspring}</p>
            <p>{currentAnt.reproduction.gestation}</p>
          </>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="ПРИЗНАЦИ ЗА НАПАДЕНИЕ" content={
          <ul>
            {currentAnt.signs.map((sign, index) => (
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
      >        <AntCard
          selectedAnt={selectedAnt}
          onSelectAnt={handleAntSelect}
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




const AntCard: React.FC<{
  selectedAnt: AntType;
  onSelectAnt: (antType: AntType) => void;
}> = ({ selectedAnt, onSelectAnt }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageKey, setImageKey] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    setImageKey(prevKey => prevKey + 1);
  }, [selectedAnt]);

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
            {(Object.keys(antData) as AntType[]).map((antType) => (
              <button
                key={antType}
                className={`px-3 py-2 rounded-xl border border-ddblue dark:border-lgreen text-sm sm:text-base ${
                  selectedAnt === antType ? 'dark:text-white text-white bg-ddblue dark:bg-lgreen' : 'text-ddblue dark:text-neutral-100'
                }`}
                onClick={() => onSelectAnt(antType)}
              >
                {antType}
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
          src={antData[selectedAnt].imageUrl} 
          alt={selectedAnt} 
          fill
          style={{ objectFit: "contain" }}
          className="rounded-lg"
          onLoad={() => setIsLoading(false)}
        />
      </AnimatePresence>
    </motion.div> 

          <h2 className="text-xl font-bold mb-2 mt-4">{selectedAnt}</h2>
          <p className='text-start text-sm sm:text-base'>{antData[selectedAnt].desc}</p>
        </div>
      </BackgroundGradient>
    </motion.div> 
  );
};


export default AntInfoComponent;