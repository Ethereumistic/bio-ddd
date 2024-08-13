"use client";
import React, { useState } from 'react';
import { CockroachInfo, CockroachType } from './cockroachTypes'
import { RxHeight, RxWidth } from 'react-icons/rx';
import { GiWeight } from 'react-icons/gi';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { GoDotFill } from "react-icons/go";
import { FaExclamationTriangle } from "react-icons/fa";

import Image from 'next/image';
import { BackgroundGradient } from '@/components/ui/background-gradient';


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

  return (
  //   <AnimatePresence>
  //   <motion.div
  //   initial={{ opacity: 0 }}
  //   animate={{ opacity: 1 }}
  //   transition={{ duration: 0.5 }}
  // >
    <div className="flex flex-col lg:flex-row gap-8 p-4 mx-16">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
        <InfoBox title="ЛАТИНСКО НАИМЕНОВАНИЕ" content={currentCockroach.latinName} />
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
        <InfoBox title="ВРЕДИ" content={
          <ul>
            {currentCockroach.dangers.map((danger, index) => (
              <li key={index}
              className='flex'><FaExclamationTriangle className='mt-1 scale-[0.7] mr-3'/>{danger}</li>
            ))}
          </ul>
        } />
        <InfoBox title="ПОВЕДЕНИЕ, ХРАНЕНЕ И НАВИЦИ" content={
          <ul>
            {currentCockroach.behavior.map((behavior, index) => (
              <li key={index}
              className='flex'><GoDotFill className='mt-1 scale-90'/>{behavior}</li>
            ))}
          </ul>
        } />
        <InfoBox title="РАЗМНОЖАВАНЕ" content={
          <>
            <p>{currentCockroach.reproduction.offspring}</p>
            <p>{currentCockroach.reproduction.gestation}</p>
          </>
        } />
        <InfoBox title="ПРИЗНАЦИ ЗА НАПАДЕНИЕ" content={
          <ul>
            {currentCockroach.signs.map((sign, index) => (
              <li key={index}>{sign}</li>
            ))}
          </ul>
        } />
      </div>
      <div className="flex-1">
        <CockroachCard
          selectedCockroach={selectedCockroach}
          onSelectCockroach={handleCockroachSelect}
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



const CockroachCard: React.FC<{
  selectedCockroach: CockroachType;
  onSelectCockroach: (cockroachType: CockroachType) => void;
}> = ({ selectedCockroach, onSelectCockroach}) => (
  // <motion.div  
  //   className=" p-4 rounded-lg shadow-md"
  //   initial={{ opacity: 1, scale: 0.9 }}
  //   animate={{ opacity: 1, scale: 1 }}
  //   transition={{ duration: 0.3 }}
  // >
  <BackgroundGradient className="rounded-[22px]  p-4 sm:px-10 bg-white dark:bg-zinc-900">

    <div className='p-4 rounded-lg  '>
    <div className="flex gap-2 mb-4">
      {(Object.keys(cockroachData) as CockroachType[]).map((cockroachType) => (

          <button
            key={cockroachType} // <-- Corrected the placement of the key prop
            className={`px-3 py-1 rounded-xl border border-ddblue dark:border-lgreen mx-auto   ${
              selectedCockroach === cockroachType ? 'dark:text-white text-white bg-ddblue dark:bg-lgreen' : 'text-ddblue dark:text-neutral-100 '
            }`}
            onClick={() => onSelectCockroach(cockroachType)}
          >
            {cockroachType}
          </button>
      ))}
    </div>

    <Image 
      src={cockroachData[selectedCockroach].imageUrl} 
      alt={selectedCockroach} 
      width={450}
      height={450}
      className=" rounded-lg mb-4 mx-auto"
    />
    <h2 className="text-xl font-bold mb-2">{selectedCockroach}</h2>
    <p className=' text-start'>{cockroachData[selectedCockroach].desc}</p>
    </div>

    </BackgroundGradient>
    // </motion.div> 
);

export default CockroachInfoComponent;