import { Flag, Music, History } from "lucide-react";

export default function MissionSection() {
  return (
    <section id="mission" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-patriot-red via-white to-patriot-blue"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-5xl">🇺🇸</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            WHAT IS <span className="text-patriot-red">ANTHEM250</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The first-ever NFT of the US National Anthem, commemorating America's 250th anniversary in 2026. A unique intersection of patriotic heritage and blockchain innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 rounded-lg bg-card border border-card-border hover-elevate transition-all">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-patriot-red/10 mb-6">
              <Flag className="h-8 w-8 text-patriot-red" />
            </div>
            <h3 className="text-xl font-bold mb-4">Historic Milestone</h3>
            <p className="text-muted-foreground">
              Celebrate America's semiquincentennial with a digital collectible that honors 250 years of freedom and independence.
            </p>
          </div>

          <div className="text-center p-8 rounded-lg bg-card border border-card-border hover-elevate transition-all">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-patriot-blue/10 mb-6">
              <Music className="h-8 w-8 text-patriot-blue" />
            </div>
            <h3 className="text-xl font-bold mb-4">Professional Performance</h3>
            <p className="text-muted-foreground">
              Mezzo soprano Hannah Magnelli delivers a stunning rendition of the Star-Spangled Banner, preserved forever on the blockchain.
            </p>
          </div>

          <div className="text-center p-8 rounded-lg bg-card border border-card-border hover-elevate transition-all">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-patriot-gold/10 mb-6">
              <History className="h-8 w-8 text-patriot-gold" />
            </div>
            <h3 className="text-xl font-bold mb-4">Cultural Significance</h3>
            <p className="text-muted-foreground">
              Own a piece of American history. Each NFT represents a digital autograph on a historic moment in our nation's journey.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-patriot-navy to-patriot-blue rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Why This Matters</h3>
              <p className="text-white/90 mb-6">
                For the first time in history, Americans and patriots worldwide can own a verified piece of our national anthem as a digital collectible. This isn't just an NFT—it's a historic artifact for the digital age.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-patriot-gold flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>First-ever National Anthem NFT in history</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-patriot-gold flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>Official partnership with America250.org</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-patriot-gold flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>Accessible pricing at $17.76 to honor 1776</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-xl bg-patriot-gold/20 border-2 border-patriot-gold/40 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl font-serif mb-4">🎵</div>
                  <p className="text-lg font-medium">Digital Performance</p>
                  <p className="text-sm text-white/70 mt-2">Hannah Magnelli's rendition preserved on blockchain</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
