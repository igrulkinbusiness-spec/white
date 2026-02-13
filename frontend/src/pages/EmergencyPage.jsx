import { Phone, Shield, AlertTriangle, Heart, Car, Flame } from 'lucide-react';
import { PageHero } from '../components/shared/PageHero';
import { ContentSection } from '../components/shared/ContentSection';
import { InfoCard } from '../components/shared/InfoCard';
import { useLanguage } from '../i18n';

const HERO_IMAGE = "https://images.unsplash.com/photo-1587745416684-47953f16f02f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxhbWJ1bGFuY2UlMjBlbWVyZ2VuY3l8ZW58MHx8fHwxNzcwODA2ODEyfDA&ixlib=rb-4.1.0&q=85";

const content = {
  en: {
    title: 'Emergency Services',
    subtitle: 'Important numbers and procedures for emergencies in Ireland. Save these numbers before you need them!',
    mainNumber: 'Emergency Number',
    mainNumberText: 'For Police, Fire, or Ambulance. Free from any phone, 24/7.',
    numbersTitle: 'Emergency Numbers',
    numbersSubtitle: 'Save These Numbers',
    accidentTitle: 'What to Do in an Accident',
    accidentSubtitle: 'Be Prepared',
    rememberTitle: 'Important Reminder',
    rememberText: 'Under Irish law, you MUST stop and exchange details after any accident involving injury or damage. Failure to stop is a serious offence that can result in criminal charges.',
    usefulTitle: 'Other Useful Numbers',
    usefulSubtitle: 'Non-Emergency Services',
    tipsTitle: 'Emergency Tips',
    tip1Title: 'Save Numbers Offline',
    tip1Text: 'Save emergency numbers in your phone before travelling. In remote areas, mobile signal may be weak.',
    tip2Title: 'Know Your Location',
    tip2Text: 'When calling 999, be ready to give your location. Look for road signs, landmarks, or use what3words app.',
    tip3Title: 'Carry Insurance Details',
    tip3Text: 'Keep your insurance policy number and emergency contact number in your wallet or phone.',
    tip4Title: 'EU Health Card',
    tip4Text: 'EU citizens: Bring your EHIC/GHIC card for access to medical treatment. Non-EU: Ensure you have travel insurance.',
    emergencyNumbers: [
      { number: '999 / 112', name: 'Emergency Services', description: 'Police, Fire, Ambulance. Operators speak English.', icon: Phone },
      { number: '999', name: 'Gardaí (Police)', description: 'For emergencies. For non-emergency, local station.', icon: Shield },
      { number: '999', name: 'Fire Brigade', description: 'Fire emergencies and rescue.', icon: Flame },
      { number: '999', name: 'Ambulance', description: 'Medical emergencies.', icon: Heart },
      { number: '1800 250 025', name: 'AA Roadside (Members)', description: '24/7 breakdown assistance for AA members.', icon: Car },
      { number: '1800 667 788', name: 'AA Roadside (Non-Members)', description: 'Breakdown assistance - pay per call.', icon: Car },
    ],
    accidentSteps: [
      { step: 1, title: 'Stop & Secure', description: 'Stop your vehicle, turn on hazard lights. Do not leave the scene.' },
      { step: 2, title: 'Check for Injuries', description: 'Check yourself and others. Call 999/112 if anyone is injured.' },
      { step: 3, title: 'Move to Safety', description: 'If possible and safe, move vehicles off the road. Use warning triangle.' },
      { step: 4, title: 'Exchange Details', description: 'Get names, addresses, phone numbers, insurance details, registration numbers.' },
      { step: 5, title: 'Document Everything', description: 'Take photos of damage, scene, road conditions. Note time, location, weather.' },
      { step: 6, title: 'Report to Insurance', description: 'Report to your insurance company within 24 hours.' },
    ],
    usefulNumbers: [
      { service: 'Garda Confidential Line', number: '1800 666 111', note: 'Anonymous crime reporting' },
      { service: 'Samaritans', number: '116 123', note: '24/7 emotional support' },
      { service: 'HSE Live', number: '1800 700 700', note: 'Health advice line' },
      { service: 'Citizens Information', number: '0818 07 4000', note: 'Public services info' },
    ],
  },
  ga: {
    title: 'Seirbhísí Éigeandála',
    subtitle: 'Uimhreacha agus nósanna imeachta tábhachtacha le haghaidh éigeandálaí in Éirinn. Sábháil na huimhreacha seo sula mbeidh siad ag teastáil uait!',
    mainNumber: 'Uimhir Éigeandála',
    mainNumberText: 'Do Ghardaí, Dóiteán, nó Otharcharr. Saor in aisce ó aon fhón, 24/7.',
    numbersTitle: 'Uimhreacha Éigeandála',
    numbersSubtitle: 'Sábháil na hUimhreacha Seo',
    accidentTitle: 'Cad le Déanamh i gCás Timpiste',
    accidentSubtitle: 'Bí Réidh',
    rememberTitle: 'Meabhrúchán Tábhachtach',
    rememberText: 'Faoi dhlí na hÉireann, CAITHFIDH tú stopadh agus sonraí a mhalartú tar éis aon timpiste a bhaineann le gortú nó damáiste. Is cion tromchúiseach é gan stopadh a d\'fhéadfadh cúisimh choiriúla a bheith mar thoradh air.',
    usefulTitle: 'Uimhreacha Úsáideacha Eile',
    usefulSubtitle: 'Seirbhísí Neamh-Éigeandála',
    tipsTitle: 'Leideanna Éigeandála',
    tip1Title: 'Sábháil Uimhreacha As Líne',
    tip1Text: 'Sábháil uimhreacha éigeandála i d\'fhón sula dtaistealaíonn tú. I gceantair iargúlta, d\'fhéadfadh comhartha fóin phóca a bheith lag.',
    tip2Title: 'Bíodh Eolas agat ar Do Shuíomh',
    tip2Text: 'Nuair a ghlaonn tú ar 999, bí réidh le do shuíomh a thabhairt. Féach ar chomharthaí bóthair, sainmharcanna, nó úsáid an aip what3words.',
    tip3Title: 'Iompair Sonraí Árachais',
    tip3Text: 'Coinnigh d\'uimhir polasaí árachais agus uimhir teagmhála éigeandála i do sparán nó fón.',
    tip4Title: 'Cárta Sláinte AE',
    tip4Text: 'Saoránaigh AE: Tabhair do chárta EHIC/GHIC chun rochtain a fháil ar chóireáil leighis. Neamh-AE: Cinntigh go bhfuil árachas taistil agat.',
    emergencyNumbers: [
      { number: '999 / 112', name: 'Seirbhísí Éigeandála', description: 'Gardaí, Dóiteán, Otharcharr. Labhraíonn oibreoirí Béarla.', icon: Phone },
      { number: '999', name: 'Gardaí', description: 'Le haghaidh éigeandálaí. Le haghaidh neamh-éigeandála, stáisiún áitiúil.', icon: Shield },
      { number: '999', name: 'Briogáid Dóiteáin', description: 'Éigeandálaí dóiteáin agus tarrtháil.', icon: Flame },
      { number: '999', name: 'Otharcharr', description: 'Éigeandálaí leighis.', icon: Heart },
      { number: '1800 250 025', name: 'AA Cois Bóthair (Baill)', description: 'Cúnamh briseadh síos 24/7 do bhaill AA.', icon: Car },
      { number: '1800 667 788', name: 'AA Cois Bóthair (Neamhbhaill)', description: 'Cúnamh briseadh síos - íoc in aghaidh an ghlao.', icon: Car },
    ],
    accidentSteps: [
      { step: 1, title: 'Stop & Slándáil', description: 'Stop d\'fheithicil, cuir soilse guaise ar siúl. Ná fág an láthair.' },
      { step: 2, title: 'Seiceáil le haghaidh Gortuithe', description: 'Seiceáil tú féin agus daoine eile. Glaoigh ar 999/112 má tá aon duine gortaithe.' },
      { step: 3, title: 'Bog go Sábháilteacht', description: 'Má\'s féidir agus má tá sé sábháilte, bog feithiclí amach ón mbóthar. Úsáid triantán rabhaidh.' },
      { step: 4, title: 'Malartaigh Sonraí', description: 'Faigh ainmneacha, seoltaí, uimhreacha fóin, sonraí árachais, uimhreacha cláraithe.' },
      { step: 5, title: 'Doiciméadaigh Gach Rud', description: 'Tóg grianghraif den damáiste, den láthair, de riocht an bhóthair. Tabhair faoi deara an t-am, an suíomh, an aimsir.' },
      { step: 6, title: 'Tuairiscigh don Árachas', description: 'Tuairiscigh do do chuideachta árachais laistigh de 24 uair.' },
    ],
    usefulNumbers: [
      { service: 'Líne Rúnda na nGardaí', number: '1800 666 111', note: 'Tuairisciú coireachta gan ainm' },
      { service: 'Samaritans', number: '116 123', note: 'Tacaíocht mhothúchánach 24/7' },
      { service: 'HSE Live', number: '1800 700 700', note: 'Líne comhairle sláinte' },
      { service: 'Faisnéis do Shaoránaigh', number: '0818 07 4000', note: 'Eolas faoi sheirbhísí poiblí' },
    ],
  }
};

export const EmergencyPage = () => {
  const { language } = useLanguage();
  const t = content[language] || content.en;

  return (
    <div data-testid="emergency-page">
      <PageHero 
        title={t.title}
        subtitle={t.subtitle}
        image={HERO_IMAGE}
      />

      <section className="py-12 bg-italia-red" data-testid="main-number">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
          <h2 className="font-serif text-3xl font-medium text-white mb-4">{t.mainNumber}</h2>
          <div className="font-mono text-6xl font-bold text-white mb-4">999 / 112</div>
          <p className="text-white/90">{t.mainNumberText}</p>
        </div>
      </section>

      <ContentSection title={t.numbersTitle} subtitle={t.numbersSubtitle} id="numbers">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.emergencyNumbers.map((item) => (
            <div key={item.name} className="p-6 bg-white border border-italia-border hover:border-italia-green transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-italia-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-italia-green" />
                </div>
                <div>
                  <div className="font-mono text-2xl font-bold text-italia-green mb-1">{item.number}</div>
                  <h3 className="font-serif text-lg font-medium text-italia-text mb-2">{item.name}</h3>
                  <p className="text-sm text-italia-text-muted">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      <section className="py-16 bg-white" data-testid="accident-section">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="mb-12">
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-red mb-4">{t.accidentSubtitle}</span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-italia-text">{t.accidentTitle}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.accidentSteps.map((step) => (
              <div key={step.step} className="p-6 border-l-4 border-italia-green">
                <span className="font-mono text-3xl font-bold text-italia-green">{String(step.step).padStart(2, '0')}</span>
                <h3 className="font-serif text-lg font-medium text-italia-text mt-2 mb-2">{step.title}</h3>
                <p className="text-sm text-italia-text-muted">{step.description}</p>
              </div>
            ))}
          </div>
          <InfoCard icon={AlertTriangle} variant="warning" title={t.rememberTitle} className="mt-8">
            <p className="mt-2">{t.rememberText}</p>
          </InfoCard>
        </div>
      </section>

      <ContentSection title={t.usefulTitle} subtitle={t.usefulSubtitle} id="useful">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.usefulNumbers.map((service) => (
            <div key={service.service} className="flex justify-between items-center p-4 bg-italia-limestone/50 border border-italia-border">
              <div>
                <h4 className="font-medium text-italia-text">{service.service}</h4>
                <p className="text-xs text-italia-text-muted">{service.note}</p>
              </div>
              <span className="font-mono text-italia-green font-medium">{service.number}</span>
            </div>
          ))}
        </div>
      </ContentSection>

      <section className="py-16 bg-italia-green" data-testid="tips-section">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <h2 className="font-serif text-3xl font-medium text-white mb-8">{t.tipsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <div className="p-6 bg-white/10 backdrop-blur rounded-lg">
              <h3 className="font-medium text-white mb-2">{t.tip4Title}</h3>
              <p className="text-white/80 text-sm">{t.tip4Text}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
