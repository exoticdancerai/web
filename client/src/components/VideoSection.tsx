import { Music } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function VideoSection() {
  const { t } = useLanguage();
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            {t('performance.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            {t('performance.description')}
          </p>
          <div className="flex items-center justify-center gap-2">
            <Music className="h-6 w-6 text-patriot-gold" />
            <p className="text-lg text-patriot-gold font-semibold">
              {t('performance.caption')}
            </p>
          </div>
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
