"use client";
import React, { useState, useEffect } from 'react';
import { TickInfo, TickType } from './tickTypes'
import { RxHeight, RxWidth } from 'react-icons/rx';
import { GiWeight } from 'react-icons/gi';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { GoDotFill } from "react-icons/go";
import { FaExclamationTriangle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Loading from '@/app/loading';
import Image from 'next/image';
import { BackgroundGradient } from '@/components/ui/background-gradient';


const tickData: Record<TickType, TickInfo> = {
  'КУЧЕШКИ': {
    latinName: 'Ixodes ricinus',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/dogtick.png',
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
  'КАФЯВ КУЧЕШКИ': {
      latinName: 'Rhipicephalus sanguineus',
      imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/bogtick.png',
      appearance: {
        length: '16-24 cm',
        height: '4-5 cm',
        weight: '150-250 g',
        color: 'Black or dark brown'
      },
      dangers: ['Can carry diseases', 'Can carry parasites', 'Can damage electrical wiring'],
      behavior: ['Nocturnal', 'Good climber', 'Prefers high places'],
      reproduction: {
        offspring: '5-8',
        gestation: '21-23 days'
      },
      signs: ['Droppings', 'Gnaw marks', 'Grease marks on walls from fur'],
      desc: 'Известен като корабен плъх, е разпространен в тропическите и субтропическите райони. Той е по-дребен и по-подвижен от сивия плъх и често живее в тавани и дървета. Черните плъхове могат да повредят строителни материали и електрически кабели, както и да разпространяват болести и паразити.',

    },
  'ЛИВАДЕН': {
      latinName: 'Dermacentor reticulatus',
      imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/livtick.png',
      appearance: {
        length: '20-25 cm',
        height: '5-7 cm',
        weight: '200-500 g',
        color: 'Brown or gray'
      },
      dangers: ['Can carry diseases', 'Can cause structural damage by gnawing'],
      behavior: ['Nocturnal', 'Good swimmer', 'Prefers low and damp places'],
      reproduction: {
        offspring: '6-12',
        gestation: '21-23 days'
      },
      signs: ['Droppings', 'Gnaw marks on structures and food containers', 'Burrows near buildings'],
      desc: 'Известен още като норвежки плъх или канален плъх, е по-голям и масивен от черния плъх. Той обикновено живее в подземни тунели и канализации, но може да се намери и в сгради. Сивите плъхове са известни със своята разрушителна дейност и с това, че пренасят опасни патогени.',

    },
  'ХИАЛОМА': {
      latinName: 'Hyalomma marginatum',
      imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/hyalomma.png',
      appearance: {
        length: '8-12 cm',
        height: '2-3 cm',
        weight: '20-50 g',
        color: 'Brown or gray'
      },
      dangers: ['Can damage crops', 'Can carry diseases'],
      behavior: ['Herbivorous', 'Active during day and night', 'Prefers grassy fields'],
      reproduction: {
        offspring: '3-7',
        gestation: '19-21 days'
      },
      signs: ['Runways in grass', 'Gnaw marks on plants and crops'],
      desc: 'Малък гризач, който предпочита открити полета и земеделски райони. Полевките са известни с вредителската си дейност върху култури и градини, като унищожават корени и стъбла на растения. Те могат да причинят значителни икономически щети, особено в земеделието.',

    },
    'ГЪЛЪБОВ': {
        latinName: 'Argas reflexus',
        imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/gulubtick.png',
        appearance: {
          length: '8-12 cm',
          height: '2-3 cm',
          weight: '20-50 g',
          color: 'Brown or gray'
        },
        dangers: ['Can damage crops', 'Can carry diseases'],
        behavior: ['Herbivorous', 'Active during day and night', 'Prefers grassy fields'],
        reproduction: {
          offspring: '3-7',
          gestation: '19-21 days'
        },
        signs: ['Runways in grass', 'Gnaw marks on plants and crops'],
        desc: 'Малък гризач, който предпочита открити полета и земеделски райони. Полевките са известни с вредителската си дейност върху култури и градини, като унищожават корени и стъбла на растения. Те могат да причинят значителни икономически щети, особено в земеделието.',
  
      },
      'КРИМСКИ': {
        latinName: 'Haemaphysalis punctata',
        imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/krimtick.png',
        appearance: {
          length: '8-12 cm',
          height: '2-3 cm',
          weight: '20-50 g',
          color: 'Brown or gray'
        },
        dangers: ['Can damage crops', 'Can carry diseases'],
        behavior: ['Herbivorous', 'Active during day and night', 'Prefers grassy fields'],
        reproduction: {
          offspring: '3-7',
          gestation: '19-21 days'
        },
        signs: ['Runways in grass', 'Gnaw marks on plants and crops'],
        desc: 'Малък гризач, който предпочита открити полета и земеделски райони. Полевките са известни с вредителската си дейност върху култури и градини, като унищожават корени и стъбла на растения. Те могат да причинят значителни икономически щети, особено в земеделието.',
  
      },
};
const TickInfoComponent: React.FC = () => {
  const [selectedTick, setSelectedTick] = useState<TickType>('КУЧЕШКИ');


  const handleTickSelect = (tickType: TickType) => {
    setSelectedTick(tickType);
  };

  const currentTick = tickData[selectedTick];

  return (
  //   <AnimatePresence>
  //   <motion.div
  //   initial={{ opacity: 0 }}
  //   animate={{ opacity: 1 }}
  //   transition={{ duration: 0.5 }}
  // >
    <div className="flex flex-col lg:flex-row gap-8 p-4 mx-16">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
        <InfoBox title="ЛАТИНСКО НАИМЕНОВАНИЕ" content={currentTick.latinName} />
        <InfoBox title="КАК ИЗГЛЕЖДА" content={
          <>
          <ul>
        <li className="flex ">
          <RxWidth className="h-6 w-6 text-neutral-500 mr-4" />
          {currentTick.appearance.length}
        </li>
        <li className="flex ">
          <RxHeight className="h-6 w-6 text-neutral-500 mr-4" />
          {currentTick.appearance.height}
        </li>
        <li className="flex ">
          <GiWeight className="h-6 w-6 text-neutral-500 mr-4" />
          {currentTick.appearance.weight}
        </li>
        <li className="flex ">
          <IoColorPaletteOutline className="h-6 w-6 text-neutral-500 mr-4" />
          {currentTick.appearance.color}
        </li>
      </ul>
          </>
        } />
        <InfoBox title="ВРЕДИ" content={
          <ul>
            {currentTick.dangers.map((danger, index) => (
              <li key={index}
              className='flex'><FaExclamationTriangle className='mt-1 scale-[0.7] mr-3'/>{danger}</li>
            ))}
          </ul>
        } />
        <InfoBox title="ПОВЕДЕНИЕ, ХРАНЕНЕ И НАВИЦИ" content={
          <ul>
            {currentTick.behavior.map((behavior, index) => (
              <li key={index}
              className='flex'><GoDotFill className='mt-1 scale-90'/>{behavior}</li>
            ))}
          </ul>
        } />
        <InfoBox title="РАЗМНОЖАВАНЕ" content={
          <>
            <p>{currentTick.reproduction.offspring}</p>
            <p>{currentTick.reproduction.gestation}</p>
          </>
        } />
        <InfoBox title="ПРИЗНАЦИ ЗА НАПАДЕНИЕ" content={
          <ul>
            {currentTick.signs.map((sign, index) => (
              <li key={index}>{sign}</li>
            ))}
          </ul>
        } />
      </div>
      <div className="flex-1">
        <TickCard
          selectedTick={selectedTick}
          onSelectTick={handleTickSelect}
        />
      </div>
    </div>

    // {/* </motion.div> */}
    // {/* </AnimatePresence> */}


  );
};

const InfoBox: React.FC<{ title: string; content: React.ReactNode }> = ({ title, content }) => (
  
  // <motion.div
  //   className=" border border-gray-200 p-4 rounded-xl hover:shadow-md transition duration-300 "
  //   initial={{ opacity: 1, y: 20 }}
  //   animate={{ opacity: 1, y: 0 }}
  //   transition={{ duration: 0.3 }}
  // >
    <div className='border border-gray-200 p-4 rounded-xl hover:shadow-md transition duration-300'>
    <h3 className="text-2xl mb-2">{title}</h3>
    <div className='bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 rounded-xl p-8 justify-center items-center text-center my-auto h-32 flex flex-col text-xl'>
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
   // </motion.div>

);



const TickCard: React.FC<{
  selectedTick: TickType;
  onSelectTick: (tickType: TickType) => void;
}> = ({ selectedTick, onSelectTick }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageKey, setImageKey] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    setImageKey(prevKey => prevKey + 1);
  }, [selectedTick]);

  return (
    <motion.div  
      className="p-4 rounded-lg shadow-md"
      initial={{ opacity: 1, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <BackgroundGradient className="rounded-[22px] p-4 sm:px-10 bg-white dark:bg-zinc-900">
        <div className='p-4 rounded-lg'>
          <div className="flex gap-2 mb-4">
            {(Object.keys(tickData) as TickType[]).map((tickType) => (
              <button
                key={tickType}
                className={`px-3 py-1 rounded-xl border border-ddblue dark:border-lgreen mx-auto ${
                  selectedTick === tickType ? 'dark:text-white text-white bg-ddblue dark:bg-lgreen' : 'text-ddblue dark:text-neutral-100'
                }`}
                onClick={() => onSelectTick(tickType)}
              >
                {tickType}
              </button>
            ))}
          </div>
          <motion.div  
            className="relative h-[450px]"
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
              src={tickData[selectedTick].imageUrl} 
              alt={selectedTick} 
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
              onLoadingComplete={() => setIsLoading(false)}
            />
            </AnimatePresence>

          </motion.div> 

          <h2 className="text-xl font-bold mb-2 mt-4">{selectedTick}</h2>
          <p className='text-start'>{tickData[selectedTick].desc}</p>
        </div>
      </BackgroundGradient>
    </motion.div> 
  );
};
export default TickInfoComponent;