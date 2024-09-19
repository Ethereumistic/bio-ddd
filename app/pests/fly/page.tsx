import FlyInfoComponent from './FlyInfoComponent'
import { 
  IconSearch,
  IconSpray,
  IconScript,
  IconRosetteDiscountCheck,
  IconTrash,
  IconBug,
  IconVirus,
  IconMoodAngry,
} from "@tabler/icons-react";
import { SignupFormDemo } from '@/components/SignupFormDemo';
import { FeaturesSection } from '@/components/FeaturesSection';
export default function Fly() {

  const flySet = [
    {
      title: "Привличане към органични отпадъци",
      description: "Мухите са силно привлечени от разлагащи се органични вещества, включително хранителни отпадъци, което ги прави чести посетители в кухни и зони за хранене.",
      icon: <IconTrash size={50}/>,
    },
    {
      title: "Бързо размножаване",
      description: "Мухите имат кратък жизнен цикъл и се размножават изключително бързо. Една женска може да снесе стотици яйца за един ден, водейки до експоненциално нарастване на популацията.",
      icon: <IconBug size={50} />,
    },
    {
      title: "Разпространение на болести",
      description: "Мухите могат да пренасят и разпространяват различни патогени, включително бактерии и вируси, което ги прави потенциална заплаха за общественото здраве.",
      icon: <IconVirus size={50} />,
    },
    {
      title: "Досадно присъствие",
      description: "Освен здравните рискове, мухите са изключително досадни със своето постоянно жужене и кацане върху хора, храна и повърхности, нарушавайки комфорта в дома или бизнеса.",
      icon: <IconMoodAngry size={50} />,
    },
    {
        title: "Оглед на обекта",
        description: "Сертифициран ДДД експерт прави оглед на обекта за установяване наличието, вида и източниците на мухи",
        icon: <IconSearch size={50}/>,
      },
      {
        title: "Третиране на обекта",
        description: "Нашите ДДД изпълнители извършват обработка на обекта съгласно най-високите професионални стандарти само с одобрени за употреба биоциди и специализирани средства",
        icon: <IconSpray size={50} />,
      },
      {
        title: "Издаване на протокол",
        description: "След извършване на обработката задължително издаваме протокол по образец на Министерство на здравеопазването, където са описани подробно мерките и средствата за борба с мухи, които сме приложили",
        icon: <IconScript size={50} />,
      },
      {
        title: "Проследяване на ефективността",
        description: "По желание на клиента можем да проследим ефективността на проведените ДДД мероприятия с цел гарантиране успешната борба с мухите",
        icon: <IconRosetteDiscountCheck size={50} />,
      },
  ];
    

    return (
        <div className=' mt-32'>
            <FlyInfoComponent />
            <div>       
            <FeaturesSection features={flySet} />
            </div>

            <div className='flex flex-col-reverse xl:flex-row'>
              <SignupFormDemo />
            </div>

        </div>
    )
}