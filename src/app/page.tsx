import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import BriefEngine from "@/components/BriefEngine";
import Solutions from "@/components/Solutions";
import FlexMap from "@/components/FlexMap";
import Scenarios from "@/components/Scenarios";
import Comparison from "@/components/Comparison";
import Criteria from "@/components/Criteria";
import Report from "@/components/Report";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ValueProps />
        <BriefEngine />
        <Solutions />
        <FlexMap />
        <Scenarios />
        <Comparison />
        <Criteria />
        <Report />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
