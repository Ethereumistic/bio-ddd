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
      "Сбогом на мръсните хлебарки, които разпространяват болести!",
    link: "/pests/cockroach",
    src: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/cockroach.png",
    darkSrc: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/cockroach.png",
  },
  {
    title: "Гризачи",
    description:
      "Чао на досадните гризачи, които унищожават вашата храна и имущество!",
    link: "/pests/rat",
    src: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/rat.png",
    darkSrc: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/rat.png",
  },
  {
    title: "Дървеници",
    description:
      "Прогонете досадните дървеници, които ви пречат да спите спокойно!",
    link: "/pests/bedbug",
    src: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/bedbug.png",
    darkSrc: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/bedbug.png",
  },
  {
    title: "Бълхи",
    description:
      "Без бълхи и сърбежи за Вас и Вашите домашни любимци!",
    link: "/pests/flea",
    src: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/flea2.png",
    darkSrc: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/flea.png",
  },
  {
    title: "Мухи",
    description:
      "Сложете край на досадните мухи, които пренасят зарази!",
    link: "/pests/fly",
    src: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/fly.png",
    darkSrc: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/fly.png",
  },
  {
    title: "Оси / Стършели",
    description:
      "Защитете се от оси и стършели, които могат да бъдат опасни!",
    link: "/pests/wasp",
    src: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/wasp.png",
    darkSrc: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/wasp.png",
  },
  {
    title: "Комари",
    description:
      "Насладете се на летните вечери без досадните комари!",
    link: "/pests/mosquito",
    src: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/mosquito.png",
    darkSrc: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/mosquito.png",
  },
  {
    title: "Кърлежи",
    description:
      "Предпазете се от опасните кърлежи, преносители на сериозни заболявания!",
    link: "/pests/tick",
    src: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/tick.png",
    darkSrc: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/tick.png",
  },
  {
    title: "Мравки",
    description:
      "Сложете край на пътеките от мравки, които нахлуват в дома Ви!",
    link: "/pests/ant",
    src: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/ant.png",
    darkSrc: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/ant.png",
  },
  {
    title: "Змии",
    description:
      "Освободете дома си от змиите, които могат да бъдат опасни!",
    link: "/pests/snake",
    src: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/snake.png",
    darkSrc: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/snake.png",
  },
  {
    title: "Паяци",
    description:
      "Кажете сбогом на паяжините, които ви карат да се чувствате некомфортно!",
    link: "/pests/spider",
    src: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/spider.png",
    darkSrc: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/spider.png",
  },
  {
    title: "Птици",
    description:
      "Прогонете птиците, които замърсяват вашия двор!",
    link: "/pests/bird",
    src: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/bird.png",
    darkSrc: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/bird.png",
  },
  {
    title: "Къртици",
    description:
      "Спрете къртиците, които унищожават реколтата и Вашият двор!",
    link: "/pests/mole",
    src: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/mole.png",
    darkSrc: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/mole.png",
  },
  {
    title: "Охлюви / Стоножки",
    description:
      "Мястото на охлювите и стоножките не е във Вашият двор, не позволявайте да ядат от растенията!",
    link: "/pests/snail",
    src: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/snail.png",
    darkSrc: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/snail.png",
  },
  {
    title: "Молци",
    description:
      "Изгонете молците от Вашите гардероби, за да спрете да виждате поразени дрехи!",
    link: "/pests/moth",
    src: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/moth.png",
    darkSrc: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/moth.png",
  },
  {
    title: "Дървояди",
    description:
      "Престанете да страдаете от дървоядите, които унищожават дърветата и растенията във Вашият двор!",
    link: "/pests/woodworm",
    src: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/woodworm1.png",
    darkSrc: "https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/dark/woodworm1.png",
  },
];
