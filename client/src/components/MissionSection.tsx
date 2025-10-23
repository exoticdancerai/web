import { Flag, Music, History, Eye, Target, Star, Users, Shield, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function MissionSection() {
  const { t } = useLanguage();
  return (
    <section id="mission" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-patriot-red via-white to-patriot-blue"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            {t('vision.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('vision.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-patriot-blue/10 to-patriot-red/10 rounded-2xl p-8 border-2 border-patriot-blue">
            <div className="mb-4">
              <Eye className="h-16 w-16 text-patriot-blue" />
            </div>
            <h3 className="text-3xl font-black mb-4">{t('vision.visionTitle')}</h3>
            <p className="text-lg mb-6">
              {t('vision.visionText')}
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Star className="h-6 w-6 text-patriot-gold mt-1" />
                <div>
                  <p className="font-bold">{t('vision.visionBullet1Title')}:</p>
                  <p className="text-muted-foreground">{t('vision.visionBullet1Text')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Flag className="h-6 w-6 text-patriot-red mt-1" />
                <div>
                  <p className="font-bold">{t('vision.visionBullet2Title')}:</p>
                  <p className="text-muted-foreground">{t('vision.visionBullet2Text')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Music className="h-6 w-6 text-patriot-blue mt-1" />
                <div>
                  <p className="font-bold">{t('vision.visionBullet3Title')}:</p>
                  <p className="text-muted-foreground">{t('vision.visionBullet3Text')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-patriot-red/10 to-patriot-gold/10 rounded-2xl p-8 border-2 border-patriot-red">
            <div className="mb-4">
              <Target className="h-16 w-16 text-patriot-red" />
            </div>
            <h3 className="text-3xl font-black mb-4">{t('vision.missionTitle')}</h3>
            <p className="text-lg mb-6">
              {t('vision.missionText')}
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Star className="h-6 w-6 text-patriot-gold mt-1" />
                <div>
                  <p className="font-bold">{t('vision.missionBullet1Title')}:</p>
                  <p className="text-muted-foreground">{t('vision.missionBullet1Text')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Music className="h-6 w-6 text-patriot-blue mt-1" />
                <div>
                  <p className="font-bold">{t('vision.missionBullet2Title')}:</p>
                  <p className="text-muted-foreground">{t('vision.missionBullet2Text')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="h-6 w-6 text-patriot-red mt-1" />
                <div>
                  <p className="font-bold">{t('vision.missionBullet3Title')}:</p>
                  <p className="text-muted-foreground">{t('vision.missionBullet3Text')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-patriot-navy mt-1" />
                <div>
                  <p className="font-bold">{t('vision.missionBullet4Title')}:</p>
                  <p className="text-muted-foreground">{t('vision.missionBullet4Text')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
