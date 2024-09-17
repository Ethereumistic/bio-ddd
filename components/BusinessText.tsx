"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Професионални ДДД обработки за бизнеса, според изискванията на РЗИ/ХЕИ и БАБХ
`;

export function BusinessText() {
  return <div><TextGenerateEffect words={words} /></div>;
}
