import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline-insects";
import { ImagesSliderDisinfection } from "./ImagesSliderDisinfection";
import { IconRosetteDiscountCheck, IconScript, IconSearch, IconPhone, IconSpray } from "@tabler/icons-react";

export function TimelineInsects() {
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
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover  w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
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
          Сертифициран ДДД експерт извършва детайлен оглед на обекта за установяване на наличието и вида на вредителите, които подлежат на унищожаване. Този етап е от ключово значение за правилното идентифициране на насекомите и оценка на степента на заразяване, за да се избере най-ефективният метод на третиране.
          </p>
          <div className="grid grid-cols-1 gap-4">
          <Image
                src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/images/23.png"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover  w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
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
          Нашите ДДД специалисти прилагат най-високите стандарти в борбата с насекомите, като използват одобрени биоциди и професионална техника за третиране. В зависимост от вида на вредителите и особеностите на обекта, се използват различни подходи, като пръскане, фумигация, примамки и други методи за максимална ефективност.          </p>

          <div className="grid grid-cols-1 gap-4 ">
            {/* <Image
              src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/images/6.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover  w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            /> */}
            <ImagesSliderDisinfection />
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
            След всяко третиране издаваме официален протокол съгласно изискванията на Министерството на здравеопазването, в който подробно се описват използваните методи и препарати. Този документ служи като доказателство за проведените мероприятия и осигурява прозрачност на процеса.            </p>
            <div className="grid grid-cols-1 gap-4">
              <Image
                src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/images/14.png"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover  w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
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
            При желание на клиента можем да осигурим последващо наблюдение на ефективността на третирането. Това включва редовни проверки и допълнителни мероприятия при необходимост, с цел пълно премахване на вредителите и гарантиране на дълготрайни резултати.
            </p>
            <div className="grid grid-cols-1 gap-4">
              <Image
                src="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/images/5.png"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover  w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
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
