"use client";   
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { Timeline } from "@/components/ui/timeline-business";
import { ImagesSliderDisinfection } from "./ImagesSliderDisinfection";
import { IconScript, IconSpray, IconCheck, IconShoppingCart, IconMedicineSyrup, IconTexture, IconBuilding, IconSwimming, IconMonkeybar, IconSchool, IconDots } from "@tabler/icons-react";
import { MdOutlineFoodBank, MdOutlineToys, MdOutlineWarehouse } from "react-icons/md";
import { AiOutlineShopping } from "react-icons/ai";
import { GiHairStrands, GiHighGrass } from "react-icons/gi";
import Link from "next/link";
import { motion, useAnimation, useInView } from "framer-motion";

export function TimelineBusiness() {

    const listItemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: i * 0.1,
            duration: 0.5,
          },
        }),
      };

      const AnimatedList = ({ items }: { items: string[] }) => {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: false, amount: 0.1 });
        const controls = useAnimation();
    
        useEffect(() => {
          if (isInView) {
            controls.start("visible");
          } else {
            controls.start("hidden");
          }
        }, [isInView, controls]);
    
        return (
          <ul ref={ref} className="list-none space-y-4 mb-6 font-russo">
            {items.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start mb-4"
                variants={listItemVariants}
                initial="hidden"
                animate={controls}
                custom={index}
              >
                <IconCheck className="flex-shrink-0 w-6 h-6 text-ddblue dark:text-lgreen mr-3 mt-1" />
                <span className="text-xl mb-8">{item}</span>
              </motion.li>
            ))}
          </ul>
        );
      };

      const AnimatedGridList = ({ items }: { items: Array<{ icon: React.ElementType, text: string }> }) => {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: false, amount: 0.1 });
        const controls = useAnimation();
    
        useEffect(() => {
          if (isInView) {
            controls.start("visible");
          } else {
            controls.start("hidden");
          }
        }, [isInView, controls]);
    
        return (
          <ul ref={ref} className="list-none grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 font-russo">
            {items.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center"
                variants={listItemVariants}
                initial="hidden"
                animate={controls}
                custom={index}
              >
                <div className="w-16 flex-shrink-0 flex items-center justify-center">
                  <item.icon className="w-10 h-10 text-ddblue dark:text-lgreen" />
                </div>
                <span className="text-xl">{item.text}</span>
              </motion.li>
            ))}
          </ul>
        );
      };

  const data = [
    {
        title: "ДДД Услуги",
        icon: IconSpray,
        content: (
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 font-russo text-base md:text-2xl font-normal mb-12">
            При нас ще откриете отличен баланс между цена и качество – безупречна документация и професионална грижа за вашия обект, с преференциални условия!
            </p>
  
            <AnimatedList items={[
            "ДДД-пакети, в зависимост от вида, размера и рисковите фактори на обекта",
            "Съдействие за узаконяване на Вашия обект пред БАБХ и РЗИ/ХЕИ/",
            "Услуги по трудова медицина",
            "Изготвяне на системи за самоконтрол и ХАСЕП",
            "Съдействие при изготвяне на необходимите документи",
            "Обслужване по ДДД - дейности, договор РЗИ/ХЕИ/, БАБХ",
            "Изготвяне на алергенни менюта",
            "Интегриран пест-мениджмънт",
            "Обработки на зелени площи, договори с общини, административни сгради, складови бази, логистични центрове, производствени бази, хранително вкусова промишленост /ХВП/, детски и болнични заведения, аптеки, увеселителни, питейни и хранителни заведения, хотели, магазини, железопътен, плавателен и авио транспорт, тютюневи насаждения / изделия и много други",
          ]} />
  
            <div className="grid grid-cols-1 gap-4 ">
              <ImagesSliderDisinfection />
            </div>
          </div>
        ),
      },
    {
      title: "За Бизнеса",
      icon: IconSpray,
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 font-russo text-base md:text-2xl font-normal mb-12">
            Наредба №1 от 05.01. 2018г. на МЗ, задължава всички търговски обекти , без изключение да имат сключен договор за ДДД ежемесечни услуги. В това число попадат всички:
          </p>
    
          <AnimatedGridList items={[
            { icon: IconShoppingCart, text: "Хранителни магазини" },
            { icon: IconMedicineSyrup, text: "Аптеки" },
            { icon: MdOutlineFoodBank, text: "Ресторанти" },
            { icon: MdOutlineWarehouse, text: "Складове и складови бази" },
            { icon: AiOutlineShopping, text: "Търговски обекти с нехранителни стоки" },
            { icon: MdOutlineToys, text: "Магазини за детски и потребителски стоки" },
            { icon: IconTexture, text: "Текстил" },
            { icon: GiHairStrands, text: "Фризьорски салони" },
            { icon: IconBuilding, text: "Обществени сгради" },
            { icon: IconSwimming, text: "Басейни" },
            { icon: GiHighGrass, text: "Зелени площи" },
            { icon: IconMonkeybar, text: "Детски градини" },
            { icon: IconSchool, text: "Учебни заведения" },
            { icon: IconDots, text: "И други" },
          ]} />
        </div>
      ),
    },
      {
        title: "Сключен Договор",
        icon: IconScript,
        content: (
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 font-russo text-base md:text-2xl font-normal mb-12">
            Ако вече имате сключен договор за ДДД, но не сте удовлетворени от услугата или цената, свържете се с нас! Наш екип ще Ви посети безплатно, ще извърши оглед на поверения Ви обект и ще  изготви най-изгодната за Вас оферта!
            </p>
          </div>
        ),
      },
      {
        title: "Новооткрит Обект",
        icon: IconScript,
        content: (
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 font-russo text-base md:text-2xl font-normal mb-12">
            Ако сте новооткрит обект, ние ще изготвим документите свързани с ДДД и необходимите разрешителни, преди посещението на инспекторите от БАБХ.
            </p>
          </div>
        ),
      },
      {
        title: (
            <h1 className="block text-ddblue dark:text-white font-russo
                          sm:text-3xl  md:text-6xl text-xl whitespace-nowrap
                          sm:mt-4 mt-6  lg:mt-0 ">
              Bio <span className="text-lgreen">DDD</span>
            </h1>
          ),
        icon: () => (
            <LogoImage
            title="Bio DDD"
            href="/"
            src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/logo/logo-light.png"
            darkSrc="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/logo/logo-dark.png"
          />
          ),        
          content: (
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 font-russo text-base md:text-2xl font-normal mb-12">
            С удоволствие ще Ви предложи адекватна услуга, осъществена от компетентни и квалифицирани служители. Цените, които предлагаме са достъпни и обвързани с високо качество. Нашата цел е не само отстраняването на хлебарки и всякакви други вредители, но и предотвратяването на повторната им поява.
            </p>
          </div>
        ),
      },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}

export const LogoImage = ({
    title,
    href,
    src,
    darkSrc,
  }: {
    title: string;
    href: string;
    src: string;
    darkSrc: string;
  }) => {
    return (
      <Link href={href} className="block text-center ml-1 xs:ml-2 sm:ml-3 md:ml-4 lg:ml-8">
        <div className="relative inline-block translate-y-1">
          <Image
            src={src}
            width={64}
            height={64}
            alt={title}
            className="dark:hidden block rounded-md scale-[1] md:scale-[2.5] lg:scale-[4]  -translate-x-[18px]"
          />
          <Image
            src={darkSrc}
            width={64}
            height={64}
            alt={title}
            className="dark:block hidden rounded-md scale-100 md:scale-[2.5] lg:scale-[4]  -translate-x-[18px]"
          />
        </div>
      </Link>
    );
  };