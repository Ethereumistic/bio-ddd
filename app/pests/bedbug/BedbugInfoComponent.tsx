"use client";
import React, { useState, useEffect } from 'react';
import { BedbugInfo, BedbugType } from './bedbugTypes'
import { RxHeight, RxWidth } from 'react-icons/rx';
import { GiWeight } from 'react-icons/gi';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { GoDotFill } from "react-icons/go";
import { FaExclamationTriangle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';
import { BackgroundGradient } from '@/components/ui/background-gradient';
import Loading from '@/app/loading';

const bedbugData: Record<BedbugType, BedbugInfo> = {
  'КРЕВАТНА': {
    latinName: 'Cimex lectularius',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/krevatna.png',
    appearance: {
      length: '4 - 5 мм',
      height: '1.5 - 2 мм',
      weight: '5 - 7 мг',
      color: 'Червеникаво-кафяв'
    },
    dangers: ['Причинява сърбящи ухапвания', 'Може да предизвика алергични реакции', 'Психологически стрес'],
    behavior: ['Нощна активност', 'Крие се в пукнатини и цепнатини', 'Привлича се от телесната топлина и CO2'],
    reproduction: {
      offspring: '200 - 500 яйца за живота си',
      gestation: '6 - 10 дни'
    },
    signs: ['Тъмни петна по чаршафите', 'Кръвави следи', 'Малки бели яйца в пукнатините'],
    desc: 'Креватната дървеница е малко, безкрило насекомо, което се храни с кръвта на хора и животни. Тя е нощно активна и се крие в пукнатини на мебели, матраци и стени през деня. Въпреки че не пренася болести, ухапванията й могат да причинят сериозен дискомфорт и психологически стрес. Дървениците са известни с устойчивостта си към много пестициди и способността си бързо да се размножават, което ги прави труден за контролиране вредител.',
  },
  'ПРИЛЕПНА': {
    latinName: 'Cimex pipistrelli',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/prilepna.png',
    appearance: {
      length: '3.5 - 5 мм',
      height: '1 - 1.5 мм',
      weight: '3 - 5 мг',
      color: 'Светлокафяв до тъмнокафяв'
    },
    dangers: ['Хапе хора и домашни любимци', 'Може да пренася болести от прилепи', 'Потенциален преносител на вируси'],
    behavior: ['Живее в колонии на прилепи', 'Нощна активност', 'Предпочита да напада животни пред хора'],
    reproduction: {
      offspring: '150 - 300 яйца за живота си',
      gestation: '7 - 12 дни'
    },
    signs: ['Наличие на прилепи наблизо', 'Малки кафяви насекоми в зони, обитавани от прилепи'],
    desc: 'Прилепната дървеница е вид, който обикновено паразитира по прилепите. Може да бъде намерена в сгради, където живеят прилепи, като тавани и мази. Въпреки че обикновено не представлява директна заплаха за хората, този вид може потенциално да пренася болести от прилепите. Контролът на прилепните дървеници често включва премахване на прилепите от обитаемите зони.',
  },
  'ЛЯСТОВИЧА': {
    latinName: 'Oeciacus hirundinis',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/lqstovicha.png',
    appearance: {
      length: '3 - 4 мм',
      height: '1 - 1.5 мм',
      weight: '2 - 4 мг',
      color: 'Жълтеникаво-кафяв'
    },
    dangers: ['Напада домашни любимци', 'Може да причини дискомфорт в домовете', 'Потенциален преносител на болести'],
    behavior: ['Живее в гнездата на лястовици', 'Сезонна активност', 'Може да навлезе в домове'],
    reproduction: {
      offspring: '100 - 200 яйца за сезон',
      gestation: '5 - 8 дни'
    },
    signs: ['Малки кафяви насекоми около прозорци', 'Наличие на лястовичи гнезда наблизо'],
    desc: 'Лястовичата дървеница е специализиран вид, който обикновено паразитира по лястовици и други птици. Тя може да бъде проблем в домове, разположени близо до лястовичи гнезда. Въпреки че рядко хапе хора, тези дървеници могат да навлязат в жилища и да причинят безпокойство, особено на домашни любимци като папагали, гугутки и други птици. Контролът им обикновено включва премахване на птичите гнезда от сградите и запечатване на входните точки.',
  },
  'ТРОПИЧЕСКА': {
    latinName: 'Cimex hemipterus',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/tropicheska.png',
    appearance: {
      length: '5 - 6 мм',
      height: '2 - 2.5 мм',
      weight: '6 - 8 мг',
      color: 'Тъмнокафяв'
    },
    dangers: ['Причинява сърбящи ухапвания', 'Може да пренася патогени', 'Психологически стрес'],
    behavior: ['Нощна активност', 'Предпочита топъл и влажен климат', 'Бързо се разпространява'],
    reproduction: {
      offspring: '300 - 600 яйца за живота си',
      gestation: '5 - 8 дни'
    },
    signs: ['Тъмни петна по чаршафите и мебелите', 'Специфична миризма', 'Живи насекоми нощем'],
    desc: 'Тропическата дървеница е вид, разпространен предимно в топлите региони. Тя е подобна на креватната дървеница, но е по-устойчива на високи температури и влажност. Този вид е известен с бързото си размножаване и способността си да развива резистентност към инсектициди. Тропическите дървеници могат да бъдат сериозен проблем в хотели и жилищни сгради, изискващ професионална намеса за контрол.',
  },
};
const BedbugInfoComponent: React.FC = () => {
  const [selectedBedbug, setSelectedBedbug] = useState<BedbugType>('КРЕВАТНА');


  const handleBedbugSelect = (bedbugType: BedbugType) => {
    setSelectedBedbug(bedbugType);
  };

  const currentBedbug = bedbugData[selectedBedbug];

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
        <InfoBox title="ЛАТИНСКО НАИМЕНОВАНИЕ" content={currentBedbug.latinName} />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="КАК ИЗГЛЕЖДА" content={
          <>
          <ul>
        <li className="flex ">
          <RxWidth className="h-6 w-6 text-neutral-500 mr-4" />
          {currentBedbug.appearance.length}
        </li>
        <li className="flex ">
          <RxHeight className="h-6 w-6 text-neutral-500 mr-4" />
          {currentBedbug.appearance.height}
        </li>
        <li className="flex ">
          <GiWeight className="h-6 w-6 text-neutral-500 mr-4" />
          {currentBedbug.appearance.weight}
        </li>
        <li className="flex ">
          <IoColorPaletteOutline className="h-6 w-6 text-neutral-500 mr-4" />
          {currentBedbug.appearance.color}
        </li>
      </ul>
          </>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="ВРЕДИ" content={
          <ul>
            {currentBedbug.dangers.map((danger, index) => (
              <li key={index}
              className='flex'><FaExclamationTriangle className='mt-1 scale-[0.7] mr-3'/>{danger}</li>
            ))}
          </ul>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="ПОВЕДЕНИЕ, ХРАНЕНЕ И НАВИЦИ" content={
          <ul>
            {currentBedbug.behavior.map((behavior, index) => (
              <li key={index}
              className='flex'><GoDotFill className='mt-1 scale-90'/>{behavior}</li>
            ))}
          </ul>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="РАЗМНОЖАВАНЕ" content={
          <>
            <p>{currentBedbug.reproduction.offspring}</p>
            <p>{currentBedbug.reproduction.gestation}</p>
          </>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="ПРИЗНАЦИ ЗА НАПАДЕНИЕ" content={
          <ul>
            {currentBedbug.signs.map((sign, index) => (
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
      >        <BedbugCard
          selectedBedbug={selectedBedbug}
          onSelectBedbug={handleBedbugSelect}
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



const BedbugCard: React.FC<{
  selectedBedbug: BedbugType;
  onSelectBedbug: (bedbugType: BedbugType) => void;
}> = ({ selectedBedbug, onSelectBedbug }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageKey, setImageKey] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    setImageKey(prevKey => prevKey + 1);
  }, [selectedBedbug]);

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
            {(Object.keys(bedbugData) as BedbugType[]).map((bedbugType) => (
              <button
                key={bedbugType}
                className={`px-3 py-2 rounded-xl border border-ddblue dark:border-lgreen text-sm sm:text-base ${
                  selectedBedbug === bedbugType ? 'dark:text-white text-white bg-ddblue dark:bg-lgreen' : 'text-ddblue dark:text-neutral-100'
                }`}
                onClick={() => onSelectBedbug(bedbugType)}
              >
                {bedbugType}
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
          src={bedbugData[selectedBedbug].imageUrl} 
          alt={selectedBedbug} 
          fill
          style={{ objectFit: "contain" }}
          className="rounded-lg"
          onLoad={() => setIsLoading(false)}
        />
      </AnimatePresence>
    </motion.div> 

          <h2 className="text-xl font-bold mb-2 mt-4">{selectedBedbug}</h2>
          <p className='text-start text-sm sm:text-base'>{bedbugData[selectedBedbug].desc}</p>
        </div>
      </BackgroundGradient>
    </motion.div> 
  );
};

export default BedbugInfoComponent;