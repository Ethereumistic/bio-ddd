"use client";
import React from 'react'
import { FlipWordsDemo } from '@/components/FlipWordsDemo'
import { CardHoverEffectDemo } from '@/components/CardHoverEffectDemo'
import { SignupFormDemo } from '@/components/SignupFormDemo';


export default function PestsPage() {
    return (
        <div className='overflow-x-hidden'>
            
            <FlipWordsDemo />
            <CardHoverEffectDemo />

            
            <div className=' flex flex-col-reverse xl:flex-row'>
              <SignupFormDemo />
            </div>
        </div>
    )
}