import Navbar from "@/components/Navbar";
import Hero from "@/components/HeroSection";
import About from "@/components/AboutSection";
import Services from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ClientsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <Hero />
    <About />
    <Services />
    <StatsSection />
    <ProjectsSection />
    <ClientsSection />
    <ContactSection />
    <Footer />
  </>
);

export default Index;
