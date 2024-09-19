import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline-rats";
import { ImagesSliderDisinfection } from "./ImagesSliderDisinfection";
import { IconRosetteDiscountCheck, IconScript, IconSearch, IconPhone, IconSpray } from "@tabler/icons-react";
import { ImagesSliderRat } from "./ImagesSliderRat";

export function TimelineRats() {
  const data = [
    {
      title: "Контакт с нас",
      icon: IconPhone,
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-xl font-russo mb-8">
            Клиентите могат да се свържат с нас по удобен за тях начин – чрез телефонно обаждане или през нашия уебсайт, където могат да попълнят кратка форма за заявка. След като получим запитването, наш екип се свързва с клиента за уточняване на детайлите и договаряне на удобно време за оглед на обекта.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/images/contact.png"
              alt="Контакт с нас"
              width={500}
              height={500}
              className="rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Оглед на обекта",
      icon: IconSearch,
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-xl font-russo mb-8">
            Сертифициран експерт извършва детайлен оглед на обекта за установяване на наличието на гризачи и местата им на проникване. Това е важен етап за правилното оценяване на състоянието и избора на подходящи мерки за контрол.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/images/23.png"
              alt="Оглед на обекта"
              width={500}
              height={500}
              className="rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Третиране на обекта",
      icon: IconSpray,
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-xl font-russo mb-4">
            Нашите специалисти използват професионални и одобрени средства за борба с гризачи. Приложените методи включват използване на капани, примамки и отрови, които гарантират ефективно премахване на вредителите, без да се застрашава здравето на хора и домашни любимци.
          </p>
          <div className="grid grid-cols-1 gap-4 ">
            <ImagesSliderRat />
          </div>
        </div>
      ),
    },
    {
      title: "Издаване на протокол",
      icon: IconScript,
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-xl font-russo mb-8">
            След всяка деретизация издаваме протокол съгласно изискванията на Министерството на здравеопазването. Протоколът съдържа подробности за използваните методи и средства и служи като официален документ за извършените действия.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/images/17.png"
              alt="Издаване на протокол"
              width={500}
              height={500}
              className="rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgба(34,_42,_53,_0.04),_0_0_4px_rgба(34,_42,_53,_0.08),_0_16px_68px_rgба(47,_48,_55,_0.05),_0_1px_0_rgба(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Проследяване на ефективността",
      icon: IconRosetteDiscountCheck,
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-xl font-russo mb-8">
            За да гарантираме трайни резултати, предлагаме последващо наблюдение и допълнителни проверки при необходимост. Тези действия са насочени към предотвратяване на повторно нашествие на гризачи и запазване на дългосрочна безопасност.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/images/21.png"
              alt="Проследяване на ефективността"
              width={500}
              height={500}
              className="rounded-lg object-cover w-full shadow-[0_0_24px_rgба(34,_42,_53,_0.06),_0_1px_1px_rgба(0,_0,_0,_0.05),_0_0_0_1px_rgба(34,_42,_53,_0.04),_0_0_4px_rgба(34,_42,_53,_0.08),_0_16px_68px_rgба(47,_48,_55,_0.05),_0_1px_0_rgба(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
