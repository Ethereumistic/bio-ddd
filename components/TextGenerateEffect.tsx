"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Възползвайте се от нашите професионални услуги, и кажете чао на вредителите!`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
