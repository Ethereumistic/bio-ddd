'use client'

import { ImagesSliderDemo } from '@/components/ImagesSliderDemo';
import { ImagesSliderDisinfection } from '@/components/ImagesSliderDisinfection';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';

export default function DisinsectionPage() {
  const [activeTab, setActiveTab] = useState('home');

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-32">
      <motion.h1 
        className="text-4xl font-bold mb-6 text-center"
        {...fadeIn}
      >
        Дезинсекция от Bio DDD
      </motion.h1>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div>
          {/* <Image 
            src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/images/5.png" 
            alt="Дезинсекция" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-lg"
          /> */}
          <ImagesSliderDisinfection />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Какво е дезинсекция?</h2>
          <p className="mb-4">
            Дезинсекцията е процес на унищожаване на вредни насекоми в домове, офиси и други помещения. 
            Нашите експерти използват най-съвременни методи и безопасни препарати за ефективно премахване на 
            хлебарки, мравки, бълхи и други вредители.
          </p>
          <motion.button 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('services')}
          >
            Вижте нашите услуги
          </motion.button>
        </div>
      </motion.div>

      <div className="mt-12">
        <div className="flex justify-center space-x-4 mb-6">
          {['home', 'services', 'process', 'faq'].map((tab) => (
            <motion.button
              key={tab}
              className={`px-4 py-2 rounded ${activeTab === tab ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab === 'home' && 'Начало'}
              {tab === 'services' && 'Услуги'}
              {tab === 'process' && 'Процес'}
              {tab === 'faq' && 'Въпроси'}
            </motion.button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === 'home' && (
            <p>Изберете раздел, за да научите повече за нашите услуги по дезинсекция.</p>
          )}
          {activeTab === 'services' && (
            <ul className="list-disc pl-6">
              <li>Третиране срещу хлебарки</li>
              <li>Премахване на мравки</li>
              <li>Борба с бълхи</li>
              <li>Контрол на летящи насекоми</li>
            </ul>
          )}
          {activeTab === 'process' && (
            <ol className="list-decimal pl-6">
              <li>Оглед и оценка на ситуацията</li>
              <li>Избор на подходящ метод за третиране</li>
              <li>Прилагане на препаратите</li>
              <li>Последващ контрол и препоръки</li>
            </ol>
          )}
          {activeTab === 'faq' && (
            <div>
              <h3 className="font-semibold mb-2">Колко време отнема процедурата?</h3>
              <p className="mb-4">Времето варира според размера на помещението и вида на вредителите, но обикновено отнема между 1-3 часа.</p>
              <h3 className="font-semibold mb-2">Безопасни ли са използваните препарати?</h3>
              <p>Да, използваме само одобрени и безопасни за хора и домашни любимци препарати.</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}