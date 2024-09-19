import WaspInfoComponent from './WaspInfoComponent'
import { 
  IconSearch,
  IconSpray,
  IconScript,
  IconRosetteDiscountCheck,
  IconAlertTriangle,
  IconApple,
} from "@tabler/icons-react";
import { SignupFormDemo } from '@/components/SignupFormDemo';
import { FeaturesSection } from '@/components/FeaturesSection';
import { GiTreeBeehive, GiWaspSting } from 'react-icons/gi';
export default function Wasp() {

  const waspSet = [
    {
      title: "Агресивно поведение",
      description: "Осите и стършелите могат да бъдат агресивни, особено когато се чувстват застрашени или когато гнездото им е наблизо, което създава риск от множество болезнени ужилвания.",
      icon: <GiWaspSting size={50}/>,
    },
    {
      title: "Опасни ужилвания",
      description: "Ужилванията от осите и стършелите са болезнени и могат да предизвикат сериозни алергични реакции при някои хора, включително анафилактичен шок в тежки случаи.",
      icon: <IconAlertTriangle size={50} />,
    },
    {
      title: "Изграждане на гнезда",
      description: "Осите и стършелите изграждат гнезда в и около сгради, включително тавани, стрехи и кухини в стените, което може да доведе до структурни повреди и трудности при премахването им.",
      icon: <GiTreeBeehive size={50} />,
    },
    {
      title: "Привличане към храна",
      description: "Осите и стършелите са привлечени от сладки храни и напитки, което ги прави досадни при хранене на открито и може да доведе до замърсяване на храната.",
      icon: <IconApple size={50} />,
    },
    {
        title: "Оглед на обекта",
        description: "Нашите експерти извършват подробен оглед на терена, идентифицирайки местоположението на гнездата и оценявайки степента на инфестация с оси и стършели.",
        icon: <IconSearch size={50}/>,
      },
      {
        title: "Третиране на обекта",
        description: "Прилагаме специализирани методи за контрол на оси и стършели, включително безопасно премахване на гнезда и използване на професионални инсектициди за предотвратяване на повторно заселване.",
        icon: <IconSpray size={50} />,
      },
      {
        title: "Издаване на протокол",
        description: "След извършване на обработката, издаваме подробен протокол, описващ приложените методи за контрол и превенция на оси и стършели в третираната зона.",
        icon: <IconScript size={50} />,
      },
      {
        title: "Проследяване и превенция",
        description: "Предлагаме услуги за редовно проследяване и превантивни мерки, за да намалим риска от повторно заселване на оси и стършели и да осигурим дългосрочна защита.",
        icon: <IconRosetteDiscountCheck size={50} />,
      },
  ];
    

    return (
        <div className=' mt-32'>
            <WaspInfoComponent />
            <div>       
            <FeaturesSection features={waspSet} />
            </div>

            <div className='flex flex-col-reverse xl:flex-row'>
              <SignupFormDemo />
            </div>

        </div>
    )
}