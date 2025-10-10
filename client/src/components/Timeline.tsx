import { Calendar } from "lucide-react";

export default function Timeline() {
  const events = [
    {
      year: "1776",
      title: "Independence Declared",
      description: "The birth of a nation and the foundation of American freedom",
      position: "left",
    },
    {
      year: "1814",
      title: "Anthem Written",
      description: "Francis Scott Key pens the Star-Spangled Banner during the War of 1812",
      position: "right",
    },
    {
      year: "1931",
      title: "Official Anthem",
      description: "Congress officially adopts the Star-Spangled Banner as our national anthem",
      position: "left",
    },
    {
      year: "2024",
      title: "NFT Launch",
      description: "The first digital collectible of the National Anthem debuts on blockchain",
      position: "right",
    },
    {
      year: "2026",
      title: "250th Anniversary",
      description: "America celebrates its semiquincentennial milestone",
      position: "left",
    },
  ];

  return (
    <section id="timeline" className="py-20 bg-gradient-to-b from-patriot-navy to-patriot-red/10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 right-0 h-12 bg-white"></div>
        <div className="absolute top-12 left-0 right-0 h-12 bg-patriot-red"></div>
        <div className="absolute top-24 left-0 right-0 h-12 bg-white"></div>
        <div className="absolute top-36 left-0 right-0 h-12 bg-patriot-red"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
            AMERICA'S <span className="text-patriot-gold font-serif">250 YEAR JOURNEY</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            From independence to innovation, trace the historical path of our national anthem
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-2 bg-gradient-to-b from-white via-patriot-red to-patriot-blue hidden md:block shadow-2xl"></div>

          <div className="space-y-12">
            {events.map((event, index) => (
              <div
                key={event.year}
                className={`relative flex items-center ${
                  event.position === "left" ? "md:flex-row-reverse" : ""
                } flex-col md:gap-8`}
                data-testid={`timeline-event-${event.year}`}
              >
                <div className="w-full md:w-5/12"></div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white border-4 border-patriot-gold flex items-center justify-center z-10 shadow-2xl">
                    <span className="text-4xl">⭐</span>
                  </div>
                </div>

                <div className="w-full md:w-5/12">
                  <div className="bg-white rounded-xl border-4 border-patriot-blue p-6 hover-elevate transition-all shadow-xl">
                    <div className="text-5xl font-serif font-bold text-patriot-red mb-2">
                      {event.year}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-patriot-navy">{event.title}</h3>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-gradient-to-br from-patriot-navy to-patriot-blue rounded-2xl text-white">
            <p className="text-lg mb-2">Join us in celebrating</p>
            <p className="text-5xl font-serif font-bold text-patriot-gold">250 Years</p>
            <p className="text-lg mt-2">of American independence</p>
          </div>
        </div>
      </div>
    </section>
  );
}
