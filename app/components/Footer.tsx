import React from "react";
import Instagram from "./svg/Instagram";
import LinkedIn from "./svg/LinkedIn";
import TikTok from "./svg/TikTok";

function getDate(): number {
  const date = new Date();
  return date.getFullYear();
}

export default function Footer() {
  return (
    <footer className="bg-neutral-900 flex flex-col items-center justify-center tracking-tighter py-10 px-20 gap-10 mt-40">
      <h2 className="text-white text-xl font-bold">G&S Mobile Detailing</h2>
      <p className="text-white/70 text-center leading-8">
        Luxury detailing services focused on precision, chemistry, and
        convenience
      </p>
      <div className="flex flex-col gap-3">
        <p className="text-white/70 text-2xl text-center">Socials:</p>
        <div className="flex gap-5">
          <Instagram />
          <LinkedIn />
          <TikTok />
        </div>
      </div>
      <p className="text-center text-white/70">
        &copy;{getDate()} G&S Mobile Detailing
      </p>
    </footer>
  );
}
