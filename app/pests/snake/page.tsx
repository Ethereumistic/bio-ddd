import SnakeInfoComponent from './SnakeInfoComponent'
import { 
  IconSearch,
  IconFence,
  IconScript,
  IconRosetteDiscountCheck,
  IconHome,
} from "@tabler/icons-react";
import { SignupFormDemo } from '@/components/SignupFormDemo';
import { FeaturesSection } from '@/components/FeaturesSection';
import { GiHighGrass, GiPoisonBottle, GiSnakeBite } from 'react-icons/gi';
export default function Snake() {

  const snakeSet = [
    {
      title: "Привличане към градини и дворове",
      description: "Змиите са привлечени от места, които предлагат укритие и храна, като гъста растителност, купчини дърва или камъни, и области с гризачи.",
      icon: <GiHighGrass size={50}/>,
    },
    {
      title: "Потенциална опасност",
      description: "Някои видове змии са отровни и представляват сериозна заплаха за хора и домашни любимци. Дори неотровните змии могат да ухапят, ако се чувстват застрашени.",
      icon: <GiSnakeBite size={50} />,
    },
    {
      title: "Здравни рискове",
      description: "Змийските ухапвания могат да причинят сериозни здравословни проблеми, от алергични реакции до тежки отравяния, изискващи спешна медицинска помощ.",
      icon: <GiPoisonBottle size={50} />,
    },
    {
      title: "Проникване в сгради",
      description: "Змиите могат да влязат в домове и други сгради през малки отвори, търсейки топлина или преследвайки плячка, което създава дискомфорт и страх сред обитателите.",
      icon: <IconHome size={50} />,
    },
    {
        title: "Оглед на обекта",
        description: "Нашите експерти извършват подробен оглед на терена, идентифицирайки потенциални места за укритие на змии и фактори, които ги привличат.",
        icon: <IconSearch size={50}/>,
      },
      {
        title: "Превантивни мерки",
        description: "Прилагаме комплексни мерки за контрол на змии, включително инсталиране на бариери, премахване на укрития и контрол на гризачите, които са храна за змиите.",
        icon: <IconFence size={50} />,
      },
      {
        title: "Издаване на протокол",
        description: "След извършване на превантивните мерки, издаваме подробен протокол, описващ приложените методи за контрол и превенция на змии в района.",
        icon: <IconScript size={50} />,
      },
      {
        title: "Проследяване и поддръжка",
        description: "Предлагаме услуги за редовно проследяване и поддръжка, за да гарантираме дългосрочна ефективност на приложените мерки за контрол на змии.",
        icon: <IconRosetteDiscountCheck size={50} />,
      },
  ];
    

    return (
        <div className=' mt-32'>
            <SnakeInfoComponent />
            <div>       
            <FeaturesSection features={snakeSet} />
            </div>

            <div className='flex flex-col-reverse xl:flex-row'>
              <SignupFormDemo />
            </div>

        </div>
    )
}