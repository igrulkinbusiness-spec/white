import { ParkingCircle, AlertTriangle, Car } from 'lucide-react';
import { PageHero } from '../components/shared/PageHero';
import { ContentSection } from '../components/shared/ContentSection';
import { InfoCard } from '../components/shared/InfoCard';
import { useLanguage } from '../i18n';

const HERO_IMAGE = "https://images.unsplash.com/photo-1590674899484-13da0f721f3f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxEb21pbmljJTIwc3RyZWV0JTIwcGFya2luZ3xlbnwwfHx8fDE3NzA4MDY4MTJ8MA&ixlib=rb-4.1.0&q=85";

const content = {
  en: {
    title: 'Parking in Ireland',
    subtitle: 'Understanding parking rules will help you avoid fines and clamping. Always check signs carefully!',
    typesTitle: 'Parking Types',
    typesSubtitle: 'Where to Park',
    linesTitle: 'Line Markings & Restrictions',
    linesSubtitle: 'Know the Rules',
    clampingTitle: 'Clamping Warning!',
    clampingText: 'Clamping is common in Irish cities. If your car is clamped:',
    clampingPoints: [
      'Clamp release fee: €80-125 depending on area',
      'If not released within 24 hours: Car may be towed (additional €150+)',
      'Pay by phone/online: Number on the clamp notice',
      'Wait time: Usually 1-2 hours for release after payment'
    ],
    clampingNote: 'Prevention is better than cure - always check parking signs carefully!',
    cityTitle: 'City Parking Guide',
    citySubtitle: 'Tips by City',
    tipsTitle: 'Parking Tips',
    tip1Title: 'Use Apps',
    tip1Text: 'ParkingTag and Apcoa apps let you pay for parking by phone - no need for coins!',
    tip2Title: 'Sunday Parking',
    tip2Text: 'Many areas offer free parking on Sundays and Bank Holidays - but check the signs.',
    tip3Title: 'Disc Parking',
    tip3Text: 'Buy a parking disc from newsagents (€2). Set the time of arrival and display on dashboard.',
    parkingTypes: [
      { type: 'Pay & Display', description: 'Buy ticket from machine, display on dashboard', cost: '€1-3/hour', where: 'City centres, town centres' },
      { type: 'Disc Parking', description: 'Use parking disc showing arrival time', cost: 'Free (time limited)', where: 'Smaller towns, residential areas' },
      { type: 'Multi-Storey Car Parks', description: 'Covered parking, pay on exit', cost: '€2-4/hour', where: 'City centres, shopping centres' },
      { type: 'Park & Ride', description: 'Free parking + bus/train ticket', cost: 'Free/Low cost', where: 'Outskirts of Dublin, Cork' },
    ],
    lineMarkings: [
      { color: 'Single Yellow Line', meaning: 'Restricted parking - check signs for times', fine: '€40' },
      { color: 'Double Yellow Lines', meaning: 'No parking at any time', fine: '€40-80' },
      { color: 'White Dashed Lines', meaning: 'Parking bay - check if pay required', fine: 'N/A' },
      { color: 'Blue Badge Bays', meaning: 'Disabled parking only', fine: '€150' },
    ],
    cityParking: [
      { city: 'Dublin', tips: 'Very limited street parking. Use multi-storey car parks (€3-5/hr) or Park & Ride.', clampingRisk: 'High' },
      { city: 'Cork', tips: 'Use Paul Street or North Main Street car parks. Free parking on Sundays.', clampingRisk: 'Medium' },
      { city: 'Galway', tips: 'Extremely limited in centre. Use Eyre Square car park or park outside.', clampingRisk: 'High' },
      { city: 'Limerick', tips: 'Colbert Station car park good for city visits. Street parking available.', clampingRisk: 'Medium' },
    ],
  },
  ga: {
    title: 'Páirceáil in Éirinn',
    subtitle: 'Cabhróidh tuiscint ar rialacha páirceála leat fíneálacha agus clampáil a sheachaint. Seiceáil comharthaí go cúramach i gcónaí!',
    typesTitle: 'Cineálacha Páirceála',
    typesSubtitle: 'Cá hÁit le Páirceáil',
    linesTitle: 'Marcálacha Línte & Srianta',
    linesSubtitle: 'Tuig na Rialacha',
    clampingTitle: 'Rabhadh Clampála!',
    clampingText: 'Tá clampáil coitianta i gcathracha na hÉireann. Má chlampáiltear do charr:',
    clampingPoints: [
      'Táille scaoileadh clampa: €80-125 ag brath ar an gceantar',
      'Mura scaoiltear laistigh de 24 uair: Is féidir an carr a tharraingt (€150+ breise)',
      'Íoc trí fhón/ar líne: Uimhir ar an bhfógra clampa',
      'Am feithimh: De ghnáth 1-2 uair le haghaidh scaoileadh tar éis íocaíochta'
    ],
    clampingNote: 'Is fearr cosc ná leigheas - seiceáil comharthaí páirceála go cúramach i gcónaí!',
    cityTitle: 'Treoir Páirceála Cathrach',
    citySubtitle: 'Leideanna de réir Cathrach',
    tipsTitle: 'Leideanna Páirceála',
    tip1Title: 'Úsáid Aipeanna',
    tip1Text: 'Ligeann aipeanna ParkingTag agus Apcoa duit íoc as páirceáil trí fhón - níl gá le boinn!',
    tip2Title: 'Páirceáil Domhnaigh',
    tip2Text: 'Tairgeann go leor ceantair páirceáil saor in aisce ar an Domhnach agus ar Laethanta Saoire Bainc - ach seiceáil na comharthaí.',
    tip3Title: 'Páirceáil Diosca',
    tip3Text: 'Ceannaigh diosca páirceála ó shiopa nuachtán (€2). Socraigh am an teachta agus taispeáin ar an deais.',
    parkingTypes: [
      { type: 'Íoc & Taispeáin', description: 'Ceannaigh ticéad ón meaisín, taispeáin ar an deais', cost: '€1-3/uair', where: 'Lár cathracha, lár bailte' },
      { type: 'Páirceáil Diosca', description: 'Úsáid diosca páirceála a thaispeánann am teachta', cost: 'Saor in Aisce (teorainn ama)', where: 'Bailte níos lú, ceantair chónaithe' },
      { type: 'Carrchlóis Ilstórach', description: 'Páirceáil faoi dhíon, íoc ar imeacht', cost: '€2-4/uair', where: 'Lár cathracha, ionaid siopadóireachta' },
      { type: 'Páirceáil & Taisteal', description: 'Páirceáil saor in aisce + ticéad bus/traenach', cost: 'Saor in Aisce/Costas Íseal', where: 'Imeall Bhaile Átha Cliath, Chorcaí' },
    ],
    lineMarkings: [
      { color: 'Líne Bhuí Shingil', meaning: 'Páirceáil srianta - seiceáil comharthaí le haghaidh amanna', fine: '€40' },
      { color: 'Línte Buí Dúbailte', meaning: 'Gan páirceáil am ar bith', fine: '€40-80' },
      { color: 'Línte Bána Briste', meaning: 'Bá páirceála - seiceáil an bhfuil íocaíocht ag teastáil', fine: 'N/A' },
      { color: 'Báite Suaitheantas Gorm', meaning: 'Páirceáil faoi mhíchumas amháin', fine: '€150' },
    ],
    cityParking: [
      { city: 'Baile Átha Cliath', tips: 'Páirceáil sráide an-teoranta. Úsáid carrchlóis ilstóracha (€3-5/u) nó Páirceáil & Taisteal.', clampingRisk: 'Ard' },
      { city: 'Corcaigh', tips: 'Úsáid carrchlóis Shráid Phóil nó Phríomhshráid an Tuaiscirt. Páirceáil saor in aisce ar an Domhnach.', clampingRisk: 'Meánach' },
      { city: 'Gaillimh', tips: 'An-teoranta sa lár. Úsáid carrchlós Chearnóg Eyre nó páirceáil lasmuigh.', clampingRisk: 'Ard' },
      { city: 'Luimneach', tips: 'Carrchlós Stáisiún Colbert maith le haghaidh cuairteanna cathrach. Páirceáil sráide ar fáil.', clampingRisk: 'Meánach' },
    ],
  }
};

export const ParkingPage = () => {
  const { language } = useLanguage();
  const t = content[language] || content.en;

  return (
    <div data-testid="parking-page">
      <PageHero title={t.title} subtitle={t.subtitle} image={HERO_IMAGE} />

      <ContentSection title={t.typesTitle} subtitle={t.typesSubtitle} id="types">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.parkingTypes.map((type) => (
            <div key={type.type} className="bg-white border border-italia-border p-6 hover:border-italia-green transition-colors">
              <h3 className="font-serif text-xl font-medium text-italia-text mb-2">{type.type}</h3>
              <p className="text-italia-text-muted text-sm mb-3">{type.description}</p>
              <div className="flex justify-between text-sm">
                <span className="text-italia-green font-mono">{type.cost}</span>
                <span className="text-italia-text-muted">{type.where}</span>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      <section className="py-16 bg-white" data-testid="lines-section">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="mb-12">
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-green mb-4">{t.linesSubtitle}</span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-italia-text">{t.linesTitle}</h2>
          </div>
          <div className="space-y-4">
            {t.lineMarkings.map((line) => (
              <div key={line.color} className="flex flex-col md:flex-row md:items-center gap-4 p-4 border border-italia-border">
                <div className="md:w-48 flex-shrink-0"><h3 className="font-medium text-italia-text">{line.color}</h3></div>
                <p className="text-italia-text-muted flex-1">{line.meaning}</p>
                <span className="font-mono text-italia-red">{line.fine}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-italia-red/10" data-testid="clamping-section">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex items-start gap-6">
            <Car className="w-12 h-12 text-italia-red flex-shrink-0" />
            <div>
              <h2 className="font-serif text-2xl font-medium text-italia-text mb-4">{t.clampingTitle}</h2>
              <p className="text-italia-text-muted mb-4">{t.clampingText}</p>
              <ul className="space-y-2 text-italia-text-muted">
                {t.clampingPoints.map((point, i) => <li key={i}>• {point}</li>)}
              </ul>
              <p className="mt-4 text-sm text-italia-red font-medium">{t.clampingNote}</p>
            </div>
          </div>
        </div>
      </section>

      <ContentSection title={t.cityTitle} subtitle={t.citySubtitle} id="cities">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.cityParking.map((city) => (
            <div key={city.city} className="p-6 border border-italia-border">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-serif text-xl font-medium text-italia-text">{city.city}</h3>
                <span className={`px-3 py-1 text-xs font-mono ${city.clampingRisk === 'High' || city.clampingRisk === 'Ard' ? 'bg-italia-red/10 text-italia-red' : 'bg-italia-gold/10 text-italia-gold'}`}>
                  {language === 'ga' ? `Riosca Clampála: ${city.clampingRisk}` : `Clamping Risk: ${city.clampingRisk}`}
                </span>
              </div>
              <p className="text-italia-text-muted text-sm">{city.tips}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <section className="py-16 bg-italia-green" data-testid="tips-section">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <h2 className="font-serif text-3xl font-medium text-white mb-8">{t.tipsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white/10 backdrop-blur rounded-lg"><h3 className="font-medium text-white mb-2">{t.tip1Title}</h3><p className="text-white/80 text-sm">{t.tip1Text}</p></div>
            <div className="p-6 bg-white/10 backdrop-blur rounded-lg"><h3 className="font-medium text-white mb-2">{t.tip2Title}</h3><p className="text-white/80 text-sm">{t.tip2Text}</p></div>
            <div className="p-6 bg-white/10 backdrop-blur rounded-lg"><h3 className="font-medium text-white mb-2">{t.tip3Title}</h3><p className="text-white/80 text-sm">{t.tip3Text}</p></div>
          </div>
        </div>
      </section>
    </div>
  );
};
