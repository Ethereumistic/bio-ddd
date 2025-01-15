'use client'
import React, { useState } from 'react';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { SignupFormDemo } from '@/components/SignupFormDemo';

const AccordionItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
        
      <div className="   border-gray-300">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex justify-between items-center rounded-xl mb-1  p-4 bg-ddblue/[0.9] dark:bg-lgreen/[0.9]"
        >
          <span className="text-xl font-medium text-white dark:text-dblue p-2 rounded-lg">{question}</span>
          {isOpen ? <IconChevronUp className='text-white dark:text-dblue' /> : <IconChevronDown className='text-white dark:text-dblue' />}
        </div>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="p-4 rounded-xl mb-1 bg-ddblue/[0.2] dark:bg-lgreen/[0.2]">{answer}</div>
        </motion.div>
      </div>
    );
  };

const FAQPage = () => {
  const faqData: { question: string, answer: string }[] = [
    {
        question: "Какво представляват ДДД услугите?",
        answer: "ДДД услугите включват дезинфекция, дезинсекция и дератизация – трите основни процеса за унищожаване на вредни микроорганизми, насекоми и гризачи. Тези мерки се прилагат с цел предпазване на здравето на хората и предотвратяване на разпространение на болести и зарази.",
      },
      {
        question: "Какво е дезинфекция?",
        answer: "Дезинфекцията е процесът на унищожаване на микроорганизми като бактерии, вируси и гъбички върху повърхности и в околната среда. Този процес осигурява чистота и безопасност, предотвратявайки разпространението на болести.",
      },
      {
        question: "Какво представлява дезинсекцията?",
        answer: "Дезинсекцията е процесът на унищожаване на вредни насекоми като хлебарки, мравки, комари и бълхи, които могат да пренасят заболявания и да създадат неблагоприятна среда. Чрез използването на биоциди и други методи се предотвратява тяхното размножаване.",
      },
      {
        question: "Какво е дератизация?",
        answer: "Дератизацията е процедурата за контрол и унищожаване на гризачи като мишки и плъхове, които са потенциални преносители на опасни заболявания. За борба с тях се използват примамки, капани и отрови, осигурявайки безопасност и хигиена.",
      },
      {
        question: "Колко често е необходимо да се извършват ДДД услуги?",
        answer: "Честотата на ДДД услугите зависи от конкретния обект и условията. За бизнес обекти се препоръчва регулярна профилактика на всеки 3 до 6 месеца, докато за жилищни обекти се извършва при нужда или сезонно.",
      },
      {
        question: "Безопасни ли са препаратите, които използвате?",
        answer: "Всички препарати, които използваме за ДДД услугите, са сертифицирани и одобрени от Министерството на здравеопазването. Те са безопасни за хората и домашните любимци при спазване на инструкциите и препоръките на специалистите ни.",
      },
      {
        question: "Как протича процесът на ДДД услугите?",
        answer: "Процесът започва с оглед на обекта, при който сертифициран експерт оценява състоянието и избира най-подходящите методи за борба. Следва третиране с професионални препарати и техника, а след приключване се издава протокол за извършените дейности.",
      },
      {
        question: "Какво включва издаването на протокол след ДДД третиране?",
        answer: "След всяко третиране се издава официален протокол, в който се описват използваните методи и препарати. Този документ е в съответствие с изискванията на Министерството на здравеопазването и служи като доказателство за проведените мерки.",
      },
      {
        question: "Може ли да се направи повторно третиране при необходимост?",
        answer: "Да, при необходимост можем да извършим повторно третиране, както и последващо наблюдение на ефективността на процедурите, за да се гарантират трайни резултати.",
      },  ];

      return (
        <div>
        <div className="max-w-4xl mx-auto p-4 mt-32">
          <h1 className="text-3xl text-center font-bold mb-12">Често задавани въпроси за ДДД услуги</h1>
          {faqData.map((faq, index) => (
            <AccordionItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        <h1 className="text-3xl text-center font-bold my-12">Искате да разберете повече? Свържете се с нас!</h1>
        </div>
          <SignupFormDemo />
        </div>
      );
    };
    
    export default FAQPage;