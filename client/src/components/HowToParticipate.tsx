import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Wallet, Award, Target, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function HowToParticipate() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Waitlist submission:", { email, name });
    toast({
      title: "Welcome to the waitlist!",
      description: "You'll receive updates about the NAT250 launch.",
    });
    setEmail("");
    setName("");
  };

  return (
    <section id="participate" className="py-20 bg-gradient-to-br from-patriot-blue/10 to-patriot-red/10 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-patriot-red via-white to-patriot-blue"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Target className="h-12 w-12 text-patriot-red" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            HOW TO <span className="bg-gradient-to-r from-patriot-red to-patriot-blue bg-clip-text text-transparent">PARTICIPATE</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join the NAT250 launch in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="relative inline-block mb-6">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-patriot-red flex items-center justify-center shadow-xl">
                <Mail className="h-12 w-12 text-patriot-red" />
              </div>
              <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-patriot-red text-white flex items-center justify-center font-bold text-xl border-2 border-white">
                1
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3">Join Waitlist</h3>
            <p className="text-muted-foreground">
              Sign up with your email to receive early access notifications and exclusive updates
            </p>
          </div>

          <div className="text-center">
            <div className="relative inline-block mb-6">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-patriot-blue flex items-center justify-center shadow-xl">
                <Wallet className="h-12 w-12 text-patriot-blue" />
              </div>
              <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-patriot-blue text-white flex items-center justify-center font-bold text-xl border-2 border-white">
                2
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3">Connect Wallet</h3>
            <p className="text-muted-foreground">
              Link your crypto wallet or use credit card payment for seamless purchase
            </p>
          </div>

          <div className="text-center">
            <div className="relative inline-block mb-6">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-patriot-gold flex items-center justify-center shadow-xl">
                <Award className="h-12 w-12 text-patriot-gold" />
              </div>
              <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-patriot-gold text-patriot-navy flex items-center justify-center font-bold text-xl border-2 border-white">
                3
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3">Own History</h3>
            <p className="text-muted-foreground">
              Receive your NAT250 NFT and become part of America's digital heritage
            </p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl border-4 border-patriot-red p-8 shadow-2xl">
            <div className="text-center mb-6">
              <Star className="h-16 w-16 text-patriot-gold mx-auto mb-3" />
              <h3 className="text-3xl font-black text-patriot-navy">JOIN THE WAITLIST</h3>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className="mt-2"
                  required
                  data-testid="input-name"
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="mt-2"
                  required
                  data-testid="input-email"
                />
              </div>
              <Button
                type="submit"
                className="w-full h-14 bg-patriot-red hover:bg-patriot-red-hover text-white text-xl font-bold border-2 border-white shadow-xl"
                data-testid="button-submit-waitlist"
              >
JOIN WAITLIST NOW
              </Button>
            </form>
            <p className="text-sm text-muted-foreground text-center mt-6">
              Be among the first to own a piece of American history. Limited editions available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
