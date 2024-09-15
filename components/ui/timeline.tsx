"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  image: string; // Add this line to include an image for each entry
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Changelog from my journey
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          I&apos;ve been working on Aceternity for the past 2 years. Here&apos;s
          a timeline of my journey.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-center items-center pt-10 md:pt-40"
          >
            <div className="md:w-[calc(50%-50px)] order-1">
              {index % 2 === 0 ? (
                <img src={item.image} alt={item.title} className="w-full h-auto rounded-lg shadow-lg" />
              ) : (
                <div className="pr-4 md:pr-0">
                  <h3 className="text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                    {item.title}
                  </h3>
                  {item.content}
                </div>
              )}
            </div>

            <div className="flex flex-col items-center z-40 md:w-[100px] my-4 md:my-0 order-2">
              <div className="h-10 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700" />
              </div>
            </div>

            <div className="md:w-[calc(50%-50px)] order-3">
              {index % 2 === 0 ? (
                <div className="pl-4 md:pl-0">
                  <h3 className="text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                    {item.title}
                  </h3>
                  {item.content}
                </div>
              ) : (
                <img src={item.image} alt={item.title} className="w-full h-auto rounded-lg shadow-lg" />
              )}
            </div>
          </div>
        ))}

        <motion.div
          style={{
            height: heightTransform,
            opacity: opacityTransform,
          }}
          className="absolute left-1/2 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
        />
      </div>
    </div>
  );
};