import SnailInfoComponent from './SnailInfoComponent'
import { 
  IconSearch,
  IconFence,
  IconScript,
  IconRosetteDiscountCheck,
  IconHome,
  IconApps,
  IconLungs,
  IconAlertSquareRounded,
  IconSpray,
} from "@tabler/icons-react";
import { SignupFormDemo } from '@/components/SignupFormDemo';
import { FeaturesSection } from '@/components/FeaturesSection';
import { GiHighGrass, GiPoisonBottle, GiSnakeBite } from 'react-icons/gi';
export default function Snail() {

  const snailSet = [
    {
      title: "Достъп на охлювите и стоножките",
      description: "Охлювите и стоножките могат да влязат в дома през пукнатини, отвори и чрез растения или почва, внесени от външната среда.",
      icon: <IconHome size={50} />,
    },
    {
      title: "Идеална среда за размножаване",
      description: "Влажни и тъмни места в дома, като складове и изби, осигуряват идеални условия за размножаване на охлюви и стоножки.",
      icon: <IconApps size={50} />,
    },
    {
      title: "Здравословни рискове",
      description: "Стоножките могат да пренасят паразити и бактерии, което представлява риск за здравето, особено за деца и домашни любимци.",
      icon: <IconLungs size={50} />,
    },
    {
      title: "Трудността да се справим сами",
      description: "Контролът на охлюви и стоножки може да бъде труден, тъй като те са активни през нощта и могат бързо да се размножават.",
      icon: <IconAlertSquareRounded size={50} />,
    },
    {
      title: "Оглед на обекта",
      description: "Сертифициран експерт извършва оглед на обекта, за да установи наличието и числеността на охлюви и стоножки.",
      icon: <IconSearch size={50} />,
    },
    {
      title: "Третиране на обекта",
      description: "Нашите специалисти извършват обработка на обекта с одобрени методи и препарати, специфични за охлюви и стоножки.",
      icon: <IconSpray size={50} />,
    },
    {
      title: "Издаване на протокол",
      description: "След извършване на обработката издаваме протокол, в който са описани подробно приложените мерки за контрол на охлюви и стоножки.",
      icon: <IconScript size={50} />,
    },
    {
      title: "Проследяване на ефективността",
      description: "По желание на клиента можем да проследим ефективността на проведените мероприятия за контрол на охлюви и стоножки, за да гарантираме успешен резултат.",
      icon: <IconRosetteDiscountCheck size={50} />,
    },
  ];
  
    

    return (
        <div className=' mt-32'>
            <SnailInfoComponent />
            <div>       
            <FeaturesSection features={snailSet} />
            </div>

            <div className='flex flex-col-reverse xl:flex-row'>
              <SignupFormDemo />
            </div>

        </div>
    )
}