import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-patriot-navy via-patriot-red/20 to-patriot-navy"></div>
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 right-0 h-[8%] bg-patriot-red"></div>
        <div className="absolute top-[8%] left-0 right-0 h-[8%] bg-white"></div>
        <div className="absolute top-[16%] left-0 right-0 h-[8%] bg-patriot-red"></div>
        <div className="absolute top-[24%] left-0 right-0 h-[8%] bg-white"></div>
        <div className="absolute top-[32%] left-0 right-0 h-[8%] bg-patriot-red"></div>
        <div className="absolute top-[40%] left-0 right-0 h-[8%] bg-white"></div>
        <div className="absolute top-[48%] left-0 right-0 h-[8%] bg-patriot-red"></div>
      </div>
      
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white/5"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 20 + 10}px`,
            }}
          >
            ★
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-8 inline-flex items-center gap-3">
          <span className="text-4xl">⭐</span>
          <span className="inline-block px-6 py-3 bg-white text-patriot-navy text-lg font-bold rounded-md shadow-2xl">
            AMERICA'S 250TH ANNIVERSARY
          </span>
          <span className="text-4xl">⭐</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
          THE FIRST
          <br />
          <span className="bg-gradient-to-r from-patriot-red via-white to-patriot-blue bg-clip-text text-transparent">NATIONAL ANTHEM</span>
          <br />
          <span className="text-patriot-gold font-serif">NFT</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto">
          Own a piece of America's 250th anniversary. Professional mezzo soprano Hannah Magnelli performs the Star-Spangled Banner as a unique digital collectible.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => scrollToSection("participate")}
            className="bg-patriot-red hover:bg-patriot-red-hover text-white h-16 px-10 text-xl font-bold shadow-2xl border-2 border-white"
            data-testid="button-join-waitlist-hero"
          >
            ★ JOIN WAITLIST ★
          </Button>
          <Button
            onClick={() => scrollToSection("mission")}
            variant="outline"
            className="h-16 px-10 text-xl font-bold border-4 border-white bg-white/10 hover:bg-white/30 text-white backdrop-blur-md shadow-2xl"
            data-testid="button-learn-more"
          >
            <Play className="mr-2 h-6 w-6" />
            WATCH VIDEO
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-patriot-gold font-serif">1776</div>
            <div className="text-sm text-white/70 mt-1">Independence</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-patriot-gold font-serif">1.77B</div>
            <div className="text-sm text-white/70 mt-1">Total Supply</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-patriot-gold font-serif">$17.76</div>
            <div className="text-sm text-white/70 mt-1">Launch Price</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-patriot-gold font-serif">2026</div>
            <div className="text-sm text-white/70 mt-1">250th Year</div>
          </div>
        </div>
      </div>
    </section>
  );
}
