import { MapPin, Clock, Euro, Info } from 'lucide-react';
import { useLanguage } from '../i18n';
import { PageHero } from '../components/shared/PageHero';
import { ContentSection } from '../components/shared/ContentSection';
import { InfoCard } from '../components/shared/InfoCard';

const HERO_IMAGE = "https://images.unsplash.com/photo-1640881470888-22adc6819e3a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHwyfHxBbWFsZmklMjBjb2FzdCUyMHJvYWQlMjBkcml2ZSUyMHNjZW5pY3xlbnwwfHx8fDE3NzA4MDY4MjB8MA&ixlib=rb-4.1.0&q=85";

const mainAutostrade = [
  { name: 'A1 (Autostrada del Sole)', route: 'Milano — Napoli', length: '759 km', description: 'La principale autostrada del paese, che collega nord e sud attraverso Bologna, Firenze e Roma.' },
  { name: 'A4 (Serenissima)', route: 'Torino — Trieste', length: '528 km', description: 'Attraversa il nord Italia, passando per Milano, Verona e Venezia.' },
  { name: 'A14 (Autostrada Adriatica)', route: 'Bologna — Taranto', length: '743 km', description: 'Autostrada adriatica lungo la costa orientale.' },
  { name: 'A7', route: 'Milano — Genova', length: '134 km', description: 'Collega la capitale lombarda con il principale porto ligure.' },
  { name: 'A10 (Autostrada dei Fiori)', route: 'Genova — Ventimiglia', length: '158 km', description: 'Autostrada dei fiori lungo la costa ligure fino al confine francese.' },
  { name: 'A3 (Autostrada del Mediterraneo)', route: 'Napoli — Reggio Calabria', length: '443 km', description: 'Collega Napoli alla punta dello stivale italiano.' },
];

export const AutostradePage = () => {
  const { t } = useLanguage();

  return (
    <div data-testid="autostrade-page">
      <PageHero 
        title={t('autostrade.title')}
        subtitle={t('autostrade.subtitle')}
        image={HERO_IMAGE}
      />

      <ContentSection title={t('autostrade.overviewTitle')} subtitle={t('autostrade.overviewSubtitle')} id="overview">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          <div className="lg:col-span-7">
            <div className="prose prose-lg max-w-none text-italia-text-muted">
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                <strong className="text-italia-text">Autostrade</strong> — {t('autostrade.overviewText1')}
              </p>
              <p className="leading-relaxed mb-6">
                {t('autostrade.overviewText2')}
              </p>
              <p className="leading-relaxed">
                {t('autostrade.overviewText3')}
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 space-y-6">
            <InfoCard icon={MapPin} title={t('autostrade.lengthTitle')}>
              {t('autostrade.lengthText')}
            </InfoCard>
            <InfoCard icon={Clock} title={t('autostrade.serviceAreasTitle')}>
              {t('autostrade.serviceAreasText')}
            </InfoCard>
            <InfoCard icon={Euro} title={t('autostrade.costTitle')}>
              {t('autostrade.costText')}
            </InfoCard>
          </div>
        </div>
      </ContentSection>

      <section className="py-16 bg-white" data-testid="autostrade-list">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="mb-12">
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-green mb-4">
              {t('autostrade.mainRoutesSubtitle')}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-italia-text">
              {t('autostrade.mainRoutesTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mainAutostrade.map((autostrada) => (
              <div 
                key={autostrada.name}
                className="border border-italia-border p-6 md:p-8 hover:border-italia-green transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-serif text-xl font-medium text-italia-text">
                    {autostrada.name}
                  </h3>
                  <span className="font-mono text-sm text-italia-green">
                    {autostrada.length}
                  </span>
                </div>
                <p className="font-medium text-italia-text mb-2">{autostrada.route}</p>
                <p className="text-sm text-italia-text-muted leading-relaxed">
                  {autostrada.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContentSection title={t('autostrade.tipsTitle')} subtitle={t('autostrade.tipsSubtitle')} id="tips">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <InfoCard icon={Info} title={t('autostrade.tip1Title')}>
            {t('autostrade.tip1Text')}
          </InfoCard>
          <InfoCard icon={Info} title={t('autostrade.tip2Title')} variant="gold">
            {t('autostrade.tip2Text')}
          </InfoCard>
          <InfoCard icon={Info} title={t('autostrade.tip3Title')}>
            {t('autostrade.tip3Text')}
          </InfoCard>
        </div>
      </ContentSection>
    </div>
  );
};
