import TickInfoComponent from './TickInfoComponent'
import { 
  IconSearch,
  IconSpray,
  IconScript,
  IconRosetteDiscountCheck,
  IconDog,
  IconVirus,
  IconPlant2,
  IconEye,
} from "@tabler/icons-react";
import { SignupFormDemo } from '@/components/SignupFormDemo';
import { FeaturesSection } from '@/components/FeaturesSection';
export default function Tick() {

  const tickSet = [
    {
      title: "Опасност за домашни любимци",
      description: "Кърлежите често се прикрепят към кучета и котки, причинявайки дискомфорт и потенциално пренасяйки болести на домашните любимци.",
      icon: <IconDog size={50}/>,
    },
    {
      title: "Пренасяне на болести",
      description: "Кърлежите са известни преносители на сериозни заболявания като Лаймска болест, бабезиоза и анаплазмоза, представляващи значителен риск за здравето на хората и животните.",
      icon: <IconVirus size={50} />,
    },
    {
      title: "Разпространение в зелени площи",
      description: "Кърлежите обитават високи треви, храсти и гористи местности, което прави градини, паркове и природни зони рискови за заразяване.",
      icon: <IconPlant2 size={50} />,
    },
    {
      title: "Трудно откриване",
      description: "Поради малкия си размер, кърлежите често остават незабелязани до момента на ухапване, което увеличава риска от предаване на болести.",
      icon: <IconEye size={50} />,
    },
    {
        title: "Оглед на терена",
        description: "Нашите експерти извършват подробен оглед на зелените площи и околността, идентифицирайки рисковите зони и степента на заселване с кърлежи.",
        icon: <IconSearch size={50}/>,
      },
      {
        title: "Третиране на обекта",
        description: "Прилагаме специализирани методи за контрол на кърлежи, включително обработка на тревни площи и храсти с безопасни за хора и домашни любимци акарициди.",
        icon: <IconSpray size={50} />,
      },
      {
        title: "Издаване на протокол",
        description: "След извършване на обработката, издаваме подробен протокол, описващ приложените методи за контрол и превенция на кърлежи в третираната зона.",
        icon: <IconScript size={50} />,
      },
      {
        title: "Проследяване и поддръжка",
        description: "Предлагаме услуги за редовно проследяване и повторни обработки, за да осигурим дългосрочна защита срещу кърлежи, особено през активните сезони.",
        icon: <IconRosetteDiscountCheck size={50} />,
      },
  ];
    

    return (
        <div className=' mt-32'>
            <TickInfoComponent />
            <div>       
            <FeaturesSection features={tickSet} />
            </div>

            <div className='flex flex-col-reverse xl:flex-row'>
              <SignupFormDemo />
            </div>

        </div>
    )
}