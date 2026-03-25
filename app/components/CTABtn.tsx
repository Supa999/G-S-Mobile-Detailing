"use client";
import React from "react";
import Link from "next/link";
import { motion, Variants } from "motion/react";

const btnVariant: Variants ={
  hidden: {
    opacity: 0,
    x: -20, 
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 15, 
      delay: 0.5
    }
  }
}

export default function CTABtn() {
  return (
    <motion.div variants={btnVariant} initial="hidden" whileInView='visible' viewport={{once: false}} className="flex flex-col">
      <Link
        href=""
        className="text-white text-2xl font-bold bg-linear-to-r from-primary-color via-purple-600 to-primary-color rounded-xl py-4 text-center"
      >
        <button>Book Online</button>
      </Link>
    </motion.div>
  );
}
