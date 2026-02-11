import { Lightbulb, Check, AlertTriangle, Clock, Euro, Car } from 'lucide-react';
import { PageHero } from '../components/shared/PageHero';
import { ContentSection } from '../components/shared/ContentSection';
import { InfoCard } from '../components/shared/InfoCard';
import { useLanguage } from '../i18n';

const HERO_IMAGE = "https://images.unsplash.com/photo-1625869740698-983464d352ee?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHwyfHx2aW50YWdlJTIwRmlhdCUyMGNhciUyMEl0YWx5JTIwc3RyZWV0fGVufDB8fHx8MTc3MDgwNjgzMHww&ixlib=rb-4.1.0&q=85";

const dataIT = {
  tips: [
    {
      category: 'Prima del viaggio',
      items: [
        'Ottieni la patente internazionale (IDP) o una traduzione autenticata',
        'Assicurati di avere la carta verde o un\'assicurazione europea',
        'Scarica mappe offline su Google Maps o Maps.me',
        'Installa un\'app con database autovelox (Waze)',
        'Prenota i parcheggi nelle grandi città in anticipo',
      ],
    },
    {
      category: 'In viaggio',
      items: [
        'Accendi sempre gli anabbaglianti fuori dai centri abitati',
        'Tieni il giubbotto riflettente nell\'abitacolo, non nel bagagliaio',
        'Fai il pieno prima di entrare in autostrada — costa di più',
        'Non entrare nelle corsie gialle Telepass senza dispositivo',
        'Usa la corsia destra per viaggiare, quella sinistra per sorpassare',
      ],
    },
    {
      category: 'In città',
      items: [
        'Verifica sempre la presenza di ZTL prima di entrare in centro',
        'Lascia l\'auto nei parcheggi P+R vicino alle stazioni metro',
        'Usa il disco orario dove richiesto',
        'Paga subito il parcheggio — le multe partono da 40€',
        'Fotografa il posto auto e la ricevuta del pagamento',
      ],
    },
    {
      category: 'Risparmiare',
      items: [
        'Usa il self-service — costa 10-15 centesimi in meno',
        'Evita i distributori in autostrada — maggiorazione del 20%',
        'Prenota l\'auto in anticipo tramite comparatori',
        'Non prendere il pieno al noleggio — fallo da solo',
        'Telepass offre sconti su alcuni tratti',
      ],
    },
  ],
  commonMistakes: [
    { mistake: 'Entrare in ZTL', consequence: 'Multa 80-100€ per ogni accesso', prevention: 'Controlla i cartelli, usa il navigatore con ZTL' },
    { mistake: 'Eccesso di velocità', consequence: 'Multe da 42€, sospensione patente per grandi eccessi', prevention: 'Ricorda il sistema Tutor, usa il navigatore' },
    { mistake: 'Parcheggio su strisce gialle', consequence: 'Rimozione + multa 85-335€', prevention: 'Parcheggia solo su strisce bianche o blu' },
    { mistake: 'Dimenticare i pedaggi', consequence: 'Multa + costo del pedaggio', prevention: 'Usa Telepass o paga subito alla cassa' },
  ],
  essentialEquipment: ['Giubbotto riflettente (per ogni passeggero)', 'Triangolo di emergenza', 'Documenti di viaggio originali', 'Carta verde assicurazione'],
  usefulApps: [
    { name: 'Google Maps', purpose: 'Navigazione, traffico in tempo reale' },
    { name: 'Waze', purpose: 'Avvisi autovelox e incidenti' },
    { name: 'ViaMichelin', purpose: 'Calcolo pedaggi e percorsi' },
    { name: 'Telepass', purpose: 'Gestione pagamenti autostradali' },
  ],
  mainTip: 'La cosa più importante è godersi il viaggio. Le strade italiane sono tra le più belle del mondo. Pianifica in anticipo, rispetta le regole e prenditi il tempo per le soste nei paesini lungo il percorso.',
};

const dataEN = {
  tips: [
    {
      category: 'Before the trip',
      items: [
        'Get an International Driving Permit (IDP) or notarized translation',
        'Ensure you have a Green Card or European insurance',
        'Download offline maps on Google Maps or Maps.me',
        'Install an app with speed camera database (Waze)',
        'Book parking in major cities in advance',
      ],
    },
    {
      category: 'On the road',
      items: [
        'Always turn on low beam lights outside built-up areas',
        'Keep the reflective vest in the cabin, not in the trunk',
        'Fill up before entering the highway — it\'s more expensive there',
        'Don\'t enter yellow Telepass lanes without a device',
        'Use the right lane for driving, left lane for overtaking',
      ],
    },
    {
      category: 'In cities',
      items: [
        'Always check for ZTL before entering city centers',
        'Leave your car at P+R parking near metro stations',
        'Use the parking disc (disco orario) where required',
        'Pay for parking immediately — fines start from €40',
        'Photograph your parking spot and payment receipt',
      ],
    },
    {
      category: 'Saving money',
      items: [
        'Use self-service — 10-15 cents cheaper',
        'Avoid highway gas stations — 20% markup',
        'Book cars in advance through comparison sites',
        'Don\'t take full tank at rental — fill it yourself',
        'Telepass offers discounts on some sections',
      ],
    },
  ],
  commonMistakes: [
    { mistake: 'Entering ZTL', consequence: 'Fine €80-100 for each entry', prevention: 'Check signs, use navigator with ZTL' },
    { mistake: 'Speeding', consequence: 'Fines from €42, license suspension for major violations', prevention: 'Remember Tutor system, use navigator' },
    { mistake: 'Parking on yellow lines', consequence: 'Towing + fine €85-335', prevention: 'Park only on white or blue lines' },
    { mistake: 'Forgetting tolls', consequence: 'Fine + toll cost', prevention: 'Use Telepass or pay immediately at booth' },
  ],
  essentialEquipment: ['Reflective vest (for each passenger)', 'Warning triangle', 'Original travel documents', 'Insurance Green Card'],
  usefulApps: [
    { name: 'Google Maps', purpose: 'Navigation, real-time traffic' },
    { name: 'Waze', purpose: 'Speed camera and accident alerts' },
    { name: 'ViaMichelin', purpose: 'Toll calculation and routes' },
    { name: 'Telepass', purpose: 'Highway payment management' },
  ],
  mainTip: 'The most important thing is to enjoy the journey. Italian roads are among the most beautiful in the world. Plan ahead, follow the rules, and take time to stop in small towns along the way.',
};

export const TipsPage = () => {
  const { t, language } = useLanguage();
  const data = language === 'en' ? dataEN : dataIT;

  return (
    <div data-testid="tips-page">
      <PageHero 
        title={t('tips.title')}
        subtitle={t('tips.subtitle')}
        image={HERO_IMAGE}
      />

      <ContentSection title={t('tips.practicalTitle')} subtitle={t('tips.practicalSubtitle')} id="tips">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.tips.map((category) => (
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
              {t('tips.mistakesSubtitle')}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-italia-text">
              {t('tips.mistakesTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.commonMistakes.map((item) => (
              <div key={item.mistake} className="p-6 border-l-4 border-italia-red bg-italia-red/5">
                <h3 className="font-serif text-lg font-medium text-italia-text mb-2">
                  {item.mistake}
                </h3>
                <p className="text-italia-red text-sm mb-3">{item.consequence}</p>
                <p className="text-italia-text-muted text-sm">
                  <strong>{language === 'en' ? 'How to avoid:' : 'Come evitare:'}</strong> {item.prevention}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContentSection title={t('tips.equipmentTitle')} subtitle={t('tips.equipmentSubtitle')} id="equipment">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <InfoCard icon={Car} title={t('tips.mandatoryTitle')} variant="warning">
            <ul className="space-y-2 mt-3">
              {data.essentialEquipment.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </InfoCard>
          
          <div className="bg-white border border-italia-border p-6">
            <h3 className="font-serif text-xl font-medium text-italia-text mb-4">
              {t('tips.appsTitle')}
            </h3>
            <div className="space-y-4">
              {data.usefulApps.map((app) => (
                <div key={app.name} className="flex justify-between items-center py-2 border-b border-italia-border last:border-0">
                  <span className="font-medium text-italia-text">{app.name}</span>
                  <span className="text-sm text-italia-text-muted">{app.purpose}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ContentSection>

      <section className="py-16 bg-italia-green" data-testid="main-tip-section">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
          <Lightbulb className="w-12 h-12 text-italia-gold mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-6">
            {t('tips.mainTipTitle')}
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            {data.mainTip}
          </p>
        </div>
      </section>
    </div>
  );
};
