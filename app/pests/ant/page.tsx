import { SignupFormDemo } from '@/components/SignupFormDemo'
import AntInfoComponent from './AntInfoComponent'
import { FeaturesSection } from '@/components/FeaturesSection'
import { IconAlertTriangle, IconBug, IconHome, IconLeaf, IconRosetteDiscountCheck, IconScript, IconSearch, IconSpray } from '@tabler/icons-react';

const antSet = [
  {
    title: "Достъп на мравките",
    description: "Мравките проникват в дома през малки пукнатини, процепи около прозорци и врати, или следвайки феромонни следи оставени от други мравки, домашни любимци и хора.",
    icon: <IconHome size={50} />,
  },
  {
    title: "Привличане към храна",
    description: "Мравките са привлечени от остатъци от храна, особено сладки и мазни продукти, които могат да бъдат намерени в кухнята или трапезарията.",
    icon: <IconLeaf size={50} />,
  },
  {
    title: "Бързо размножаване",
    description: "Мравките могат да създадат големи колонии за кратко време, което прави контрола им труден без професионална намеса.",
    icon: <IconBug size={50} />,
  },
  {
    title: "Потенциални щети",
    description: "Някои видове мравки могат да причинят структурни щети на дървени елементи в дома или да замърсяват храна, създавайки хигиенни проблеми.",
    icon: <IconAlertTriangle size={50} />,
  },
  {
    title: "Оглед на обекта",
    description: "Сертифициран ДДД експерт прави оглед на обекта за установяване наличието и вида на мравките",
    icon: <IconSearch size={50} />,
  },
  {
    title: "Третиране на обекта",
    description: "Нашите ДДД изпълнители извършват обработка на обекта съгласно най-високите професионални стандарти само с одобрени за употреба биоциди и специализирани средства",
    icon: <IconSpray size={50} />,
  },
  {
    title: "Издаване на протокол",
    description: "След извършване на обработката задължително издаваме протокол по образец на Министерство на здравеопазването, където са описани подробно мерките и средствата за борба с мравки, които сме приложили",
    icon: <IconScript size={50} />,
  },
  {
    title: "Проследяване на ефективността",
    description: "По желание на клиента можем да проследим ефективността на проведените ДДД мероприятия с цел гарантиране успешната борба с мравките",
    icon: <IconRosetteDiscountCheck size={50} />,
  },
];

export default function Ant() {

    return (
        <div className=' mt-32'>
            <AntInfoComponent />
            <div>       
            <FeaturesSection features={antSet} />
            </div>

            <div className='flex flex-col-reverse xl:flex-row'>
              <SignupFormDemo />
            </div>

        </div>
    )
}