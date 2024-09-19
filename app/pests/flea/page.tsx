import FleaInfoComponent from './FleaInfoComponent'
import { 
  IconSearch,
  IconSpray,
  IconScript,
  IconRosetteDiscountCheck,
  IconJumpRope,
  IconEgg,
  IconCat,
  IconVirusSearch,
} from "@tabler/icons-react";
import { SignupFormDemo } from '@/components/SignupFormDemo';
import { FeaturesSection } from '@/components/FeaturesSection';
export default function Flea() {

  const fleaSet = [
    {
      title: "Домашни любимци като носители",
      description: "Бълхите най-често се внасят в дома чрез домашни любимци, особено кучета и котки, които се заразяват навън.",
      icon: <IconCat size={50}/>,
    },
    {
      title: "Бързо разпространение",
      description: "Бълхите могат да скачат на големи разстояния спрямо размера си, което им позволява бързо да се разпространят в целия дом.",
      icon: <IconJumpRope size={50} />,
    },
    {
      title: "Жизнен цикъл",
      description: "Бълхите имат кратък жизнен цикъл и се размножават бързо. Женската може да снесе до 50 яйца на ден, което води до бързо нарастване на популацията.",
      icon: <IconEgg size={50} />,
    },
    {
      title: "Ухапвания и алергични реакции",
      description: "Ухапванията от бълхи причиняват сърбеж и дискомфорт, а някои хора и животни могат да раздават алергични реакции към слюнката на бълхи.",
      icon: <IconVirusSearch size={50} />,
    },
    {
        title: "Оглед на обекта",
        description: "Сертифициран ДДД експерт прави оглед на обекта за установяване наличието и степента на заразяване с бълхи",
        icon: <IconSearch size={50}/>,
      },
      {
        title: "Третиране на обекта",
        description: "Нашите ДДД изпълнители извършват обработка на обекта съгласно най-високите професионални стандарти само с одобрени за употреба биоциди и специализирани средства",
        icon: <IconSpray size={50} />,
      },
      {
        title: "Издаване на протокол",
        description: "След извършване на обработката задължително издаваме протокол по образец на Министерство на здравеопазването, където са описани подробно мерките и средствата за борба с бълхи, които сме приложили",
        icon: <IconScript size={50} />,
      },
      {
        title: "Проследяване на ефективността",
        description: "По желание на клиента можем да проследим ефективността на проведените ДДД мероприятия с цел гарантиране успешната борба с бълхите",
        icon: <IconRosetteDiscountCheck size={50} />,
      },
  ];
    

    return (
        <div className=' mt-32'>
            <FleaInfoComponent />
            <div>       
            <FeaturesSection features={fleaSet} />
            </div>

            <div className='flex flex-col-reverse xl:flex-row'>
              <SignupFormDemo />
            </div>

        </div>
    )
}