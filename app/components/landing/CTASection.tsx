import React from 'react'
import { TextAnimate } from '@/components/ui/text-animate'
import CTABtn from '../CTABtn'
import SlideRight from '../animations/SlideRight'

export default function CTASection() {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="bg-neutral-900 flex flex-col py-10 tracking-tighter gap-10 px-10 rounded-xl">
        <TextAnimate animation="slideRight" as="h2" className="text-white text-4xl text-center font-bold">
          Ready for the transformation?
        </TextAnimate>
        <TextAnimate animation="slideLeft" as="p" className="text-white/70 text-lg text-center font-bold leading-8">
          Secure your slot in our detailing schedule. View pricing and book any service online 24/7. No credit card required. 
        </TextAnimate>
        <CTABtn />
      </div>
    </section>
  )
}
