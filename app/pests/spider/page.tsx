import SpiderInfoComponent from './SpiderInfoComponent'
import { 
  IconSearch,
  IconSpray,
  IconScript,
  IconRosetteDiscountCheck,
  IconHome,
} from "@tabler/icons-react";
import { SignupFormDemo } from '@/components/SignupFormDemo';
import { FeaturesSection } from '@/components/FeaturesSection';
import { GiSpiderFace, GiSpiderWeb } from 'react-icons/gi';
import { FaBugs } from 'react-icons/fa6';
export default function Spider() {

  const spiderSet = [
    {
      title: "Паяжини в дома",
      description: "Паяците създават паяжини в ъглите, по таваните и в тихи места на дома, което води до неприятен вид и необходимост от често почистване.",
      icon: <GiSpiderWeb size={50}/>,
    },
    {
      title: "Привличане на други насекоми",
      description: "Присъствието на паяци често е индикатор за наличието на други насекоми в дома, тъй като паяците се хранят с тях.",
      icon: <FaBugs size={50} />,
    },
    {
      title: "Потенциални ухапвания",
      description: "Въпреки че повечето паяци са безобидни, някои видове могат да ухапят, причинявайки болка, подуване или алергични реакции при някои хора. Черната вдовица е паяк, който е отровен и ухапването може да доведе до летален изход.",
      icon: <GiSpiderFace size={50} />,
    },
    {
      title: "Проникване в сгради",
      description: "Паяците могат да влязат в домовете през малки пукнатини и отвори, търсейки топлина, влага или храна, което води до нежелано съжителство.",
      icon: <IconHome size={50} />,
    },
    {
        title: "Оглед на обекта",
        description: "Нашите експерти извършват подробен оглед на помещенията, идентифицирайки видовете паяци, техните укрития и входни точки.",
        icon: <IconSearch size={50}/>,
      },
      {
        title: "Третиране на обекта",
        description: "Прилагаме специализирани методи за контрол на паяци, включително използване на безопасни за хората и домашните любимци препарати и запечатване на входни точки.",
        icon: <IconSpray size={50} />,
      },
      {
        title: "Издаване на протокол",
        description: "След извършване на обработката, издаваме подробен протокол, описващ приложените методи за контрол и превенция на паяци в обекта.",
        icon: <IconScript size={50} />,
      },
      {
        title: "Проследяване и поддръжка",
        description: "Предлагаме услуги за редовно проследяване и поддръжка, за да осигурим дългосрочен контрол над популацията на паяци и предотвратим повторно заселване.",
        icon: <IconRosetteDiscountCheck size={50} />,
      },
  ];
    

    return (
        <div className=' mt-32'>
            <SpiderInfoComponent />
            <div>       
            <FeaturesSection features={spiderSet} />
            </div>

            <div className='flex flex-col-reverse xl:flex-row'>
              <SignupFormDemo />
            </div>

        </div>
    )
}