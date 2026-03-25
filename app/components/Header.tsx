import React from "react";
import { TextAnimate } from "@/components/ui/text-animate";
import Hamburger from "./nav/Hamburger";

export default function Header() {
  return (
    <header className="flex items-center justify-between h-20 bg-neutral px-8">
      <TextAnimate
        animation="slideRight"
        as="h1"
        className="text-white text-4xl flex-1/2 font-bold italic tracking-tight"
      >
        G&S Detailing
      </TextAnimate>
        <Hamburger />
    </header>
  );
}
