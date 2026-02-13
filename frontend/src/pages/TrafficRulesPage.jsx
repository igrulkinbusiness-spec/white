import { Shield, AlertTriangle, Phone, FileText, Car } from 'lucide-react';
import { PageHero } from '../components/shared/PageHero';
import { ContentSection } from '../components/shared/ContentSection';
import { InfoCard } from '../components/shared/InfoCard';
import { useLanguage } from '../i18n';

const HERO_IMAGE = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxJcmVsYW5kJTIwcm9hZCUyMHNpZ258ZW58MHx8fHwxNzcwODA2ODEyfDA&ixlib=rb-4.1.0&q=85";

const content = {
  en: {
    title: 'Traffic Rules',
    subtitle: 'Essential rules of the road that every driver in Ireland must know. Remember: drive on the LEFT!',
    leftWarningTitle: 'Drive on the LEFT!',
    leftWarningText: 'Ireland drives on the left side of the road. Take extra care at roundabouts (go CLOCKWISE), junctions, and when pulling out. Most accidents involving tourists happen in the first few hours!',
    mainRulesTitle: 'Main Rules',
    mainRulesSubtitle: 'Know Before You Go',
    documentsTitle: 'Required Documents',
    documentsSubtitle: 'What to Carry',
    penaltyTitle: 'Penalty Points System',
    penaltyText: 'Ireland uses a penalty points system. Accumulating 12 points results in a 6-month driving ban.',
    penaltyText2: 'Points stay on your licence for 3 years. Some offences result in immediate disqualification.',
    emergencyTitle: 'Emergency Numbers',
    finesTitle: 'Fines & Penalties',
    finesSubtitle: 'Know the Consequences',
    fixedChargeTitle: 'Fixed Charge Notices',
    fixedChargeText: 'If you receive a fixed charge notice, pay within 28 days to avoid increased fines or court proceedings. After 56 days, the fine increases by 50% and you may be summonsed to court.',
    mainRules: [
      { title: 'Drive on the LEFT', description: 'Ireland drives on the left side of the road. Overtake on the right. This is the opposite of most of Europe!' },
      { title: 'Seat Belts', description: 'Mandatory for all occupants. Children under 150cm or 36kg must use appropriate child seats.' },
      { title: 'Mobile Phones', description: 'Illegal to hold a phone while driving. Hands-free only. Fine: €60 + 3 penalty points.' },
      { title: 'Alcohol Limit', description: '50mg per 100ml blood (0.05%). For learner and professional drivers: 20mg (0.02%). Random breath testing.' },
      { title: 'NCT (MOT)', description: 'Cars over 4 years must have valid NCT certificate. Equivalent to UK MOT. Check date on disc.' },
      { title: 'Headlights', description: 'Required from lighting-up time (30 mins after sunset to 30 mins before sunrise). Use dipped headlights in poor visibility.' },
    ],
    requiredDocuments: [
      { name: 'Driving Licence', note: 'Full licence from EU/UK valid. Others may need International Driving Permit' },
      { name: 'Insurance Certificate', note: 'Must have at least third-party cover valid for Ireland' },
      { name: 'Vehicle Registration', note: 'Original document for the vehicle' },
      { name: 'NCT Disc', note: 'If Irish-registered vehicle, valid NCT required for cars over 4 years' },
    ],
    fines: [
      { violation: 'Speeding (up to 30 km/h over)', fine: '€80', points: '3' },
      { violation: 'Speeding (over 30 km/h over)', fine: 'Court', points: '5' },
      { violation: 'No seat belt', fine: '€60', points: '3' },
      { violation: 'Using mobile phone', fine: '€60', points: '3' },
      { violation: 'Drink driving', fine: '€200-5000', points: '3-6' },
      { violation: 'Running red light', fine: '€80', points: '3' },
      { violation: 'No insurance', fine: '€5000', points: '5' },
      { violation: 'Careless driving', fine: '€80', points: '3' },
    ],
  },
  ga: {
    title: 'Rialacha Tráchta',
    subtitle: 'Rialacha riachtanacha an bhóthair a chaithfidh gach tiománaí in Éirinn a bheith ar an eolas fúthu. Cuimhnigh: tiomáin ar CHLÉ!',
    leftWarningTitle: 'Tiomáin ar CHLÉ!',
    leftWarningText: 'Tiomáineann Éire ar thaobh na láimhe clé den bhóthar. Bí an-chúramach ag timpeallán (téigh ar DEISEAL), ag acomhail, agus nuair a bhíonn tú ag tarraingt amach. Tarlaíonn an chuid is mó de thimpistí a bhaineann le turasóirí sna chéad uaireanta!',
    mainRulesTitle: 'Príomhrialacha',
    mainRulesSubtitle: 'Rud le Fios Roimh Dhul',
    documentsTitle: 'Doiciméid Riachtanacha',
    documentsSubtitle: 'Cad le hIompar',
    penaltyTitle: 'Córas Pointí Pionóis',
    penaltyText: 'Úsáideann Éire córas pointí pionóis. Má bhailíonn tú 12 pointe, cuirfear cosc 6 mhí ar thiomáint ort.',
    penaltyText2: 'Fanann pointí ar do cheadúnas ar feadh 3 bliana. Is féidir le cionta áirithe dícháiliú láithreach a bhaint amach.',
    emergencyTitle: 'Uimhreacha Éigeandála',
    finesTitle: 'Fíneálacha & Pionóis',
    finesSubtitle: 'Tuig na hIarmhairtí',
    fixedChargeTitle: 'Fógraí Muirir Sheasta',
    fixedChargeText: 'Má fhaigheann tú fógra muirir sheasta, íoc laistigh de 28 lá chun fíneálacha méadaithe nó imeachtaí cúirte a sheachaint. Tar éis 56 lá, méadaíonn an fhíneáil 50% agus is féidir go nglaofar chun cúirte tú.',
    mainRules: [
      { title: 'Tiomáin ar CHLÉ', description: 'Tiomáineann Éire ar thaobh na láimhe clé den bhóthar. Sárú ar dheis. Tá sé seo os coinne formhór na hEorpa!' },
      { title: 'Criosanna Sábhála', description: 'Éigeantach do gach duine. Caithfidh leanaí faoi bhun 150cm nó 36kg suíocháin leanaí oiriúnacha a úsáid.' },
      { title: 'Fóin Phóca', description: 'Mídhleathach fón a bheith i do lámh agat agus tú ag tiomáint. Saor-lámh amháin. Fíneáil: €60 + 3 phointe pionóis.' },
      { title: 'Teorainn Alcóil', description: '50mg in aghaidh 100ml fola (0.05%). Do thiománaithe foghlama agus gairmiúla: 20mg (0.02%). Tástáil análaithe randamach.' },
      { title: 'NCT', description: 'Caithfidh carranna os cionn 4 bliana deimhniú NCT bailí a bheith acu. Seiceáil an dáta ar an diosca.' },
      { title: 'Ceannsoilse', description: 'Riachtanach ó am lasadh (30 nóim tar éis luí na gréine go 30 nóim roimh éirí na gréine). Úsáid soilse dípthe nuair atá infheictheacht lag.' },
    ],
    requiredDocuments: [
      { name: 'Ceadúnas Tiomána', note: 'Ceadúnas iomlán ón AE/RA bailí. D\'fhéadfadh go mbeadh Ceadúnas Tiomána Idirnáisiúnta ag teastáil ó dhaoine eile' },
      { name: 'Deimhniú Árachais', note: 'Caithfidh clúdach tríú páirtí ar a laghad a bheith agat atá bailí d\'Éirinn' },
      { name: 'Clárú Feithicle', note: 'Doiciméad bunaidh don fheithicil' },
      { name: 'Diosca NCT', note: 'Más feithicil chláraithe in Éirinn í, tá NCT bailí ag teastáil do charranna os cionn 4 bliana' },
    ],
    fines: [
      { violation: 'Tiomáint róthapa (suas le 30 km/u os cionn)', fine: '€80', points: '3' },
      { violation: 'Tiomáint róthapa (os cionn 30 km/u os cionn)', fine: 'Cúirt', points: '5' },
      { violation: 'Gan chrios sábhála', fine: '€60', points: '3' },
      { violation: 'Fón póca á úsáid', fine: '€60', points: '3' },
      { violation: 'Tiomáint ar meisce', fine: '€200-5000', points: '3-6' },
      { violation: 'Solas dearg a rith', fine: '€80', points: '3' },
      { violation: 'Gan árachas', fine: '€5000', points: '5' },
      { violation: 'Tiomáint fhaillíoch', fine: '€80', points: '3' },
    ],
  }
};

export const TrafficRulesPage = () => {
  const { language } = useLanguage();
  const t = content[language] || content.en;

  return (
    <div data-testid="traffic-rules-page">
      <PageHero 
        title={t.title}
        subtitle={t.subtitle}
        image={HERO_IMAGE}
      />

      <section className="py-12 bg-italia-red/10" data-testid="left-warning">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex items-center gap-6">
            <Car className="w-16 h-16 text-italia-red" />
            <div>
              <h2 className="font-serif text-2xl font-medium text-italia-text mb-2">{t.leftWarningTitle}</h2>
              <p className="text-italia-text-muted">{t.leftWarningText}</p>
            </div>
          </div>
        </div>
      </section>

      <ContentSection title={t.mainRulesTitle} subtitle={t.mainRulesSubtitle} id="rules">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.mainRules.map((rule) => (
            <div 
              key={rule.title}
              className="bg-white border border-italia-border p-6 hover:border-italia-green transition-colors"
            >
              <h3 className="font-serif text-lg font-medium text-italia-text mb-3">{rule.title}</h3>
              <p className="text-sm text-italia-text-muted leading-relaxed">{rule.description}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <section className="py-16 bg-white" data-testid="documents-section">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-green mb-4">{t.documentsSubtitle}</span>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-italia-text mb-8">{t.documentsTitle}</h2>
              <div className="space-y-4">
                {t.requiredDocuments.map((doc) => (
                  <div key={doc.name} className="flex items-start gap-4 p-4 border-l-4 border-italia-green bg-italia-limestone/30">
                    <FileText className="w-5 h-5 text-italia-green mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-italia-text">{doc.name}</h4>
                      <p className="text-sm text-italia-text-muted">{doc.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <InfoCard icon={AlertTriangle} variant="warning" title={t.penaltyTitle} className="mb-6">
                <p className="mt-2">{t.penaltyText}</p>
                <p className="mt-2">{t.penaltyText2}</p>
              </InfoCard>
              <InfoCard icon={Phone} title={t.emergencyTitle}>
                <ul className="space-y-2 mt-3 font-mono">
                  <li><strong>999 / 112</strong> — {language === 'ga' ? 'Éigeandáil (Gardaí, Dóiteán, Otharcharr)' : 'Emergency (Gardaí, Fire, Ambulance)'}</li>
                  <li><strong>1800 250 025</strong> — AA (members)</li>
                  <li><strong>1800 667 788</strong> — AA (non-members)</li>
                </ul>
              </InfoCard>
            </div>
          </div>
        </div>
      </section>

      <ContentSection title={t.finesTitle} subtitle={t.finesSubtitle} id="fines">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-italia-red">
                <th className="text-left py-4 pr-4 font-mono text-xs uppercase tracking-wider text-italia-text-muted">{language === 'ga' ? 'Cion' : 'Violation'}</th>
                <th className="text-left py-4 pr-4 font-mono text-xs uppercase tracking-wider text-italia-text-muted">{language === 'ga' ? 'Fíneáil' : 'Fine'}</th>
                <th className="text-left py-4 font-mono text-xs uppercase tracking-wider text-italia-text-muted">{language === 'ga' ? 'Pointí' : 'Points'}</th>
              </tr>
            </thead>
            <tbody>
              {t.fines.map((item, index) => (
                <tr key={item.violation} className={index % 2 === 0 ? 'bg-white' : 'bg-italia-limestone/50'}>
                  <td className="py-4 pr-4 text-italia-text">{item.violation}</td>
                  <td className="py-4 pr-4 font-mono text-italia-red font-medium">{item.fine}</td>
                  <td className="py-4 font-mono">{item.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 p-6 bg-italia-green text-white">
          <h3 className="font-serif text-xl font-medium mb-2">{t.fixedChargeTitle}</h3>
          <p className="text-white/90">{t.fixedChargeText}</p>
        </div>
      </ContentSection>
    </div>
  );
};
