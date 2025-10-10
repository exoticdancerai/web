import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import NFTShowcase from "@/components/NFTShowcase";
import Timeline from "@/components/Timeline";
import Tokenomics from "@/components/Tokenomics";
import HowToParticipate from "@/components/HowToParticipate";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <MissionSection />
        <NFTShowcase />
        <Timeline />
        <Tokenomics />
        <HowToParticipate />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
