"use client";
import React from 'react'
import { FlipWordsDemo } from '@/components/FlipWordsDemo'
import { CardHoverEffectDemo } from '@/components/CardHoverEffectDemo'


export default function PestsPage() {
    return (
        <div className='overflow-x-hidden'>
            <FlipWordsDemo />
            <CardHoverEffectDemo />
        </div>
    )
}