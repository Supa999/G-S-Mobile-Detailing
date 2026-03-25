import { ComponentType, SVGProps } from "react";
import { TextAnimate } from "@/components/ui/text-animate";
import Calender from "../svg/Calender";
import Beaker from "../svg/Beaker";
import Check from "../svg/Check";
import SlideRight from "../animations/SlideRight";

type ProcessType = {
  title: string;
  desc: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const processes: ProcessType[] = [
  {
    title: "Book",
    icon: Calender,
    desc: "Book online or over the phone and receive updates about the appointment.",
  },
  {
    title: "Execute",
    icon: Beaker,
    desc: "Our experts arrive to inspect and detail your vehicle with top-rated products & tools",
  },
  {
    title: "Satisfy",
    icon: Check,
    desc: "We ensure you are fully satisfied with the service & collect payment",
  },
];

function renderProcess() {
  return processes.map((process) => {
    const Icon = process.icon;
    return (
      <SlideRight key={process.title}>
        <div key={process.title} className="flex flex-col mx-20 gap-5">
          <div className="bg-neutral-color p-2 w-26 mx-auto item-center justify-center">
            <Icon className="size-22 text-primary-color" />
          </div>
          <div className="flex flex-col text-center tracking-tighter gap-2">
            <h2 className="text-white text-4xl font-bold">{process.title}</h2>
            <p className="text-white/70 text-xl">{process.desc}</p>
          </div>
        </div>
      </SlideRight>
    );
  });
}

export default function Process() {
  return (
    <section className="flex flex-col items-center justify-center gap-10">
      <div className="space-y-3 w-full">
        <TextAnimate
          animation="slideRight"
          as="p"
          className="text-primary-color text-md font-light"
          duration={0.8}
        >
          The Process
        </TextAnimate>
        <TextAnimate
          className="text-5xl text-white font-medium tracking-tighter"
          duration={0.8}
        >
          How It&apos;s Done
        </TextAnimate>
      </div>
      <div className="space-y-34 mt-20">{renderProcess()}</div>
    </section>
  );
}
