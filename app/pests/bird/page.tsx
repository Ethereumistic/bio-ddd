import BirdInfoComponent from './BirdInfoComponent'
import { 
  IconSearch,
  IconBuildingFactory2,
  IconScript,
  IconRosetteDiscountCheck,
  IconBuildingSkyscraper,
  IconPoo,
  IconVirus,
  IconAlertTriangle,
} from "@tabler/icons-react";
import { SignupFormDemo } from '@/components/SignupFormDemo';
import { FeaturesSection } from '@/components/FeaturesSection';
export default function Bird() {

  const birdSet = [
    {
      title: "Привличане към сгради",
      description: "Птиците, особено гълъбите, са привлечени от високи сгради, корнизи и покриви, които наподобяват естествените им местообитания като скали.",
      icon: <IconBuildingSkyscraper size={50}/>,
    },
    {
      title: "Замърсяване с изпражнения",
      description: "Птичите изпражнения не само замърсяват фасади и тротоари, но и могат да причинят корозия на метални повърхности и да увредят боята или различни настилки.",
      icon: <IconPoo size={50} />,
    },
    {
      title: "Здравни рискове",
      description: "Птиците могат да пренасят различни болести и паразити, които представляват риск за човешкото здраве, особено в по-гъсто населени градски райони.",
      icon: <IconVirus size={50} />,
    },
    {
      title: "Структурни щети",
      description: "Гнездата на птиците могат да запушат водосточни тръби и да причинят щети на покриви и изолация, водейки до скъпи ремонти.",
      icon: <IconAlertTriangle size={50} />,
    },
    {
        title: "Оглед на обекта",
        description: "Сертифициран ДДД експерт прави оглед на обекта за установяване на проблемните зони и видовете птици, които ги обитават",
        icon: <IconSearch size={50}/>,
      },
      {
        title: "Третиране на обекта",
        description: "Нашите специалисти инсталират физически бариери като мрежи на фасади и под покриви, поставят шипове или опънати жици на первази и покриви, и прилагат лепкави гелове на повърхности, където птиците кацат, без да ги нараняват",
        icon: <IconBuildingFactory2 size={50} />,
      },
      {
        title: "Издаване на протокол",
        description: "След извършване на обработката задължително издаваме протокол по образец на Министерство на здравеопазването, където са описани подробно приложените мерки за контрол на птиците",
        icon: <IconScript size={50} />,
      },
      {
        title: "Проследяване на ефективността",
        description: "По желание на клиента можем да проследим ефективността на проведените мероприятия с цел гарантиране успешния контрол на птиците и да направим допълнителни корекции при необходимост",
        icon: <IconRosetteDiscountCheck size={50} />,
      },
  ];
    

    return (
        <div className=' mt-32'>
            <BirdInfoComponent />
            <div>       
            <FeaturesSection features={birdSet} />
            </div>

            <div className='flex flex-col-reverse xl:flex-row'>
              <SignupFormDemo />
            </div>

        </div>
    )
}