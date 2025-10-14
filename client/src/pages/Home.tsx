import SocialMediaBar from "@/components/SocialMediaBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CountdownTimer from "@/components/CountdownTimer";
import VideoSection from "@/components/VideoSection";
import MissionSection from "@/components/MissionSection";
import ChoosePath from "@/components/ChoosePath";
import AboutSection from "@/components/AboutSection";
import NFTShowcase from "@/components/NFTShowcase";
import Timeline from "@/components/Timeline";
import Tokenomics from "@/components/Tokenomics";
import RoadmapSection from "@/components/RoadmapSection";
import TransparencySection from "@/components/TransparencySection";
import HowToParticipate from "@/components/HowToParticipate";
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
        <ChoosePath />
        <AboutSection />
        <NFTShowcase />
        <Timeline />
        <Tokenomics />
        <RoadmapSection />
        <TransparencySection />
        <HowToParticipate />
      </main>
      <Footer />
    </div>
  );
}
