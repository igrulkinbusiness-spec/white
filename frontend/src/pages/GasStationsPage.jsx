import { Fuel, Clock, Euro, CreditCard, Coffee } from 'lucide-react';
import { PageHero } from '../components/shared/PageHero';
import { ContentSection } from '../components/shared/ContentSection';
import { InfoCard } from '../components/shared/InfoCard';
import { useLanguage } from '../i18n';

const HERO_IMAGE = "https://images.unsplash.com/photo-1760681557274-243f7fad99eb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODh8MHwxfHNlYXJjaHwzfHxJdGFsaWFuJTIwd2luZGluZyUyMHJvYWQlMjBUdXNjYW55JTIwaGlsbHN8ZW58MHx8fHwxNzcwODA2ODEyfDA&ixlib=rb-4.1.0&q=85";

const dataIT = {
  fuelTypes: [
    { name: 'Benzina', note: 'Solitamente 95 (Senza piombo) o 98' },
    { name: 'Diesel / Gasolio', note: 'Il carburante più diffuso' },
    { name: 'GPL', note: 'Gas di petrolio liquefatto, più economico della benzina' },
    { name: 'Metano', note: 'Gas naturale, opzione ecologica' },
  ],
  stationTypes: [
    { name: 'Servito', description: 'Distributore con servizio', details: 'L\'addetto fa il pieno. Più caro di 10-20 centesimi al litro.' },
    { name: 'Self-service / Fai da te', description: 'Self-service', details: 'Ti servi da solo. Più economico, funziona 24 ore.' },
  ],
  majorChains: [
    { name: 'Eni', color: 'Giallo con cane nero', note: 'La più grande catena italiana' },
    { name: 'IP (Italiana Petroli)', color: 'Blu e giallo', note: 'Molte stazioni al sud' },
    { name: 'Q8', color: 'Verde e rosso', note: 'Spesso più economico dei concorrenti' },
    { name: 'Tamoil', color: 'Rosso', note: 'Rete nel nord Italia' },
    { name: 'Agip', color: 'Giallo (parte di Eni)', note: 'Marchio storico' },
  ],
  prices: ['Benzina: 1,70-1,90 €/l', 'Diesel (Gasolio): 1,60-1,80 €/l', 'GPL: 0,70-0,90 €/l'],
  pricesNote: 'I prezzi in autostrada sono più alti del 10-15%',
  hoursText: 'In città: solitamente 7:00-19:30, pausa 12:30-15:30. Domenica — spesso chiuso.',
  hoursNote: 'In autostrada: 24 ore su 24 (self-service)',
  selfWarning: 'Attenzione: Al self-service le macchinette accettano contanti (banconote da 5-50€) e carte. Alcune macchinette vecchie potrebbero non accettare carte straniere.',
  serviceAreasList: ['Distributore (24 ore)', 'Bar e ristoranti', 'Negozi e bancomat'],
  autogrillTip: 'Il caffè all\'Autogrill è buono e poco costoso (1-1,50€). Il cibo invece è spesso troppo caro — meglio uscire dall\'autostrada e andare in un paese vicino.',
};

const dataEN = {
  fuelTypes: [
    { name: 'Benzina (Gasoline)', note: 'Usually 95 (Unleaded) or 98' },
    { name: 'Diesel / Gasolio', note: 'The most common fuel' },
    { name: 'GPL (LPG)', note: 'Liquefied petroleum gas, cheaper than gasoline' },
    { name: 'Metano (CNG)', note: 'Natural gas, eco-friendly option' },
  ],
  stationTypes: [
    { name: 'Servito (Full service)', description: 'Attended station', details: 'Staff fills your tank. More expensive by 10-20 cents per liter.' },
    { name: 'Self-service / Fai da te', description: 'Self-service', details: 'You fill up yourself. Cheaper, works 24 hours.' },
  ],
  majorChains: [
    { name: 'Eni', color: 'Yellow with black dog', note: 'Largest Italian chain' },
    { name: 'IP (Italiana Petroli)', color: 'Blue and yellow', note: 'Many stations in the south' },
    { name: 'Q8', color: 'Green and red', note: 'Often cheaper than competitors' },
    { name: 'Tamoil', color: 'Red', note: 'Network in northern Italy' },
    { name: 'Agip', color: 'Yellow (part of Eni)', note: 'Historic brand' },
  ],
  prices: ['Gasoline: €1.70-1.90/l', 'Diesel: €1.60-1.80/l', 'LPG: €0.70-0.90/l'],
  pricesNote: 'Highway prices are 10-15% higher',
  hoursText: 'In cities: usually 7:00-19:30, break 12:30-15:30. Sunday — often closed.',
  hoursNote: 'On highways: 24/7 (self-service)',
  selfWarning: 'Warning: Self-service machines accept cash (€5-50 bills) and cards. Some old machines may not accept foreign cards.',
  serviceAreasList: ['Gas station (24 hours)', 'Cafes and restaurants', 'Shops and ATMs'],
  autogrillTip: 'Coffee at Autogrill is good and cheap (€1-1.50). But food is often overpriced — better to exit the highway and go to a nearby town.',
};

export const GasStationsPage = () => {
  const { t, language } = useLanguage();
  const data = language === 'en' ? dataEN : dataIT;

  return (
    <div data-testid="gas-stations-page">
      <PageHero 
        title={t('gasStations.title')}
        subtitle={t('gasStations.subtitle')}
        image={HERO_IMAGE}
      />

      <ContentSection title={t('gasStations.fuelTypesTitle')} subtitle={t('gasStations.fuelTypesSubtitle')} id="fuel-types">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.fuelTypes.map((fuel) => (
            <div 
              key={fuel.name}
              className="bg-white border border-italia-border p-6 hover:border-italia-green transition-colors"
            >
              <h3 className="font-serif text-xl font-medium text-italia-text mb-3">
                {fuel.name}
              </h3>
              <p className="text-sm text-italia-text-muted">{fuel.note}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <InfoCard icon={Euro} title={t('gasStations.pricesTitle')}>
            <ul className="space-y-2 mt-3">
              {data.prices.map((price, i) => (
                <li key={i}>{price}</li>
              ))}
            </ul>
            <p className="mt-3 text-sm">{data.pricesNote}</p>
          </InfoCard>
          <InfoCard icon={Clock} title={t('gasStations.hoursTitle')} variant="gold">
            <p className="mt-3">{data.hoursText}</p>
            <p className="mt-3 text-sm">{data.hoursNote}</p>
          </InfoCard>
        </div>
      </ContentSection>

      <section className="py-16 bg-white" data-testid="station-types">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="mb-12">
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-green mb-4">
              {t('gasStations.stationTypesSubtitle')}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-italia-text">
              {t('gasStations.stationTypesTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.stationTypes.map((type) => (
              <div key={type.name} className="p-8 border border-italia-border">
                <h3 className="font-serif text-2xl font-medium text-italia-text mb-2">
                  {type.name}
                </h3>
                <p className="text-italia-green font-medium mb-4">{type.description}</p>
                <p className="text-italia-text-muted">{type.details}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-italia-gold/10 border-l-4 border-italia-gold">
            <p className="text-italia-text">{data.selfWarning}</p>
          </div>
        </div>
      </section>

      <ContentSection title={t('gasStations.chainsTitle')} subtitle={t('gasStations.chainsSubtitle')} id="chains">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.majorChains.map((chain) => (
            <div key={chain.name} className="p-6 border border-italia-border hover:border-italia-green transition-colors">
              <h3 className="font-serif text-xl font-medium text-italia-text mb-2">
                {chain.name}
              </h3>
              <p className="text-sm text-italia-green mb-2">{chain.color}</p>
              <p className="text-sm text-italia-text-muted">{chain.note}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <section className="py-16 bg-italia-green" data-testid="service-areas">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-gold mb-4">
                {t('gasStations.serviceAreasSubtitle')}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-6">
                {t('gasStations.serviceAreasTitle')}
              </h2>
              <p className="text-lg text-white/90 mb-6">
                {t('gasStations.serviceAreasText')}
              </p>
              <ul className="space-y-3">
                {data.serviceAreasList.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80">
                    <span className="w-2 h-2 bg-italia-gold rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 bg-white/10 backdrop-blur">
              <Coffee className="w-10 h-10 text-italia-gold mb-4" />
              <h3 className="font-serif text-xl font-medium text-white mb-3">
                {t('gasStations.autogrillTip')}
              </h3>
              <p className="text-white/80">
                {data.autogrillTip}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
