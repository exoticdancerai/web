import { useEffect, useState } from "react";
import { Flag, Star } from "lucide-react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("July 4, 2026 00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-patriot-navy via-patriot-blue to-patriot-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Flag className="h-8 w-8 text-white" />
            <h2 className="text-3xl md:text-4xl font-black text-white">
              Until America's 250th Anniversary
            </h2>
            <Flag className="h-8 w-8 text-white" />
          </div>
          <div className="flex items-center justify-center gap-2 mb-8">
            <Star className="h-6 w-6 text-patriot-gold" />
            <p className="text-xl text-patriot-gold">Independence Day 2026</p>
            <Star className="h-6 w-6 text-patriot-gold" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border-2 border-patriot-gold">
              <div className="text-5xl font-black text-patriot-gold mb-2">
                {String(timeLeft.days).padStart(3, '0')}
              </div>
              <div className="text-white text-sm">Days</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border-2 border-patriot-gold">
              <div className="text-5xl font-black text-patriot-gold mb-2">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <div className="text-white text-sm">Hours</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border-2 border-patriot-gold">
              <div className="text-5xl font-black text-patriot-gold mb-2">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <div className="text-white text-sm">Minutes</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border-2 border-patriot-gold">
              <div className="text-5xl font-black text-patriot-gold mb-2">
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
              <div className="text-white text-sm">Seconds</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
