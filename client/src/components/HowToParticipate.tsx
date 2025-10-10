import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Wallet, Award } from "lucide-react";
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
      description: "You'll receive updates about the 250STAR launch.",
    });
    setEmail("");
    setName("");
  };

  return (
    <section id="participate" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            HOW TO <span className="text-patriot-red">PARTICIPATE</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join the 250STAR launch in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="relative inline-block mb-6">
              <div className="w-20 h-20 rounded-full bg-patriot-red/10 flex items-center justify-center">
                <Mail className="h-10 w-10 text-patriot-red" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-patriot-red text-white flex items-center justify-center font-bold">
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
              <div className="w-20 h-20 rounded-full bg-patriot-blue/10 flex items-center justify-center">
                <Wallet className="h-10 w-10 text-patriot-blue" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-patriot-blue text-white flex items-center justify-center font-bold">
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
              <div className="w-20 h-20 rounded-full bg-patriot-gold/10 flex items-center justify-center">
                <Award className="h-10 w-10 text-patriot-gold" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-patriot-gold text-patriot-navy flex items-center justify-center font-bold">
                3
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3">Own History</h3>
            <p className="text-muted-foreground">
              Receive your 250STAR NFT and become part of America's digital heritage
            </p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl border border-card-border p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Join the Waitlist</h3>
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
                className="w-full h-12 bg-patriot-red hover:bg-patriot-red-hover text-white text-lg"
                data-testid="button-submit-waitlist"
              >
                Join Waitlist Now
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
