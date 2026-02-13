import { Car, MapPin, Clock, ArrowRight } from 'lucide-react';
import { PageHero } from '../components/shared/PageHero';
import { ContentSection } from '../components/shared/ContentSection';
import { InfoCard } from '../components/shared/InfoCard';
import { useLanguage } from '../i18n';

const HERO_IMAGE = "https://images.unsplash.com/photo-1564859228273-274232fdb516?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxJcmVsYW5kJTIwbW90b3J3YXl8ZW58MHx8fHwxNzcwODA2ODEyfDA&ixlib=rb-4.1.0&q=85";

const motorways = [
  { code: 'M1', route: 'Dublin - Belfast Border', length: '88 km', description: 'Main route to Northern Ireland' },
  { code: 'M4', route: 'Dublin - Sligo (part)', length: '57 km', description: 'Western corridor' },
  { code: 'M6', route: 'Dublin - Galway', length: '56 km', description: 'Route to the West' },
  { code: 'M7', route: 'Dublin - Limerick', length: '104 km', description: 'Connects to Cork via M8' },
  { code: 'M8', route: 'Dublin - Cork', length: '99 km', description: 'Southern corridor' },
  { code: 'M9', route: 'Dublin - Waterford', length: '93 km', description: 'Southeast route' },
  { code: 'M11', route: 'Dublin - Wexford', length: '48 km', description: 'East coast route' },
  { code: 'M50', route: 'Dublin Ring Road', length: '47 km', description: 'Busiest road in Ireland - barrier-free toll' },
];

const roadTypes = [
  { type: 'Motorway (M)', speed: '120 km/h', description: 'High-speed dual carriageways with hard shoulders. No stopping except emergencies.' },
  { type: 'National Primary (N)', speed: '100 km/h', description: 'Main routes between major towns. Can be single or dual carriageway.' },
  { type: 'National Secondary (N)', speed: '100 km/h', description: 'Connect smaller towns to primary routes.' },
  { type: 'Regional (R)', speed: '80 km/h', description: 'Secondary roads, often narrow and winding.' },
  { type: 'Local (L)', speed: '80 km/h', description: 'Minor roads. Can be very narrow with grass in the middle!' },
];

export const MotorwaysPage = () => {
  const { t } = useLanguage();

  return (
    <div data-testid="motorways-page">
      <PageHero 
        title={t('motorways.title')}
        subtitle={t('motorways.subtitle')}
        image={HERO_IMAGE}
      />

      <ContentSection title={t('motorways.networkTitle')} subtitle={t('motorways.networkSubtitle')} id="network">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {motorways.map((mw) => (
            <div 
              key={mw.code}
              className="bg-white border border-italia-border p-6 hover:border-italia-green transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-2xl font-bold text-italia-green">{mw.code}</span>
              </div>
              <h3 className="font-medium text-italia-text mb-2">{mw.route}</h3>
              <p className="text-sm text-italia-text-muted mb-2">{mw.description}</p>
              <p className="text-sm font-mono text-italia-green">{mw.length}</p>
            </div>
          ))}
        </div>

        <InfoCard icon={MapPin} variant="warning" title="M50 Warning" className="mt-8">
          <p className="mt-2">
            The M50 around Dublin has <strong>NO toll booths</strong>. Cameras read your number plate. 
            You must pay via <strong>eflow.ie</strong> by 8pm the next day or face significant fines!
          </p>
        </InfoCard>
      </ContentSection>

      <section className="py-16 bg-white" data-testid="road-types">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="mb-12">
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-green mb-4">
              {t('motorways.typesSubtitle')}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-italia-text">
              {t('motorways.typesTitle')}
            </h2>
          </div>

          <div className="space-y-4">
            {roadTypes.map((road) => (
              <div key={road.type} className="flex flex-col md:flex-row md:items-center gap-4 p-6 border border-italia-border">
                <div className="md:w-48 flex-shrink-0">
                  <h3 className="font-medium text-italia-text">{road.type}</h3>
                  <span className="font-mono text-lg text-italia-green">{road.speed}</span>
                </div>
                <p className="text-italia-text-muted">{road.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-italia-green" data-testid="driving-tips">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <h2 className="font-serif text-3xl font-medium text-white mb-8">Irish Driving Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white/10 backdrop-blur rounded-lg">
              <h3 className="font-medium text-white mb-2">Drive on the Left</h3>
              <p className="text-white/80 text-sm">Ireland drives on the left. Be especially careful at roundabouts - go clockwise!</p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur rounded-lg">
              <h3 className="font-medium text-white mb-2">Narrow Roads</h3>
              <p className="text-white/80 text-sm">Rural roads can be very narrow. Pull into passing places to let others by.</p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur rounded-lg">
              <h3 className="font-medium text-white mb-2">Watch for Animals</h3>
              <p className="text-white/80 text-sm">Sheep and cattle on roads are common in rural areas. Slow down!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
