import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
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
      

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
          {t('hero.title').split(' ').slice(0, 2).join(' ')}
          <br />
          <span className="bg-gradient-to-r from-patriot-red via-white to-patriot-blue bg-clip-text text-transparent">{t('hero.title').split(' ').slice(2).join(' ')}</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          {t('hero.subtitle')}
        </p>

        <div className="mb-12">
          <p className="text-xl md:text-2xl text-patriot-gold font-semibold mb-6">
            {t('hero.presale') || 'Get exclusive presale access to the NAT250 token launch'}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            onClick={() => scrollToSection("participate")}
            className="bg-patriot-red hover:bg-patriot-red-hover text-white h-16 px-10 text-xl font-bold shadow-2xl border-2 border-white"
            data-testid="button-join-waitlist-hero"
          >
            {t('hero.cta')}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left mb-12">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <h3 className="text-white font-bold mb-2">{t('whatIsIt.title')}</h3>
            <p className="text-white/80 text-sm">{t('whatIsIt.description')}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <h3 className="text-white font-bold mb-2">{t('howToBuy.title')}</h3>
            <p className="text-white/80 text-sm">{t('howToBuy.description')}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <h3 className="text-white font-bold mb-2">{t('chain.title')}</h3>
            <p className="text-white/80 text-sm">{t('chain.description')}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-patriot-gold font-serif">$1.77</div>
            <div className="text-sm text-white/70 mt-1">{t('stats.perToken')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-patriot-gold font-serif">17.76M</div>
            <div className="text-sm text-white/70 mt-1">{t('stats.totalSupply')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-patriot-gold font-serif">2026</div>
            <div className="text-sm text-white/70 mt-1">{t('stats.launchYear')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-patriot-gold font-serif">Solana</div>
            <div className="text-sm text-white/70 mt-1">{t('stats.blockchain')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
