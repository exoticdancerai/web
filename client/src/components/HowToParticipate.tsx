import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Wallet, Award, Target, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HowToParticipate() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      if (response.ok) {
        toast({
          title: "Welcome to the waitlist!",
          description: "You'll receive updates about the NAT250 launch.",
        });
        setEmail("");
        setName("");
      } else {
        toast({
          title: "Error",
          description: "Failed to join waitlist. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Waitlist submission error:", error);
      toast({
        title: "Error",
        description: "Failed to join waitlist. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="participate" className="py-20 bg-gradient-to-br from-patriot-blue/10 to-patriot-red/10 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-patriot-red via-white to-patriot-blue"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Target className="h-12 w-12 text-patriot-red" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            {t('participate.title').toUpperCase()}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('participate.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="relative inline-block mb-6">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-patriot-red flex items-center justify-center shadow-xl">
                <Mail className="h-12 w-12 text-patriot-red" />
              </div>
              <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-patriot-red text-white flex items-center justify-center font-bold text-xl border-2 border-white">
                1
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3">{t('participate.step1Title')}</h3>
            <p className="text-muted-foreground">
              {t('participate.step1Description')}
            </p>
          </div>

          <div className="text-center">
            <div className="relative inline-block mb-6">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-patriot-blue flex items-center justify-center shadow-xl">
                <Wallet className="h-12 w-12 text-patriot-blue" />
              </div>
              <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-patriot-blue text-white flex items-center justify-center font-bold text-xl border-2 border-white">
                2
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3">{t('participate.step2Title')}</h3>
            <p className="text-muted-foreground">
              {t('participate.step2Description')}
            </p>
          </div>

          <div className="text-center">
            <div className="relative inline-block mb-6">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-patriot-gold flex items-center justify-center shadow-xl">
                <Award className="h-12 w-12 text-patriot-gold" />
              </div>
              <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-patriot-gold text-patriot-navy flex items-center justify-center font-bold text-xl border-2 border-white">
                3
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3">{t('participate.step3Title')}</h3>
            <p className="text-muted-foreground">
              {t('participate.step3Description')}
            </p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl border-4 border-patriot-red p-8 shadow-2xl">
            <div className="text-center mb-6">
              <Star className="h-16 w-16 text-patriot-gold mx-auto mb-3" />
              <h3 className="text-3xl font-black text-patriot-navy">{t('waitlist.title')}</h3>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">{t('waitlist.namePlaceholder')}</Label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className="mt-2"
                  required
                  data-testid="input-name"
                />
              </div>
              <div>
                <Label htmlFor="email">{t('waitlist.emailPlaceholder')}</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="mt-2"
                  required
                  data-testid="input-email"
                />
              </div>
              <Button
                type="submit"
                className="w-full h-14 bg-patriot-red hover:bg-patriot-red-hover text-white text-xl font-bold border-2 border-white shadow-xl"
                data-testid="button-submit-waitlist"
              >
                {t('waitlist.button')}
              </Button>
            </form>
            <p className="text-sm text-muted-foreground text-center mt-6">
              {t('waitlist.caption')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
