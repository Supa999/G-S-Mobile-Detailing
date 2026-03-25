import React from "react";
import { TextAnimate } from "@/components/ui/text-animate";
import CTAButtons from "./CTAButtons";

export default function Hero() {
  return (
    <section className="bg-[url('/hero.webp')] bg-cover bg-center h-100">
      <section className="flex flex-col items-center justify-center h-full bg-linear-to-r from-black to-black/20 px-8">
        <section className="flex flex-col items-start gap-3 justify-center w-full">
          <div className="space-y-5">
            <TextAnimate
              animation="slideRight"
              as="p"
              className="text-primary-color text-md font-light"
              duration={0.8}
            >
              G&S Mobile Detailing
            </TextAnimate>
            <TextAnimate
              animation="slideLeft"
              as="h2"
              className="text-white text-6xl w-1/2 leading-8 font-medium tracking-tighter"
              duration={0.8}
            >
              Precision. Evolution.
            </TextAnimate>
            <TextAnimate
              animation="slideRight"
              as="p"
              className="text-lg text-white/70 tracking-tightest leading-8 w-3/4"
              duration={0.8}
            >
              The pinnacle of mobile automotive restoration. We bring the
              showroom to your doorstep.
            </TextAnimate>
          </div>
        </section>
      </section>
      <CTAButtons />
    </section>
  );
}
