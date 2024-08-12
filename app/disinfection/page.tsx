"use client";
import React from 'react'
import { FlipWordsDemo } from '@/components/FlipWordsDemo'
import { CardHoverEffectDemo } from '@/components/CardHoverEffectDemo'
import { DisinfectionWords } from '@/components/DisinfectionWords';
import { CardSpotlightDemo } from '@/components/CardSpotlightDemo';


export default function DisinfectionPage() {
    return (
        <div className='overflow-x-hidden'>
            <DisinfectionWords />
            {/* <CardHoverEffectDemo /> */}
            <CardSpotlightDemo />
        </div>
    )
}