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
      <div className="absolute inset-0 bg-gradient-to-br from-patriot-navy via-patriot-blue/30 to-patriot-navy"></div>
      
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bS00IDBoMnYyaC0ydi0yem0wIDRoMnYyaC0ydi0yem0wIDRoMnYyaC0ydi0yem0wIDRoMnYyaC0ydi0yem0wIDRoMnYyaC0ydi0yem0wIDRoMnYyaC0ydi0yem0wIDRoMnYyaC0ydi0yem0wIDRoMnYyaC0ydi0yem0wIDRoMnYyaC0ydi0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-6 inline-block">
          <span className="inline-block px-4 py-2 bg-patriot-gold/20 border border-patriot-gold/40 rounded-full text-patriot-gold text-sm font-medium backdrop-blur-sm">
            America's 250th Anniversary
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
          THE FIRST NATIONAL
          <br />
          <span className="text-patriot-gold font-serif">ANTHEM NFT</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
          Own a piece of America's 250th anniversary. Professional mezzo soprano Hannah Magnelli performs the Star-Spangled Banner as a unique digital collectible.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => scrollToSection("participate")}
            className="bg-patriot-red hover:bg-patriot-red-hover text-white h-14 px-8 text-lg"
            data-testid="button-join-waitlist-hero"
          >
            Join Waitlist
          </Button>
          <Button
            onClick={() => scrollToSection("mission")}
            variant="outline"
            className="h-14 px-8 text-lg border-2 border-white/20 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
            data-testid="button-learn-more"
          >
            <Play className="mr-2 h-5 w-5" />
            Learn More
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
