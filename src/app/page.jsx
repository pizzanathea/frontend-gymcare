import Navbar from "@/components/navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <section id="home">
        <Hero />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="stats">
        <Stats />
      </section>
      <section id="cta">
        <CTA />
      </section>
      <section id="faq">
        <Footer />
      </section>
    </>
  );
}