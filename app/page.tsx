import Hero from "./components/landing/Hero";
import Services from "./components/landing/Services";
import Process from "./components/landing/Process";
import Testimonials from './components/landing/Testimonials'
import CTASection from "./components/landing/CTASection";

export default function LandingPage() {
  return (
    <section className="">
      <Hero />
      <section className="mt-120 px-8 space-y-40">
        <Services />
        <Process />
        <Testimonials />
        <CTASection />
      </section>
    </section>
  );
}
