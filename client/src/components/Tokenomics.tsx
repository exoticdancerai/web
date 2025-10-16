import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { TrendingUp, Users, Coins, Target } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Tokenomics() {
  const { t } = useLanguage();
  const allocationData = [
    { name: "Public Sale", value: 40, color: "hsl(var(--patriot-red))" },
    { name: "Community", value: 25, color: "hsl(var(--patriot-blue))" },
    { name: "Team & Advisors", value: 15, color: "hsl(var(--patriot-gold))" },
    { name: "Partnership", value: 10, color: "hsl(var(--patriot-navy))" },
    { name: "Reserve", value: 10, color: "hsl(var(--patriot-light-blue))" },
  ];

  const priceProjections = [
    { phase: "Launch", price: 1.77 },
    { phase: "Q2 2025", price: 5.00 },
    { phase: "Q4 2025", price: 20.00 },
    { phase: "2026", price: 100.00 },
  ];

  return (
    <section id="tokenomics" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('tokenomics.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('tokenomics.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card rounded-xl border border-card-border p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Token Allocation</h3>
            <div className="aspect-square max-w-sm mx-auto">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={allocationData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {allocationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-6 space-y-2">
              {allocationData.map((item) => (
                <div key={item.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-4 h-4 rounded-sm"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-sm">{item.name}</span>
                  </div>
                  <span className="font-semibold">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-xl border border-card-border p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Price Projections</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={priceProjections}>
                  <XAxis dataKey="phase" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="price" fill="hsl(var(--patriot-blue))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-muted-foreground text-center mt-4">
              Projected price growth from launch ($1.77) to America's 250th anniversary
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-card rounded-xl border border-card-border p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-patriot-red/10 mb-4">
              <Coins className="h-6 w-6 text-patriot-red" />
            </div>
            <div className="text-3xl font-bold mb-2 font-serif text-patriot-gold">17.76M</div>
            <div className="text-sm text-muted-foreground">Total Supply</div>
          </div>

          <div className="bg-card rounded-xl border border-card-border p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-patriot-blue/10 mb-4">
              <TrendingUp className="h-6 w-6 text-patriot-blue" />
            </div>
            <div className="text-3xl font-bold mb-2 font-serif text-patriot-gold">$1.77</div>
            <div className="text-sm text-muted-foreground">Launch Price</div>
          </div>

          <div className="bg-card rounded-xl border border-card-border p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-patriot-gold/10 mb-4">
              <Users className="h-6 w-6 text-patriot-gold" />
            </div>
            <div className="text-3xl font-bold mb-2 font-serif text-patriot-gold">250K+</div>
            <div className="text-sm text-muted-foreground">Target Holders</div>
          </div>

          <div className="bg-card rounded-xl border border-card-border p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-patriot-navy/10 mb-4">
              <Target className="h-6 w-6 text-patriot-navy" />
            </div>
            <div className="text-3xl font-bold mb-2 font-serif text-patriot-gold">$100+</div>
            <div className="text-sm text-muted-foreground">2026 Target</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-patriot-navy to-patriot-blue rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6 text-center">Token Utility & Benefits</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-patriot-gold">For Holders</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-patriot-gold mt-1">•</span>
                  <span>Access to exclusive historical content and performances</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-patriot-gold mt-1">•</span>
                  <span>Priority tickets to America250 commemorative events</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-patriot-gold mt-1">•</span>
                  <span>Governance rights for future patriotic initiatives</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-patriot-gold">Investment Potential</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-patriot-gold mt-1">•</span>
                  <span>First-mover advantage in patriotic NFT market</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-patriot-gold mt-1">•</span>
                  <span>Increasing demand leading to 2026 anniversary</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-patriot-gold mt-1">•</span>
                  <span>Partnership with official America250 organization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
