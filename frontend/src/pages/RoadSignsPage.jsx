import { AlertTriangle, Octagon, CircleSlash, ArrowRight, Info } from 'lucide-react';
import { PageHero } from '../components/shared/PageHero';
import { ContentSection } from '../components/shared/ContentSection';
import { useLanguage } from '../i18n';

const HERO_IMAGE = "https://images.unsplash.com/photo-1764711274585-e895820ef034?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHwxfHxJdGFseSUyMHJvYWQlMjBzaWduJTIwdHJhZmZpYyUyMHZpbnRhZ2V8ZW58MHx8fHwxNzcwODA2ODI2fDA&ixlib=rb-4.1.0&q=85";

const dataIT = {
  signCategories: [
    {
      name: 'Segnali di divieto',
      description: 'Segnali rotondi con bordo rosso',
      color: 'bg-italia-red/10 border-italia-red',
      signs: [
        { name: 'Divieto di accesso', meaning: 'Accesso vietato', icon: '⛔' },
        { name: 'Divieto di transito', meaning: 'Transito vietato', icon: '🚫' },
        { name: 'Divieto di sorpasso', meaning: 'Sorpasso vietato', icon: '🚗❌🚗' },
        { name: 'Divieto di sosta', meaning: 'Sosta vietata', icon: '🅿️❌' },
        { name: 'Limite di velocità', meaning: 'Limite di velocità', icon: '50' },
        { name: 'Senso vietato', meaning: 'Senso unico (accesso vietato)', icon: '➖' },
      ],
    },
    {
      name: 'Segnali di pericolo',
      description: 'Segnali triangolari con bordo rosso',
      color: 'bg-italia-gold/10 border-italia-gold',
      signs: [
        { name: 'Curva pericolosa', meaning: 'Curva pericolosa', icon: '↩️' },
        { name: 'Incrocio', meaning: 'Incrocio', icon: '✖️' },
        { name: 'Passaggio a livello', meaning: 'Passaggio a livello', icon: '🚂' },
        { name: 'Lavori in corso', meaning: 'Lavori stradali', icon: '🚧' },
        { name: 'Animali', meaning: 'Animali selvatici', icon: '🦌' },
        { name: 'Strada sdrucciolevole', meaning: 'Strada scivolosa', icon: '💧' },
      ],
    },
    {
      name: 'Segnali di obbligo',
      description: 'Segnali rotondi blu',
      color: 'bg-blue-100 border-blue-500',
      signs: [
        { name: 'Direzione obbligatoria', meaning: 'Direzione obbligatoria', icon: '➡️' },
        { name: 'Rotatoria', meaning: 'Circolazione rotatoria', icon: '🔄' },
        { name: 'Pista ciclabile', meaning: 'Pista ciclabile', icon: '🚴' },
        { name: 'Percorso pedonale', meaning: 'Zona pedonale', icon: '🚶' },
        { name: 'Catene obbligatorie', meaning: 'Catene da neve obbligatorie', icon: '⛓️' },
        { name: 'Velocità minima', meaning: 'Velocità minima', icon: '30↑' },
      ],
    },
    {
      name: 'Segnali informativi',
      description: 'Segnali rettangolari di vari colori',
      color: 'bg-italia-green/10 border-italia-green',
      signs: [
        { name: 'Autostrada', meaning: 'Autostrada (sfondo verde)', icon: '🛣️' },
        { name: 'Strada extraurbana', meaning: 'Strada extraurbana (sfondo blu)', icon: '🛤️' },
        { name: 'Centro città', meaning: 'Centro città', icon: '🏛️' },
        { name: 'Parcheggio', meaning: 'Parcheggio', icon: '🅿️' },
        { name: 'Area di servizio', meaning: 'Area di servizio', icon: '⛽' },
        { name: 'Ospedale', meaning: 'Ospedale', icon: '🏥' },
      ],
    },
  ],
  usefulTerms: [
    { term: 'STOP', meaning: 'Fermata obbligatoria' },
    { term: 'DARE PRECEDENZA', meaning: 'Dare la precedenza' },
    { term: 'ZONA TRAFFICO LIMITATO', meaning: 'ZTL - accesso limitato' },
    { term: 'USCITA', meaning: 'Uscita' },
    { term: 'ENTRATA', meaning: 'Entrata' },
    { term: 'PEDAGGIO', meaning: 'Pedaggio' },
    { term: 'DEVIAZIONE', meaning: 'Deviazione' },
    { term: 'LAVORI IN CORSO', meaning: 'Lavori stradali' },
  ],
  colorMeanings: [
    { color: 'Verde', meaning: 'Autostrada' },
    { color: 'Blu', meaning: 'Strade extraurbane e statali' },
    { color: 'Bianco', meaning: 'Strade urbane' },
    { color: 'Giallo', meaning: 'Indicazioni temporanee, deviazioni' },
    { color: 'Marrone', meaning: 'Luoghi turistici' },
    { color: 'Nero', meaning: 'Zone industriali' },
  ],
  priorityRules: [
    'Ai segnali: Chi arriva da destra ha la precedenza (se non ci sono segnali)',
    'Nelle rotatorie: I veicoli all\'interno della rotatoria hanno la precedenza',
    'Sui ponti stretti: Chi sale ha la precedenza',
  ],
};

const dataEN = {
  signCategories: [
    {
      name: 'Prohibition signs',
      description: 'Round signs with red border',
      color: 'bg-italia-red/10 border-italia-red',
      signs: [
        { name: 'Divieto di accesso', meaning: 'No entry', icon: '⛔' },
        { name: 'Divieto di transito', meaning: 'No through traffic', icon: '🚫' },
        { name: 'Divieto di sorpasso', meaning: 'No overtaking', icon: '🚗❌🚗' },
        { name: 'Divieto di sosta', meaning: 'No parking', icon: '🅿️❌' },
        { name: 'Limite di velocità', meaning: 'Speed limit', icon: '50' },
        { name: 'Senso vietato', meaning: 'One way (no entry)', icon: '➖' },
      ],
    },
    {
      name: 'Warning signs',
      description: 'Triangular signs with red border',
      color: 'bg-italia-gold/10 border-italia-gold',
      signs: [
        { name: 'Curva pericolosa', meaning: 'Dangerous curve', icon: '↩️' },
        { name: 'Incrocio', meaning: 'Intersection', icon: '✖️' },
        { name: 'Passaggio a livello', meaning: 'Railroad crossing', icon: '🚂' },
        { name: 'Lavori in corso', meaning: 'Road works', icon: '🚧' },
        { name: 'Animali', meaning: 'Wild animals', icon: '🦌' },
        { name: 'Strada sdrucciolevole', meaning: 'Slippery road', icon: '💧' },
      ],
    },
    {
      name: 'Mandatory signs',
      description: 'Round blue signs',
      color: 'bg-blue-100 border-blue-500',
      signs: [
        { name: 'Direzione obbligatoria', meaning: 'Mandatory direction', icon: '➡️' },
        { name: 'Rotatoria', meaning: 'Roundabout', icon: '🔄' },
        { name: 'Pista ciclabile', meaning: 'Bicycle path', icon: '🚴' },
        { name: 'Percorso pedonale', meaning: 'Pedestrian zone', icon: '🚶' },
        { name: 'Catene obbligatorie', meaning: 'Snow chains required', icon: '⛓️' },
        { name: 'Velocità minima', meaning: 'Minimum speed', icon: '30↑' },
      ],
    },
    {
      name: 'Information signs',
      description: 'Rectangular signs of various colors',
      color: 'bg-italia-green/10 border-italia-green',
      signs: [
        { name: 'Autostrada', meaning: 'Highway (green background)', icon: '🛣️' },
        { name: 'Strada extraurbana', meaning: 'Rural road (blue background)', icon: '🛤️' },
        { name: 'Centro città', meaning: 'City center', icon: '🏛️' },
        { name: 'Parcheggio', meaning: 'Parking', icon: '🅿️' },
        { name: 'Area di servizio', meaning: 'Service area', icon: '⛽' },
        { name: 'Ospedale', meaning: 'Hospital', icon: '🏥' },
      ],
    },
  ],
  usefulTerms: [
    { term: 'STOP', meaning: 'Mandatory stop' },
    { term: 'DARE PRECEDENZA', meaning: 'Give way' },
    { term: 'ZONA TRAFFICO LIMITATO', meaning: 'ZTL - restricted access' },
    { term: 'USCITA', meaning: 'Exit' },
    { term: 'ENTRATA', meaning: 'Entrance' },
    { term: 'PEDAGGIO', meaning: 'Toll' },
    { term: 'DEVIAZIONE', meaning: 'Detour' },
    { term: 'LAVORI IN CORSO', meaning: 'Road works' },
  ],
  colorMeanings: [
    { color: 'Green', meaning: 'Highways (autostrade)' },
    { color: 'Blue', meaning: 'Rural and state roads' },
    { color: 'White', meaning: 'Urban roads' },
    { color: 'Yellow', meaning: 'Temporary signs, detours' },
    { color: 'Brown', meaning: 'Tourist attractions' },
    { color: 'Black', meaning: 'Industrial zones' },
  ],
  priorityRules: [
    'At intersections: Right-hand traffic has priority (if no signs)',
    'In roundabouts: Vehicles already in the roundabout have priority',
    'On narrow bridges: Uphill traffic has priority',
  ],
};

export const RoadSignsPage = () => {
  const { t, language } = useLanguage();
  const data = language === 'en' ? dataEN : dataIT;

  return (
    <div data-testid="road-signs-page">
      <PageHero 
        title={t('roadSigns.title')}
        subtitle={t('roadSigns.subtitle')}
        image={HERO_IMAGE}
      />

      {data.signCategories.map((category) => (
        <ContentSection 
          key={category.name} 
          title={category.name} 
          subtitle={category.description}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {category.signs.map((sign) => (
              <div key={sign.name} className={`p-4 border-l-4 ${category.color}`}>
                <div className="text-2xl mb-2">{sign.icon}</div>
                <h4 className="font-medium text-italia-text text-sm mb-1">{sign.name}</h4>
                <p className="text-xs text-italia-text-muted">{sign.meaning}</p>
              </div>
            ))}
          </div>
        </ContentSection>
      ))}

      <section className="py-16 bg-white" data-testid="terms-section">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-green mb-4">
                {t('roadSigns.termsSubtitle')}
              </span>
              <h2 className="font-serif text-3xl font-medium text-italia-text mb-8">
                {t('roadSigns.termsTitle')}
              </h2>
              <div className="space-y-3">
                {data.usefulTerms.map((item) => (
                  <div key={item.term} className="flex justify-between items-center py-3 border-b border-italia-border">
                    <span className="font-mono font-medium text-italia-text">{item.term}</span>
                    <span className="text-italia-text-muted">{item.meaning}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-green mb-4">
                {t('roadSigns.colorsSubtitle')}
              </span>
              <h2 className="font-serif text-3xl font-medium text-italia-text mb-8">
                {t('roadSigns.colorsTitle')}
              </h2>
              <div className="space-y-3">
                {data.colorMeanings.map((item) => (
                  <div key={item.color} className="flex justify-between items-center py-3 border-b border-italia-border">
                    <span className="font-medium text-italia-text">{item.color}</span>
                    <span className="text-italia-text-muted">{item.meaning}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-italia-green" data-testid="priority-section">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-gold mb-4">
            {t('roadSigns.prioritySubtitle')}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-8">
            {t('roadSigns.priorityTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.priorityRules.map((rule, index) => (
              <div key={index} className="p-6 bg-white/10 backdrop-blur">
                <span className="font-mono text-2xl font-bold text-italia-gold mb-4 block">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="text-white/90">{rule}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
