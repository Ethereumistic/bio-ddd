import { CanvasRevealEffectDemo } from "@/components/CanvasRevealEffectDemo";
import { HeroHighlightDemo } from "@/components/HeroHighlightDemo";
import { ImagesSliderDemo } from "@/components/ImagesSliderDemo";
import { LampDemo } from "@/components/LampDemo";
import { MobileCanvasRevealEffectDemo } from "@/components/MobileCanvasRevealEffectDemo";
import { TextGenerateEffectDemo } from "@/components/TextGenerateEffect";
import Image from "next/image";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { FaViruses } from "react-icons/fa";
import { HiBugAnt } from "react-icons/hi2";
import { MdPestControlRodent } from "react-icons/md";

const cards = [
  {
    href: "/disinfection",
    title: "Дезинфекция",
    icon: <FaViruses className="text-emerald-500" size={120} />,
    canvasProps: {
      animationSpeed: 5.1,
      containerClassName: "bg-emerald-900",
    },
    children: "Кажете чао на невидимите микроби и бактерии!",
  },
  {
    href: "/disinsection",
    title: "Дезинсекция",
    icon: <HiBugAnt className="text-red-700" size={120} />,
    canvasProps: {
      animationSpeed: 3,
      containerClassName: "bg-red-900",
      colors: [
        [255, 22, 22],
        [255, 26, 26],
      ],
      dotSize: 2,
    },
    children: "Оттървете се от досадните и гнусни насекоми!",
  },
  {
    href: "/deratization",
    title: "Дератизация",
    icon: <MdPestControlRodent className="text-gray-300" size={120} />,
    canvasProps: {
      animationSpeed: 3,
      containerClassName: "bg-slate-400",
      colors: [
        [125, 211, 252],
      ],
      dotSize: 2,
    },
    children: "Изпратете на кино миризливите и гнусни мишки!",
  },
];



export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-18 ">
      <div className="">
      <LampDemo />
      <div className="-translate-y-32 ">
      <HeroHighlightDemo />
      </div>
      </div>
      <div className="-mt-[580px] w-full">
      <ImagesSliderDemo />
      </div>
      
        <div className=" font-russo mx-auto text-center mt-8">
        <TextGenerateEffectDemo />
        </div>

      <div className=" ">
      <div className="hidden lg:flex lg:flex-row mb-4">
      <CanvasRevealEffectDemo cards={cards} />
      </div>

      <div className="lg:hidden block">
      <MobileCanvasRevealEffectDemo cards={cards} />
      </div>

      </div>

    </main>
  );
}

