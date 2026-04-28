import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Platform from "@/components/Platform";
import Guarantee from "@/components/Guarantee";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Platform />
      <Guarantee />
      <Contact />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
