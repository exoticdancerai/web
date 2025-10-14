export default function VideoSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            HEAR HANNAH'S PERFORMANCE
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Listen to this beautiful interpretation of 'The Star-Spangled Banner' that will be preserved for America's 250th anniversary
          </p>
          <p className="text-lg text-patriot-gold font-semibold">
            🎵 This is the exact performance that will become part of America's historical record
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-patriot-gold">
            <iframe
              src="https://player.vimeo.com/video/1117265675?h=3179d58365&title=0&byline=0&portrait=0"
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Hannah Magnelli's National Anthem Performance"
              data-testid="video-performance"
            ></iframe>
          </div>
          <p className="text-center mt-4 text-sm text-muted-foreground">
            Hannah Magnelli's Rendition - National Anthem for America's 250th Anniversary
          </p>
        </div>
      </div>
    </section>
  );
}
