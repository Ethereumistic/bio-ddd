import BedbugInfoComponent from './BedbugInfoComponent'
import { 
  IconSearch,
  IconSpray,
  IconScript,
  IconRosetteDiscountCheck,
  IconBed,
  IconBug,
  IconAlertTriangle,
  IconMoon,
} from "@tabler/icons-react";
import { SignupFormDemo } from '@/components/SignupFormDemo';
import { FeaturesSection } from '@/components/FeaturesSection';
export default function Bedbug() {

  const bedbugSet = [
    {
      title: "Разпространение на дървениците",
      description: "Дървениците се разпространяват чрез багаж, дрехи, мебели и матраци. Те могат лесно да се пренесат от хотели или други заразени места.",
      icon: <IconBed size={50}/>,
    },
    {
      title: "Нощна активност",
      description: "Дървениците са активни предимно през нощта и се хранят с кръвта на спящите хора, причинявайки сърбящи ухапвания.",
      icon: <IconMoon size={50} />,
    },
    {
      title: "Бързо размножаване",
      description: "Дървениците се размножават бързо, като една женска може да снесе стотици яйца за живота си, което води до бързо нарастване на популацията.",
      icon: <IconBug size={50} />,
    },
    {
      title: "Трудност при самостоятелно третиране",
      description: "Дървениците са изключително трудни за елиминиране без професионална помощ поради тяхната устойчивост към много препарати и способността им да се крият в малки пукнатини.",
      icon: <IconAlertTriangle size={50} />,
    },
    {
        title: "Оглед на обекта",
        description: "Сертифициран ДДД експерт прави оглед на обекта за установяване наличието и степента на заразяване с дървеници",
        icon: <IconSearch size={50}/>,
      },
      {
        title: "Третиране на обекта",
        description: "Нашите ДДД изпълнители извършват обработка на обекта съгласно най-високите професионални стандарти само с одобрени за употреба биоциди и специализирани средства",
        icon: <IconSpray size={50} />,
      },
      {
        title: "Издаване на протокол",
        description: "След извършване на обработката задължително издаваме протокол по образец на Министерство на здравеопазването, където са описани подробно мерките и средствата за борба с дървеници, които сме приложили",
        icon: <IconScript size={50} />,
      },
      {
        title: "Проследяване на ефективността",
        description: "По желание на клиента можем да проследим ефективността на проведените ДДД мероприятия с цел гарантиране успешната борба с дървениците",
        icon: <IconRosetteDiscountCheck size={50} />,
      },
  ];
    

    return (
        <div className=' mt-32'>
            <BedbugInfoComponent />
            <div>       
            <FeaturesSection features={bedbugSet} />
            </div>
            <div className='flex flex-col-reverse xl:flex-row'>
              <SignupFormDemo />
            </div>
        </div>
    )
}