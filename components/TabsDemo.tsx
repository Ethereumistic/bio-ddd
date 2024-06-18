"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "Американска Хлебарка",
      value: "product",
      content: (
        <div className="w-full  relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-slate-400 to-slate-800">
            <div className="flex">          
                <Image
                    src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/a-cockroach.png"
                    alt="Американска Хлебарка"
                    width="320"
                    height="320"
                    className="-translate-y-8"
                />
          <p className="">Американска Хлебарка</p>
          </div>
          <div className="flex  ">

          <div className="flex flex-wrap -mt-24">
    <div className="w-1/2 px-4">
        <h1 className="mt-10 text-xl font-russo">Латинско наименование</h1>
        <h1 className="mt-2 text-lg font-russo">Periplaneta Americana</h1>
        <h1 className="mt-10 text-xl font-russo">КАК ИЗГЛЕЖДА</h1>
        <h1 className="mt-2 text-lg font-russo">Американската хлебарка е най-едрият вид, който се среща у нас. Може да достигне до 4 – 5 cm. Цветът ѝ варира от жълтеникав до тъмнокафяв, а крачетата ѝ се характеризират с добре развити шипчета. Има добре развити крила и може да прелита къси разстояния, което я прави особено неприятна.</h1>
        <h1 className="mt-10 text-xl font-russo">ПОВЕДЕНИЕ, ХРАНЕНЕ И НАВИЦИ</h1>
        <h1 className="mt-2 text-lg font-russo">Възрастните и нимфите се хранят с почти всичко, но предпочитат главно загниваща органична материя или такава, която съдържа нишесте – например хартия и картон.</h1>
    </div>
    <div className="w-1/2 px-4 -mt-48">
    <h1 className="mt-10 text-xl font-russo">РАЗМНОЖАВАНЕ</h1>  

    <h1 className="mt-2 text-lg font-russo">Оплодената женска може да отложи различно количество яйчни капсули, наречени оотеки. Всяка от тях съдържа 14 – 16 яйца. Времето от формиране на капсулата до излюпване на яйцата е в рамките на 50 – 55 дни. Нимфите преминават през повече стадии в сравнение с германската и ориенталската хлебарки.</h1>
    <h1 className="mt-10 text-xl font-russo">ВРЕДИ</h1>
    <h1 className="mt-2 text-lg font-russo">Поради това, че се храни с отпадъци от хранителните продукти на човека, американската хлебарка се явява механичен преносител на стомашно-чревни заболявания, а продуктите от метаболизма ѝ могат да предизвикат алергични реакции и проблеми с дихателните пътища.</h1>
    <h1 className="mt-10 text-xl font-russo">ПРИЗНАЦИ ЗА НАПАДЕНИЕ</h1>
    <h1 className="mt-2 text-lg font-russo">Най-често за нападението от хлебарки разбираме по остатъците от съблекла, старите оотеки (яйчни капсули) или изпражненията (във вид на дребни черни точки по кухненски шкафчета, хладилници, фаянс и др.). У дома най-сериозният признак за наличие на хлебарки е ужасеният женски вик, идващ от кухнята или банята през нощта.</h1>
    </div>
    </div>
      

            </div>
        </div>
      ),
    },
    {
      title: "Германска Хлебарка",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-slate-400 to-slate-800">
            <div className="flex">          
                <Image
                    src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/g-cockroach.png"
                    alt="Американска Хлебарка"
                    width="320"
                    height="320"
                    className="-translate-y-8"
                />
          <p className="">Германска Хлебарка</p>
          </div>
          <div className="flex  ">

          <div className="flex flex-wrap">
    <div className="w-1/2 px-4 -mt-20">
        <h1 className="mt-10 text-xl font-russo">Латинско наименование</h1>
        <h1 className="mt-2 text-lg font-russo">Periplaneta Americana</h1>
        <h1 className="mt-10 text-xl font-russo">КАК ИЗГЛЕЖДА</h1>
        <h1 className="mt-2 text-lg font-russo">Възрастните индивиди са с размери от 10 до 13 mm. Тялото им е жълтеникаво до светлокафяво, удължено и овално с добре развити крила. Нимфите на хлебарките приличат на възрастните, но са с по-малки размери.</h1>
        <h1 className="mt-10 text-xl font-russo">ПОВЕДЕНИЕ, ХРАНЕНЕ И НАВИЦИ</h1>
        <h1 className="mt-2 text-lg font-russo">Германските хлебарки изискват топлина, влага, храна и се намират навсякъде, където тези условия са налични: кухни, килери, ресторанти, консервни предприятия, топлофицирани апартаменти и др. Срещат се в дървенѝя и на места, където има кондензирани мазнини – плотове, стени, печки и др. Те са всеядни и повсеместно разпространени в жилищата на хората.</h1>
    </div>
    <div className="w-1/2 px-4 -mt-72">
    <h1 className="mt-10 text-xl font-russo">РАЗМНОЖАВАНЕ</h1>  

    <h1 className="mt-2 text-lg font-russo">Яйцата на хлебарките се развиват в яйчна капсула – оотека. Тя се формира изцяло в рамките на 1 – 2 дни и се отделя от женската непосредствено преди излюпването на нимфите, за около две до четири седмици – в зависимост от околните температура и влажност. В една оотека се съдържат от 37 до 44 яйца, като се излюпват около 90% от тях. Една женска снася от 4 до 8 оотеки. Това означава, че една хлебарка може да снесе между 133 и 316 малки. Развитието на нимфите продължава приблизително 125 дни, а възрастните живеят около 100 дни.</h1>
    <h1 className="mt-10 text-xl font-russo">ВРЕДИ</h1>
    <h1 className="mt-2 text-lg font-russo">Германските хлебарки разпространяват редица патогени в домовете на хората, замърсявайки хранителни продукти и посуда. Те варират от бактерии, които причиняват хранителни отравяния и дизентерия, до алергени, които водят до обриви и астматични пристъпи. Последните проучвания показват пряка зависимост между развитието на астма при децата и наличието на вредителя.</h1>
    <h1 className="mt-10 text-xl font-russo">ПРИЗНАЦИ ЗА НАПАДЕНИЕ</h1>
    <h1 className="mt-2 text-lg font-russo">Най-често за „нанасянето“ на хлебарки у дома разбираме по остатъците от съблекла, старите оотеки (яйчни капсули), изпражненията (във вид на дребни черни точки по кухненски шкафчета, хладилници, фаянс и др.), както и по ругатните на хлебаркски език, когато светнем лампата през нощта и „развалим рахата“ на вредителите.</h1>
    </div>
    </div>
      

            </div>
        </div>
      ),
    },
    {
      title: "Ориенталска Хлебарка",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-slate-300 to-slate-700">
            <div className="flex">          
                <Image
                    src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/o-cockroach.png"
                    alt="Американска Хлебарка"
                    width="320"
                    height="320"
                    className="-translate-y-8"
                />
          <p className="">Ориенталска Хлебарка</p>
          </div>
          <div className="flex  ">

          <div className="flex flex-wrap">
    <div className="w-1/2 px-4 -mt-28">
        <h1 className="mt-10 text-xl font-russo">Латинско наименование</h1>
        <h1 className="mt-2 text-lg font-russo">Blatta orientalis</h1>
        <h1 className="mt-10 text-xl font-russo">КАК ИЗГЛЕЖДА</h1>
        <h1 className="mt-2 text-lg font-russo">Възрастната хлебарка е с размери 18 – 30 mm. Тялото е гръбо-коремно сплеснато с кафяво-черен или черен цвят, като коремът е по-светъл. Гърбът блести и изглежда сякаш е лакиран. При женските крилата са недоразвити, но дори и при мъжките те са по-къси от коремчето и не го покриват изцяло. Мъжките индивиди са с размери до 25 mm. Имат грифели (израстъци) на последния коремен сегмент. Ларвите (нимфите) приличат на възрастните, но са по-дребни.</h1>
        <h1 className="mt-10 text-xl font-russo">ПОВЕДЕНИЕ, ХРАНЕНЕ И НАВИЦИ</h1>
        <h1 className="mt-2 text-lg font-russo">Ориенталската хлебарка е масово срещан вид у нас. Обитава жилища, мазета, абонатни станции, подпокривни пространства, складове, ресторанти, магазини, фурни, хотели, болнични и детски заведения и други. Като всички хлебарки, ориенталската води нощен начин на живот и е всеяден вид, което я прави особено приспособима.</h1>
    </div>
    <div className="w-1/2 px-4 -mt-64">
    <h1 className="mt-10 text-xl font-russo">РАЗМНОЖАВАНЕ</h1>  

    <h1 className="mt-2 text-lg font-russo">Около една седмица след копулацията женската снася яйцата в оотека (яйчна капсула). Te са разположени в 2 реда по 8. Женската черна хлебарка, за разлика от кафявата, не носи яйчната капсула на своя корем до излюпването на ларвите, а само за кратко време, след което я поставя на топло и защитено място. Една женска може да отложи около 8 оотеки за период от 6 месеца. Това са приблизително 128 яйца.</h1>
    <h1 className="mt-10 text-xl font-russo">ВРЕДИ</h1>
    <h1 className="mt-2 text-lg font-russo">Поради това, че се храни с отпадъци от хранителните продукти на човека, ориенталската хлебарка е преносител на редица опасни за здравето патогени като Ешерихия Коли (E. Coli) и Салмонела (Salmonella spp.).</h1>
    <h1 className="mt-10 text-xl font-russo">ПРИЗНАЦИ ЗА НАПАДЕНИЕ</h1>
    <h1 className="mt-2 text-lg font-russo">Признаци за наличие на хлебарки са остатъците от съблекла, старите оотеки (яйчни капсули), изпражненията (във вид на дребни черни точки по кухненски шкафчета, хладилници, фаянс и др.), както и характерният хрускащ звук под краката ни при традиционните нощни разходки до хладилника.</h1>
    </div>
    </div>
      

            </div>
        </div>
      ),
    },
    // {
    //   title: "Content",
    //   value: "content",
    //   content: (
    //     <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
    //       <p>Content tab</p>
    //       <DummyContent />
    //     </div>
    //   ),
    // },
    // {
    //   title: "Random",
    //   value: "random",
    //   content: (
    //     <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
    //       <p>Random tab</p>
    //       <DummyContent />
    //     </div>
    //   ),
    // },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-6xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/cockroach.png"
      alt="dummy image"
      width="1000"
      height="1000"
      className=""
    />
  );
};

const Types = () => {
    return (
        <div className="flex flex-col-3 space-x-32 justify-center items-center">
            
            <div className="">
                <h1>4 - 5 cm</h1>
            </div>
            <div>
                <h1>test</h1>
            </div>
            <div>
                <h1>test</h1>
            </div>
      </div>
    );
  };
