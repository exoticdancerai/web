import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ChoosePath() {
  const { t } = useLanguage();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            {t('choosePath.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('choosePath.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 hover-elevate transition-all">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-patriot-blue/10 mb-6">
              <GraduationCap className="h-8 w-8 text-patriot-blue" />
            </div>
            <h3 className="text-2xl font-bold mb-3">{t('choosePath.newToNFTs')}</h3>
            <p className="text-muted-foreground mb-6">
              {t('choosePath.newDescription')}
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <span className="text-patriot-blue mt-1">•</span>
                <span className="text-sm">Step-by-step wallet setup guidance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-patriot-blue mt-1">•</span>
                <span className="text-sm">Educational content about NFTs and blockchain</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-patriot-blue mt-1">•</span>
                <span className="text-sm">Simple purchasing process with credit card option</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-patriot-blue mt-1">•</span>
                <span className="text-sm">Community support and learning resources</span>
              </li>
            </ul>
            <Button
              onClick={() => scrollToSection("participate")}
              variant="outline"
              className="w-full"
              data-testid="button-learn-more-beginner"
            >
              {t('choosePath.learnMore')}
            </Button>
          </Card>

          <Card className="p-8 border-2 border-patriot-gold bg-gradient-to-br from-patriot-gold/5 to-transparent hover-elevate transition-all">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-patriot-gold/10 mb-6">
              <TrendingUp className="h-8 w-8 text-patriot-gold" />
            </div>
            <h3 className="text-2xl font-bold mb-3">{t('choosePath.experienced')}</h3>
            <p className="text-muted-foreground mb-6">
              {t('choosePath.experiencedDescription')}
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <span className="text-patriot-gold mt-1">•</span>
                <span className="text-sm">Detailed tokenomics and smart contract information</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-patriot-gold mt-1">•</span>
                <span className="text-sm">Advanced trading features and DeFi integration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-patriot-gold mt-1">•</span>
                <span className="text-sm">Priority access to exclusive drops and events</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-patriot-gold mt-1">•</span>
                <span className="text-sm">Governance participation and voting rights</span>
              </li>
            </ul>
            <Button
              onClick={() => scrollToSection("tokenomics")}
              className="w-full bg-patriot-gold hover:bg-patriot-gold/90 text-patriot-navy"
              data-testid="button-view-tokenomics"
            >
              {t('choosePath.viewTokenomics')}
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
