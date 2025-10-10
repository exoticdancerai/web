import { Mail, MessageCircle, Send } from "lucide-react";
import { FaDiscord, FaTelegram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-patriot-navy to-black text-white py-12 border-t-4 border-patriot-gold relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white text-4xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            ★
          </div>
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-black">Anthem250</span>
            </div>
            <p className="text-white/70 text-sm">
              The first National Anthem NFT commemorating America's 250th anniversary.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#mission" className="text-white/70 hover:text-white transition-colors">
                  Mission
                </a>
              </li>
              <li>
                <a href="#nft-showcase" className="text-white/70 hover:text-white transition-colors">
                  NFT Collection
                </a>
              </li>
              <li>
                <a href="#timeline" className="text-white/70 hover:text-white transition-colors">
                  Timeline
                </a>
              </li>
              <li>
                <a href="#tokenomics" className="text-white/70 hover:text-white transition-colors">
                  Tokenomics
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-patriot-gold" />
                <a href="mailto:info@anthem250.com" className="text-white/70 hover:text-white transition-colors">
                  info@anthem250.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-patriot-gold" />
                <a href="mailto:support@anthem250.com" className="text-white/70 hover:text-white transition-colors">
                  support@anthem250.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Send className="h-4 w-4 text-patriot-gold" />
                <a href="mailto:press@anthem250.com" className="text-white/70 hover:text-white transition-colors">
                  press@anthem250.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Community</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                data-testid="link-discord"
              >
                <FaDiscord className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                data-testid="link-telegram"
              >
                <FaTelegram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                data-testid="link-twitter"
              >
                <FaTwitter className="h-5 w-5" />
              </a>
            </div>
            <p className="text-white/70 text-sm mt-4">
              Join our community for 24/7 support and updates
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm">
              © 2024 Anthem250. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
