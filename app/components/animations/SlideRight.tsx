'use client'
import React from 'react'
import { motion, Variants } from 'motion/react'

const slideRight: Variants = {
  hidden: {
    scale: 0.9,
    opacity: 0,
    x: -20
  }, 
  visible: {
    scale: 1,
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 15,
      delay: 0.3
    }
  }
}

type SlideRightProps = {
  children: React.ReactNode
  key?: string
}

export default function SlideRight({children, key = ''}: SlideRightProps) {
  return (
    <motion.div variants={slideRight} initial='hidden' whileInView='visible' viewport={{once: false, amount: 0.8}} key={key} className="flex flex-col w-full">
      {children}
    </motion.div>
  )
}
