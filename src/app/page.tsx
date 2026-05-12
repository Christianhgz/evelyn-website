import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedWork from "@/components/FeaturedWork";
import Quote from "@/components/Quote";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <FeaturedWork />
        <Quote />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
