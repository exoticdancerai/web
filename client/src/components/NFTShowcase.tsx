import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

export default function NFTShowcase() {
  const nfts = [
    {
      id: 1,
      title: "Anthem Founder",
      edition: "1 of 1776",
      price: "$17.76",
      rarity: "Legendary",
      description: "The original performance with exclusive benefits",
    },
    {
      id: 2,
      title: "Anthem Patriot",
      edition: "1 of 25000",
      price: "$17.76",
      rarity: "Rare",
      description: "Standard edition with full access to the performance",
    },
    {
      id: 3,
      title: "Anthem Collector",
      edition: "1 of 100000",
      price: "$17.76",
      rarity: "Common",
      description: "Entry-level collectible with community benefits",
    },
  ];

  return (
    <section id="nft-showcase" className="py-20 bg-muted/30 relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Star className="h-10 w-10 text-patriot-gold" />
            <Star className="h-10 w-10 text-patriot-gold" />
            <Star className="h-10 w-10 text-patriot-gold" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            THE <span className="bg-gradient-to-r from-patriot-red to-patriot-blue bg-clip-text text-transparent">NFT COLLECTION</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three tiers of digital collectibles, each offering unique benefits and exclusive access to America's musical heritage.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {nfts.map((nft) => (
            <div
              key={nft.id}
              className="group bg-card rounded-xl border border-card-border overflow-hidden hover-elevate transition-all duration-300"
              data-testid={`card-nft-${nft.id}`}
            >
              <div className="aspect-square bg-gradient-to-br from-patriot-navy via-patriot-red to-patriot-blue relative overflow-hidden border-4 border-patriot-gold">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <Star className="h-20 w-20 text-patriot-gold mb-4" />
                    <p className="font-serif text-3xl font-bold text-patriot-gold">NAT250</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white text-patriot-navy border-2 border-patriot-gold font-bold">
                    {nft.rarity}
                  </Badge>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{nft.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{nft.edition}</p>
                <p className="text-muted-foreground mb-4">{nft.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <p className="text-sm text-muted-foreground">Price</p>
                    <p className="text-2xl font-bold text-patriot-red">{nft.price}</p>
                  </div>
                  <button
                    className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover-elevate active-elevate-2 transition-all"
                    data-testid={`button-view-nft-${nft.id}`}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-xl border border-card-border p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">NFT Holder Benefits</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-patriot-blue/10 flex items-center justify-center">
                <Star className="h-5 w-5 text-patriot-blue" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Exclusive Content Access</h4>
                <p className="text-sm text-muted-foreground">Behind-the-scenes footage, interviews, and historical documentation</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-patriot-red/10 flex items-center justify-center">
                <Star className="h-5 w-5 text-patriot-red" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Event Access</h4>
                <p className="text-sm text-muted-foreground">Priority invites to America250 commemorative events nationwide</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-patriot-gold/10 flex items-center justify-center">
                <Star className="h-5 w-5 text-patriot-gold" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Collector Status</h4>
                <p className="text-sm text-muted-foreground">Permanent recognition in the Anthem250 Hall of Patriots</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-patriot-navy/10 flex items-center justify-center">
                <Star className="h-5 w-5 text-patriot-navy" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Governance Rights</h4>
                <p className="text-sm text-muted-foreground">Vote on future commemorative projects and initiatives</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
