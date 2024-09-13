import { cn } from "@/utils/cn";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Link from "next/link";
import { useState, useRef } from "react";
import Image from "next/image";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    src: string;
    darkSrc: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      className={cn(
        "grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-10 -translate-y-48",
        className
      )}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      {items.map((item, idx) => (
        <motion.div
          key={item?.link}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Link
            href={item?.link}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-ddblue dark:bg-lred block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
            <div className="flex">
            <CardTitle>

              {item.title}
            </CardTitle>
            <div className="ml-32">
            <Image
                src={item.src}
                alt={item.title}
                width={80}
                height={80}
                className="inline-block mr-2 dark:hidden"
              />
              <Image
                src={item.darkSrc}
                alt={item.title}
                width={80}
                height={80}
                className="hidden dark:inline-block mr-2"
              />
              </div>
              </div>
            <CardDescription>{item.description}</CardDescription>
            </Card>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-slate-300 dark:bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20  ",
        className
      )}
    >
      <div className="relative z-50 hover:scale-105 transition duration-700">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-ddblue text-xl dark:text-zinc-100 font-bold tracking-wide mt-4 ", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-700 dark:text-zinc-300 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};