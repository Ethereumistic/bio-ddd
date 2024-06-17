"use client";
import React, { useState } from "react";
import { HoveredLink, LogoImage, LogoImageDark, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import ThemeSwitch from "./themeSwitch";
import Image from "next/image";
import { HoverBorderGradientDemo } from "./HoverBorderGradientDemo";
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
              title="Хлебарки"
              href="https://algochurn.com"
              src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/logo/bioddd-spider-l.png"
            />
        <LogoImageDark
              title="Хлебарки"
              href="https://algochurn.com"
              src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/logo/bioddd-spider-d.png"
            />
      </div>
        <div className="flex mt-2 space-x-16">
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Вредители">
          <div className="  text-sm grid grid-cols-4 gap-10 p-4 ">
            <ProductItem
              title="Хлебарки"
              href="https://algochurn.com"
              src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/cockroach.png"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Гризачи"
              href="https://tailwindmasterkit.com"
              src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/rat.png"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Дървеници"
              href="https://gomoonbeam.com"
              src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/bedbug.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Бълхи"
              href="https://userogue.com"
              src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/flea2.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
            <ProductItem
              title="Мухи"
              href="https://userogue.com"
              src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/fly.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
            <ProductItem
              title="Оси"
              href="https://tailwindmasterkit.com"
              src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/wasp.png"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Комари"
              href="https://gomoonbeam.com"
              src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/mosquito.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Кърлежи"
              href="https://userogue.com"
              src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/tick.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
            <ProductItem
              title="Мравки"
              href="https://userogue.com"
              src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/ant.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
            <ProductItem
              title="Змии"
              href="https://userogue.com"
              src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/snake.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
            <ProductItem
              title="Паяци"
              href="https://userogue.com"
              src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/spider.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
            <ProductItem
              title="Птици"
              href="https://userogue.com"
              src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/bird.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
            {/* <ProductItem
              title="Мухи"
              href="https://userogue.com"
              src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/cockroach.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            /> */}
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
        </div>

        <HoverBorderGradientDemo />
        <ThemeSwitch />

      </Menu>
    </div>
  );
}
