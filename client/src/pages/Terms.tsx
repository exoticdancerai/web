import { Card } from "@/components/ui/card";
import { FileText, AlertTriangle, Shield, Info, Mail } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Button variant="outline" data-testid="button-back-home" asChild>
            <Link href="/">
              Back to Home
            </Link>
          </Button>
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-patriot-blue/10 mb-6">
            <FileText className="h-8 w-8 text-patriot-blue" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            TERMS & CONDITIONS
          </h1>
          <p className="text-lg text-muted-foreground">
            Important information about your participation in National Anthem 250
          </p>
          <div className="flex items-center justify-center gap-4 mt-4 text-sm text-muted-foreground">
            <span>Effective Date: January 16, 2025</span>
            <span>•</span>
            <span>Last Updated: January 16, 2025</span>
          </div>
        </div>

        <div className="space-y-8">
          <Card className="p-8">
            <div className="flex items-start gap-4 mb-6">
              <Info className="h-6 w-6 text-patriot-blue flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                <p className="text-sm leading-relaxed">
                  By accessing or using the National Anthem 250 website and participating in the NAT250 token launch, 
                  you agree to be bound by these Terms and Conditions. If you do not agree to these terms, you may not 
                  use our services or participate in the token launch.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6">2. Nature of NAT250 Tokens</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Cultural Expression</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  NAT250 tokens are intended to function as an expression of support for, and engagement with, the 
                  patriotic ideals and cultural heritage embodied by America's 250th anniversary celebration and 
                  Hannah Magnelli's National Anthem performance.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Not Securities</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  NAT250 tokens are not intended to be, or to be the subject of, an investment opportunity, investment 
                  contract, or security of any type. Tokens should not be purchased with any expectation of profit or 
                  financial return.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Digital Collectibles</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  NAT250 tokens are digital collectibles created to commemorate America's Semiquincentennial celebration. 
                  Token holders may receive access to exclusive content, performances, and community features.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <div className="flex items-start gap-4 mb-6">
              <Shield className="h-6 w-6 text-patriot-gold flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-4">3. Blockchain and Technical Details</h2>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="font-medium">Network</span>
                <span className="text-sm">NAT250 tokens are built on the Solana blockchain for fast, low-cost transactions</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="font-medium">Supply</span>
                <span className="text-sm">Total supply of 17,760,000 tokens commemorating the year 1776 of American independence</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="font-medium">Price</span>
                <span className="text-sm">$1.77 per token in honor of 1776</span>
              </div>
              <div className="pt-3">
                <p className="text-sm text-muted-foreground">
                  <strong>Technical Risks:</strong> Blockchain technology involves inherent risks including but not limited to 
                  network congestion, transaction failures, smart contract vulnerabilities, and potential loss of access to tokens.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6">4. Eligibility and Compliance</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-patriot-blue rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-sm">You must be at least 18 years old and have the legal capacity to enter into these terms in your jurisdiction.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-patriot-blue rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-sm">You are responsible for compliance with all applicable laws and regulations in your jurisdiction regarding the purchase and ownership of digital tokens.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-patriot-blue rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-sm">Participation may be restricted or prohibited in certain jurisdictions. It is your responsibility to determine whether your participation is lawful.</span>
              </li>
            </ul>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-patriot-red/5 to-transparent">
            <div className="flex items-start gap-4 mb-6">
              <AlertTriangle className="h-6 w-6 text-patriot-red flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-4 text-patriot-red">5. Risks and Disclaimers</h2>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Cryptocurrency Risks</h3>
                <p className="text-sm leading-relaxed">
                  Cryptocurrency investments carry significant risk. The value of tokens may fluctuate dramatically and 
                  you may lose your entire investment.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">No Investment Advice</h3>
                <p className="text-sm leading-relaxed">
                  Nothing on this website constitutes investment, financial, legal, or tax advice. You should consult 
                  with your own advisors before participating.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Cultural Purpose</h3>
                <p className="text-sm leading-relaxed">
                  This project is focused solely on preserving and celebrating American musical and cultural history, 
                  not providing investment returns.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6">6. Intellectual Property</h2>
            <p className="text-sm leading-relaxed">
              All content, including Hannah Magnelli's National Anthem performance, website design, and associated materials, 
              are protected by copyright and other intellectual property rights. Token ownership grants access to specified 
              content but does not transfer underlying intellectual property rights.
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6">7. Limitation of Liability</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-patriot-navy rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-sm">To the maximum extent permitted by law, National Anthem 250, Hannah Magnelli, and associated parties shall not be liable for any indirect, incidental, special, consequential, or punitive damages.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-patriot-navy rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-sm">Our total liability shall not exceed the amount you paid for tokens.</span>
              </li>
            </ul>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6">8. Privacy and Data</h2>
            <p className="text-sm leading-relaxed">
              We collect and use personal information in accordance with our Privacy Policy. By using our services, you 
              consent to such collection and use of your information.
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6">9. Modifications</h2>
            <p className="text-sm leading-relaxed">
              We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated 
              effective date. Your continued use of our services constitutes acceptance of any modifications.
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6">10. Governing Law</h2>
            <p className="text-sm leading-relaxed">
              These terms shall be governed by and construed in accordance with the laws of the United States, without 
              regard to conflict of law principles.
            </p>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-patriot-blue/5 to-transparent">
            <div className="flex items-start gap-4 mb-6">
              <Mail className="h-6 w-6 text-patriot-blue flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-4">11. Contact Information</h2>
              </div>
            </div>

            <p className="text-sm mb-4">For questions about these terms, please contact us:</p>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-3">
                <span className="font-semibold min-w-20">Email:</span>
                <a href="mailto:legal@anthem250.com" className="text-patriot-blue hover:underline">legal@anthem250.com</a>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-semibold min-w-20">Website:</span>
                <a href="https://anthem250.com" target="_blank" rel="noopener noreferrer" className="text-patriot-blue hover:underline">https://anthem250.com</a>
              </div>
            </div>
          </Card>

          <div className="bg-gradient-to-br from-patriot-navy to-patriot-blue rounded-2xl p-8 text-center text-white">
            <AlertTriangle className="h-10 w-10 text-patriot-gold mx-auto mb-4" />
            <p className="text-lg font-semibold mb-2">Important Notice</p>
            <p className="text-sm">
              This project is not affiliated with or endorsed by the official America250 Foundation.
            </p>
            <p className="text-xs mt-4 text-white/70">
              NAT250 • Solana Network • Contract: [Contract Address TBD]
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" data-testid="button-return-home" asChild>
            <Link href="/">
              Return to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
