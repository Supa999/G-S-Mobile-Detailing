"use client";
import Link from "next/link";
import RightArrow from "../svg/RightArrow";
import SlideRight from "../animations/SlideRight";

export default function CTAButtons() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 w-full px-8">
      <SlideRight>
        <Link
          href=""
          className="bg-linear-to-r from-primary-color to-purple-600 rounded-lg text-white w-full text-center text-xl font-medium tracking-wide py-3"
        >
          <button>Book A Detail</button>
        </Link>
      </SlideRight>
      <SlideRight>
        <Link
          href=""
          className="bg-neutral-color text-white text-xl font-medium text-center w-full py-4 rounded-lg"
        >
          <button>
            Our Gallery <RightArrow />
          </button>
        </Link>
      </SlideRight>
    </section>
  );
}
