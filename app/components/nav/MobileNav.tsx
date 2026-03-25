import React from "react";
import { motion, Variants, AnimatePresence } from "motion/react";
import Link from 'next/link'

type MobileNavProps = {
  isOpened: boolean;
};

type NavLinkType = {
  page: string
  href: string
}

const navLinks: NavLinkType[] =[
  {page: 'Home', href: '/'},
  {page: 'Services', href: '/'},
  {page: 'About', href: '/'},
  {page: 'Contact', href: '/'}
]

function renderNavLinks() {
  return navLinks.map((link) => {
    return (
      <Link key={link.page} href={link.href} className="text-primary-color tracking-tighter text-2xl">
        {link.page}
      </Link>
    )
  })
}
const navVariant: Variants={
  hidden: {
    opacity: 0, 
    y: -20,
    transition: {
      type: 'spring', 
      stiffness: 150,
      damping: 15
    } 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring', 
      stiffness: 300,
      damping: 15
    } 
  }
}

export default function MobileNav({ isOpened }: MobileNavProps) {
  return (
    <AnimatePresence>
      {isOpened? (
        <motion.nav variants={navVariant} initial='hidden' animate='visible' exit='hidden' className="h-20 border-y-2 border-white w-full absolute top-20 left-0 bg-black flex items-center justify-center gap-5 z-50">
          {renderNavLinks()}
        </motion.nav>
      ): null}
    </AnimatePresence>
  );
}
