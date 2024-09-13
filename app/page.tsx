import { CanvasRevealEffectDemo } from "@/components/CanvasRevealEffectDemo";
import { HeroHighlightDemo } from "@/components/HeroHighlightDemo";
import { ImagesSliderDemo } from "@/components/ImagesSliderDemo";
import { LampDemo } from "@/components/LampDemo";
import { MobileCanvasRevealEffectDemo } from "@/components/MobileCanvasRevealEffectDemo";
import { TextGenerateEffectDemo } from "@/components/TextGenerateEffect";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-18 sm:overflow-x-hidden overflow-x-visible">
      <LampDemo />
      <div className="-translate-y-32 ">
      <HeroHighlightDemo />
      </div>
      <div className="-mt-[480px] w-full">
      <ImagesSliderDemo />
      </div>

        <div className=" font-russo mx-auto text-center mt-8">
        <TextGenerateEffectDemo />
        </div>

      <div className=" ">
      <div className="hidden lg:flex lg:flex-row">
      <CanvasRevealEffectDemo />
     
      </div>

      <div className="lg:hidden block">
      <MobileCanvasRevealEffectDemo />
      </div>
      </div>

    </main>
  );
}
