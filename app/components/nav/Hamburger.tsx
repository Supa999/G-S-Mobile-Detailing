'use client'
import React, {useState} from 'react'
import { motion, Variants} from 'motion/react'
import MobileNav from './MobileNav'

const topDivVariants: Variants = {
  closed: {
    rotate: 0,
    y: 0
  },
  opened: {
    rotate: 45,
    y: 8
  }
}

const middleDivVariants: Variants = {
  closed: {
    opacity: 1
  }, 
  opened: {
    opacity: 0
  }
}

const bottomDivVariant: Variants = {
  closed: {
    rotate: 0,
    y: 0
  }, 
  opened: {
    rotate: -45,
    y: -7
  }
}

const btnVariant: Variants = {
  hidden: {
    opacity: 0,
    x: 20
  }, 
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6
    }
  }
}



export default function Hamburger() {
  const [isOpened, setOpened] = useState<boolean>(false);
  return (
    <motion.button variants={btnVariant} initial="hidden" whileInView='visible' viewport={{once: false}} className="flex flex-col gap-1" onClick={() => setOpened(!isOpened)}>
      <motion.div variants={topDivVariants} animate={isOpened? 'opened': 'closed'} className="bg-white h-1 w-7 rounded-2xl"></motion.div>
      <motion.div variants={middleDivVariants} animate={isOpened? 'opened': 'closed'} className="bg-white h-1 w-7 rounded-2xl"></motion.div>
      <motion.div variants={bottomDivVariant} animate={isOpened? 'opened': 'closed'} className="bg-white h-1 w-7 rounded-2xl"></motion.div>
      <MobileNav isOpened={isOpened} />
    </motion.button>
  )
}
