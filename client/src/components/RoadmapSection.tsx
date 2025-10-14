import { Card } from "@/components/ui/card";
import { Rocket, Users, Trophy, Star } from "lucide-react";

export default function RoadmapSection() {
  const phases = [
    {
      phase: "Phase 1: Foundation",
      period: "Q4 2024 - Q1 2025",
      icon: Rocket,
      color: "patriot-blue",
      items: [
        "Launch NAT250 token on Solana",
        "Initial DEX listing on Raydium",
        "Smart contract audit completion",
        "Community building & marketing campaign",
        "Partnership with America250.org announcement"
      ]
    },
    {
      phase: "Phase 2: Growth",
      period: "Q2 2025 - Q3 2025",
      icon: Users,
      color: "patriot-gold",
      items: [
        "NFT marketplace integration",
        "Exclusive holder benefits rollout",
        "Strategic partnerships expansion",
        "Community governance implementation",
        "Additional DEX & CEX listings"
      ]
    },
    {
      phase: "Phase 3: Expansion",
      period: "Q4 2025 - Q1 2026",
      icon: Trophy,
      color: "patriot-red",
      items: [
        "America250 event sponsorships",
        "Limited edition NFT drops",
        "Staking rewards program launch",
        "International market expansion",
        "Mobile app development"
      ]
    },
    {
      phase: "Phase 4: Anniversary",
      period: "Q2 2026 - July 4, 2026",
      icon: Star,
      color: "patriot-navy",
      items: [
        "Independence Day 2026 celebration events",
        "Historic performance NFT reveal",
        "Commemorative token burn event",
        "Exclusive holder rewards distribution",
        "Legacy preservation initiatives"
      ]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            PROJECT ROADMAP
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our strategic path to America's 250th anniversary celebration
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-patriot-blue via-patriot-gold to-patriot-red transform md:-translate-x-1/2"></div>
          
          <div className="space-y-12">
            {phases.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                    <Card className={`p-6 border-2 border-${item.color}`}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-${item.color}/10 flex items-center justify-center`}>
                          <Icon className={`h-6 w-6 text-${item.color}`} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{item.phase}</h3>
                          <p className="text-sm text-muted-foreground">{item.period}</p>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {item.items.map((milestone, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <span className={`text-${item.color} mt-1`}>•</span>
                            <span>{milestone}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </div>
                  
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 rounded-full bg-white border-4 border-patriot-gold flex items-center justify-center shadow-lg">
                    <div className={`w-8 h-8 rounded-full bg-${item.color}`}></div>
                  </div>
                  
                  <div className="hidden md:block w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Card className="inline-block p-8 border-2 border-patriot-gold">
            <h3 className="text-2xl font-bold mb-4">🗓️ Key Milestone</h3>
            <div className="text-5xl font-black text-patriot-red mb-2">July 4, 2026</div>
            <p className="text-xl text-muted-foreground">America's 250th Independence Day</p>
          </Card>
        </div>
      </div>
    </section>
  );
}
