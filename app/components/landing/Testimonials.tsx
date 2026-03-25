import React from 'react'
import { TextAnimate } from '@/components/ui/text-animate'
import Star from '../svg/Star'

type TestimonialType = {
  name: string
  initial: string
  rating: number
  desc: string
}

const testimonials: TestimonialType[] = [
  {name: "Genevieve Torres", initial: "GT", rating: 5, desc: "\"Did a awesome job on my husband's truck. Detail was precise and very clean. On time and good price for all the work they did.\""},
  {name: 'Jesse Navarro', initial: 'JN', rating: 5, desc: '\"Very detailed and efficient. Great company would recommend to everyone\"'},
  {name: `Dan\'l Benton`, initial: 'DB', rating: 5, desc: '\"Thorough and professional. Would definitely use again. Great Attitude and customer service!\"'}
]

function renderTestimonials() {
  return testimonials.map((testimonial) => {
    return (
      <div key={testimonial.name} className="flex flex-col gap-4">
        <div className="flex gap-1">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
        <h2 className="text-xl text-white tracking-tighter">{testimonial.desc}</h2>
        <div className="flex gap-6 items-center">
          <div className="bg-neutral-800 text-primary-color text-sm font-bold rounded-lg p-2">{testimonial.initial}</div>
          <p className="text-white text-2xl">{testimonial.name}</p>
        </div>
      </div>
    )
  })
}


export default function Testimonials() {
  return (
    <section className="flex flex-col items-center justify-center gap-10">
          <div className="space-y-3 w-full">
            <TextAnimate
              animation="slideRight"
              as="p"
              className="text-primary-color text-md font-light"
              duration={0.8}
            >
              The Proof
            </TextAnimate>
            <TextAnimate
              className="text-5xl text-white font-medium tracking-tighter"
              duration={0.8}
            >
              Client Testimonials
            </TextAnimate>
          </div>
          <div className="flex flex-col gap-10">
            {renderTestimonials()}
          </div>
        </section>
  )
}
