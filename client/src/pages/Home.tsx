import SocialMediaBar from "@/components/SocialMediaBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CountdownTimer from "@/components/CountdownTimer";
import VideoSection from "@/components/VideoSection";
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
      <SocialMediaBar />
      <Header />
      <main>
        <HeroSection />
        <CountdownTimer />
        <VideoSection />
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
