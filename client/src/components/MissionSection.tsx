import { Flag, Music, History, Eye, Target, Star, Users, Shield, Heart } from "lucide-react";

export default function MissionSection() {
  return (
    <section id="mission" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-patriot-red via-white to-patriot-blue"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            OUR VISION & MISSION
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Combining American heritage with blockchain technology to create patriotic digital collectibles that preserve our nation's musical legacy
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-patriot-blue/10 to-patriot-red/10 rounded-2xl p-8 border-2 border-patriot-blue">
            <div className="mb-4">
              <Eye className="h-16 w-16 text-patriot-blue" />
            </div>
            <h3 className="text-3xl font-black mb-4">OUR VISION</h3>
            <p className="text-lg mb-6">
              To be the premier platform for patriotic NFTs and American commemorative digital collectibles, preserving our nation's musical heritage through blockchain technology for future generations to own and treasure.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Star className="h-6 w-6 text-patriot-gold mt-1" />
                <div>
                  <p className="font-bold">Preserve History:</p>
                  <p className="text-muted-foreground">Digitally preserve America's musical treasures for posterity</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Flag className="h-6 w-6 text-patriot-red mt-1" />
                <div>
                  <p className="font-bold">Celebrate Heritage:</p>
                  <p className="text-muted-foreground">Honor the cultural significance of our National Anthem</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Music className="h-6 w-6 text-patriot-blue mt-1" />
                <div>
                  <p className="font-bold">Innovate Tradition:</p>
                  <p className="text-muted-foreground">Blend timeless American values with cutting-edge blockchain technology</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-patriot-red/10 to-patriot-gold/10 rounded-2xl p-8 border-2 border-patriot-red">
            <div className="mb-4">
              <Target className="h-16 w-16 text-patriot-red" />
            </div>
            <h3 className="text-3xl font-black mb-4">OUR MISSION</h3>
            <p className="text-lg mb-6">
              Create accessible, meaningful digital collectibles that enable every American to own a piece of our nation's 250th anniversary celebration, while supporting professional artists and preserving cultural heritage.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Star className="h-6 w-6 text-patriot-gold mt-1" />
                <div>
                  <p className="font-bold">Democratize Ownership:</p>
                  <p className="text-muted-foreground">Make historical memorabilia accessible to all Americans</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Music className="h-6 w-6 text-patriot-blue mt-1" />
                <div>
                  <p className="font-bold">Support Artists:</p>
                  <p className="text-muted-foreground">Empower professional musicians with innovative revenue streams</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="h-6 w-6 text-patriot-red mt-1" />
                <div>
                  <p className="font-bold">Build Community:</p>
                  <p className="text-muted-foreground">Unite patriotic Americans in celebrating our shared heritage</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-patriot-navy mt-1" />
                <div>
                  <p className="font-bold">Ensure Security:</p>
                  <p className="text-muted-foreground">Provide transparent, secure blockchain-based authenticity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
