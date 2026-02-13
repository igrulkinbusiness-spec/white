import { Car, MapPin, Clock, ArrowRight } from 'lucide-react';
import { PageHero } from '../components/shared/PageHero';
import { ContentSection } from '../components/shared/ContentSection';
import { InfoCard } from '../components/shared/InfoCard';
import { useLanguage } from '../i18n';

const HERO_IMAGE = "https://images.unsplash.com/photo-1564859228273-274232fdb516?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxJcmVsYW5kJTIwbW90b3J3YXl8ZW58MHx8fHwxNzcwODA2ODEyfDA&ixlib=rb-4.1.0&q=85";

const content = {
  en: {
    title: 'Irish Motorways',
    subtitle: 'Ireland has a modern motorway network connecting major cities. Motorways are marked with M prefix.',
    networkTitle: 'Motorway Network',
    networkSubtitle: 'Main Routes',
    typesTitle: 'Road Types',
    typesSubtitle: 'Classification',
    m50Warning: 'The M50 around Dublin has NO toll booths. Cameras read your number plate. You must pay via eflow.ie by 8pm the next day or face significant fines!',
    tipsTitle: 'Irish Driving Tips',
    tip1Title: 'Drive on the Left',
    tip1Text: 'Ireland drives on the left. Be especially careful at roundabouts - go clockwise!',
    tip2Title: 'Narrow Roads',
    tip2Text: 'Rural roads can be very narrow. Pull into passing places to let others by.',
    tip3Title: 'Watch for Animals',
    tip3Text: 'Sheep and cattle on roads are common in rural areas. Slow down!',
    motorways: [
      { code: 'M1', route: 'Dublin - Belfast Border', length: '88 km', description: 'Main route to Northern Ireland' },
      { code: 'M4', route: 'Dublin - Sligo (part)', length: '57 km', description: 'Western corridor' },
      { code: 'M6', route: 'Dublin - Galway', length: '56 km', description: 'Route to the West' },
      { code: 'M7', route: 'Dublin - Limerick', length: '104 km', description: 'Connects to Cork via M8' },
      { code: 'M8', route: 'Dublin - Cork', length: '99 km', description: 'Southern corridor' },
      { code: 'M9', route: 'Dublin - Waterford', length: '93 km', description: 'Southeast route' },
      { code: 'M11', route: 'Dublin - Wexford', length: '48 km', description: 'East coast route' },
      { code: 'M50', route: 'Dublin Ring Road', length: '47 km', description: 'Busiest road in Ireland - barrier-free toll' },
    ],
    roadTypes: [
      { type: 'Motorway (M)', speed: '120 km/h', description: 'High-speed dual carriageways with hard shoulders. No stopping except emergencies.' },
      { type: 'National Primary (N)', speed: '100 km/h', description: 'Main routes between major towns. Can be single or dual carriageway.' },
      { type: 'National Secondary (N)', speed: '100 km/h', description: 'Connect smaller towns to primary routes.' },
      { type: 'Regional (R)', speed: '80 km/h', description: 'Secondary roads, often narrow and winding.' },
      { type: 'Local (L)', speed: '80 km/h', description: 'Minor roads. Can be very narrow with grass in the middle!' },
    ],
  },
  ga: {
    title: 'Mótarbhealaí na hÉireann',
    subtitle: 'Tá líonra mótarbhealaí nua-aimseartha ag Éirinn a nascann príomhchathracha. Marcáiltear mótarbhealaí leis an réimír M.',
    networkTitle: 'Líonra Mótarbhealaí',
    networkSubtitle: 'Príomhbhealaí',
    typesTitle: 'Cineálacha Bóithre',
    typesSubtitle: 'Aicmiú',
    m50Warning: 'Níl aon bhuathanna dola ar an M50 timpeall Bhaile Átha Cliath. Léann ceamaraí do phlátaí uimhreach. Caithfidh tú íoc trí eflow.ie faoi 8in an lá dar gcionn nó beidh fíneálacha móra ort!',
    tipsTitle: 'Leideanna Tiomána in Éirinn',
    tip1Title: 'Tiomáin ar Chlé',
    tip1Text: 'Tiomáineann Éire ar chlé. Bí an-chúramach ag timpeallán - téigh ar deiseal!',
    tip2Title: 'Bóithre Cúnga',
    tip2Text: 'Is féidir le bóithre tuaithe a bheith an-chúng. Tarraing isteach in áiteanna síothraithe chun daoine eile a ligean thart.',
    tip3Title: 'Faire ar Ainmhithe',
    tip3Text: 'Is coitianta caoirigh agus eallach ar bhóithre i gceantair tuaithe. Moilligh!',
    motorways: [
      { code: 'M1', route: 'Baile Átha Cliath - Teorainn Bhéal Feirste', length: '88 km', description: 'Príomhbhealach go Tuaisceart Éireann' },
      { code: 'M4', route: 'Baile Átha Cliath - Sligeach (cuid)', length: '57 km', description: 'Conair thiar' },
      { code: 'M6', route: 'Baile Átha Cliath - Gaillimh', length: '56 km', description: 'Bealach siar' },
      { code: 'M7', route: 'Baile Átha Cliath - Luimneach', length: '104 km', description: 'Nascann le Corcaigh trí M8' },
      { code: 'M8', route: 'Baile Átha Cliath - Corcaigh', length: '99 km', description: 'Conair theas' },
      { code: 'M9', route: 'Baile Átha Cliath - Port Láirge', length: '93 km', description: 'Bealach oirdheiscirt' },
      { code: 'M11', route: 'Baile Átha Cliath - Loch Garman', length: '48 km', description: 'Bealach cósta thoir' },
      { code: 'M50', route: 'Bóthar Fáinne Bhaile Átha Cliath', length: '47 km', description: 'An bóthar is gnóthaí in Éirinn - dola gan bhacainn' },
    ],
    roadTypes: [
      { type: 'Mótarbhealach (M)', speed: '120 km/h', description: 'Débhealaí ardluais le guaillí crua. Ná stop ach amháin i gcás éigeandála.' },
      { type: 'Bóthar Náisiúnta Príomha (N)', speed: '100 km/h', description: 'Príomhbhealaí idir mórchathracha. Is féidir a bheith singil nó déach.' },
      { type: 'Bóthar Náisiúnta Tánaisteach (N)', speed: '100 km/h', description: 'Nascann bailte níos lú le príomhbhealaí.' },
      { type: 'Réigiúnach (R)', speed: '80 km/h', description: 'Bóithre tánaisteacha, go minic cúng agus lúbach.' },
      { type: 'Áitiúil (L)', speed: '80 km/h', description: 'Mionbhóithre. Is féidir a bheith an-chúng le féar sa lár!' },
    ],
  }
};

export const MotorwaysPage = () => {
  const { language } = useLanguage();
  const t = content[language] || content.en;

  return (
    <div data-testid="motorways-page">
      <PageHero 
        title={t.title}
        subtitle={t.subtitle}
        image={HERO_IMAGE}
      />

      <ContentSection title={t.networkTitle} subtitle={t.networkSubtitle} id="network">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.motorways.map((mw) => (
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

        <InfoCard icon={MapPin} variant="warning" title="M50" className="mt-8">
          <p className="mt-2">{t.m50Warning}</p>
        </InfoCard>
      </ContentSection>

      <section className="py-16 bg-white" data-testid="road-types">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="mb-12">
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-green mb-4">
              {t.typesSubtitle}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-italia-text">
              {t.typesTitle}
            </h2>
          </div>

          <div className="space-y-4">
            {t.roadTypes.map((road) => (
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
          <h2 className="font-serif text-3xl font-medium text-white mb-8">{t.tipsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white/10 backdrop-blur rounded-lg">
              <h3 className="font-medium text-white mb-2">{t.tip1Title}</h3>
              <p className="text-white/80 text-sm">{t.tip1Text}</p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur rounded-lg">
              <h3 className="font-medium text-white mb-2">{t.tip2Title}</h3>
              <p className="text-white/80 text-sm">{t.tip2Text}</p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur rounded-lg">
              <h3 className="font-medium text-white mb-2">{t.tip3Title}</h3>
              <p className="text-white/80 text-sm">{t.tip3Text}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
