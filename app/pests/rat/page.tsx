"use client";
import React from 'react'
import { FlipWordsDemo } from '@/components/FlipWordsDemo'
import { CardHoverEffectDemo } from '@/components/CardHoverEffectDemo'
import { TabsDemo } from '@/components/TabsDemo';
import { BentoGridDemo } from '@/components/BentoGridDemo';
import { BackgroundGradientDemo } from '@/components/BackgroundGradientDemo';


export default function Rat() {
    return (
        <div className='flex'>

            <div className='flex mx-auto mt-32 space-x-8'>
                {/* <div className='mt-8'>
                <BentoGridDemo />
                </div> */}
            <BackgroundGradientDemo

                imageSrc1="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/Mus-musculus.png"
                title1="ДОМАШНА МИШКА"
                description1="Mалък гризач, често срещан в домовете. Тя е известна с бързото си размножаване и адаптивност. 
                                Мишките могат да причинят сериозни щети на имущество и храна, а също така са носители на различни 
                                заболявания. Превенцията и контрола на мишките са от съществено значение за здравословната среда в дома."
                button1="ДОМАШНА МИШКА"


                imageSrc2="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/Rattus-rattus.png"
                title2="ЧЕРЕН ПЛЪХ"
                description2="Известен като корабен плъх, е разпространен в тропическите и субтропическите райони. 
                                Той е по-дребен и по-подвижен от сивия плъх и често живее в тавани и дървета. Черните 
                                плъхове могат да повредят строителни материали и електрически кабели, 
                                както и да разпространяват болести и паразити."
                button2="ЧЕРЕН ПЛЪХ"


                imageSrc3="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/Rattus-norvegicus.png"
                title3="СИВ ПЛЪХ"
                description3="Известен още като норвежки плъх или канален плъх, е по-голям и масивен от черния плъх. 
                                Той обикновено живее в подземни тунели и канализации, но може да се намери и в сгради. 
                                Сивите плъхове са известни със своята разрушителна дейност и с това, че пренасят опасни патогени."
                button3="СИВ ПЛЪХ"
                               
                
                imageSrc4="https://cdn.jsdelivr.net/gh/Ethereumistic/bio-ddd-assets/entity-assets/real/Microtus-arvalis.png"
                title4="ПОЛЕВКА"
                description4="Малък гризач, който предпочита открити полета и земеделски райони. Полевките са известни с вредителската 
                                си дейност върху култури и градини, като унищожават корени и стъбла на растения. Те могат да причинят 
                                значителни икономически щети, особено в земеделието."
                button4="ПОЛЕВКА"
                
/>

            </div>


        </div>
    )
}