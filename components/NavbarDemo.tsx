"use client";
import React, { useState } from "react";
import { HoveredLink, LogoImage, LogoImageDark, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import ThemeSwitch from "./themeSwitch";
import Image from "next/image";
import { HoverBorderGradientDemo } from "./HoverBorderGradientDemo";
import Link from "next/link";
export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-0" />

    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 w-full mx-auto z-50  ", className)}
    >

      <Menu setActive={setActive}>
    <div className="flex space-x-4 -translate-y-5">
      <LogoImage
              title="Bio DDD"
              href="/"
              src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/logo/bioddd-spider-l.png"
            />
        <LogoImageDark
              title="Bio DDD"
              href="/"
              src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/logo/bioddd-spider-d.png"
            />
      </div>
        <div className="flex mt-2 space-x-16 text-xl font-bold">
        <MenuItem setActive={setActive} active={active} item="Услуги">
          <div className="grid grid-cols-3 space-y-8 space-x-4 text-sm">
            <div className="translate-x-4 translate-y-8 hover:scale-105 transition duration-300 hover:drop-shadow-[0_1.5px_1.5px_rgba(255,22,22,1)]">
            <HoveredLink href="/web-dev">Контрол на Хлебарки</HoveredLink>
            </div>
            <div className=" hover:scale-105 transition duration-300 hover:drop-shadow-[0_1.5px_1.5px_rgba(255,22,22,1)]">
            <HoveredLink href="/interface-design">Контрол на Дървеници</HoveredLink>
            </div>
            
            <div className=" hover:scale-105 transition duration-300 hover:drop-shadow-[0_1.5px_1.5px_rgba(255,22,22,1)]">
            <HoveredLink href="/seo">Контрол на Гризачи</HoveredLink>
            </div>

            <div className=" hover:scale-105 transition duration-300 hover:drop-shadow-[0_1.5px_1.5px_rgba(255,22,22,1)]">
            <HoveredLink href="/branding">Контрол на Мравки</HoveredLink>
            </div>

            <div className=" hover:scale-105 transition duration-300 hover:drop-shadow-[0_1.5px_1.5px_rgba(255,22,22,1)]">
            <HoveredLink href="/branding">Контрол на Оси и Стършели</HoveredLink>
            </div>

            <div className=" hover:scale-105 transition duration-300 hover:drop-shadow-[0_1.5px_1.5px_rgba(255,22,22,1)]">
            <HoveredLink href="/branding">Контрол на Мравки</HoveredLink>
            </div>

            <div className=" hover:scale-105 transition duration-300 hover:drop-shadow-[0_1.5px_1.5px_rgba(255,22,22,1)]">
            <HoveredLink href="/branding">Контрол на Комари и Кърлежи</HoveredLink>
            </div>

            <div className=" hover:scale-105 transition duration-300 hover:drop-shadow-[0_1.5px_1.5px_rgba(255,22,22,1)]">
            <HoveredLink href="/branding">Контрол на Бълхи</HoveredLink>
            </div>

            <div className=" hover:scale-105 transition duration-300 hover:drop-shadow-[0_1.5px_1.5px_rgba(255,22,22,1)]">
            <HoveredLink href="/branding">Контрол на Влечуги и Къртици</HoveredLink>
            </div>

            <div className=" hover:scale-105 transition duration-300 hover:drop-shadow-[0_1.5px_1.5px_rgba(255,22,22,1)]">
            <HoveredLink href="/branding">Контрол на Нежелани Миризми</HoveredLink>
            </div>

            <div className=" hover:scale-105 transition duration-300 hover:drop-shadow-[0_1.5px_1.5px_rgba(255,22,22,1)]">
            <HoveredLink href="/branding">Защита от Нежелани Птици</HoveredLink>
            </div>

            <div className=" hover:scale-105 transition duration-300 hover:drop-shadow-[0_1.2px_1.2px_rgba(57,255,20,1)]">
            <HoveredLink href="/branding">Професионална Дезинфекция</HoveredLink>
            </div>

          </div>
        </MenuItem>
        <Link href="/pests"
              >
        <MenuItem setActive={setActive} active={active} item="Вредители">
          <div className="  text-sm grid grid-cols-4 gap-10 p-4 ">
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
              href="https://gomoonbeam.com"
              src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/bedbug.png"
              darkSrc="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/bedbug.png"
              description="Прогонете досадните дървеници, които ви пречат да спите спокойно!"
            />
            <ProductItem
              title="Бълхи"
              href="https://userogue.com"
              src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/flea2.png"
              darkSrc="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/flea.png"

              description="Без бълхи и сърбежи за Вас и Вашите домашни любимци!"
            />
            <ProductItem
              title="Мухи"
              href="https://userogue.com"
              src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/fly.png"
              darkSrc="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/fly.png"

              description="Сложете край на досадните мухи, които пренасят зарази!"
            />
            <ProductItem
              title="Оси"
              href="https://tailwindmasterkit.com"
              src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/wasp.png"
              darkSrc="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/wasp.png"

              description="Защитете се от оси, които могат да бъдат опасни!"
            />
            <ProductItem
              title="Комари"
              href="https://gomoonbeam.com"
              src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/mosquito.png"
              darkSrc="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/mosquito.png"

              description="Насладете се на летните вечери без досадните комари!"
            />
            <ProductItem
              title="Кърлежи"
              href="https://userogue.com"
              src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/tick.png"
              darkSrc="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/tick.png"

              description="Предпазете се от опасните кърлежи, преносители на сериозни заболявания!"
            />
            <ProductItem
              title="Мравки"
              href="https://userogue.com"
              src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/ant.png"
              darkSrc="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/ant.png"

              description="Сложете край на пътеките от мравки, които нахлуват в дома ви!"
            />
            <ProductItem
              title="Змии"
              href="https://userogue.com"
              src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/snake.png"
              darkSrc="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/snake.png"

              description="Освободете дома си от змиите, които могат да бъдат опасни!"
            />
            <ProductItem
              title="Паяци"
              href="https://userogue.com"
              src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/spider.png"
              darkSrc="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/spider.png"

              description="Кажете сбогом на паяжините, които ви карат да се чувствате некомфортно!"
            />
            <ProductItem
              title="Птици"
              href="https://userogue.com"
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
        </Link>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
        </div>
        <Link href="/contact">
        <HoverBorderGradientDemo />
        </Link>
        <ThemeSwitch />

      </Menu>
    </div>
  );
}
