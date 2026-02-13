import { AlertTriangle, AlertCircle, Camera } from 'lucide-react';
import { PageHero } from '../components/shared/PageHero';
import { ContentSection } from '../components/shared/ContentSection';
import { useLanguage } from '../i18n';

const HERO_IMAGE = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxyb2FkJTIwc2lnbiUyMElyZWxhbmR8ZW58MHx8fHwxNzcwODA2ODEyfDA&ixlib=rb-4.1.0&q=85";

const content = {
  en: {
    title: 'Irish Road Signs',
    subtitle: 'Road signs in Ireland are bilingual - in English and Irish (Gaeilge). In Gaeltacht areas, signs may be in Irish only.',
    regulatoryTitle: 'Regulatory Signs',
    regulatorySubtitle: 'These signs give orders - you must obey them',
    warningTitle: 'Warning Signs',
    warningSubtitle: 'Diamond-shaped yellow signs warn of hazards ahead',
    infoTitle: 'Information Signs',
    infoSubtitle: 'Blue and green signs provide useful information',
    irishTitle: 'Irish Language on Signs',
    irishSubtitle: 'Gaeilge (Irish)',
    irishText: 'All road signs in Ireland are bilingual. In Gaeltacht (Irish-speaking) areas, some signs may be in Irish only. Here are common terms you\'ll see:',
    colorsTitle: 'Sign Background Colors',
    colorsSubtitle: 'Colour Coding',
    roundaboutTitle: 'Roundabout Rules',
    roundaboutText: 'Irish roundabouts go CLOCKWISE (opposite to mainland Europe). This is one of the most confusing things for visitors!',
    roundaboutPoints: [
      'Approach in the left lane for left turns or going straight',
      'Approach in the right lane for right turns',
      'Give way to traffic already on the roundabout (from the right)',
      'Signal left when exiting'
    ],
    commonMistake: 'Common Mistake',
    commonMistakeText: 'Many visitors look the wrong way when entering roundabouts. Traffic comes from your RIGHT, not your left. Take extra care in your first few days!',
    regulatorySigns: [
      { name: 'STOP', meaning: 'Stop completely', icon: '🛑' },
      { name: 'YIELD', meaning: 'Give way to traffic', icon: '⚠️' },
      { name: 'No Entry', meaning: 'Cannot enter', icon: '⛔' },
      { name: 'Speed Limit', meaning: 'Maximum speed', icon: '50' },
      { name: 'No Parking', meaning: 'No parking anytime', icon: '🅿️❌' },
      { name: 'No Overtaking', meaning: 'Cannot pass', icon: '🚗❌' },
    ],
    warningSigns: [
      { name: 'Junction Ahead', meaning: 'Crossroads coming', icon: '✖️' },
      { name: 'Bend', meaning: 'Sharp curve', icon: '↩️' },
      { name: 'Roundabout', meaning: 'Roundabout ahead', icon: '🔄' },
      { name: 'Pedestrians', meaning: 'People crossing', icon: '🚶' },
      { name: 'Animals', meaning: 'Farm animals/deer', icon: '🐄' },
      { name: 'Road Works', meaning: 'Construction ahead', icon: '🚧' },
    ],
    infoSigns: [
      { name: 'Motorway', meaning: 'Green background', icon: '🛣️' },
      { name: 'National Road', meaning: 'Green background', icon: 'N' },
      { name: 'Regional Road', meaning: 'White background', icon: 'R' },
      { name: 'Hospital', meaning: 'Medical facility', icon: '🏥' },
      { name: 'Parking', meaning: 'Parking available', icon: '🅿️' },
      { name: 'Tourist Info', meaning: 'Brown background', icon: 'ℹ️' },
    ],
    irishTerms: [
      { irish: 'Géill Slí', english: 'Yield / Give Way' },
      { irish: 'Stad', english: 'Stop' },
      { irish: 'Go Mall', english: 'Slow' },
      { irish: 'Cosc ar Pháirceáil', english: 'No Parking' },
      { irish: 'Baile Átha Cliath', english: 'Dublin' },
      { irish: 'Corcaigh', english: 'Cork' },
      { irish: 'Gaillimh', english: 'Galway' },
      { irish: 'An Lár', english: 'City Centre' },
      { irish: 'Aerfort', english: 'Airport' },
      { irish: 'Gaeltacht', english: 'Irish-speaking area' },
    ],
    colorMeanings: [
      { color: 'Green', meaning: 'Motorways and National Roads', example: 'M50, N11' },
      { color: 'White', meaning: 'Regional and Local Roads', example: 'R115, L2034' },
      { color: 'Blue', meaning: 'Services, Information', example: 'Parking, hospitals' },
      { color: 'Brown', meaning: 'Tourist attractions', example: 'Historic sites, scenic routes' },
      { color: 'Yellow', meaning: 'Warning signs', example: 'Hazards, road conditions' },
      { color: 'Red', meaning: 'Prohibition, Stop', example: 'No entry, Stop signs' },
    ],
  },
  ga: {
    title: 'Comharthaí Bóthair na hÉireann',
    subtitle: 'Tá comharthaí bóthair in Éirinn dátheangach - i mBéarla agus Gaeilge. I gceantair Ghaeltachta, d\'fhéadfadh comharthaí a bheith i nGaeilge amháin.',
    regulatoryTitle: 'Comharthaí Rialála',
    regulatorySubtitle: 'Tugann na comharthaí seo orduithe - caithfidh tú géilleadh dóibh',
    warningTitle: 'Comharthaí Rabhaidh',
    warningSubtitle: 'Tugann comharthaí buí muinín-chruthach rabhadh faoi ghuaiseanna chun tosaigh',
    infoTitle: 'Comharthaí Faisnéise',
    infoSubtitle: 'Tugann comharthaí gorma agus glasa faisnéis úsáideach',
    irishTitle: 'Gaeilge ar Chomharthaí',
    irishSubtitle: 'Gaeilge',
    irishText: 'Tá gach comhartha bóthair in Éirinn dátheangach. I gceantair Ghaeltachta, d\'fhéadfadh roinnt comharthaí a bheith i nGaeilge amháin. Seo téarmaí coitianta a fheicfidh tú:',
    colorsTitle: 'Dathanna Cúlra Comharthaí',
    colorsSubtitle: 'Códú Datha',
    roundaboutTitle: 'Rialacha Timpeallán',
    roundaboutText: 'Téann timpeallán na hÉireann AR DEISEAL (os coinne mhór-roinn na hEorpa). Tá sé seo ar cheann de na rudaí is mearbhlaí do chuairteoirí!',
    roundaboutPoints: [
      'Druid sa lána clé le haghaidh casadh ar chlé nó dul díreach',
      'Druid sa lána dheis le haghaidh casadh ar dheis',
      'Géill do thrácht atá ar an timpeallán cheana féin (ón taobh dheis)',
      'Comharthaigh ar chlé nuair atá tú ag imeacht'
    ],
    commonMistake: 'Botún Coitianta',
    commonMistakeText: 'Breathnaíonn go leor cuairteoirí an treo mícheart agus iad ag dul isteach i dtimpeallán. Tagann trácht ó do DHEIS, ní ó do chlé. Bí an-chúramach sna chéad laethanta!',
    regulatorySigns: [
      { name: 'STAD', meaning: 'Stop go hiomlán', icon: '🛑' },
      { name: 'GÉILL SLÍ', meaning: 'Tabhair bealach do thrácht', icon: '⚠️' },
      { name: 'Cosc ar Dhul Isteach', meaning: 'Ní féidir dul isteach', icon: '⛔' },
      { name: 'Teorainn Luais', meaning: 'Uasluais', icon: '50' },
      { name: 'Cosc ar Pháirceáil', meaning: 'Gan páirceáil am ar bith', icon: '🅿️❌' },
      { name: 'Cosc ar Shárú', meaning: 'Ní féidir dul thar', icon: '🚗❌' },
    ],
    warningSigns: [
      { name: 'Acomhal Chun Tosaigh', meaning: 'Crosbhóthar ag teacht', icon: '✖️' },
      { name: 'Cor', meaning: 'Cuar géar', icon: '↩️' },
      { name: 'Timpeallán', meaning: 'Timpeallán chun tosaigh', icon: '🔄' },
      { name: 'Coisithe', meaning: 'Daoine ag trasnú', icon: '🚶' },
      { name: 'Ainmhithe', meaning: 'Ainmhithe feirme/fia', icon: '🐄' },
      { name: 'Oibreacha Bóthair', meaning: 'Tógáil chun tosaigh', icon: '🚧' },
    ],
    infoSigns: [
      { name: 'Mótarbhealach', meaning: 'Cúlra glas', icon: '🛣️' },
      { name: 'Bóthar Náisiúnta', meaning: 'Cúlra glas', icon: 'N' },
      { name: 'Bóthar Réigiúnach', meaning: 'Cúlra bán', icon: 'R' },
      { name: 'Ospidéal', meaning: 'Áis leighis', icon: '🏥' },
      { name: 'Páirceáil', meaning: 'Páirceáil ar fáil', icon: '🅿️' },
      { name: 'Eolas Turasóireachta', meaning: 'Cúlra donn', icon: 'ℹ️' },
    ],
    irishTerms: [
      { irish: 'Géill Slí', english: 'Yield / Give Way' },
      { irish: 'Stad', english: 'Stop' },
      { irish: 'Go Mall', english: 'Slow' },
      { irish: 'Cosc ar Pháirceáil', english: 'No Parking' },
      { irish: 'Baile Átha Cliath', english: 'Dublin' },
      { irish: 'Corcaigh', english: 'Cork' },
      { irish: 'Gaillimh', english: 'Galway' },
      { irish: 'An Lár', english: 'City Centre' },
      { irish: 'Aerfort', english: 'Airport' },
      { irish: 'Gaeltacht', english: 'Irish-speaking area' },
    ],
    colorMeanings: [
      { color: 'Glas', meaning: 'Mótarbhealaí agus Bóithre Náisiúnta', example: 'M50, N11' },
      { color: 'Bán', meaning: 'Bóithre Réigiúnacha agus Áitiúla', example: 'R115, L2034' },
      { color: 'Gorm', meaning: 'Seirbhísí, Faisnéis', example: 'Páirceáil, ospidéil' },
      { color: 'Donn', meaning: 'Taitneamhachtaí turasóireachta', example: 'Láithreáin stairiúla, bealaí radharcacha' },
      { color: 'Buí', meaning: 'Comharthaí rabhaidh', example: 'Guaiseanna, riocht bóthair' },
      { color: 'Dearg', meaning: 'Toirmeasc, Stad', example: 'Cosc ar dhul isteach, Comharthaí stad' },
    ],
  }
};

export const RoadSignsPage = () => {
  const { language } = useLanguage();
  const t = content[language] || content.en;

  return (
    <div data-testid="road-signs-page">
      <PageHero title={t.title} subtitle={t.subtitle} image={HERO_IMAGE} />

      <ContentSection title={t.regulatoryTitle} subtitle={t.regulatorySubtitle}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {t.regulatorySigns.map((sign) => (
            <div key={sign.name} className="p-4 border-l-4 bg-italia-red/10 border-italia-red">
              <div className="text-3xl mb-2">{sign.icon}</div>
              <h4 className="font-medium text-italia-text text-sm mb-1">{sign.name}</h4>
              <p className="text-xs text-italia-text-muted">{sign.meaning}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection title={t.warningTitle} subtitle={t.warningSubtitle}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {t.warningSigns.map((sign) => (
            <div key={sign.name} className="p-4 border-l-4 bg-italia-gold/10 border-italia-gold">
              <div className="text-3xl mb-2">{sign.icon}</div>
              <h4 className="font-medium text-italia-text text-sm mb-1">{sign.name}</h4>
              <p className="text-xs text-italia-text-muted">{sign.meaning}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection title={t.infoTitle} subtitle={t.infoSubtitle}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {t.infoSigns.map((sign) => (
            <div key={sign.name} className="p-4 border-l-4 bg-italia-green/10 border-italia-green">
              <div className="text-3xl mb-2">{sign.icon}</div>
              <h4 className="font-medium text-italia-text text-sm mb-1">{sign.name}</h4>
              <p className="text-xs text-italia-text-muted">{sign.meaning}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <section className="py-16 bg-white" data-testid="irish-terms">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-green mb-4">{t.irishSubtitle}</span>
              <h2 className="font-serif text-3xl font-medium text-italia-text mb-4">{t.irishTitle}</h2>
              <p className="text-italia-text-muted mb-8">{t.irishText}</p>
              <div className="grid grid-cols-2 gap-3">
                {t.irishTerms.map((term) => (
                  <div key={term.irish} className="py-2 border-b border-italia-border">
                    <span className="font-medium text-italia-green">{term.irish}</span>
                    <span className="text-italia-text-muted text-sm ml-2">= {term.english}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-green mb-4">{t.colorsSubtitle}</span>
              <h2 className="font-serif text-3xl font-medium text-italia-text mb-8">{t.colorsTitle}</h2>
              <div className="space-y-4">
                {t.colorMeanings.map((item) => (
                  <div key={item.color} className="flex items-center gap-4 py-3 border-b border-italia-border">
                    <span className="font-medium text-italia-text w-24">{item.color}</span>
                    <span className="text-italia-text-muted flex-1">{item.meaning}</span>
                    <span className="text-sm text-italia-green">{item.example}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-italia-green" data-testid="roundabouts">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <AlertCircle className="w-12 h-12 text-italia-gold mb-6" />
          <h2 className="font-serif text-3xl font-medium text-white mb-4">{t.roundaboutTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-white/90 text-lg mb-4">{t.roundaboutText}</p>
              <ul className="space-y-2 text-white/80">
                {t.roundaboutPoints.map((point, i) => <li key={i}>• {point}</li>)}
              </ul>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur rounded-lg">
              <h3 className="font-medium text-white mb-2">{t.commonMistake}</h3>
              <p className="text-white/80">{t.commonMistakeText}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
