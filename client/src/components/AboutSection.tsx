import { Music2, Award, Globe, Mic2, Flag, Star, Building2, Bell, Landmark } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-patriot-red/10 via-white to-patriot-blue/10 relative">
      <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-patriot-blue via-white to-patriot-red"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            {t('artist.title')}
          </h2>
          <p className="text-2xl text-patriot-gold font-semibold">{t('artist.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Music2 className="h-12 w-12 text-patriot-red" />
              <h3 className="text-2xl font-bold">{t('artist.featured')}</h3>
            </div>
            <p className="text-lg mb-6">
              {t('artist.bio')}
            </p>
            <p className="text-lg mb-6">
              With her advanced classical training and professional performance experience, Hannah brings unparalleled artistry to America's most treasured song. Her powerful interpretation of 'The Star-Spangled Banner' combines classical precision with heartfelt patriotism.
            </p>
            <p className="text-lg mb-6">
              By combining her classical excellence with groundbreaking digital innovation, Hannah offers patriotic Americans the opportunity to own a piece of American heritage in the form of this historic NFT, commemorating our nation's 250th anniversary.
            </p>
            <div className="bg-patriot-gold/10 border-l-4 border-patriot-gold p-6 rounded-r-lg">
              <p className="text-lg italic mb-2">
                "One of the most beautiful and rich lyric mezzo voices I've heard in years."
              </p>
              <p className="text-sm text-muted-foreground">- Richard Nechamkin, Mississippi Opera</p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-patriot-navy to-patriot-blue flex items-center justify-center text-white overflow-hidden">
              <div className="text-center p-8">
                <Mic2 className="h-20 w-20 mb-4" />
                <p className="text-lg font-medium">Hannah Magnelli</p>
                <p className="text-sm text-white/70 mt-2">Mezzo-Soprano</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-black mb-8 text-center">Professional Highlights</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 border-2 border-patriot-blue text-center">
              <h4 className="text-xl font-bold text-patriot-blue mb-2">Classical Training</h4>
              <p className="text-sm text-muted-foreground">Professionally trained mezzo soprano with years of performance experience</p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-patriot-red text-center">
              <h4 className="text-xl font-bold text-patriot-red mb-2">Historic Achievement</h4>
              <p className="text-sm text-muted-foreground">First artist to create an NFT of America's National Anthem</p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-patriot-gold text-center">
              <h4 className="text-xl font-bold text-patriot-gold mb-2">America250 Official</h4>
              <p className="text-sm text-muted-foreground">Commemorating the United States' 250th Anniversary</p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-patriot-navy text-center">
              <h4 className="text-xl font-bold text-patriot-navy mb-2">Performance Features</h4>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Building2 className="h-4 w-4" />
                <span>Capitol Dome</span>
                <span>•</span>
                <Bell className="h-4 w-4" />
                <span>Liberty Bell</span>
                <span>•</span>
                <Landmark className="h-4 w-4" />
                <span>Historic Sites</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-patriot-red via-white to-patriot-blue rounded-2xl p-8 md:p-12 border-4 border-patriot-gold shadow-2xl">
          <div className="text-center mb-8">
            <Flag className="h-16 w-16 text-patriot-red mx-auto mb-4" />
            <h3 className="text-4xl font-black mb-4 text-patriot-navy">America250 Partnership</h3>
            <p className="text-patriot-navy font-medium max-w-3xl mx-auto text-lg">
              Anthem250 is proud to partner with America250.org, the official organization commemorating the United States' semiquincentennial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-patriot-navy rounded-xl p-6 text-center shadow-lg">
              <Star className="h-10 w-10 text-patriot-gold mx-auto mb-2" />
              <div className="text-3xl font-serif font-bold text-patriot-red mb-2">Official</div>
              <p className="text-sm text-patriot-navy font-medium">Recognized Partnership</p>
            </div>
            <div className="bg-white border-2 border-patriot-navy rounded-xl p-6 text-center shadow-lg">
              <Landmark className="h-10 w-10 text-patriot-blue mx-auto mb-2" />
              <div className="text-3xl font-serif font-bold text-patriot-blue mb-2">Historic</div>
              <p className="text-sm text-patriot-navy font-medium">250 Year Milestone</p>
            </div>
            <div className="bg-white border-2 border-patriot-navy rounded-xl p-6 text-center shadow-lg">
              <Award className="h-10 w-10 text-patriot-gold mx-auto mb-2" />
              <div className="text-3xl font-serif font-bold text-patriot-gold mb-2">Legacy</div>
              <p className="text-sm text-patriot-navy font-medium">Digital Preservation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
