import { Gauge, AlertTriangle, Cloud, Moon } from 'lucide-react';
import { PageHero } from '../components/shared/PageHero';
import { ContentSection } from '../components/shared/ContentSection';
import { InfoCard } from '../components/shared/InfoCard';
import { useLanguage } from '../i18n';

const HERO_IMAGE = "https://images.unsplash.com/photo-1764709981956-06d81a015a14?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHwyfHxJdGFseSUyMHJvYWQlMjBzaWduJTIwdHJhZmZpYyUyMHZpbnRhZ2V8ZW58MHx8fHwxNzcwODA2ODI2fDA&ixlib=rb-4.1.0&q=85";

const dataIT = {
  speedLimits: [
    { type: 'Centri abitati', limit: '50 km/h', icon: '🏘️', note: 'In alcune zone (scuole, vie pedonali) — 30 km/h' },
    { type: 'Strade extraurbane', limit: '90 km/h', icon: '🛤️', note: 'Strade a corsia unica fuori dai centri abitati' },
    { type: 'Superstrade', limit: '110 km/h', icon: '🚗', note: 'Strade con spartitraffico, ma non autostrade' },
    { type: 'Autostrade', limit: '130 km/h', icon: '🛣️', note: 'Autostrade a pagamento' },
  ],
  specialConditions: [
    { condition: 'Pioggia, neve, nebbia', reduction: '-20 km/h', note: 'In autostrada — 110 km/h invece di 130 km/h', icon: Cloud },
    { condition: 'Di notte', reduction: 'Invariato', note: 'Limiti uguali, ma si consiglia di rallentare', icon: Moon },
    { condition: 'Neopatentati (meno di 3 anni)', reduction: 'Limiti speciali', note: 'Max 100 km/h in autostrada, 90 km/h in superstrada', icon: AlertTriangle },
  ],
  finesTable: [
    { excess: 'Fino a 10 km/h', fine: '42-173€', points: '0' },
    { excess: '10-40 km/h', fine: '173-695€', points: '3' },
    { excess: '40-60 km/h', fine: '543-2.171€', points: '6' },
    { excess: 'Oltre 60 km/h', fine: '845-3.382€', points: '10' },
  ],
  cameraTypes: [
    { name: 'Autovelox', description: 'Misuratori di velocità fissi. Segnalati in anticipo.' },
    { name: 'Tutor (SICVe)', description: 'Sistema che calcola la velocità media su un tratto.' },
    { name: 'Velobox', description: 'Contenitori che possono essere vuoti o con autovelox.' },
    { name: 'Controllo mobile', description: 'Pattuglie con misuratori portatili.' },
  ],
};

const dataEN = {
  speedLimits: [
    { type: 'Urban areas', limit: '50 km/h', icon: '🏘️', note: 'In some zones (schools, pedestrian streets) — 30 km/h' },
    { type: 'Rural roads', limit: '90 km/h', icon: '🛤️', note: 'Single-lane roads outside built-up areas' },
    { type: 'Expressways (Superstrada)', limit: '110 km/h', icon: '🚗', note: 'Roads with dividers, but not highways' },
    { type: 'Highways (Autostrada)', limit: '130 km/h', icon: '🛣️', note: 'Toll motorways' },
  ],
  specialConditions: [
    { condition: 'Rain, snow, fog', reduction: '-20 km/h', note: 'On highways — 110 km/h instead of 130 km/h', icon: Cloud },
    { condition: 'At night', reduction: 'Unchanged', note: 'Same limits, but reducing speed is recommended', icon: Moon },
    { condition: 'New drivers (less than 3 years)', reduction: 'Special limits', note: 'Max 100 km/h on highways, 90 km/h on expressways', icon: AlertTriangle },
  ],
  finesTable: [
    { excess: 'Up to 10 km/h', fine: '€42-173', points: '0' },
    { excess: '10-40 km/h', fine: '€173-695', points: '3' },
    { excess: '40-60 km/h', fine: '€543-2,171', points: '6' },
    { excess: 'Over 60 km/h', fine: '€845-3,382', points: '10' },
  ],
  cameraTypes: [
    { name: 'Autovelox', description: 'Fixed speed cameras. Signposted in advance.' },
    { name: 'Tutor (SICVe)', description: 'System that calculates average speed over a distance.' },
    { name: 'Velobox', description: 'Boxes that may be empty or contain speed cameras.' },
    { name: 'Mobile control', description: 'Police patrols with portable speed guns.' },
  ],
};

export const SpeedLimitsPage = () => {
  const { t, language } = useLanguage();
  const data = language === 'en' ? dataEN : dataIT;

  return (
    <div data-testid="speed-limits-page">
      <PageHero 
        title={t('speedLimits.title')}
        subtitle={t('speedLimits.subtitle')}
        image={HERO_IMAGE}
      />

      <ContentSection title={t('speedLimits.standardTitle')} subtitle={t('speedLimits.standardSubtitle')} id="limits">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.speedLimits.map((item) => (
            <div 
              key={item.type}
              className="bg-white border border-italia-border p-6 hover:border-italia-green transition-colors text-center"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <div className="font-mono text-4xl font-bold text-italia-green mb-2">
                {item.limit}
              </div>
              <h3 className="font-serif text-lg font-medium text-italia-text mb-2">
                {item.type}
              </h3>
              <p className="text-sm text-italia-text-muted">{item.note}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <section className="py-16 bg-white" data-testid="conditions-section">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="mb-12">
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-green mb-4">
              {t('speedLimits.conditionsSubtitle')}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-italia-text">
              {t('speedLimits.conditionsTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.specialConditions.map((item) => (
              <div key={item.condition} className="p-6 border-l-4 border-italia-gold">
                <item.icon className="w-8 h-8 text-italia-gold mb-4" />
                <h3 className="font-serif text-xl font-medium text-italia-text mb-2">
                  {item.condition}
                </h3>
                <div className="font-mono text-lg text-italia-red mb-2">{item.reduction}</div>
                <p className="text-sm text-italia-text-muted">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContentSection title={t('speedLimits.finesTitle')} subtitle={t('speedLimits.finesSubtitle')} id="fines">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-italia-red">
                <th className="text-left py-4 pr-4 font-mono text-xs uppercase tracking-wider text-italia-text-muted">
                  {language === 'en' ? 'Excess' : 'Eccesso'}
                </th>
                <th className="text-left py-4 pr-4 font-mono text-xs uppercase tracking-wider text-italia-text-muted">
                  {language === 'en' ? 'Fine' : 'Multa'}
                </th>
                <th className="text-left py-4 font-mono text-xs uppercase tracking-wider text-italia-text-muted">
                  {language === 'en' ? 'Points' : 'Punti'}
                </th>
              </tr>
            </thead>
            <tbody>
              {data.finesTable.map((row, index) => (
                <tr key={row.excess} className={index % 2 === 0 ? 'bg-white' : 'bg-italia-limestone/50'}>
                  <td className="py-4 pr-4 text-italia-text">{row.excess}</td>
                  <td className="py-4 pr-4 font-mono text-italia-red font-medium">{row.fine}</td>
                  <td className="py-4 font-mono">{row.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-8 p-6 bg-italia-red/10 border-l-4 border-italia-red">
          <p className="text-italia-text">
            <strong>{language === 'en' ? 'Important:' : 'Importante:'}</strong> {t('speedLimits.finesNote')}
          </p>
        </div>
      </ContentSection>

      <section className="py-16 bg-italia-green" data-testid="cameras-section">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="mb-12">
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-gold mb-4">
              {t('speedLimits.camerasSubtitle')}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-white">
              {t('speedLimits.camerasTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.cameraTypes.map((camera) => (
              <div key={camera.name} className="p-6 bg-white/10 backdrop-blur">
                <h3 className="font-serif text-xl font-medium text-white mb-3">
                  {camera.name}
                </h3>
                <p className="text-white/80 text-sm">{camera.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
