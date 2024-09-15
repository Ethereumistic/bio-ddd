import React from "react";
import { FlipWords } from "./ui/flip-words";

export function DisinfectionWords() {
  const words = ["болести", "вируси", "бактерии", "миркоби", "вредители", "COVID-19",];
  return (
    <div className="h-auto min-h-[20rem] flex justify-center items-center px-4 sm:pt-32 py-0">
      <div className="text-center">
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-russo text-neutral-600 dark:text-neutral-300">
          Дезинфекцията на вашата територия е една от{" "}
          <span className="block sm:inline">
            главните превантивни мерки <span className="whitespace-nowrap">против

          <span className="sm:ml-2 ml-0">
          <FlipWords words={words} />
          </span>

          </span>
          </span>
        </p>
      </div>
    </div>
  );
}
