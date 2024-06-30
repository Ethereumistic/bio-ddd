"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/utils/cn";

export function SignupFormDemo() {
  const [activeTab, setActiveTab] = useState<"home" | "business">("home");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    street: "",
    city: "",
    email: "",
    date: "",
    pest: "",
    organization: "",
    person: "",
  });

  const [formStatus, setFormStatus] = useState<string | null>(null);

  const handleTabChange = (tab: "home" | "business") => {
    setActiveTab(tab);
    setFormStatus(null);
    setFormData({
      name: "",
      phone: "",
      street: "",
      city: "",
      email: "",
      date: "",
      pest: "",
      organization: "",
      person: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
        ...formData,
      }),
    });

    const result = await res.json();

    if (result.success) {
      setFormStatus("Вие успешно изпратихте вашата заявка!");
      setFormData({
        name: "",
        phone: "",
        street: "",
        city: "",
        email: "",
        date: "",
        pest: "",
        organization: "",
        person: "",
      });
    } else {
      setFormStatus("Стана грешка! Моля опитайте отново след малко.");
    }
  };

  return (
    <div className="max-w-3xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <div className="flex justify-around mb-4">
        <button
          className={cn(
            "px-4 py-2",
            activeTab === "home" ? "bg-red-500 text-white rounded-2xl" : "bg-gray-200 dark:bg-gray-700 rounded-2xl"
          )}
          onClick={() => handleTabChange("home")}
        >
          Физически Лица
        </button>
        <button
          className={cn(
            "px-4 py-2",
            activeTab === "business" ? "bg-red-500 text-white rounded-2xl" : "bg-gray-200 dark:bg-gray-700 rounded-2xl"
          )}
          onClick={() => handleTabChange("business")}
        >
          Бизнес клиенти и Публични Възложители
        </button>
      </div>
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 ">
      Ако имате въпроси или искате да се консултирате, потърсете ни за безплатна консултация на номер
      </h2>
      <h2 className="font-bold text-2xl text-neutral-800 dark:text-neutral-200 text-center my-2">
        +359 88 123 4567
      </h2>
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 ">
      или попълнете формата и изпратете заявка за безплатен оглед в удобно за Вас време
      </h2>

      <form className="my-8" onSubmit={handleSubmit}>
        {formStatus && <p className="mb-4">{formStatus}</p>}
        {activeTab === "home" && (
          <>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="name">Име и Фамилия</Label>
              <Input
                id="name"
                name="name"
                placeholder="Георги Иванов"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="phone">Телефонен Номер</Label>
              <Input
                id="phone"
                name="phone"
                placeholder="+359 88 123 4567"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </LabelInputContainer>
            
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Имейл Адрес</Label>
              <Input
                id="email"
                name="email"
                placeholder="georgi.ivanov@bio-ddd.com"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="city">Населено Място</Label>
              <Input
                id="city"
                name="city"
                placeholder="Село / Град"
                type="text"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="street">Улица</Label>
              <Input
                id="street"
                name="street"
                placeholder="улица Райчо Каролев 7"
                type="text"
                value={formData.street}
                onChange={handleChange}
                required
              />
            </LabelInputContainer>


            <LabelInputContainer className="mb-4">
              <Label htmlFor="date">Предпочитана Дата за Посещение</Label>
              <Input
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="pest">Изберете Вредител</Label>
              <select
                id="pest"
                name="pest"
                value={formData.pest}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              >
                <option value="cockroach">Хлебарки</option>
                <option value="rat">Гризачи</option>
                <option value="bedbug">Дървеници</option>
                <option value="flea">Бълхи</option>
                <option value="fly">Мухи</option>
                <option value="wasp">Оси</option>
                <option value="mosquito">Комари</option>
                <option value="tick">Кърлежи</option>
                <option value="ant">Мравки</option>
                <option value="snake">Змии</option>
                <option value="spider">Паяци</option>
                <option value="bird">Птици</option>
                {/* Add more pests as needed */}
              </select>
            </LabelInputContainer>
          </>
        )}
        {activeTab === "business" && (
          <>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="organization">Име на Организация</Label>
              <Input
                id="organization"
                name="organization"
                placeholder="Bio DDD"
                type="text"
                value={formData.organization}
                onChange={handleChange}
                required
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="person">Име и Фамилия</Label>
              <Input
                id="person"
                name="person"
                placeholder="Георги Иванов"
                type="text"
                value={formData.person}
                onChange={handleChange}
                required
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="phone">Телефонен Номер</Label>
              <Input
                id="phone"
                name="phone"
                placeholder="+359 88 123 4567"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Имейл Адрес</Label>
              <Input
                id="email"
                name="email"
                placeholder="georgi.ivanov@bio-ddd.com"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </LabelInputContainer>


            <LabelInputContainer className="mb-4">
              <Label htmlFor="city">Населено Място</Label>
              <Input
                id="city"
                name="city"
                placeholder="Село / Град"
                type="text"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="street">Улица</Label>
              <Input
                id="street"
                name="street"
                placeholder="площад Изгрев 3"
                type="text"
                value={formData.street}
                onChange={handleChange}
                required
              />
            </LabelInputContainer>



          </>
        )}
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Изпрати Заявка
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        <h2 className="font-bold text-sm text-neutral-800 dark:text-neutral-200 ">
        С натискането на бутона &quot;Изпрати Заявка&quot; Вие автоматично се съгласявате Вашите данни да бъдат обработени за целите на сайта.
      </h2>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-lred to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-lred to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};