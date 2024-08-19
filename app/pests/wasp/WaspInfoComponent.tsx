"use client";
import React, { useState } from 'react';
import { WaspInfo, WaspType } from './waspTypes'
import { RxHeight, RxWidth } from 'react-icons/rx';
import { GiWeight } from 'react-icons/gi';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { GoDotFill } from "react-icons/go";
import { FaExclamationTriangle } from "react-icons/fa";

import Image from 'next/image';
import { BackgroundGradient } from '@/components/ui/background-gradient';


const waspData: Record<WaspType, WaspInfo> = {
  'ОБИКНОВЕНА': {
    latinName: 'Vespula vulgaris',
    imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/obikosa.png',
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
  'ГЕРМАНСКА': {
      latinName: 'Vespula germanica',
      imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/germanosa.png',
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
  'ХАРТИЕНА': {
      latinName: 'Polistes dominula',
      imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/hartienaosa.png',
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
  'ЕВРОПЕЙСКИ СТЪРШЕЛ': {
      latinName: 'Vespa crabro',
      imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/euroosa.png',
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
    'МУТИЛКА': {
        latinName: 'Mutillidae',
        imageUrl: 'https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/mutilka.png',
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
const WaspInfoComponent: React.FC = () => {
  const [selectedWasp, setSelectedWasp] = useState<WaspType>('ОБИКНОВЕНА');


  const handleWaspSelect = (waspType: WaspType) => {
    setSelectedWasp(waspType);
  };

  const currentWasp = waspData[selectedWasp];

  return (
  //   <AnimatePresence>
  //   <motion.div
  //   initial={{ opacity: 0 }}
  //   animate={{ opacity: 1 }}
  //   transition={{ duration: 0.5 }}
  // >
    <div className="flex flex-col lg:flex-row gap-8 p-4 mx-16">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
        <InfoBox title="ЛАТИНСКО НАИМЕНОВАНИЕ" content={currentWasp.latinName} />
        <InfoBox title="КАК ИЗГЛЕЖДА" content={
          <>
          <ul>
        <li className="flex ">
          <RxWidth className="h-6 w-6 text-neutral-500 mr-4" />
          {currentWasp.appearance.length}
        </li>
        <li className="flex ">
          <RxHeight className="h-6 w-6 text-neutral-500 mr-4" />
          {currentWasp.appearance.height}
        </li>
        <li className="flex ">
          <GiWeight className="h-6 w-6 text-neutral-500 mr-4" />
          {currentWasp.appearance.weight}
        </li>
        <li className="flex ">
          <IoColorPaletteOutline className="h-6 w-6 text-neutral-500 mr-4" />
          {currentWasp.appearance.color}
        </li>
      </ul>
          </>
        } />
        <InfoBox title="ВРЕДИ" content={
          <ul>
            {currentWasp.dangers.map((danger, index) => (
              <li key={index}
              className='flex'><FaExclamationTriangle className='mt-1 scale-[0.7] mr-3'/>{danger}</li>
            ))}
          </ul>
        } />
        <InfoBox title="ПОВЕДЕНИЕ, ХРАНЕНЕ И НАВИЦИ" content={
          <ul>
            {currentWasp.behavior.map((behavior, index) => (
              <li key={index}
              className='flex'><GoDotFill className='mt-1 scale-90'/>{behavior}</li>
            ))}
          </ul>
        } />
        <InfoBox title="РАЗМНОЖАВАНЕ" content={
          <>
            <p>{currentWasp.reproduction.offspring}</p>
            <p>{currentWasp.reproduction.gestation}</p>
          </>
        } />
        <InfoBox title="ПРИЗНАЦИ ЗА НАПАДЕНИЕ" content={
          <ul>
            {currentWasp.signs.map((sign, index) => (
              <li key={index}>{sign}</li>
            ))}
          </ul>
        } />
      </div>
      <div className="flex-1">
        <WaspCard
          selectedWasp={selectedWasp}
          onSelectWasp={handleWaspSelect}
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



const WaspCard: React.FC<{
  selectedWasp: WaspType;
  onSelectWasp: (waspType: WaspType) => void;
}> = ({ selectedWasp, onSelectWasp}) => (
  // <motion.div  
  //   className=" p-4 rounded-lg shadow-md"
  //   initial={{ opacity: 1, scale: 0.9 }}
  //   animate={{ opacity: 1, scale: 1 }}
  //   transition={{ duration: 0.3 }}
  // >
  <BackgroundGradient className="rounded-[22px]  p-4 sm:px-10 bg-white dark:bg-zinc-900">

    <div className='p-4 rounded-lg  '>
    <div className="flex gap-2 mb-4">
      {(Object.keys(waspData) as WaspType[]).map((waspType) => (

          <button
            key={waspType} // <-- Corrected the placement of the key prop
            className={`px-3 py-1 rounded-xl border border-ddblue dark:border-lgreen mx-auto   ${
              selectedWasp === waspType ? 'dark:text-white text-white bg-ddblue dark:bg-lgreen' : 'text-ddblue dark:text-neutral-100 '
            }`}
            onClick={() => onSelectWasp(waspType)}
          >
            {waspType}
          </button>
      ))}
    </div>

    <Image 
      src={waspData[selectedWasp].imageUrl} 
      alt={selectedWasp} 
      width={450}
      height={450}
      className=" rounded-lg mb-4 mx-auto"
    />
    <h2 className="text-xl font-bold mb-2">{selectedWasp}</h2>
    <p className=' text-start'>{waspData[selectedWasp].desc}</p>
    </div>

    </BackgroundGradient>
    // </motion.div> 
);

export default WaspInfoComponent;