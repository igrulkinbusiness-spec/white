import { Gauge, AlertTriangle, Cloud, Moon, Camera } from 'lucide-react';
import { PageHero } from '../components/shared/PageHero';
import { ContentSection } from '../components/shared/ContentSection';
import { InfoCard } from '../components/shared/InfoCard';
import { useLanguage } from '../i18n';

const HERO_IMAGE = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxzcGVlZCUyMGxpbWl0JTIwc2lnbiUyMElyZWxhbmR8ZW58MHx8fHwxNzcwODA2ODEyfDA&ixlib=rb-4.1.0&q=85";

const content = {
  en: {
    title: 'Speed Limits',
    subtitle: 'Speed limits in Ireland are in kilometres per hour (km/h). These are maximum limits - actual safe speed depends on conditions.',
    standardTitle: 'Standard Speed Limits',
    standardSubtitle: 'By Road Type',
    importantNote: 'Important Note',
    importantText: 'These are MAXIMUM limits for ideal conditions. In rain, fog, or on narrow roads, you should drive slower. Many rural roads are physically impossible to drive at 80 km/h safely!',
    specialTitle: 'Special Speed Zones',
    specialSubtitle: 'Watch For',
    finesTitle: 'Speeding Penalties',
    finesSubtitle: 'Fines & Points',
    finesNote: 'Pay fixed charge notices within 28 days. After 28 days, the fine increases by 50%. After 56 days, you may be summonsed to court.',
    camerasTitle: 'Speed Cameras',
    camerasSubtitle: 'Enforcement',
    speedLimits: [
      { type: 'Motorways', limit: '120 km/h', icon: '🛣️', note: 'M-roads only. Minimum speed 50 km/h.' },
      { type: 'National Roads', limit: '100 km/h', icon: '🛤️', note: 'N-roads (single or dual carriageway)' },
      { type: 'Regional/Local Roads', limit: '80 km/h', icon: '🚗', note: 'R and L roads. Often lower in reality due to conditions.' },
      { type: 'Built-up Areas', limit: '50 km/h', icon: '🏘️', note: 'Default in towns/cities. Watch for 30 km/h zones.' },
    ],
    specialZones: [
      { zone: 'School Zones', limit: '30 km/h', time: 'During school hours' },
      { zone: 'Residential Estates', limit: '30 km/h', time: 'Often marked at entrance' },
      { zone: 'City Centres', limit: '30 km/h', time: 'Dublin, Cork, Galway centres' },
      { zone: 'Near Schools/Churches', limit: '30-50 km/h', time: 'Watch for signs' },
    ],
    finesTable: [
      { excess: 'Up to 30 km/h over', fine: '€80', points: '3', court: 'No' },
      { excess: '30+ km/h over', fine: 'Up to €5,000', points: '5', court: 'Yes' },
      { excess: '50+ km/h over', fine: 'Up to €5,000', points: '6', court: 'Yes' },
    ],
    cameraInfo: [
      { name: 'GoSafe Vans', description: 'White vans marked "Safety Camera". Mobile speed detection on all road types.' },
      { name: 'Fixed Cameras', description: 'Yellow boxes, usually signposted. Common on motorways and N-roads.' },
      { name: 'Average Speed Cameras', description: 'Some stretches measure average speed over distance.' },
      { name: 'Garda Checkpoints', description: 'Police may conduct speed checks with handheld devices.' },
    ],
  },
  ga: {
    title: 'Teorainneacha Luais',
    subtitle: 'Tá teorainneacha luais in Éirinn i gciliméadair san uair (km/u). Is uasteorainneacha iad seo - braitheann luas sábháilte iarbhír ar choinníollacha.',
    standardTitle: 'Teorainneacha Luais Caighdeánacha',
    standardSubtitle: 'De réir Cineál Bóthair',
    importantNote: 'Nóta Tábhachtach',
    importantText: 'Is UASTEORAINNEACHA iad seo do choinníollacha idéalacha. I mbáisteach, i gceo, nó ar bhóithre cúnga, ba chóir duit tiomáint níos moille. Ní féidir go fisiciúil tiomáint go sábháilte ag 80 km/u ar go leor bóithre tuaithe!',
    specialTitle: 'Criosanna Luais Speisialta',
    specialSubtitle: 'Bí ag Faire',
    finesTitle: 'Pionóis Luais',
    finesSubtitle: 'Fíneálacha & Pointí',
    finesNote: 'Íoc fógraí muirir sheasta laistigh de 28 lá. Tar éis 28 lá, méadaíonn an fhíneáil 50%. Tar éis 56 lá, is féidir go nglaofar chun cúirte tú.',
    camerasTitle: 'Ceamaraí Luais',
    camerasSubtitle: 'Forfheidhmiú',
    speedLimits: [
      { type: 'Mótarbhealaí', limit: '120 km/u', icon: '🛣️', note: 'Bóithre M amháin. Íosluais 50 km/u.' },
      { type: 'Bóithre Náisiúnta', limit: '100 km/u', icon: '🛤️', note: 'Bóithre N (singil nó débhealach)' },
      { type: 'Bóithre Réigiúnacha/Áitiúla', limit: '80 km/u', icon: '🚗', note: 'Bóithre R agus L. Go minic níos ísle i ndáiríre de bharr coinníollacha.' },
      { type: 'Ceantair Thógtha', limit: '50 km/u', icon: '🏘️', note: 'Réamhshocrú i mbailte/cathracha. Faire ar chriosanna 30 km/u.' },
    ],
    specialZones: [
      { zone: 'Criosanna Scoile', limit: '30 km/u', time: 'Le linn uaireanta scoile' },
      { zone: 'Eastáit Chónaithe', limit: '30 km/u', time: 'Marcáilte ag an mbealach isteach go minic' },
      { zone: 'Lár na gCathracha', limit: '30 km/u', time: 'Lár Bhaile Átha Cliath, Chorcaí, na Gaillimhe' },
      { zone: 'In aice le Scoileanna/Eaglaisí', limit: '30-50 km/u', time: 'Faire ar chomharthaí' },
    ],
    finesTable: [
      { excess: 'Suas le 30 km/u os cionn', fine: '€80', points: '3', court: 'Níl' },
      { excess: '30+ km/u os cionn', fine: 'Suas le €5,000', points: '5', court: 'Tá' },
      { excess: '50+ km/u os cionn', fine: 'Suas le €5,000', points: '6', court: 'Tá' },
    ],
    cameraInfo: [
      { name: 'Veaineanna GoSafe', description: 'Veaineanna bána marcáilte "Safety Camera". Brath luais soghluaiste ar gach cineál bóthair.' },
      { name: 'Ceamaraí Seasta', description: 'Boscaí buí, de ghnáth le comharthaí. Coitianta ar mhótarbhealaí agus ar bhóithre N.' },
      { name: 'Ceamaraí Meánluais', description: 'Tomhaiseann roinnt sínteáin meánluas thar achar.' },
      { name: 'Seicphointí Gardaí', description: 'Is féidir le Gardaí seiceálacha luais a dhéanamh le gléasanna láimhe.' },
    ],
  }
};

export const SpeedLimitsPage = () => {
  const { language } = useLanguage();
  const t = content[language] || content.en;

  return (
    <div data-testid="speed-limits-page">
      <PageHero title={t.title} subtitle={t.subtitle} image={HERO_IMAGE} />

      <ContentSection title={t.standardTitle} subtitle={t.standardSubtitle} id="limits">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.speedLimits.map((item) => (
            <div key={item.type} className="bg-white border border-italia-border p-6 hover:border-italia-green transition-colors text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <div className="font-mono text-4xl font-bold text-italia-green mb-2">{item.limit}</div>
              <h3 className="font-serif text-lg font-medium text-italia-text mb-2">{item.type}</h3>
              <p className="text-sm text-italia-text-muted">{item.note}</p>
            </div>
          ))}
        </div>
        <InfoCard icon={AlertTriangle} variant="warning" title={t.importantNote} className="mt-8">
          <p className="mt-2">{t.importantText}</p>
        </InfoCard>
      </ContentSection>

      <section className="py-16 bg-white" data-testid="special-zones">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="mb-12">
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-green mb-4">{t.specialSubtitle}</span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-italia-text">{t.specialTitle}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.specialZones.map((zone) => (
              <div key={zone.zone} className="p-6 border-l-4 border-italia-gold bg-italia-limestone/30">
                <h3 className="font-medium text-italia-text mb-2">{zone.zone}</h3>
                <div className="font-mono text-2xl text-italia-red mb-2">{zone.limit}</div>
                <p className="text-sm text-italia-text-muted">{zone.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContentSection title={t.finesTitle} subtitle={t.finesSubtitle} id="fines">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-italia-red">
                <th className="text-left py-4 pr-4 font-mono text-xs uppercase tracking-wider text-italia-text-muted">{language === 'ga' ? 'Barraíocht Luais' : 'Excess Speed'}</th>
                <th className="text-left py-4 pr-4 font-mono text-xs uppercase tracking-wider text-italia-text-muted">{language === 'ga' ? 'Fíneáil' : 'Fine'}</th>
                <th className="text-left py-4 pr-4 font-mono text-xs uppercase tracking-wider text-italia-text-muted">{language === 'ga' ? 'Pointí' : 'Points'}</th>
                <th className="text-left py-4 font-mono text-xs uppercase tracking-wider text-italia-text-muted">{language === 'ga' ? 'Cúirt?' : 'Court?'}</th>
              </tr>
            </thead>
            <tbody>
              {t.finesTable.map((row, index) => (
                <tr key={row.excess} className={index % 2 === 0 ? 'bg-white' : 'bg-italia-limestone/50'}>
                  <td className="py-4 pr-4 text-italia-text">{row.excess}</td>
                  <td className="py-4 pr-4 font-mono text-italia-red font-medium">{row.fine}</td>
                  <td className="py-4 pr-4 font-mono">{row.points}</td>
                  <td className="py-4">{row.court}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 p-6 bg-italia-red/10 border-l-4 border-italia-red">
          <p className="text-italia-text"><strong>{language === 'ga' ? 'Tábhachtach:' : 'Important:'}</strong> {t.finesNote}</p>
        </div>
      </ContentSection>

      <section className="py-16 bg-italia-green" data-testid="cameras-section">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="mb-12">
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-gold mb-4">{t.camerasSubtitle}</span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-white">{t.camerasTitle}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.cameraInfo.map((camera) => (
              <div key={camera.name} className="p-6 bg-white/10 backdrop-blur rounded-lg">
                <Camera className="w-8 h-8 text-italia-gold mb-3" />
                <h3 className="font-serif text-xl font-medium text-white mb-2">{camera.name}</h3>
                <p className="text-white/80 text-sm">{camera.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
