"use client";
import React from 'react'
import { FlipWordsDemo } from '@/components/FlipWordsDemo'
import { CardHoverEffectDemo } from '@/components/CardHoverEffectDemo'
import { TabsDemo } from '@/components/TabsDemo';


export default function Cockroach() {
    return (
        <div className='overflow-x-hidden overflow-y-hidden'>
            {/* <FlipWordsDemo /> */}
            <TabsDemo />
        </div>
    )
}