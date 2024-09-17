import { FeaturesSection } from '@/components/FeaturesSection'
import CockroachInfoComponent from './CockroachInfoComponent'
import { 
    IconSearch,
    IconSpray,
    IconScript,
    IconRosetteDiscountCheck,
    IconHome,
    IconApps,
    IconLungs,
    IconAlertSquareRounded,
  } from "@tabler/icons-react";
import { SignupFormDemo } from '@/components/SignupFormDemo';
export default function Cockroach() {

    const cockroachSet = [
        {
          title: "Достъп на хлебарките",
          description: "Хлебарките проникват в дома през пукнатини, вентилация и канали, или се внасят с кашони, кутии и обувки.",
          icon: <IconHome size={50}/>,
        },
        {
          title: "Идеална среда за размножаване",
          description: "Домът ви осигурява идеални условия за размножаване на хлебарките – храна, топлина, вода и скрити места.",
          icon: <IconApps size={50} />,
        },
        {
          title: "Алергии и астма",
          description: "Oтпадъците, формирани от хитиновата им обвивка, мъртви хлебарки и изпражнения могат да развият алергии, особено при децата и при по-чувствителните възрастни.",
          icon: <IconLungs size={50} />,
        },
        {
          title: "Трудността да се справим сами",
          description: "Третирането на хлебарките препаратите за масова употреба ,които се продават на свободен принцип, крият риска от развиване на резистентност и тогава борбата с хлебарките ще е трудна и в дългосрочен план. ",
          icon: <IconAlertSquareRounded size={50} />,
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

            <div className='flex flex-col-reverse xl:flex-row'>
              <SignupFormDemo />

            </div>

        </div>
    )
}