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
    <section id="timeline" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            AMERICA'S <span className="text-patriot-gold font-serif">250 YEAR JOURNEY</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From independence to innovation, trace the historical path of our national anthem
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-patriot-blue via-patriot-red to-patriot-gold hidden md:block"></div>

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
                  <div className="w-16 h-16 rounded-full bg-patriot-navy border-4 border-patriot-gold flex items-center justify-center z-10">
                    <Calendar className="h-8 w-8 text-patriot-gold" />
                  </div>
                </div>

                <div className="w-full md:w-5/12">
                  <div className="bg-card rounded-xl border border-card-border p-6 hover-elevate transition-all">
                    <div className="text-4xl font-serif font-bold text-patriot-gold mb-2">
                      {event.year}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
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
