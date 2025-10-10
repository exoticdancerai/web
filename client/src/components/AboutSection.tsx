import { Music2, Award, Globe } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-patriot-red/10 via-white to-patriot-blue/10 relative">
      <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-patriot-blue via-white to-patriot-red"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🎤</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              MEET <span className="bg-gradient-to-r from-patriot-red to-patriot-blue bg-clip-text text-transparent">HANNAH MAGNELLI</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Professional mezzo-soprano with a passion for American musical heritage. Hannah's powerful voice brings new life to our national anthem.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-patriot-red/10 flex items-center justify-center">
                  <Music2 className="h-5 w-5 text-patriot-red" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Acclaimed Performer</h4>
                  <p className="text-sm text-muted-foreground">
                    Performed at prestigious venues across the United States
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-patriot-blue/10 flex items-center justify-center">
                  <Award className="h-5 w-5 text-patriot-blue" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Award-Winning Artist</h4>
                  <p className="text-sm text-muted-foreground">
                    Recognized for excellence in classical and patriotic performances
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-patriot-gold/10 flex items-center justify-center">
                  <Globe className="h-5 w-5 text-patriot-gold" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Cultural Ambassador</h4>
                  <p className="text-sm text-muted-foreground">
                    Dedicated to preserving and sharing American musical traditions
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-patriot-navy to-patriot-blue flex items-center justify-center text-white overflow-hidden">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🎤</div>
                <p className="text-lg font-medium">Hannah Magnelli</p>
                <p className="text-sm text-white/70 mt-2">Mezzo-Soprano</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-patriot-red via-white to-patriot-blue rounded-2xl p-8 md:p-12 border-4 border-patriot-gold shadow-2xl">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🇺🇸</div>
            <h3 className="text-4xl font-black mb-4 text-patriot-navy">America250 Partnership</h3>
            <p className="text-patriot-navy font-medium max-w-3xl mx-auto text-lg">
              Anthem250 is proud to partner with America250.org, the official organization commemorating the United States' semiquincentennial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-patriot-navy rounded-xl p-6 text-center shadow-lg">
              <div className="text-4xl mb-2">⭐</div>
              <div className="text-3xl font-serif font-bold text-patriot-red mb-2">Official</div>
              <p className="text-sm text-patriot-navy font-medium">Recognized Partnership</p>
            </div>
            <div className="bg-white border-2 border-patriot-navy rounded-xl p-6 text-center shadow-lg">
              <div className="text-4xl mb-2">🗽</div>
              <div className="text-3xl font-serif font-bold text-patriot-blue mb-2">Historic</div>
              <p className="text-sm text-patriot-navy font-medium">250 Year Milestone</p>
            </div>
            <div className="bg-white border-2 border-patriot-navy rounded-xl p-6 text-center shadow-lg">
              <div className="text-4xl mb-2">🦅</div>
              <div className="text-3xl font-serif font-bold text-patriot-gold mb-2">Legacy</div>
              <p className="text-sm text-patriot-navy font-medium">Digital Preservation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
