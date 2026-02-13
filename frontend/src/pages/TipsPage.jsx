import { Lightbulb, Check, AlertTriangle, Car, Smartphone, Cloud } from 'lucide-react';
import { PageHero } from '../components/shared/PageHero';
import { ContentSection } from '../components/shared/ContentSection';
import { InfoCard } from '../components/shared/InfoCard';
import { useLanguage } from '../i18n';

const HERO_IMAGE = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxJcmVsYW5kJTIwZHJpdmluZ3xlbnwwfHx8fDE3NzA4MDY4MTJ8MA&ixlib=rb-4.1.0&q=85";

const content = {
  en: {
    title: 'Driving Tips',
    subtitle: 'Practical advice for a safe and enjoyable driving experience in Ireland.',
    tipsTitle: 'Essential Tips',
    tipsSubtitle: 'By Category',
    mistakesTitle: 'Common Mistakes to Avoid',
    mistakesSubtitle: 'Learn from Others',
    appsTitle: 'Useful Apps',
    appsSubtitle: 'Download Before You Go',
    weatherTitle: 'Weather Warning',
    weatherText: 'Irish weather is notoriously changeable. "Four seasons in one day" is a real thing!',
    weatherPoints: [
      'Check Met Éireann forecast before scenic drives',
      'Pack waterproofs even if it looks sunny',
      'Mountain roads can be foggy when valleys are clear',
      'Rain reduces visibility and increases stopping distances',
      'Winter: Watch for black ice, especially in mornings',
    ],
    topTipTitle: 'Top Tip',
    topTipText: 'Relax and enjoy the journey! Irish roads might be slower and narrower than you\'re used to, but that\'s part of the charm. Stop in villages, chat with locals, and don\'t rush. Some of the best experiences in Ireland happen when you take your time.',
    tipCategories: [
      {
        category: 'Before Your Trip',
        items: [
          'Get an International Driving Permit if your licence isn\'t in English',
          'Book car rental early - prices rise significantly in summer',
          'Download offline maps - mobile signal is patchy in rural Ireland',
          'Get travel insurance that covers driving in Ireland',
          'Check if your insurance covers Irish roads',
        ],
      },
      {
        category: 'On the Road',
        items: [
          'DRIVE ON THE LEFT - check twice before pulling out',
          'Use low beam headlights in rain and fog',
          'Pull into passing places on narrow roads to let others pass',
          'Allow extra time - Irish roads are slower than they look on maps',
          'Wave to thank other drivers - it\'s the Irish way!',
        ],
      },
      {
        category: 'In Cities',
        items: [
          'Use Park & Ride on the outskirts - city parking is expensive and limited',
          'Register at eflow.ie if using M50 around Dublin',
          'Carry coins for parking meters (or use parking apps)',
          'Watch for bus lanes - fines apply for driving in them',
          'Avoid driving in Dublin city centre during rush hour (7-9am, 4-7pm)',
        ],
      },
      {
        category: 'Rural Driving',
        items: [
          'Watch for sheep, cattle, and tractors on country roads',
          'Keep left on blind corners - oncoming traffic may be in your lane!',
          'Fill up petrol before heading to remote areas',
          'Roads can flood in heavy rain - avoid fords if water looks deep',
          'Many rural roads have no footpaths - watch for pedestrians',
        ],
      },
    ],
    commonMistakes: [
      { mistake: 'Looking the wrong way', consequence: 'Accidents at junctions', prevention: 'Look RIGHT first - traffic comes from the right!' },
      { mistake: 'Forgetting M50 toll', consequence: 'Fine starting at €41.50', prevention: 'Pay via eflow.ie by 8pm next day' },
      { mistake: 'Underestimating distances', consequence: 'Missed appointments, rushed driving', prevention: 'Add 50% to Google Maps time for rural areas' },
      { mistake: 'Parking on double yellows', consequence: 'Clamping (€80-125 release)', prevention: 'Always check signs before leaving car' },
    ],
    usefulApps: [
      { name: 'Google Maps', purpose: 'Navigation - download offline maps for rural areas' },
      { name: 'eflow', purpose: 'Pay M50 tolls - register before you travel' },
      { name: 'ParkingTag', purpose: 'Pay for parking by phone' },
      { name: 'AA Roadwatch', purpose: 'Traffic updates and roadworks' },
      { name: 'Met Éireann', purpose: 'Irish weather forecasts - check before scenic drives' },
      { name: 'what3words', purpose: 'Precise location for emergencies in remote areas' },
    ],
  },
  ga: {
    title: 'Leideanna Tiomána',
    subtitle: 'Comhairle phraiticiúil le haghaidh taithí tiomána sábháilte agus taitneamhach in Éirinn.',
    tipsTitle: 'Leideanna Riachtanacha',
    tipsSubtitle: 'De réir Catagóire',
    mistakesTitle: 'Botúin Choitianta le Seachaint',
    mistakesSubtitle: 'Foghlaim ó Dhaoine Eile',
    appsTitle: 'Aipeanna Úsáideacha',
    appsSubtitle: 'Íoslódáil Sula dTéann Tú',
    weatherTitle: 'Rabhadh Aimsire',
    weatherText: 'Tá aimsir na hÉireann cáiliúil as a bheith inathraithe. Is fíor rud é "ceithre shéasúr in aon lá amháin"!',
    weatherPoints: [
      'Seiceáil réamhaisnéis Met Éireann roimh thiomáint radharcach',
      'Pacáil éadaí uiscedhíonach fiú má tá cuma grianmhar air',
      'Is féidir le bóithre sléibhe a bheith ceomhar nuair atá gleannta soiléir',
      'Laghdaíonn báisteach infheictheacht agus méadaíonn sé achair stoptha',
      'Geimhreadh: Faire ar oighear dubh, go háirithe ar maidin',
    ],
    topTipTitle: 'Barleid',
    topTipText: 'Lig do scíth agus bain taitneamh as an turas! B\'fhéidir go bhfuil bóithre na hÉireann níos moille agus níos cúinge ná mar atá tú cleachta leis, ach is cuid den draíocht é sin. Stop i sráidbhailte, bí ag caint le daoine áitiúla, agus ná bí ag deifriú. Tarlaíonn cuid de na taithí is fearr in Éirinn nuair a ghlacann tú do chuid ama.',
    tipCategories: [
      {
        category: 'Roimh do Thuras',
        items: [
          'Faigh Ceadúnas Tiomána Idirnáisiúnta mura bhfuil do cheadúnas i mBéarla',
          'Cuir carr ar cíos luath - ardaíonn praghsanna go mór sa samhradh',
          'Íoslódáil léarscáileanna as líne - tá comhartha fóin phóca lag in Éirinn tuaithe',
          'Faigh árachas taistil a chlúdaíonn tiomáint in Éirinn',
          'Seiceáil an gclúdaíonn d\'árachas bóithre na hÉireann',
        ],
      },
      {
        category: 'Ar an mBóthar',
        items: [
          'TIOMÁIN AR CHLÉ - seiceáil faoi dhó sula dtarraingíonn tú amach',
          'Úsáid soilse dípthe i mbáisteach agus i gceo',
          'Tarraing isteach in áiteanna síothraithe ar bhóithre cúnga chun daoine eile a ligean thart',
          'Lig am breise - tá bóithre na hÉireann níos moille ná mar a fheictear ar léarscáileanna',
          'Croith do lámh le buíochas a ghabháil le tiománaithe eile - sin bealach na hÉireann!',
        ],
      },
      {
        category: 'I gCathracha',
        items: [
          'Úsáid Páirceáil & Taisteal ar imeall - tá páirceáil cathrach daor agus teoranta',
          'Cláraigh ag eflow.ie má úsáideann tú an M50 timpeall Bhaile Átha Cliath',
          'Iompair boinn do mhéadair páirceála (nó úsáid aipeanna páirceála)',
          'Faire ar lánaí bus - baineann fíneálacha le tiomáint iontu',
          'Seachain tiomáint i lár Bhaile Átha Cliath le linn uair an ruaige (7-9rn, 4-7in)',
        ],
      },
      {
        category: 'Tiomáint Tuaithe',
        items: [
          'Faire ar chaoirigh, eallach, agus tarracóirí ar bhóithre tuaithe',
          'Fan ar chlé ar choirnéil dhalla - d\'fhéadfadh trácht ag teacht a bheith i do lána!',
          'Líon suas peitreal sula dtéann tú go ceantair iargúlta',
          'Is féidir le bóithre tuilte i mbáisteach throm - seachain áthannaí má tá cuma domhain ar an uisce',
          'Níl cosáin ar go leor bóithre tuaithe - faire ar choisithe',
        ],
      },
    ],
    commonMistakes: [
      { mistake: 'Ag féachaint an treo mícheart', consequence: 'Timpistí ag acomhail', prevention: 'Féach ar DHEIS ar dtús - tagann trácht ón taobh dheis!' },
      { mistake: 'Dearmad ar dhola M50', consequence: 'Fíneáil ag tosú ag €41.50', prevention: 'Íoc trí eflow.ie faoi 8in an lá dar gcionn' },
      { mistake: 'Fad a mheas go róíseal', consequence: 'Coinní caillte, tiomáint dheifreach', prevention: 'Cuir 50% le ham Google Maps do cheantair tuaithe' },
      { mistake: 'Páirceáil ar línte buí dúbailte', consequence: 'Clampáil (€80-125 scaoileadh)', prevention: 'Seiceáil comharthaí i gcónaí sula bhfágann tú an carr' },
    ],
    usefulApps: [
      { name: 'Google Maps', purpose: 'Nascleanúint - íoslódáil léarscáileanna as líne do cheantair tuaithe' },
      { name: 'eflow', purpose: 'Íoc dolaí M50 - cláraigh sula dtaistealaíonn tú' },
      { name: 'ParkingTag', purpose: 'Íoc as páirceáil trí fhón' },
      { name: 'AA Roadwatch', purpose: 'Nuashonruithe tráchta agus oibreacha bóthair' },
      { name: 'Met Éireann', purpose: 'Réamhaisnéisí aimsire na hÉireann - seiceáil roimh thiomáint radharcach' },
      { name: 'what3words', purpose: 'Suíomh beacht d\'éigeandálaí i gceantair iargúlta' },
    ],
  }
};

export const TipsPage = () => {
  const { language } = useLanguage();
  const t = content[language] || content.en;

  return (
    <div data-testid="tips-page">
      <PageHero 
        title={t.title}
        subtitle={t.subtitle}
        image={HERO_IMAGE}
      />

      <ContentSection title={t.tipsTitle} subtitle={t.tipsSubtitle} id="tips">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.tipCategories.map((category) => (
            <div key={category.category} className="bg-white border border-italia-border p-6">
              <h3 className="font-serif text-xl font-medium text-italia-text mb-4">
                {category.category}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-italia-green flex-shrink-0 mt-0.5" />
                    <span className="text-italia-text-muted text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </ContentSection>

      <section className="py-16 bg-white" data-testid="mistakes-section">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="mb-12">
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-red mb-4">
              {t.mistakesSubtitle}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-italia-text">
              {t.mistakesTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.commonMistakes.map((item) => (
              <div key={item.mistake} className="p-6 border-l-4 border-italia-red bg-italia-red/5">
                <h3 className="font-serif text-lg font-medium text-italia-text mb-2">
                  {item.mistake}
                </h3>
                <p className="text-italia-red text-sm mb-3">{item.consequence}</p>
                <p className="text-italia-text-muted text-sm">
                  <strong>{language === 'ga' ? 'Cosc:' : 'Prevention:'}</strong> {item.prevention}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContentSection title={t.appsTitle} subtitle={t.appsSubtitle} id="apps">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.usefulApps.map((app) => (
            <div key={app.name} className="flex items-center gap-4 p-4 bg-white border border-italia-border">
              <Smartphone className="w-8 h-8 text-italia-green flex-shrink-0" />
              <div>
                <h4 className="font-medium text-italia-text">{app.name}</h4>
                <p className="text-sm text-italia-text-muted">{app.purpose}</p>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      <section className="py-16 bg-italia-gold/10" data-testid="weather-section">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex items-start gap-6">
            <Cloud className="w-12 h-12 text-italia-gold flex-shrink-0" />
            <div>
              <h2 className="font-serif text-2xl font-medium text-italia-text mb-4">{t.weatherTitle}</h2>
              <p className="text-italia-text-muted mb-4">
                {t.weatherText}
              </p>
              <ul className="space-y-2 text-italia-text-muted">
                {t.weatherPoints.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-italia-green" data-testid="main-tip-section">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
          <Lightbulb className="w-12 h-12 text-italia-gold mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-6">
            {t.topTipTitle}
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            {t.topTipText}
          </p>
        </div>
      </section>
    </div>
  );
};
