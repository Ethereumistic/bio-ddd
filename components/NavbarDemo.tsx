"use client";
import React, { useState, useEffect, useRef } from "react";
import { HoveredLink, LogoImage,  Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import ThemeSwitch from "./themeSwitch";
import Image from "next/image";
import { HoverBorderGradientDemo } from "./HoverBorderGradientDemo";
import Link from "next/link";
import { FlipWordsNav } from "./FlipWordsNav";
import MobileMenu from "./MobileMenu";
import { FloatingNavDemo } from "./FloatingNavDemo";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { IconContract, IconSpray, IconTie } from "@tabler/icons-react";

export function NavbarDemo({ className }: { className?: string }) {

  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 932); // Adjust breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMobileMenuOpen(false);
    }
  };

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <div className="relative w-full flex items-center justify-center">
      <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
          className={cn(
            "flex fixed top-0 inset-x-0 mx-auto rounded-full bg-transparent z-[5000] items-center justify-center",
            className
          )}
        >
          <Navbar 
            className="top-0" 
            isMobile={isMobile} 
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen} 
          />
        </motion.div>
      </AnimatePresence>
      
      {isMobile && (
        <div ref={menuRef}>
          <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
        </div>
      )}
    </div>
  );
}

function Navbar({ 
  className, 
  isMobile, 
  mobileMenuOpen,
  setMobileMenuOpen 
}: { 
  className?: string, 
  isMobile: boolean, 
  mobileMenuOpen: boolean,
  setMobileMenuOpen: (isOpen: boolean) => void 
}) {  const [active, setActive] = useState<string | null>(null);
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className={cn("max-w-7xl mx-auto", className)}>
        <Menu setActive={setActive}>
          <div className="flex items-center justify-between w-full">
            {/* Logo on the left */}
            <div className="flex  items-center hover:scale-105 transition duration-700">
              <LogoImage
                title="Bio DDD"
                href="/"
                src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/logo/logo-light.png"
                darkSrc="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/logo/logo-dark.png"
              />
            </div>

            {/* Navigation items or menu icon */}
            {isMobile ? (
              <div className="flex items-center space-x-4">
                <div className="" >
                  <ThemeSwitch  />
                </div>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                className="text-3xl z-[5001] ml-4"
              >
                {mobileMenuOpen ? <HiX /> : <HiMenu />}
              </button>
              </div>
              
            ) : (
              <div className="flex items-center font-russo space-x-2 xs:space-x-3 sm:space-x-4 md:space-x-6 lg:space-x-12">
                <Link href="/pests" className="text-lg ">
                <div className="flex justify-center text-center">
                  <HoverBorderGradient
                    containerClassName="rounded-full"
                    as="button"
                    className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-1 sm:space-x-2 
                               px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 lg:px-5 lg:py-3
                               text-sm sm:text-sm md:text-base lg:text-lg transition-all duration-300"
                  >
                  <MenuItem setActive={setActive} active={active} item="Услуги">
                  
                    <div className="flex justify-center items-center my-4"><IconSpray width={50} height={50} /><FlipWordsNav /></div>
                      <div className=" text-sm grid grid-cols-4 gap-10 p-4 ">
            <ProductItem
              title="Хлебарки"
              href="/pests/cockroach"
              src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/cockroach.png"
              darkSrc="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/cockroach.png"
              description="Сбогом на мръсните хлебарки, които разпространяват болести!"
            />
            <ProductItem
              title="Гризачи"
              href="/pests/rat"
              src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/rat.png"
              darkSrc="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/rat.png"
              description="Чао на досадните гризачи, които унищожават вашата храна и имущество!"
            />
            <ProductItem
              title="Дървеници"
              href="/pests/bedbug"
              src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/bedbug.png"
              darkSrc="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/bedbug.png"
              description="Прогонете досадните дървеници, които ви пречат да спите спокойно!"
            />
            <ProductItem
              title="Бълхи"
              href="/pests/flea"
              src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/flea2.png"
              darkSrc="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/flea.png"

              description="Без бълхи и сърбежи за Вас и Вашите домашни любимци!"
            />
            <ProductItem
              title="Мухи"
              href="/pests/fly"
              src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/fly.png"
              darkSrc="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/fly.png"

              description="Сложете край на досадните мухи, които пренасят зарази!"
            />
            <ProductItem
              title="Оси"
              href="/pests/wasp"
              src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/wasp.png"
              darkSrc="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/wasp.png"

              description="Защитете се от оси, които могат да бъдат опасни!"
            />
            <ProductItem
              title="Комари"
              href="/pests/mosquito"
              src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/mosquito.png"
              darkSrc="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/mosquito.png"

              description="Насладете се на летните вечери без досадните комари!"
            />
            <ProductItem
              title="Кърлежи"
              href="/pests/tick"
              src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/tick.png"
              darkSrc="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/tick.png"

              description="Предпазете се от опасните кърлежи, преносители на сериозни заболявания!"
            />
            <ProductItem
              title="Мравки"
              href="/pests/ant"
              src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/ant.png"
              darkSrc="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/ant.png"

              description="Сложете край на пътеките от мравки, които нахлуват в дома ви!"
            />
            <ProductItem
              title="Змии"
              href="/pests/snake"
              src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/snake.png"
              darkSrc="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/snake.png"

              description="Освободете дома си от змиите, които могат да бъдат опасни!"
            />
            <ProductItem
              title="Паяци"
              href="/pests/spider"
              src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/spider.png"
              darkSrc="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/spider.png"

              description="Кажете сбогом на паяжините, които ви карат да се чувствате некомфортно!"
            />
            <ProductItem
              title="Птици"
              href="/pests/bird"
              src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/bird.png"
              darkSrc="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/bird.png"

              description="Прогонете птиците, които замърсяват вашия двор!"
            />
            {/* <ProductItem
              title="Мухи"
              href="https://userogue.com"
              src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/cockroach.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            /> */}
                      </div>
                  </MenuItem>
                  </HoverBorderGradient>
                  </div>
                </Link>

                <Link href="/business" className="text-lg">
                <div className="flex justify-center text-center">
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="button"
                  className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-1 sm:space-x-2 
                             px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 lg:px-5 lg:py-3
                             text-sm sm:text-sm md:text-base lg:text-lg transition-all duration-300"
                >
                  <MenuItem setActive={setActive} active={active} item="Бизнес">
                    <div className="flex flex-col text-lg px-8 my-10">
                      <div className="flex flex-row  pb-10  justify-center hover:scale-105 transition duration-300 hover:drop-shadow-[0_1.5px_1.5px_rgba(94,187,70,1)]">
                      <IconTie width={30} height={30} className="mr-2" />
                      <HoveredLink href="/web-dev">Бизнес Услуги</HoveredLink>
                      </div>
                      <hr></hr>
                      <div className="flex flex-row pt-10  hover:scale-105 transition duration-300 hover:drop-shadow-[0_1.5px_1.5px_rgba(94,187,70,1)]">
                      <IconContract width={30} height={30} className="mr-2" />
                      <HoveredLink href="/interface-design">ДДД Договор</HoveredLink>
                      </div>

                      {/* <div className=" hover:scale-105 transition duration-300 hover:drop-shadow-[0_1.5px_1.5px_rgba(255,22,22,1)]">
                      <HoveredLink href="/seo">Контрол на Гризачи</HoveredLink>
                      </div>

                      <div className=" hover:scale-105 transition duration-300 hover:drop-shadow-[0_1.5px_1.5px_rgba(255,22,22,1)]">
                      <HoveredLink href="/branding">Контрол на Мравки</HoveredLink>
                      </div> */}
                    </div>
                  </MenuItem>
                </HoverBorderGradient>
                </div>
                </Link>


                <Link href="/contact" className="">
                  <HoverBorderGradientDemo />
                </Link>
                <ThemeSwitch />
              </div>
            )}
          </div>
        </Menu>
      </div>
    </div>
  );
}