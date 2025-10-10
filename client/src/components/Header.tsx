import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-patriot-navy via-patriot-red/20 to-patriot-navy backdrop-blur-md border-b-4 border-patriot-gold shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <span className="text-3xl">⭐</span>
            <span className="text-3xl font-serif font-bold text-patriot-gold">250</span>
            <span className="text-2xl font-black text-white">STAR</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("mission")}
              className="text-sm text-white/90 hover:text-white transition-colors"
              data-testid="link-mission"
            >
              Mission
            </button>
            <button
              onClick={() => scrollToSection("nft-showcase")}
              className="text-sm text-white/90 hover:text-white transition-colors"
              data-testid="link-nft"
            >
              NFT Collection
            </button>
            <button
              onClick={() => scrollToSection("timeline")}
              className="text-sm text-white/90 hover:text-white transition-colors"
              data-testid="link-timeline"
            >
              Timeline
            </button>
            <button
              onClick={() => scrollToSection("tokenomics")}
              className="text-sm text-white/90 hover:text-white transition-colors"
              data-testid="link-tokenomics"
            >
              Tokenomics
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm text-white/90 hover:text-white transition-colors"
              data-testid="link-about"
            >
              About
            </button>
            <Button
              onClick={() => scrollToSection("participate")}
              className="bg-patriot-red hover:bg-patriot-red-hover text-white h-12 px-6 font-bold border-2 border-white shadow-lg"
              data-testid="button-join-waitlist-header"
            >
              ★ JOIN WAITLIST
            </Button>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-patriot-navy border-t border-patriot-gold/20">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("mission")}
              className="block w-full text-left text-white/90 hover:text-white py-2"
              data-testid="link-mission-mobile"
            >
              Mission
            </button>
            <button
              onClick={() => scrollToSection("nft-showcase")}
              className="block w-full text-left text-white/90 hover:text-white py-2"
              data-testid="link-nft-mobile"
            >
              NFT Collection
            </button>
            <button
              onClick={() => scrollToSection("timeline")}
              className="block w-full text-left text-white/90 hover:text-white py-2"
              data-testid="link-timeline-mobile"
            >
              Timeline
            </button>
            <button
              onClick={() => scrollToSection("tokenomics")}
              className="block w-full text-left text-white/90 hover:text-white py-2"
              data-testid="link-tokenomics-mobile"
            >
              Tokenomics
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-white/90 hover:text-white py-2"
              data-testid="link-about-mobile"
            >
              About
            </button>
            <Button
              onClick={() => scrollToSection("participate")}
              className="w-full bg-patriot-red hover:bg-patriot-red-hover text-white"
              data-testid="button-join-waitlist-mobile"
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
