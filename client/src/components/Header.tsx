import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageSelector from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location, navigate] = useLocation();
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    if (location !== "/") {
      navigate(`/#${id}`);
      setMobileMenuOpen(false);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-patriot-navy via-patriot-red/20 to-patriot-navy backdrop-blur-md border-b-4 border-patriot-gold shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <span className="text-2xl font-black text-white">Anthem250</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("mission")}
              className="text-sm text-white/90 hover:text-white transition-colors"
              data-testid="link-mission"
            >
              {t('header.about')}
            </button>
            <button
              onClick={() => scrollToSection("tokenomics")}
              className="text-sm text-white/90 hover:text-white transition-colors"
              data-testid="link-tokenomics"
            >
              {t('header.tokenomics')}
            </button>
            <button
              onClick={() => scrollToSection("roadmap")}
              className="text-sm text-white/90 hover:text-white transition-colors"
              data-testid="link-roadmap"
            >
              {t('header.roadmap')}
            </button>
            <Link href="/blog" className="text-sm text-white/90 hover:text-white transition-colors" data-testid="link-blog">
              {t('header.blog')}
            </Link>
            <LanguageSelector />
            <Button
              onClick={() => scrollToSection("participate")}
              className="bg-patriot-red hover:bg-patriot-red-hover text-white h-12 px-6 font-bold border-2 border-white shadow-lg"
              data-testid="button-join-waitlist-header"
            >
              {t('waitlist.button')}
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
              {t('header.about')}
            </button>
            <button
              onClick={() => scrollToSection("tokenomics")}
              className="block w-full text-left text-white/90 hover:text-white py-2"
              data-testid="link-tokenomics-mobile"
            >
              {t('header.tokenomics')}
            </button>
            <button
              onClick={() => scrollToSection("roadmap")}
              className="block w-full text-left text-white/90 hover:text-white py-2"
              data-testid="link-roadmap-mobile"
            >
              {t('header.roadmap')}
            </button>
            <Link href="/blog" className="block w-full text-left text-white/90 hover:text-white py-2" data-testid="link-blog-mobile">
              {t('header.blog')}
            </Link>
            <Button
              onClick={() => scrollToSection("participate")}
              className="w-full bg-patriot-red hover:bg-patriot-red-hover text-white"
              data-testid="button-join-waitlist-mobile"
            >
              {t('waitlist.button')}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
