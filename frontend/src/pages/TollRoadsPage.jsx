import { CreditCard, Clock, AlertTriangle, MapPin } from 'lucide-react';
import { PageHero } from '../components/shared/PageHero';
import { ContentSection } from '../components/shared/ContentSection';
import { InfoCard } from '../components/shared/InfoCard';
import { useLanguage } from '../i18n';

const HERO_IMAGE = "https://images.unsplash.com/photo-1549918864-48ac978761a4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxJcmVsYW5kJTIwdG9sbCUyMHJvYWR8ZW58MHx8fHwxNzcwODA2ODEyfDA&ixlib=rb-4.1.0&q=85";

const content = {
  en: {
    title: 'Toll Roads in Ireland',
    subtitle: 'Several major routes in Ireland have tolls. Most can be paid at toll plazas, but the M50 requires online payment.',
    tollsTitle: 'Toll Roads',
    tollsSubtitle: 'Current Toll Charges',
    m50Title: 'M50 - Important Warning!',
    m50Text: 'The M50 around Dublin is a barrier-free toll road. There are NO toll booths - cameras read your number plate automatically.',
    m50Points: [
      'You MUST pay via eflow.ie by 8pm the next day',
      'Register your vehicle for easier payment',
      'Unpaid tolls result in fines starting from €41.50',
      'Rental cars: Check if toll is included or pay yourself'
    ],
    paymentTitle: 'Payment Methods',
    paymentSubtitle: 'How to Pay',
    tipsTitle: 'Toll Road Tips',
    tip1Title: 'Rental Cars',
    tip1Text: 'Many rental companies charge a daily fee for toll management. Check your rental agreement. You may save money by paying tolls yourself.',
    tip2Title: 'Video Tolling',
    tip2Text: 'If you use the M50 without a tag, you\'re using "video tolling". Register at eflow.ie to set up easy payment.',
    tip3Title: 'Avoid Peak Times',
    tip3Text: 'The M50 gets very congested during rush hour (7-9am, 4-7pm). Consider alternative times or routes.',
    tip4Title: 'Keep Receipts',
    tip4Text: 'If paying cash at toll plazas, keep your receipt as proof of payment in case of disputes.',
    tollRoads: [
      { road: 'M50 (Dublin)', toll: '€3.50', type: 'Barrier-free', note: 'Pay via eflow.ie by 8pm next day' },
      { road: 'M1 (Gormanston-Monasterboice)', toll: '€2.00', type: 'Toll plaza', note: 'Cash, card or tag' },
      { road: 'M3 (Clonee-Kells)', toll: '€1.90', type: 'Toll plaza', note: 'Cash, card or tag' },
      { road: 'M4 (Kilcock-Enfield)', toll: '€3.10', type: 'Toll plaza', note: 'Cash, card or tag' },
      { road: 'M7/M8 (Portlaoise)', toll: '€2.00', type: 'Toll plaza', note: 'Cash, card or tag' },
      { road: 'Dublin Tunnel', toll: '€3.50/€6.00', type: 'Toll plaza', note: 'Higher rate for trucks' },
    ],
    paymentMethods: [
      { name: 'Cash', desc: 'Accepted at all manned toll plazas. Keep coins handy!', pros: ['Accepted everywhere'], cons: ['Queues at peak times', 'Not valid for M50'] },
      { name: 'Card', desc: 'Credit/debit cards accepted at most toll plazas', pros: ['Convenient', 'Contactless available'], cons: ['Some older plazas cash only'] },
      { name: 'Toll Tag', desc: 'Electronic tag for automatic payment. Get from eflow.ie', pros: ['No stopping', 'Discounts available', 'Works on all tolls'], cons: ['Monthly fee', 'Need to register'] },
    ],
  },
  ga: {
    title: 'Bóithre Dola in Éirinn',
    subtitle: 'Tá dolaí ar roinnt príomhbhealaí in Éirinn. Is féidir an chuid is mó a íoc ag plásóga dola, ach éilíonn an M50 íocaíocht ar líne.',
    tollsTitle: 'Bóithre Dola',
    tollsSubtitle: 'Táillí Dola Reatha',
    m50Title: 'M50 - Rabhadh Tábhachtach!',
    m50Text: 'Is bóthar dola gan bhacainn é an M50 timpeall Bhaile Átha Cliath. Níl aon bhuathanna dola ann - léann ceamaraí do phlátaí uimhreach go huathoibríoch.',
    m50Points: [
      'CAITHFIDH tú íoc trí eflow.ie faoi 8in an lá dar gcionn',
      'Cláraigh d\'fheithicil le haghaidh íocaíochta níos éasca',
      'Bíonn fíneálacha ag tosú ó €41.50 mar thoradh ar dholaí neamhíoctha',
      'Carranna ar cíos: Seiceáil an bhfuil dola san áireamh nó íoc tú féin'
    ],
    paymentTitle: 'Modhanna Íocaíochta',
    paymentSubtitle: 'Conas Íoc',
    tipsTitle: 'Leideanna Bóthair Dola',
    tip1Title: 'Carranna ar Cíos',
    tip1Text: 'Gearrann go leor cuideachtaí cíosa táille laethúil as bainistiú dola. Seiceáil do chomhaontú cíosa. B\'fhéidir go sábhálfaidh tú airgead trí dholaí a íoc tú féin.',
    tip2Title: 'Dolaíocht Físe',
    tip2Text: 'Má úsáideann tú an M50 gan clib, tá tú ag úsáid "dolaíocht físe". Cláraigh ag eflow.ie chun íocaíocht éasca a shocrú.',
    tip3Title: 'Seachain Buaicamanna',
    tip3Text: 'Bíonn an M50 an-phlódaithe le linn uair an ruaige (7-9rn, 4-7in). Smaoinigh ar amanna nó bealaí malartacha.',
    tip4Title: 'Coinnigh Admhálacha',
    tip4Text: 'Má íocann tú airgead tirim ag plásóga dola, coinnigh d\'admháil mar chruthúnas íocaíochta i gcás díospóidí.',
    tollRoads: [
      { road: 'M50 (Baile Átha Cliath)', toll: '€3.50', type: 'Gan bhacainn', note: 'Íoc trí eflow.ie faoi 8in an lá dar gcionn' },
      { road: 'M1 (Gort Mhanach-Mainistir Bhuithe)', toll: '€2.00', type: 'Plásóg dola', note: 'Airgead tirim, cárta nó clib' },
      { road: 'M3 (Cluain Aodha-Ceanannas)', toll: '€1.90', type: 'Plásóg dola', note: 'Airgead tirim, cárta nó clib' },
      { road: 'M4 (Cill Choca-An Bhóthar Buí)', toll: '€3.10', type: 'Plásóg dola', note: 'Airgead tirim, cárta nó clib' },
      { road: 'M7/M8 (Port Laoise)', toll: '€2.00', type: 'Plásóg dola', note: 'Airgead tirim, cárta nó clib' },
      { road: 'Tollán Bhaile Átha Cliath', toll: '€3.50/€6.00', type: 'Plásóg dola', note: 'Ráta níos airde do leoraithe' },
    ],
    paymentMethods: [
      { name: 'Airgead Tirim', desc: 'Glactar leis ag gach plásóg dola le foireann. Coinnigh boinn ar fáil!', pros: ['Glactar leis i ngach áit'], cons: ['Scuainí ag buaicamanna', 'Neamhbhailí don M50'] },
      { name: 'Cárta', desc: 'Glactar le cártaí creidmheasa/dochair ag formhór na bplásóg dola', pros: ['Áisiúil', 'Tadhlach ar fáil'], cons: ['Airgead tirim amháin ag roinnt plásóg níos sine'] },
      { name: 'Clib Dola', desc: 'Clib leictreonach le haghaidh íocaíochta uathoibríoch. Faigh ó eflow.ie', pros: ['Gan stopadh', 'Lascainí ar fáil', 'Oibríonn ar gach dola'], cons: ['Táille mhíosúil', 'Gá le clárú'] },
    ],
  }
};

export const TollRoadsPage = () => {
  const { language } = useLanguage();
  const t = content[language] || content.en;

  return (
    <div data-testid="toll-roads-page">
      <PageHero title={t.title} subtitle={t.subtitle} image={HERO_IMAGE} />

      <ContentSection title={t.tollsTitle} subtitle={t.tollsSubtitle} id="tolls">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-italia-green">
                <th className="text-left py-4 pr-4 font-mono text-xs uppercase tracking-wider text-italia-text-muted">{language === 'ga' ? 'Bóthar' : 'Road'}</th>
                <th className="text-left py-4 pr-4 font-mono text-xs uppercase tracking-wider text-italia-text-muted">{language === 'ga' ? 'Dola (Carr)' : 'Toll (Car)'}</th>
                <th className="text-left py-4 pr-4 font-mono text-xs uppercase tracking-wider text-italia-text-muted">{language === 'ga' ? 'Cineál' : 'Type'}</th>
                <th className="text-left py-4 font-mono text-xs uppercase tracking-wider text-italia-text-muted">{language === 'ga' ? 'Nóta' : 'Note'}</th>
              </tr>
            </thead>
            <tbody>
              {t.tollRoads.map((toll, index) => (
                <tr key={toll.road} className={index % 2 === 0 ? 'bg-white' : 'bg-italia-limestone/50'}>
                  <td className="py-4 pr-4 font-medium text-italia-text">{toll.road}</td>
                  <td className="py-4 pr-4 font-mono text-italia-green">{toll.toll}</td>
                  <td className="py-4 pr-4 text-italia-text-muted">{toll.type}</td>
                  <td className="py-4 text-sm text-italia-text-muted">{toll.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ContentSection>

      <section className="py-16 bg-italia-red/10" data-testid="m50-warning">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <AlertTriangle className="w-12 h-12 text-italia-red flex-shrink-0" />
            <div>
              <h2 className="font-serif text-2xl font-medium text-italia-text mb-4">{t.m50Title}</h2>
              <p className="text-italia-text-muted mb-4">{t.m50Text}</p>
              <ul className="space-y-2 text-italia-text-muted">
                {t.m50Points.map((point, i) => <li key={i}>• {point}</li>)}
              </ul>
              <a href="https://www.eflow.ie" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 px-6 py-3 bg-italia-green text-white rounded-full hover:bg-italia-green-dark transition-colors">
                {language === 'ga' ? 'Tabhair cuairt ar eflow.ie' : 'Visit eflow.ie'}
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContentSection title={t.paymentTitle} subtitle={t.paymentSubtitle} id="payment">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.paymentMethods.map((method) => (
            <div key={method.name} className="bg-white border border-italia-border p-6">
              <h3 className="font-serif text-xl font-medium text-italia-text mb-3">{method.name}</h3>
              <p className="text-italia-text-muted mb-4">{method.desc}</p>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-italia-green mb-1">{language === 'ga' ? 'Buntáistí' : 'Pros'}</p>
                  <ul className="text-sm text-italia-text-muted">{method.pros.map((pro, i) => <li key={i}>+ {pro}</li>)}</ul>
                </div>
                <div>
                  <p className="text-sm font-medium text-italia-red mb-1">{language === 'ga' ? 'Míbhuntáistí' : 'Cons'}</p>
                  <ul className="text-sm text-italia-text-muted">{method.cons.map((con, i) => <li key={i}>- {con}</li>)}</ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      <section className="py-16 bg-italia-green" data-testid="tips">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <h2 className="font-serif text-3xl font-medium text-white mb-8">{t.tipsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white/10 backdrop-blur rounded-lg"><h3 className="font-medium text-white mb-2">{t.tip1Title}</h3><p className="text-white/80 text-sm">{t.tip1Text}</p></div>
            <div className="p-6 bg-white/10 backdrop-blur rounded-lg"><h3 className="font-medium text-white mb-2">{t.tip2Title}</h3><p className="text-white/80 text-sm">{t.tip2Text}</p></div>
            <div className="p-6 bg-white/10 backdrop-blur rounded-lg"><h3 className="font-medium text-white mb-2">{t.tip3Title}</h3><p className="text-white/80 text-sm">{t.tip3Text}</p></div>
            <div className="p-6 bg-white/10 backdrop-blur rounded-lg"><h3 className="font-medium text-white mb-2">{t.tip4Title}</h3><p className="text-white/80 text-sm">{t.tip4Text}</p></div>
          </div>
        </div>
      </section>
    </div>
  );
};
