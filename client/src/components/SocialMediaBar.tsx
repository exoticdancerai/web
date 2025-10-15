import { FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaTelegram, FaDiscord, FaWhatsapp, FaTiktok, FaLinkedin, FaReddit, FaPinterest, FaGlobe } from "react-icons/fa";

const socialLinks = [
  { name: "Twitter", icon: FaTwitter, url: "https://x.com/USAnthem250" },
  { name: "Facebook", icon: FaFacebook, url: "https://facebook.com/NationalAnthem250" },
  { name: "Instagram", icon: FaInstagram, url: "https://www.instagram.com/NationalAnthem250" },
  { name: "YouTube", icon: FaYoutube, url: "https://youtube.com/@NationalAnthem250" },
  { name: "Telegram", icon: FaTelegram, url: "https://t.me/NationalAnthem250" },
  { name: "Discord", icon: FaDiscord, url: "https://discord.gg/NTQYbXW5RX" },
  { name: "WhatsApp", icon: FaWhatsapp, url: "https://www.whatsapp.com/channel/0029VbBALc1DZ4LTR8A7sT3F" },
  { name: "TikTok", icon: FaTiktok, url: "https://www.tiktok.com/@NationalAnthem250" },
  { name: "LinkedIn", icon: FaLinkedin, url: "https://www.linkedin.com/in/anthem250/" },
  { name: "Reddit", icon: FaReddit, url: "https://www.reddit.com/user/Anthem250/" },
  { name: "Pinterest", icon: FaPinterest, url: "https://www.pinterest.com/NationalAnthem250/" },
  { name: "Truth Social", icon: FaGlobe, url: "https://truthsocial.com/@Anthem250" },
  { name: "Gettr", icon: FaGlobe, url: "https://gettr.com/user/NationalAnthem250" },
];

export default function SocialMediaBar() {
  return (
    <div className="sticky top-0 z-[60] bg-patriot-navy border-b border-patriot-gold/20 py-3">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <span className="text-white/70 text-sm font-medium mr-2">Follow Us:</span>
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-patriot-gold transition-colors"
              aria-label={`Follow us on ${social.name}`}
              data-testid={`link-social-${social.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <social.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
