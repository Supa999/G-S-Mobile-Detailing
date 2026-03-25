import React from "react";
import { TextAnimate } from "@/components/ui/text-animate";
import Image, { StaticImageData } from "next/image";
import ExteriorImage from "@/public/exterior_service_pic.webp";
import InteriorImage from "@/public/interior_service_pic.webp";
import PremiumImage from "@/public/premium_pic.webp";
import SlideRight from "../animations/SlideRight";

type ServicesType = {
  title: string;
  image: StaticImageData | string;
  desc: string;
  price: string;
};

const services: Array<ServicesType> = [
  {
    title: "Exterior Only Detail",
    image: ExteriorImage,
    desc: "Multi-stage decontamination and paint enhancement for a deep, liquid gloss finish",
    price: "$60",
  },
  {
    title: "Interior Deep Clean & Reset",
    image: InteriorImage,
    desc: "Surgical precision cleaning for every surface, from alcantara to exotic leathers",
    price: "$130",
  },
  {
    title: "Premium Detailing",
    image: PremiumImage,
    desc: "Combine our exterior and interior packages to get the best clean on the market",
    price: "$200",
  },
];

function renderServices() {
  return services.map((service) => {
    return (
      <SlideRight key={service.title}>
        <div className="bg-neutral-color rounded-2xl">
          <Image src={service.image} alt="" className="rounded-t-2xl" />
          <div className="flex flex-col items-start justify-center gap-3 px-8 py-4 tracking-tighter">
            <h2 className="text-2xl font-bold text-white">{service.title}</h2>
            <p className="text-white/70">{service.desc}</p>
            <p className="text-primary-color tracking-wide mt-4">
              From {service.price}
            </p>
          </div>
        </div>
      </SlideRight>
    );
  });
}

export default function Services() {
  return (
    <section className="flex flex-col items-center justify-center gap-10">
      <div className="space-y-3 w-full">
        <TextAnimate
          animation="slideRight"
          as="p"
          className="text-primary-color text-md font-light"
          duration={0.8}
        >
          Automotive Care
        </TextAnimate>
        <TextAnimate
          className="text-5xl text-white font-medium tracking-tighter"
          duration={0.8}
        >
          Our Services
        </TextAnimate>
      </div>
      {renderServices()}
    </section>
  );
}
