'use client'
import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

type TabType = 'terms' | 'privacy' | 'cookies';

const LegalPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('terms');
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const tabFromUrl = searchParams.get('tab') as TabType;
    if (tabFromUrl && ['terms', 'privacy', 'cookies'].includes(tabFromUrl)) {
      setActiveTab(tabFromUrl);
    }
  }, [pathname]);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    router.push(`/legal?tab=${tab}`, undefined,);
  };

  const tabContent = {
    terms: `
# Правила и условия

## 1. Общи разпоредби

1.1. Настоящите Правила и условия уреждат отношенията между посетителите на уебсайта на Bio DDD (наричан по-долу "Сайтът") и собственика на Сайта.

1.2. С използването на Сайта, вие се съгласявате с настоящите Правила и условия. Ако не сте съгласни с тях, моля, не използвайте Сайта.

## 2. Услуги

2.1. Сайтът предоставя информация за услугите по дезинфекция, дезинсекция и дератизация, предлагани от Bio DDD.

2.2. Информацията на Сайта е само с информативен характер. За конкретни цени и условия, моля свържете се с нас чрез формата за контакт или чрез позвъняване на подадения телефонен номер.

## 3. Форма за контакт

3.1. Чрез формата за контакт на Сайта, вие можете да изпратите запитване за услугите на Bio DDD.

3.2. При използване на формата за контакт, вие се съгласявате да предоставите точна и актуална информация.

## 4. Ограничаване на отговорността

4.1. Информацията на Сайта се предоставя "както е", без каквито и да било гаранции.

4.2. Bio DDD не носи отговорност за преки или косвени щети, произтичащи от използването на Сайта.

## 5. Промени в Правилата и условията

5.1. Запазваме си правото да променяме тези Правила и условия. Промените влизат в сила след публикуването им на Сайта.

## 6. Приложимо право

6.1. Настоящите Правила и условия се уреждат от законите на Република България.
    `,
    privacy: `
# Политика за поверителност

## 1. Въведение

Настоящата Политика за поверителност описва как Bio DDD събира, използва и защитава личната информация, предоставена от посетителите на нашия уебсайт.

## 2. Събиране на информация

2.1. Събираме само информацията, която ни предоставяте доброволно чрез формата за контакт:
- Име и фамилия и/или Име на организация
- Имейл адрес
- Телефон
- Населено място
- Улица (приложимо при бизнес клиенти и публични възложители)

2.2. Не събираме никаква друга лична информация за посетителите на сайта.

## 3. Използване на информацията

3.1. Използваме събраната информация единствено за:
- Отговор на вашите запитвания
- Предоставяне на информация за нашите услуги
- Изготвяне на оферти при поискване

## 4. Съхранение и защита на информацията

4.1. Вашата информация се съхранява само за времето, необходимо за обработка на запитването ви.


## 5. Споделяне на информация

5.1. Не споделяме вашата лична информация с трети страни.

## 6. Контакт

6.1. За въпроси, моля свържете се с нас на biodddltd@gmail.com
    `,
    cookies: `
# Политика за бисквитките

## 1. Използване на бисквитки

1.1. Нашият уебсайт използва минимален брой бисквитки, необходими само за основното функциониране на сайта.

## 2. Видове бисквитки

2.1. Използваме само технически необходими бисквитки за:
- Осигуряване на основната функционалност на сайта
- Запазване на предпочитанията за показване (светла/тъмна тема)

2.2. Не използваме бисквитки за:
- Проследяване
- Реклама
- Анализ на поведението

## 3. Управление на бисквитките

3.1. Можете да контролирате бисквитките чрез настройките на вашия браузър:
- Да ги изтриете
- Да ги блокирате
- Да разрешите само определени видове

3.2. Блокирането на всички бисквитки може да повлияе на функционалността на сайта.

## 4. Съгласие

4.1. Като използвате нашия сайт, вие се съгласявате с използването на описаните технически необходими бисквитки.

## 5. Промени

5.1. Запазваме си правото да актуализираме тази политика. Промените влизат в сила след публикуването им.

## 6. Повече информация за бисквитките
https://allaboutcookies.org/
https://www.youronlinechoices.com/bg/
    `,
};

  return (
    <div className="container mx-auto px-4 py-8 justify-center items-center flex flex-col mt-24">
      <h1 className="text-4xl font-montserrat text-black dark:text-white mb-8">Правила и условия</h1>
      <div className="mb-8">
        <div className="flex space-x-2">
          {['terms', 'privacy', 'cookies'].map((tab) => (
            <button
              key={tab}
              className={`px-3 py-2 rounded ${
                activeTab === tab ? 'bg-ddblue dark:bg-lgreen text-white' : 'bg-gray-400'
              }`}
              onClick={() => handleTabChange(tab as TabType)}
            >
              {tab === 'terms' && 'Правила и условия'}
              {tab === 'privacy' && 'Политика за поверителност'}
              {tab === 'cookies' && 'Бисквитки'}
            </button>
          ))}
        </div>
      </div>
      <div className="prose max-w-6xl">
        {tabContent[activeTab].split('\n').map((line, index) => {
          if (line.startsWith('# ')) {
            return <h1 className='text-4xl font-montserrat text-black dark:text-white mb-8' key={index}>{line.substring(2)}</h1>;
          } else if (line.startsWith('## ')) {
            return <h2 className='text-2xl font-montserrat text-black dark:text-white my-8' key={index}>{line.substring(3)}</h2>;
          } else {
            return <p className='text-black dark:text-white font-montserrat text-lg' key={index}>{line}</p>;
          }
        })}
      </div>
    </div>
  );
};

export default LegalPage;