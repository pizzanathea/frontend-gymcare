import Navbar from "@/components/navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main>
            <Navbar />
            <section id="home"><Hero /></section>
            <section id="stats"><Stats /></section>
            <section id="features"><Features /></section>
            <section id="cta"><CTA /></section>
            <section id="faq"><Footer /></section>
        </main>
    );
}