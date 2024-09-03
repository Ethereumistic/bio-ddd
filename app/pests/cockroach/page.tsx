import { FeaturesSection } from '@/components/FeaturesSection'
import CockroachInfoComponent from './CockroachInfoComponent'
import { 
    IconSearch,
    IconSpray,
    IconScript,
    IconRosetteDiscountCheck,
  } from "@tabler/icons-react";

export default function Cockroach() {

    const cockroachSet = [
        {
          title: "Оглед на обекта",
          description: "Сертифициран ДДД експерт прави оглед на обекта за установяване наличието и числеността на хлебарките",
          icon: <IconSearch size={50}/>,
        },
        {
          title: "Третиране на обекта",
          description: "Нашите ДДД изпълнители извършват обработка на обекта съгласно най-високите професионални стандарти само с одобрени за употреба биоциди и специализирани средства",
          icon: <IconSpray size={50} />,
        },
        {
          title: "Издаване на протокол",
          description: "След извършване на обработката задължително издаваме протокол по образец на Министерство на здравеопазването, където са описани подробно мерките и средствата за борба с хлебарки, които сме приложили",
          icon: <IconScript size={50} />,
        },
        {
          title: "Проследяване на ефективността",
          description: "По желание на клиента можем да проследим ефективността на проведените ДДД мероприятия с цел гарантиране успешната борба с хлебарките",
          icon: <IconRosetteDiscountCheck size={50} />,
        },
        {
            title: "Оглед на обекта",
            description: "Сертифициран ДДД експерт прави оглед на обекта за установяване наличието и числеността на хлебарките",
            icon: <IconSearch size={50}/>,
          },
          {
            title: "Третиране на обекта",
            description: "Нашите ДДД изпълнители извършват обработка на обекта съгласно най-високите професионални стандарти само с одобрени за употреба биоциди и специализирани средства",
            icon: <IconSpray size={50} />,
          },
          {
            title: "Издаване на протокол",
            description: "След извършване на обработката задължително издаваме протокол по образец на Министерство на здравеопазването, където са описани подробно мерките и средствата за борба с хлебарки, които сме приложили",
            icon: <IconScript size={50} />,
          },
          {
            title: "Проследяване на ефективността",
            description: "По желание на клиента можем да проследим ефективността на проведените ДДД мероприятия с цел гарантиране успешната борба с хлебарките",
            icon: <IconRosetteDiscountCheck size={50} />,
          },
      ];
    

    return (
        <div className=' mt-32'>
            <CockroachInfoComponent />
            <div>       
            <FeaturesSection features={cockroachSet} />
            </div>

        </div>
    )
}