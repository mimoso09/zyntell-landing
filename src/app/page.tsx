import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Solutions from "@/components/Solutions";
import HowItWorks from "@/components/HowItWorks";
import DemoChat from "@/components/DemoChat";
import UseCases from "@/components/UseCases";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
import Trust from "@/components/Trust";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Fixed canvas background with particle network */}
      <AnimatedBackground />

      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar />
        <main>
          <Hero />
          <div className="section-divider mx-auto max-w-7xl" />
          <Problems />
          <div className="section-divider mx-auto max-w-7xl" />
          <Solutions />
          <div className="section-divider mx-auto max-w-7xl" />
          <HowItWorks />
          <div className="section-divider mx-auto max-w-7xl" />
          <DemoChat />
          <div className="section-divider mx-auto max-w-7xl" />
          <UseCases />
          <div className="section-divider mx-auto max-w-7xl" />
          <Benefits />
          <div className="section-divider mx-auto max-w-7xl" />
          <Pricing />
          <div className="section-divider mx-auto max-w-7xl" />
          <Trust />
          <div className="section-divider mx-auto max-w-7xl" />
          <FAQ />
          <div className="section-divider mx-auto max-w-7xl" />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </>
  );
}
