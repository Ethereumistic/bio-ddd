import WoodwormInfoComponent from './WoodwormInfoComponent'
import { 
  IconSearch,
  IconFence,
  IconScript,
  IconRosetteDiscountCheck,
  IconHome,
  IconAlertTriangleFilled
} from "@tabler/icons-react";
import { SignupFormDemo } from '@/components/SignupFormDemo';
import { FeaturesSection } from '@/components/FeaturesSection';
import { GiAncientRuins, GiWoodBeam } from 'react-icons/gi';
export default function Woodworm() {

  const woodwormSet = [
    {
      title: "Привличане към дървени конструкции",
      description: "Дървоядите са привлечени от дървени мебели, греди, подови настилки и стени, особено ако дървесината е с високо съдържание на влага или е необработена.",
      icon: <GiWoodBeam  size={50} />,
    },
    {
      title: "Потенциална опасност",
      description: "Макар дървоядите да не са директно опасни за хората, те могат сериозно да увредят дървени конструкции и мебели, което да доведе до загуби.",
      icon: <IconAlertTriangleFilled size={50} />,
    },
    {
      title: "Рискове",
      description: "Прякото въздействие върху здравето на хората е минимално, но дървоядите могат да причинят структурни щети, които водят до неблагоприятни условия на живот.",
      icon: <GiAncientRuins  size={50} />,
    },
    {
      title: "Проникване в сгради",
      description: "Дървоядите могат да проникнат в домовете чрез малки отвори в дървени конструкции, където се размножават и причиняват щети на дървесината.",
      icon: <IconHome size={50} />,
    },
    {
      title: "Оглед на обекта",
      description: "Нашите експерти извършват подробен оглед на обекта, идентифицирайки наличието на дървояди и степента на щетите, нанесени върху дървени конструкции.",
      icon: <IconSearch size={50} />,
    },
    {
      title: "Превантивни мерки",
      description: "Прилагаме превантивни мерки като третиране на дървесината с инсектициди, контрол на влажността и подмяна на повредените дървени елементи.",
      icon: <IconFence size={50} />,
    },
    {
      title: "Издаване на протокол",
      description: "След като се извършат необходимите мерки за контрол на дървояди, издаваме протокол с описание на приложените методи за защита и превенция.",
      icon: <IconScript size={50} />,
    },
    {
      title: "Проследяване и поддръжка",
      description: "Предлагаме услуги за редовно проследяване и поддръжка, за да гарантираме, че предприетите мерки срещу дървояди остават ефективни в дългосрочен план.",
      icon: <IconRosetteDiscountCheck size={50} />,
    },
  ];
  

    return (
        <div className=' mt-32'>
            <WoodwormInfoComponent />
            <div>       
            <FeaturesSection features={woodwormSet} />
            </div>

            <div className='flex flex-col-reverse xl:flex-row'>
              <SignupFormDemo />
            </div>

        </div>
    )
}