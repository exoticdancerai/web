import { Card } from "@/components/ui/card";
import { Shield, FileCheck, Lock, TrendingUp, Clock, Users, Check } from "lucide-react";

export default function TransparencySection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            FULL TRANSPARENCY & TECHNICAL DETAILS
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete visibility into smart contracts, audits, vesting schedules, and liquidity strategy
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-patriot-blue/10 mb-6">
              <Shield className="h-8 w-8 text-patriot-blue" />
            </div>
            <h3 className="text-xl font-bold mb-3">Smart Contract Audited</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Professionally audited by leading blockchain security firms
            </p>
            <div className="flex items-center justify-center gap-2 text-2xl font-bold text-patriot-blue">
              <Check className="h-6 w-6" />
              <span>Verified</span>
            </div>
          </Card>

          <Card className="p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-patriot-gold/10 mb-6">
              <Lock className="h-8 w-8 text-patriot-gold" />
            </div>
            <h3 className="text-xl font-bold mb-3">Liquidity Locked</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Liquidity pool locked until July 4, 2027
            </p>
            <div className="text-2xl font-bold text-patriot-gold">12 Months</div>
          </Card>

          <Card className="p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-patriot-red/10 mb-6">
              <FileCheck className="h-8 w-8 text-patriot-red" />
            </div>
            <h3 className="text-xl font-bold mb-3">Transparent Vesting</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Public vesting schedule for team and advisors
            </p>
            <div className="text-2xl font-bold text-patriot-red">6-24 Months</div>
          </Card>
        </div>

        <div className="bg-gradient-to-br from-patriot-navy to-patriot-blue rounded-2xl p-8 md:p-12 text-white mb-16">
          <h3 className="text-3xl font-black mb-8 text-center">VESTING SCHEDULE</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-start gap-4 mb-6">
                <Clock className="h-6 w-6 text-patriot-gold mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg mb-2">Team & Advisors (15%)</h4>
                  <p className="text-sm text-white/90">
                    6-month cliff, then 18-month linear vesting. Ensures long-term commitment to project success.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-6">
                <TrendingUp className="h-6 w-6 text-patriot-gold mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg mb-2">Partnership (10%)</h4>
                  <p className="text-sm text-white/90">
                    3-month cliff, then 12-month linear vesting. Gradual release for strategic partnerships.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-start gap-4 mb-6">
                <Users className="h-6 w-6 text-patriot-gold mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg mb-2">Community (25%)</h4>
                  <p className="text-sm text-white/90">
                    Distributed via airdrops, staking rewards, and community initiatives over 24 months.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Lock className="h-6 w-6 text-patriot-gold mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg mb-2">Reserve (10%)</h4>
                  <p className="text-sm text-white/90">
                    Locked for 12 months, then available for ecosystem development and emergency use only.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6">Smart Contract Details</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="text-sm font-medium">Blockchain</span>
                <span className="text-sm text-patriot-blue font-bold">Solana</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="text-sm font-medium">Token Standard</span>
                <span className="text-sm text-patriot-blue font-bold">SPL Token</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="text-sm font-medium">Total Supply</span>
                <span className="text-sm text-patriot-blue font-bold">17.76M NAT250</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="text-sm font-medium">Decimals</span>
                <span className="text-sm text-patriot-blue font-bold">9</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="text-sm font-medium">Mint Authority</span>
                <span className="text-sm text-patriot-red font-bold">Revoked</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Audit Status</span>
                <span className="flex items-center gap-1 text-sm text-green-600 font-bold">
                  <Check className="h-4 w-4" />
                  <span>Passed</span>
                </span>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6">Liquidity Strategy</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-patriot-gold rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold mb-1">Initial Liquidity: $500K</p>
                  <p className="text-sm text-muted-foreground">Seeded at launch to ensure stable trading</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-patriot-blue rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold mb-1">Lock Period: 12 Months</p>
                  <p className="text-sm text-muted-foreground">Liquidity locked until July 4, 2027</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-patriot-red rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold mb-1">DEX Integration: Raydium</p>
                  <p className="text-sm text-muted-foreground">Primary trading on Solana's leading DEX</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-patriot-navy rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold mb-1">Anti-Rug Measures</p>
                  <p className="text-sm text-muted-foreground">Immutable smart contract, revoked mint authority</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
