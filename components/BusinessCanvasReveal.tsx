"use client";
import React from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/business-canvas";
import { FaViruses } from "react-icons/fa";
import { HiBugAnt } from "react-icons/hi2";
import Link from "next/link";
import { IconScript } from "@tabler/icons-react";

export function BusinessCanvasReveal() {
  const [activeIndex, setActiveIndex] = React.useState(-1);
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        if (prevIndex < 3) {
          return prevIndex + 1;
        } else {
          clearInterval(interval);
          return prevIndex;
        }
      });
    }, 800); // Faster animation, adjust as needed

    return () => clearInterval(interval);
  }, []);

  const cards = [
    {
      href: "/disinfection",
      title: "Дезинфекция",
      icon: <FaViruses className="text-emerald-500" size={120} />,
      canvasProps: {
        animationSpeed: 5.1,
        containerClassName: "bg-emerald-900",
      },
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
    },
    {
      href: "/deratization",
      title: "Дератизация",
      icon: <RatIcon />,
      canvasProps: {
        animationSpeed: 3,
        containerClassName: "bg-slate-400",
        colors: [[125, 211, 252]],
      },
    },
    {
      href: "/business/ddd-contract",
      title: "ДДД Договор",
      icon: <IconScript className="text-cyan-300" size={120} />,
      canvasProps: {
        animationSpeed: 3,
        containerClassName: "bg-cyan-900 ",
        colors: [[125, 211, 252]],
      },
    },
  ];

  return (
    <div className="mt-32 pt-20 bg-white dark:bg-dblue w-full mx-auto px-0 sm:px-8 overflow-hidden">
      <div className="flex flex-col xl:flex-row gap-8 max-w-6xl mx-auto justify-center items-center">
        {cards.map((card, index) => (
          <MobileCard
            key={card.href}
            {...card}
            isActive={activeIndex >= index}
            onHover={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            isHovered={hoveredIndex === index}
            shouldReset={hoveredIndex !== null && hoveredIndex !== index}
          />
        ))}
      </div>
    </div>
  );
}

const MobileCard = ({
  href,
  title,
  icon,
  canvasProps,
  isActive,
  onHover,
  onHoverEnd,
  isHovered,
  shouldReset,
}: {
  href: string;
  title: string;
  icon: React.ReactNode;
  canvasProps: React.ComponentProps<typeof CanvasRevealEffect>;
  isActive: boolean;
  onHover: () => void;
  onHoverEnd: () => void;
  isHovered: boolean;
  shouldReset: boolean;
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.8 });
  const [showAnimation, setShowAnimation] = React.useState(false);

  React.useEffect(() => {
    if (isInView && isActive && !shouldReset) {
      const timer = setTimeout(() => setShowAnimation(true), 100);
      return () => clearTimeout(timer);
    } else if (shouldReset) {
      setShowAnimation(false);
    }
  }, [isInView, isActive, shouldReset]);

  return (
    <Link href={href}>
      <motion.div
        ref={ref}
        className="border border-black/[0.2] dark:border-white/[0.2] w-full p-4 h-[30rem] relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        onMouseEnter={onHover}
        onMouseLeave={onHoverEnd}
      >
        <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

        <AnimatePresence>
          {(showAnimation || isHovered) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="h-full w-full absolute inset-0"
            >
              <CanvasRevealEffect {...canvasProps} />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative z-20 flex flex-col items-center justify-center h-full">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={(showAnimation || isHovered) ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            {icon}
          </motion.div>
          <div className="-translate-y-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={(showAnimation || isHovered) ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl relative z-10 text-white font-bold whitespace-nowrap"
            >
              {title}
            </motion.h2>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};


const RatIcon = () => {
  return (
    <div className="-mt-10">
    <svg xmlns="http://www.w3.org/2000/svg" width="10rem" height="10rem" viewBox="0 0 512 512">
      <path fill="#595454" d="M433.5 31.6c-8.5 0-15.1 6.58-15.1 14.81s6.6 14.81 15.1 14.81s15.1-6.58 15.1-14.81S442 31.6 433.5 31.6M267 59.05c6.6 15.84 17.1 18.03 31.1 24.77c-11.2 20.98-23.2 51.08-43.5 59.28c-64.7 26.1-98.7 58.3-112.3 98.7c-13.1 39-7 87.2 13.3 145.4c61.8 4.9 127.3 9.2 159.4 2.8c-1.3-4.4-5.8-7.5-8.6-9c-28.5-9.8-45.2-10.9-71.5-12l1.1-9.6c2.2-19.6.4-44.3-7.7-61.3c-4.1-8.5-9.5-14.9-16.5-18.8s-15.8-5.7-28.4-3.3l-3.2-17.8c13.5-2.4 29.4-.6 40.4 5.4c10.9 6.1 18.7 15.8 23.9 26.7c9.1 18.9 11.1 41.6 9.9 61.8c10 .6 18.9 1.6 26.8 2.9c19.2-30.7 37-60.4 39.5-90.7c-13.8-4-32.4-10.7-34.3-24.4c-2.7-19.6 3.6-45 19.3-55.5c-1 27.8-4.3 43.9-2.3 49.7c5.8 10.9 30.3 15.2 40.1 17.4v.1c17.4 4.8 31.9 7 34.8 25.6c18.2-29.5-14.4-45-36.2-54.5l-.1-5.8c-.3-23.5 5.5-39.4 13.5-53.1c8-13.6 17.7-25 26.9-43.2v-.1c-9.4-1.3-19.4-.1-27.1 1.3c5.7-19.9 23.2-23.73 38.6-16.1c5.9-8.3 13.4-18.83 24.9-29.96c-12.7-9.39-19.9-20.4-18.1-33.92c-28-3.4-57.4-4.45-78.6 9.84l-4-3.72c-15.7-17.87-60.9-12.3-51.1 11.11m67.9-4.17c4 7.92 14.9 12.95 29.2 13.88c-8 6.49-20.7 11.42-30.3 5.24c-7.3-4.71-3.7-13.07 1.1-19.12M129.4 364.6c-14.6 3.2-38.77 7-49.63 16c-8.5 7.4-15.03 19.8-16.19 31.4c-1.17 11.6 1.99 21.6 12.85 28.8C120 469.7 165 466.4 205.4 454.9c40.4-11.6 75.4-32.6 119.4-22.8c8.4 2.5 15.7 6.5 14.5 15.9c-.4 2.8-1.5 4.8-2.7 6.5c-9.7 10.8-30.9 17.7-33.6 21.5c-6.4 9.2 34.2 2.8 45-7.6c4.2-4.2 8.1-13 8.9-21.3s-1.3-15.3-4.9-18.3c-11.2-9.6-24.1-15.1-39.8-15.1c-15.7-.1-34 1.7-53.5 6.5c-39.1 9.6-83.6 27.5-127.4 18.6c-17-3.4-27.4-6.8-33.77-14.9c-3.22-4-4.39-10.6-2.48-15.4c7.45-15.2 28.15-17.8 40.95-20.5c-2.4-7.2-4.6-16.4-6.6-23.4" />
    </svg>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};