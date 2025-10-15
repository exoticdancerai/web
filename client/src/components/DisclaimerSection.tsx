import { Card } from "@/components/ui/card";
import { AlertTriangle, Info, Shield, AlertCircle } from "lucide-react";

export default function DisclaimerSection() {
  return (
    <section className="py-20 bg-muted/30" id="disclaimer">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            IMPORTANT DISCLAIMERS
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Please read carefully before participating
          </p>
        </div>

        <div className="space-y-6">
          <Card className="p-8 bg-gradient-to-br from-patriot-red/5 to-transparent">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-patriot-red/10">
                  <AlertTriangle className="h-6 w-6 text-patriot-red" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-patriot-red">Financial Disclaimer</h3>
                <p className="text-sm leading-relaxed mb-4">
                  NAT250 tokens are <strong>commemorative digital collectibles</strong> with no guaranteed financial return. 
                  Token values may fluctuate significantly. This information is <strong>not investment advice</strong>. 
                  Token holders may receive access to exclusive content, performances, and community features, but tokens 
                  should not be purchased with any expectation of profit or financial return.
                </p>
                <p className="text-sm font-semibold text-patriot-red">
                  Cryptocurrency investments carry risk - never invest more than you can afford to lose.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-patriot-blue/10">
                  <Info className="h-6 w-6 text-patriot-blue" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Political Independence</h3>
                <p className="text-sm leading-relaxed">
                  <strong>NationalAnthem250.com</strong> is a commemorative cultural project celebrating American heritage 
                  and has <strong>no political affiliation</strong> with any political campaign, political office, or 
                  governmental agency. This project is focused solely on preserving and celebrating American musical and 
                  cultural history.
                </p>
              </div>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-patriot-gold/10">
                    <Shield className="h-6 w-6 text-patriot-gold" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-3">Technical Details</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between pb-2 border-b">
                      <span className="text-muted-foreground">Network</span>
                      <span className="font-semibold">Solana Blockchain</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b">
                      <span className="text-muted-foreground">Total Supply</span>
                      <span className="font-semibold">17,760,000 Tokens</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b">
                      <span className="text-muted-foreground">Token Price</span>
                      <span className="font-semibold">$1.77 per token</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Purpose</span>
                      <span className="font-semibold">Commemorating 1776</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    Built on Solana blockchain for fast, low-cost transactions
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-patriot-navy/10">
                    <AlertCircle className="h-6 w-6 text-patriot-navy" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-3">Important Notices</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-patriot-blue rounded-full mt-2 flex-shrink-0"></div>
                      <span>
                        This project is <strong>not affiliated with or endorsed by</strong> the official America250 Foundation
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-patriot-blue rounded-full mt-2 flex-shrink-0"></div>
                      <span>
                        NAT250 tokens are created to commemorate America's Semiquincentennial celebration
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-patriot-blue rounded-full mt-2 flex-shrink-0"></div>
                      <span>
                        Please review our Terms & Conditions and Token Allocation details before participating
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          <div className="bg-gradient-to-br from-patriot-navy to-patriot-blue rounded-2xl p-8 text-center text-white">
            <AlertTriangle className="h-12 w-12 text-patriot-gold mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Risk Warning</h3>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed">
              Cryptocurrency and digital asset investments are highly volatile and carry significant risk. 
              Past performance does not indicate future results. Only participate with funds you can afford to lose. 
              Do your own research and consult with a qualified financial advisor before making any investment decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
