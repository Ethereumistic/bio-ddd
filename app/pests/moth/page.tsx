import MothInfoComponent from './MothInfoComponent'
import { 
  IconSearch,
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
export default function Moth() {

  const mothSet = [
    {
      title: "Достъп на молците",
      description: "Молците могат да проникнат в дома през пукнатини, врати и прозорци, или да се внасят с храни и стоки.",
      icon: <IconHome size={50} />,
    },
    {
      title: "Идеална среда за размножаване",
      description: "Молците предпочитат тъмни и влажни места с изобилие от храна, като зърнени храни, платове и мебели.",
      icon: <IconApps size={50} />,
    },
    {
      title: "Алергии и дискомфорт",
      description: "Контактът с молци и техните ларви може да предизвика алергични реакции и дискомфорт, особено при чувствителни индивиди.",
      icon: <IconLungs size={50} />,
    },
    {
      title: "Трудността да се справим сами",
      description: "Управлението на молци може да бъде предизвикателство, тъй като препаратите за масова употреба често не са достатъчно ефективни срещу всички етапи на развитие.",
      icon: <IconAlertSquareRounded size={50} />,
    },
    {
      title: "Оглед на обекта",
      description: "Сертифициран ДДД експерт прави оглед на обекта, за да установи наличието и числеността на молците.",
      icon: <IconSearch size={50} />,
    },
    {
      title: "Третиране на обекта",
      description: "Нашите ДДД изпълнители извършват обработка на обекта съгласно най-високите професионални стандарти с одобрени за употреба биоциди и специализирани средства.",
      icon: <IconSpray size={50} />,
    },
    {
      title: "Издаване на протокол",
      description: "След извършване на обработката издаваме протокол, където са описани подробно мерките и средствата за борба с молците, които сме приложили.",
      icon: <IconScript size={50} />,
    },
    {
      title: "Проследяване на ефективността",
      description: "По желание на клиента можем да проследим ефективността на проведените ДДД мероприятия с цел гарантиране успешната борба с молците.",
      icon: <IconRosetteDiscountCheck size={50} />,
    },
  ];
  
    

    return (
        <div className=' mt-32'>
            <MothInfoComponent />
            <div>       
            <FeaturesSection features={mothSet} />
            </div>

            <div className='flex flex-col-reverse xl:flex-row'>
              <SignupFormDemo />
            </div>

        </div>
    )
}