"use client";
import React from 'react'
import Image from 'next/image';
import { LogoImage } from './ui/navbar-menu';
import { FloatingDockDemo } from './FloatingDockDemo';
import Link from 'next/link';
import { HoverBorderGradientDemo } from './HoverBorderGradientDemo';
import { IconMail, IconMapPin, IconPhone } from '@tabler/icons-react';

export default function Footer() {
    return (
        <div className='overflow-x-hidden'>
            {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

<footer className="bg-white dark:bg-dblue">
  <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div>
        <div className="flex flex-col justify-center text-teal-600 sm:justify-start">
        <LogoImage
              title="Bio DDD"
              href="/"
              src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/logo/logo-light.png"
              darkSrc="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/logo/logo-dark.png"
            />
            <span className=" -translate-y-1 text-ddblue dark:text-white font-russo">Bio <span className="text-lgreen">DDD</span></span>        
        </div>

        <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
        Ние сме водеща компания, специализирана в професионални ДДД услуги. Ние предлагаме надеждни решения за контрол на вредители, 
        дезинфекция на помещения и ефективна защита срещу гризачи, насекоми, влечуги и птици.
        </p>

        <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
                <FloatingDockDemo />
        </ul>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
        <div className="text-center sm:text-left">
          <p className="text-lg font-russo text-gray-900 dark:text-gray-100">За Дома</p>

          <ul className="mt-8 space-y-4 font-russo text-sm">
            <li>
              <Link className="text-gray-700 dark:text-gray-200 transition hover:text-ddblue/75 dark:hover:text-lgreen/75" href="#">
                Контрол на насекоми
              </Link>
            </li>

            <li>
              <Link className="text-gray-700 dark:text-gray-200 transition hover:text-ddblue/75 dark:hover:text-lgreen/75" href="#">
              Контрол на гризачи
              </Link>
            </li>

            <li>
              <Link className="text-gray-700 dark:text-gray-200 transition hover:text-ddblue/75 dark:hover:text-lgreen/75" href="#">
              Контрол на влечуги
              </Link>
            </li>

            <li>
              <Link className="text-gray-700 dark:text-gray-200 transition hover:text-ddblue/75 dark:hover:text-lgreen/75" href="#">
              Контрол на птици
               </Link>
            </li>

            <li>
              <Link className="text-gray-700 dark:text-gray-200 transition hover:text-ddblue/75 dark:hover:text-lgreen/75" href="#">
              Дезинфекция
               </Link>
            </li>
          </ul>
        </div>

        <div className="text-center font-russo sm:text-left ">
          <p className="text-lg font-russo text-gray-900 dark:text-gray-100">За Бизнеса</p>

          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <Link className="text-gray-700 dark:text-gray-200 transition hover:text-ddblue/75 dark:hover:text-lgreen/75" href="#">
                ДДД Договор
              </Link>
            </li>

            <li>
              <Link className="text-gray-700 dark:text-gray-200 transition hover:text-ddblue/75 dark:hover:text-lgreen/75" href="#"> Професионална Дезинфекция </Link>
            </li>

            <li>
              <Link className="text-gray-700 dark:text-gray-200 transition hover:text-ddblue/75 dark:hover:text-lgreen/75" href="#"> Контрол на вредители </Link>
            </li>

          </ul>
        </div>

        <div className="text-center font-russo sm:text-left">
          <p className="text-lg font-russo text-gray-900 dark:text-gray-100">Полезно</p>

          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <Link className="text-gray-700  dark:text-gray-200 transition hover:text-ddblue/75 dark:hover:text-lgreen/75" href="#"> Често задавани въпроси </Link>
            </li>

            <li>
              <Link className="text-gray-700  dark:text-gray-200 transition hover:text-ddblue/75 dark:hover:text-lgreen/75" href="#"> За Нас </Link>
            </li>

          </ul>
        </div>

        <div className="text-center sm:text-left ">
        <HoverBorderGradientDemo />

          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <Link
                className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                href="#"
              >
                <IconMail />

                <span className="flex-1 text-gray-700 dark:text-gray-200">office@bio-ddd.com</span>
              </Link>
            </li>

            <li>
              <Link
                className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                href="#"
              >
                <IconPhone />

                <span className="flex-1 text-gray-700 dark:text-gray-200">0123456789</span>
              </Link>
            </li>

            <li
              className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
            >
                <IconMapPin />

              <address className="-mt-0.5 flex-1 not-italic text-gray-700 dark:text-gray-200">
                гр. Габрово, ул. "Цар Борис" 12
              </address>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="mt-12 border-t border-gray-100 pt-6">
      <div className="text-center sm:flex sm:justify-between sm:text-left">
        <p className="text-sm text-gray-500">
          <span className="block sm:inline">Всички права запазени.</span>

          <Link
            className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
            href="#"
          >
            Условия за ползване
          </Link>

          <span>&middot;</span>

          <Link
            className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
            href="#"
          >
            Политика за поверителност
          </Link>
        </p>

        <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">&copy; 2024 Bio DDD</p>
      </div>
    </div>
  </div>
</footer>
        </div>
    )
}