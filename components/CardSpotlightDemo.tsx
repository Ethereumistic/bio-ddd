import { CardSpotlight } from "@/components/ui/card-spotlight";

export function CardSpotlightDemo() {
  return (
    <div className="flex mx-auto items-center justify-center space-x-32 ">
    <CardSpotlight className="h-96 w-[500px] ">
      <p className="text-2xl font-russo relative z-20  text-white">
        Превантивна Дезинфекция
      </p>
      <div className="text-neutral-200 mt-4 relative z-20">
      Намаляваме вероятността Вашият дом да се превърне в среда на заразни заболявания чрез следните стъпки:
           <ul className="list-none  mt-2">
          <Step title="Дезинфекция на повърхности" />
          <Step title="Дезинфекция на трудно достъпни места" />
          <Step title="Хигиенизиране на текстил" />
          <Step title="Проветряване на помещенията" />
        </ul>
      </div>
      <p className="text-neutral-300 mt-8 relative z-20 text-sm">
        Свържете се с нас за да разберете по-подробно за нашият процес при превантивна дезинфекция.
      </p>
    </CardSpotlight>

    <CardSpotlight className="h-96 w-[500px] bg-slate-800">
      <p className="text-2xl font-russo relative z-20  text-white">
        Дезинфекция след Дератизация
      </p>
      <div className="text-neutral-200 mt-2 relative z-20">
      Дезинфекция след Дератизация (контрол на гризачи) е изключително важна поради рисковете от гризачите, които могат да пренасят различни опасни болести:
           <ul className="list-none  mt-2">
          <Step title="Разпространението на хантавирус" />
          <Step title="Избягване на салмонелоза" />
          <Step title="Предотвратяване на лептоспироза" />
          <Step title="Превенция на алергични реакции" />
        </ul>
      </div>
      <p className="text-neutral-300 mt-8 relative z-20 text-sm">
        Свържете се с нас за да разберете по-подробно за нашият процес при дезинфекция след контрол на гризачи.
      </p>
    </CardSpotlight>

    
    </div>
    
  );
}

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};
