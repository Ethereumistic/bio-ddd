import { CanvasRevealEffectDemo } from "@/components/CanvasRevealEffectDemo";
import { HeroHighlightDemo } from "@/components/HeroHighlightDemo";
import { ImagesSliderDemo } from "@/components/ImagesSliderDemo";
import { LampDemo } from "@/components/LampDemo";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-18 ">
      <LampDemo />
      <div className="-translate-y-32 ">
      <HeroHighlightDemo />
      </div>
      <div className="-mt-[564px] ">
      <CanvasRevealEffectDemo />
      </div>
      <ImagesSliderDemo />

    </main>
  );
}
