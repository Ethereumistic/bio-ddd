"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
  useInView,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { DisinfectionWords } from "../DisinfectionWords";
import { Icon as TablerIcon, IconProps } from '@tabler/icons-react';
import Image from "next/image";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  icon: React.ComponentType<IconProps>;
}

const TimelineItem = ({ item }: { item: TimelineEntry }) => {
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: false, amount: 0.1 });

  return (
    <div className="flex justify-start pt-10 md:pt-40 md:gap-10">
      <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
        <div className="h-12 absolute left-3 md:left-3 w-12 rounded-full flex items-center justify-center">
          <div className="hidden md:block">
            <item.icon className="w-16 h-16 text-ddblue dark:text-lgreen p-2 bg-gray-200 dark:bg-gray-800 rounded-full border-2 border-gray-300 dark:border-gray-700" />
          </div>
        </div>
        
        <div className="">
          <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500">
            {item.title}
          </h3>
        </div>
      </div>

      <motion.div 
        ref={contentRef}
        className="relative pl-20 pr-4 md:pl-4 w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-start items-start mr-48">
          <div className="md:hidden block">
            <item.icon className="w-10 h-10 mr-8 text-ddblue dark:text-lgreen p-2 bg-gray-200 dark:bg-gray-800 rounded-full border-2 border-gray-300 dark:border-gray-700" />
          </div>
          <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
            {item.title}
          </h3>
        </div>
        {item.content}{" "}
      </motion.div>
    </div>
  );
};

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const refRect = ref.current.getBoundingClientRect();
      setHeight(refRect.height - (refRect.bottom - containerRect.bottom));
    }
  }, [ref, containerRef]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white dark:bg-dblue font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto pt-10 px-4 md:px-8 lg:px-10">
        <DisinfectionWords />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-2">
        {data.map((item, index) => (
          <TimelineItem key={index} item={item} />
        ))}
        <div
          style={{
            height: height + "px",
            maxHeight: "100%",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
              maxHeight: "100%",
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-cyan-500 via-lgreen to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
