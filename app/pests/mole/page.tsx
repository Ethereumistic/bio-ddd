import MoleInfoComponent from './MoleInfoComponent'
import { 
  IconSearch,
  IconScript,
  IconRosetteDiscountCheck,
  IconWall,
  IconApple,
  IconBuildingTunnel,
  IconSpray,
} from "@tabler/icons-react";
import { SignupFormDemo } from '@/components/SignupFormDemo';
import { FeaturesSection } from '@/components/FeaturesSection';
import { GiHighGrass } from 'react-icons/gi';
export default function Mole() {

  const moleSet = [
    {
      title: "Проникване в градините",
      description: "Къртиците могат да проникнат в градини и дворове, където съществува подходяща почва и изобилие от храна.",
      icon: <IconWall size={50} />,
    },
    {
      title: "Привличане към хранителни източници",
      description: "Къртиците се хранят с насекоми, червеи и корени на растения, което ги привлича в градини и обработваеми площи.",
      icon: <IconApple size={50} />,
    },
    {
      title: "Структурни щети",
      description: "Къртиците могат да причинят щети на тревни площи и градини, като изкопават тунели, които отслабват корените на растенията.",
      icon: <GiHighGrass size={50} />,
    },
    {
      title: "Подземни тунели",
      description: "Къртиците изграждат сложни подземни тунели, които могат да повредят основите на сгради и инфраструктура.",
      icon: <IconBuildingTunnel size={50} />,
    },
    {
      title: "Оглед на обекта",
      description: "Сертифициран експерт по контрол на вредители извършва оглед на терена за установяване на наличието на къртици и степента на щетите.",
      icon: <IconSearch size={50} />,
    },
    {
      title: "Контрол на къртици",
      description: "Нашите специалисти прилагат ефективни методи за контрол на къртици, включително примамки и механични капани.",
      icon: <IconSpray size={50} />,
    },
    {
      title: "Издаване на протокол",
      description: "След извършване на контролните мерки издаваме протокол, в който са описани подробно приложените методи за борба с къртиците.",
      icon: <IconScript size={50} />,
    },
    {
      title: "Проследяване на ефективността",
      description: "По желание на клиента можем да проследим ефективността на проведените мероприятия за контрол на къртиците, за да гарантираме успешен резултат.",
      icon: <IconRosetteDiscountCheck size={50} />,
    },
  ];
  

    return (
        <div className=' mt-32'>
            <MoleInfoComponent />
            <div>       
            <FeaturesSection features={moleSet} />
            </div>

            <div className='flex flex-col-reverse xl:flex-row'>
              <SignupFormDemo />
            </div>

        </div>
    )
}