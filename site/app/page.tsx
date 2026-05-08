import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { PriceBanner } from "@/components/sections/PriceBanner";
import { Disclaimer } from "@/components/sections/Disclaimer";
import { BuildSomething } from "@/components/sections/BuildSomething";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { SessionPreviews } from "@/components/sections/SessionPreviews";
import { Faqs } from "@/components/sections/Faqs";

export default function Home() {
  return (
    <main className="relative bg-white">
      <Nav />
      <Hero />
      <Intro />
      <PriceBanner />
      <Disclaimer />
      <BuildSomething />
      <HowItWorks />
      <SessionPreviews />
      <Faqs />
      <Footer />
    </main>
  );
}
