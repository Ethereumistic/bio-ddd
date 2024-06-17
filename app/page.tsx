import { CanvasRevealEffectDemo } from "@/components/CanvasRevealEffectDemo";
import { HeroHighlightDemo } from "@/components/HeroHighlightDemo";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-18">

      <HeroHighlightDemo />
      <CanvasRevealEffectDemo />
    </main>
  );
}
