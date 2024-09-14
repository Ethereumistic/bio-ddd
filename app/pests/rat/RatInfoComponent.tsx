"use client";
import React, { useState, useEffect } from 'react';
import { RatInfo, RatType } from './ratTypes'
import { RxHeight, RxWidth } from 'react-icons/rx';
import { GiWeight } from 'react-icons/gi';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { GoDotFill } from "react-icons/go";
import { FaExclamationTriangle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Loading from '@/app/loading';
import Image from 'next/image';
import { BackgroundGradient } from '@/components/ui/background-gradient';


const ratData: Record<RatType, RatInfo> = {
  'ДОМАШНА МИШКА': {
    latinName: 'Mus musculus',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/Mus-musculus.png',
    appearance: {
      length: '7-10 cm',
      height: '2-4 cm',
      weight: '12-30 g',
      color: 'Кафяв или сив'
    },
    dangers: ['Преносител на заболявания', 'Може да пренася паразити', 'Може да замърси хранителни запаси'],
    behavior: ['Социално животно', 'Нощен начин на живот', 'Добър катерач'],
    reproduction: {
      offspring: '5-10',
      gestation: '19-21 дни'
    },
    signs: ['Изпражнения', 'Следи от гризане по мебели и опаковки'],
    desc: 'Домашната мишка е малък гризач, често срещан в домове и сгради. Известна е с бързото си размножаване и адаптивност. Мишките могат да причинят сериозни щети на имущество и храна, а също така са носители на различни заболявания. Контролът и превенцията на мишките са важни за поддържане на здравословна среда в дома.',
  },
  'ЧЕРЕН ПЛЪХ': {
    latinName: 'Rattus rattus',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/Rattus-rattus.png',
    appearance: {
      length: '16-24 cm',
      height: '4-6 cm',
      weight: '150-250 g',
      color: 'Черно или тъмнокафяво'
    },
    dangers: ['Преносител на заболявания', 'Може да пренася паразити', 'Може да повреди електрически проводници'],
    behavior: ['Нощен', 'Добър катерач', 'Предпочита високи места'],
    reproduction: {
      offspring: '5-8',
      gestation: '21-23 дни'
    },
    signs: ['Изпражнения', 'Следи от гризане', 'Мазни следи по стени от козината'],
    desc: 'Черният плъх, известен още като корабен плъх, е разпространен в тропическите и субтропическите райони. По-малък и по-гъвкав от сивия плъх, той често живее в тавани и дървета. Черните плъхове могат да причинят щети на строителни материали и електрически проводници, както и да разпространяват заболявания и паразити.',
  },
  'СИВ ПЛЪХ': {
    latinName: 'Rattus norvegicus',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/Rattus-norvegicus.png',
    appearance: {
      length: '20-25 cm',
      height: '5-7 cm',
      weight: '200-500 g',
      color: 'Сив или кафяв'
    },
    dangers: ['Преносител на заболявания', 'Може да причини структурни щети с гризане'],
    behavior: ['Нощен', 'Добър плувец', 'Предпочита ниски и влажни места'],
    reproduction: {
      offspring: '6-12',
      gestation: '21-23 дни'
    },
    signs: ['Изпражнения', 'Следи от гризане по структури и контейнери', 'Тунели и дупки близо до сгради'],
    desc: 'Сивият плъх, известен също като норвежки плъх или канален плъх, е по-голям и по-масивен от черния плъх. Живее основно в подземни тунели и канализации, но може да се срещне и в сгради. Сивите плъхове са известни със своите разрушителни навици и пренасят опасни патогени.',
  },
  'ПОЛЕВКА': {
    latinName: 'Microtus arvalis',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/Microtus-arvalis.png',
    appearance: {
      length: '8-12 cm',
      height: '2-3 cm',
      weight: '20-50 g',
      color: 'Кафяв или сив'
    },
    dangers: ['Може да причини щети на култури', 'Може да пренася заболявания'],
    behavior: ['Тревопасен', 'Активен през деня и нощта', 'Предпочита тревисти поля'],
    reproduction: {
      offspring: '3-7',
      gestation: '19-21 дни'
    },
    signs: ['Следи в тревата', 'Следи от гризане на растения и култури'],
    desc: 'Полевката е малък гризач, предпочитащ открити полета и земеделски райони. Известна е с вредителската си дейност върху култури и градини, като унищожава корени и стъбла на растения. Те могат да причинят значителни икономически щети, особено в земеделието.',
  },
};

const RatInfoComponent: React.FC = () => {
  const [selectedRat, setSelectedRat] = useState<RatType>('ДОМАШНА МИШКА');


  const handleRatSelect = (ratType: RatType) => {
    setSelectedRat(ratType);
  };

  const currentRat = ratData[selectedRat];

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
        <InfoBox title="ЛАТИНСКО НАИМЕНОВАНИЕ" content={currentRat.latinName} />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="КАК ИЗГЛЕЖДА" content={
          <>
          <ul>
        <li className="flex ">
          <RxWidth className="h-6 w-6 text-neutral-500 mr-4" />
          {currentRat.appearance.length}
        </li>
        <li className="flex ">
          <RxHeight className="h-6 w-6 text-neutral-500 mr-4" />
          {currentRat.appearance.height}
        </li>
        <li className="flex ">
          <GiWeight className="h-6 w-6 text-neutral-500 mr-4" />
          {currentRat.appearance.weight}
        </li>
        <li className="flex ">
          <IoColorPaletteOutline className="h-6 w-6 text-neutral-500 mr-4" />
          {currentRat.appearance.color}
        </li>
      </ul>
          </>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="ВРЕДИ" content={
          <ul>
            {currentRat.dangers.map((danger, index) => (
              <li key={index}
              className='flex'><FaExclamationTriangle className='mt-1 scale-[0.7] mr-3'/>{danger}</li>
            ))}
          </ul>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="ПОВЕДЕНИЕ, ХРАНЕНЕ И НАВИЦИ" content={
          <ul>
            {currentRat.behavior.map((behavior, index) => (
              <li key={index}
              className='flex'><GoDotFill className='mt-1 scale-90'/>{behavior}</li>
            ))}
          </ul>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="РАЗМНОЖАВАНЕ" content={
          <>
            <p>{currentRat.reproduction.offspring}</p>
            <p>{currentRat.reproduction.gestation}</p>
          </>
        } />
        </motion.div>
        <motion.div variants={itemVariants}>
        <InfoBox title="ПРИЗНАЦИ ЗА НАПАДЕНИЕ" content={
          <ul>
            {currentRat.signs.map((sign, index) => (
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
      >        <RatCard
          selectedRat={selectedRat}
          onSelectRat={handleRatSelect}
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



const RatCard: React.FC<{
  selectedRat: RatType;
  onSelectRat: (ratType: RatType) => void;
}> = ({ selectedRat, onSelectRat }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageKey, setImageKey] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    setImageKey(prevKey => prevKey + 1);
  }, [selectedRat]);

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
            {(Object.keys(ratData) as RatType[]).map((ratType) => (
              <button
                key={ratType}
                className={`px-3 py-2 rounded-xl border border-ddblue dark:border-lgreen text-sm sm:text-base ${
                  selectedRat === ratType ? 'dark:text-white text-white bg-ddblue dark:bg-lgreen' : 'text-ddblue dark:text-neutral-100'
                }`}
                onClick={() => onSelectRat(ratType)}
              >
                {ratType}
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
          src={ratData[selectedRat].imageUrl} 
          alt={selectedRat} 
          fill
          style={{ objectFit: "contain" }}
          className="rounded-lg"
          onLoad={() => setIsLoading(false)}
        />
      </AnimatePresence>
    </motion.div> 

          <h2 className="text-xl font-bold mb-2 mt-4">{selectedRat}</h2>
          <p className='text-start text-sm sm:text-base'>{ratData[selectedRat].desc}</p>
        </div>
      </BackgroundGradient>
    </motion.div> 
  );
};

export default RatInfoComponent;