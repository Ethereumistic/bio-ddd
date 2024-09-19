import MosquitoInfoComponent from './MosquitoInfoComponent'
import { 
  IconSearch,
  IconSpray,
  IconScript,
  IconRosetteDiscountCheck,
  IconDroplet,
  IconMoon,
  IconMoodAngry,
  IconVirus,
} from "@tabler/icons-react";
import { SignupFormDemo } from '@/components/SignupFormDemo';
import { FeaturesSection } from '@/components/FeaturesSection';
export default function Mosquito() {

  const mosquitoSet = [
    {
      title: "Размножаване във водна среда",
      description: "Комарите се размножават в застояли води - локви, саксии, улуци, дори в малки количества вода. Женските снасят яйцата си във водата, където се развиват ларвите.",
      icon: <IconDroplet size={50}/>,
    },
    {
      title: "Нощна активност",
      description: "Повечето видове комари са активни през нощта, привечер или в ранните сутрешни часове, когато атакуват хората и животните за кръвна храна.",
      icon: <IconMoon size={50} />,
    },
    {
      title: "Пренасяне на болести",
      description: "Комарите са известни преносители на различни заболявания като малария, денга, Зика вирус и други, което ги прави сериозна заплаха за общественото здраве.",
      icon: <IconVirus size={50} />,
    },
    {
      title: "Дразнещи ухапвания",
      description: "Ухапванията от комари причиняват сърбеж и подуване, а при някои хора могат да предизвикат алергични реакции, нарушавайки комфорта и съня.",
      icon: <IconMoodAngry size={50} />,
    },
    {
        title: "Оглед на обекта",
        description: "Сертифициран ДДД експерт прави оглед на обекта за установяване на потенциални места за размножаване на комари и степента на заразяване",
        icon: <IconSearch size={50}/>,
      },
      {
        title: "Третиране на обекта",
        description: "Нашите ДДД изпълнители извършват обработка на обекта съгласно най-високите професионални стандарти само с одобрени за употреба биоциди и специализирани средства",
        icon: <IconSpray size={50} />,
      },
      {
        title: "Издаване на протокол",
        description: "След извършване на обработката задължително издаваме протокол по образец на Министерство на здравеопазването, където са описани подробно мерките и средствата за борба с комари, които сме приложили",
        icon: <IconScript size={50} />,
      },
      {
        title: "Проследяване на ефективността",
        description: "По желание на клиента можем да проследим ефективността на проведените ДДД мероприятия с цел гарантиране успешната борба с комарите",
        icon: <IconRosetteDiscountCheck size={50} />,
      },
  ];
    

    return (
        <div className=' mt-32'>
            <MosquitoInfoComponent />
            <div>       
            <FeaturesSection features={mosquitoSet} />
            </div>

            <div className='flex flex-col-reverse xl:flex-row'>
              <SignupFormDemo />
            </div>

        </div>
    )
}