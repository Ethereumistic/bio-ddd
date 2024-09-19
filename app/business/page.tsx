import React from 'react'
import { FlipWordsDemo } from '@/components/FlipWordsDemo'
import { CardHoverEffectDemo } from '@/components/CardHoverEffectDemo'
import { BusinessCanvasReveal } from '@/components/BusinessCanvasReveal'
import { SignupFormDemo } from '@/components/SignupFormDemo'


export default function BusinessPage() {
    return (
        <div className='overflow-x-hidden'>
            <div>
            <BusinessCanvasReveal />
            </div>

            <div className='mt-32 flex flex-col-reverse xl:flex-row'>
              <SignupFormDemo />
            </div>
            </div>

    )
}