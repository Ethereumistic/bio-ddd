import { HoverEffect } from "./ui/card-hover-effect";
import { motion } from "framer-motion";

export function CardHoverEffectDemo() {
  return (
    <motion.div
      className="max-w-[100rem] mx-auto px-8"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      <HoverEffect items={projects} />
    </motion.div>
  );
}
export const projects = [
  {
    title: "Хлебарки",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "/pests/cockroach",
    src: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/cockroach.png",
    darkSrc: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/cockroach.png",
  },
  {
    title: "Гризачи",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "/pests/rat",
    src: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/rat.png",
    darkSrc: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/rat.png",
  },
  {
    title: "Дървеници",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "/pests/bedbug",
    src: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/bedbug.png",
    darkSrc: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/bedbug.png",
  },
  {
    title: "Бълхи",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "/pests/flea",
    src: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/flea2.png",
    darkSrc: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/flea.png",
  },
  {
    title: "Мухи",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "/pests/fly",
    src: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/fly.png",
    darkSrc: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/fly.png",
  },
  {
    title: "Оси",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "/pests/wasp",
    src: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/wasp.png",
    darkSrc: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/wasp.png",
  },
  {
    title: "Комари",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "/pests/mosquito",
    src: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/mosquito.png",
    darkSrc: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/mosquito.png",
  },
  {
    title: "Кърлежи",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "/pests/tick",
    src: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/tick.png",
    darkSrc: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/tick.png",
  },
  {
    title: "Мравки",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "/pests/ant",
    src: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/ant.png",
    darkSrc: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/ant.png",
  },
  {
    title: "Змии",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "/pests/snake",
    src: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/snake.png",
    darkSrc: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/snake.png",
  },
  {
    title: "Паяци",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "/pests/spider",
    src: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/spider.png",
    darkSrc: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/spider.png",
  },
  {
    title: "Птици",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "/pests/bird",
    src: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/bird.png",
    darkSrc: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/bird.png",
  },
];
