import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import TrackRecord from "./components/TrackRecord";
import Clients from "./components/Clients";
import CatFramework from "./components/CatFramework";
import AccredianEdge from "./components/AccredianEdge";
import DomainExpertise from "./components/DomainExpertise";
import HowItWorks from "./components/HowItWorks";
import Faqs from "./components/Faqs";
import Testimonials from "./components/Testimonials";
import EnquireForm from "./components/EnquireForm";
import Footer from "./components/Footer";
import RevealProvider from "./components/RevealProvider";

export default function Home() {
  return (
    <RevealProvider>
      <NavBar />
      <main>
        <Hero />
        <TrackRecord />
        <Clients />
        <AccredianEdge />
        <DomainExpertise />
        <CatFramework />
        <HowItWorks />
        <Faqs />
        <Testimonials />
        <EnquireForm />
      </main>
      <Footer />
    </RevealProvider>
  );
}
