import { Info, Heart, MapPin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n';
import { PageHero } from '../components/shared/PageHero';
import { ContentSection } from '../components/shared/ContentSection';

const HERO_IMAGE = "https://images.unsplash.com/photo-1630413933714-a36e3aa156b9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwzfHxSb21lJTIwQ29sb3NzZXVtJTIwY2l0eSUyMHBhcmtpbmd8ZW58MHx8fHwxNzcwODA2ODM1fDA&ixlib=rb-4.1.0&q=85";

export const AboutPage = () => {
  const { t } = useLanguage();

  const topics = [
    { title: t('nav.autostrade'), desc: t('home.autostradeDesc') },
    { title: t('nav.tollRoads'), desc: t('home.tollRoadsDesc') },
    { title: t('nav.trafficRules'), desc: t('home.trafficRulesDesc') },
    { title: t('nav.scenicRoutes'), desc: t('home.scenicRoutesDesc') },
    { title: t('nav.carRental'), desc: t('home.carRentalDesc') },
    { title: t('nav.gasStations'), desc: t('home.gasStationsDesc') },
    { title: t('nav.ztl'), desc: t('home.parkingDesc') },
    { title: t('nav.roadSigns'), desc: t('home.roadSignsDesc') },
    { title: t('nav.emergency'), desc: 'Numeri, assistenza in caso di incidente' },
  ];

  return (
    <div data-testid="about-page">
      <PageHero 
        title={t('about.title')}
        subtitle={t('about.subtitle')}
        image={HERO_IMAGE}
      />

      <ContentSection title={t('about.missionTitle')} subtitle={t('about.missionSubtitle')} id="mission">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <div className="prose prose-lg max-w-none text-italia-text-muted">
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                <strong className="text-italia-text">Strade d'Italia</strong> — {t('about.missionText1')}
              </p>
              <p className="leading-relaxed mb-6">
                {t('about.missionText2')}
              </p>
              <p className="leading-relaxed mb-6">
                {t('about.missionText3')}
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 bg-white border-l-4 border-italia-green">
              <Info className="w-8 h-8 text-italia-green mb-4" />
              <h3 className="font-serif text-xl font-medium text-italia-text mb-2">
                {t('about.infoResourceTitle')}
              </h3>
              <p className="text-italia-text-muted">
                {t('about.infoResourceText')}
              </p>
            </div>
            <div className="p-6 bg-white border-l-4 border-italia-gold">
              <Heart className="w-8 h-8 text-italia-gold mb-4" />
              <h3 className="font-serif text-xl font-medium text-italia-text mb-2">
                {t('about.madeWithLoveTitle')}
              </h3>
              <p className="text-italia-text-muted">
                {t('about.madeWithLoveText')}
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      <section className="py-16 bg-white" data-testid="topics-section">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="mb-12">
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-green mb-4">
              {t('about.contentSubtitle')}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-italia-text">
              {t('about.contentTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((item) => (
              <div key={item.title} className="p-6 border border-italia-border hover:border-italia-green transition-colors">
                <h3 className="font-serif text-lg font-medium text-italia-text mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-italia-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-italia-green" data-testid="cta-section">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
          <Mail className="w-12 h-12 text-italia-gold mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-4">
            {t('about.contactCta')}
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            {t('about.contactCtaText')}
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-italia-green font-medium rounded-full hover:bg-italia-limestone transition-all"
          >
            {t('about.contactCtaButton')}
          </Link>
        </div>
      </section>
    </div>
  );
};
