import { Fuel, Clock, Euro, CreditCard } from 'lucide-react';
import { PageHero } from '../components/shared/PageHero';
import { ContentSection } from '../components/shared/ContentSection';
import { InfoCard } from '../components/shared/InfoCard';
import { useLanguage } from '../i18n';

const HERO_IMAGE = "https://images.unsplash.com/photo-1545558014-8692077e9b5c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxwZXRyb2wlMjBzdGF0aW9ufGVufDB8fHx8MTc3MDgwNjgxMnww&ixlib=rb-4.1.0&q=85";

const content = {
  en: {
    title: 'Petrol Stations',
    subtitle: 'Fuel prices and petrol station information for driving in Ireland.',
    fuelTitle: 'Fuel Types',
    fuelSubtitle: 'Available Fuels',
    pricesTitle: 'Current Prices (approx)',
    hoursTitle: 'Opening Hours',
    chainsTitle: 'Major Chains',
    chainsSubtitle: 'Brands',
    tipsTitle: 'Tips for Fuelling in Ireland',
    tip1Title: 'Pay at Counter',
    tip1Text: 'Most stations require you to fill up first, then pay inside. Some have pay-at-pump options.',
    tip2Title: 'Rental Car Fuel',
    tip2Text: 'Check what fuel your rental car needs. Most modern rentals use diesel. Look for the label inside the fuel cap.',
    tip3Title: 'Rural Areas',
    tip3Text: 'Petrol stations can be sparse in rural areas. Fill up before heading to remote regions like Connemara or West Cork.',
    tip4Title: 'Payment',
    tip4Text: 'Credit and debit cards widely accepted. Contactless payment available at most stations.',
    fuelTypes: [
      { name: 'Petrol (Unleaded)', irish: 'Peitreal', note: 'Standard unleaded fuel' },
      { name: 'Diesel', irish: 'Díosal', note: 'Most common for rental cars' },
      { name: 'Premium Petrol', irish: 'Peitreal Ardochtánach', note: 'Higher octane option' },
    ],
    prices: ['Petrol: €1.65-1.80/litre', 'Diesel: €1.55-1.70/litre'],
    pricesNote: 'Prices vary by location. Motorway services are usually more expensive.',
    hoursText: 'Most stations: 7am-10pm',
    hoursText2: '24-hour stations available in cities and on motorways.',
    hoursText3: 'Pay-at-pump often available outside hours.',
    majorChains: [
      { name: 'Circle K', note: 'Largest chain, 24hr stations available' },
      { name: 'Applegreen', note: 'Irish chain, good food offerings' },
      { name: 'Topaz', note: 'Now part of Circle K' },
      { name: 'Maxol', note: 'Irish family-owned chain' },
      { name: 'Texaco', note: 'International brand, widespread' },
    ],
  },
  ga: {
    title: 'Stáisiúin Pheitril',
    subtitle: 'Praghsanna breosla agus eolas faoi stáisiúin pheitril le haghaidh tiomáint in Éirinn.',
    fuelTitle: 'Cineálacha Breosla',
    fuelSubtitle: 'Breoslaí ar Fáil',
    pricesTitle: 'Praghsanna Reatha (tuairim)',
    hoursTitle: 'Uaireanta Oscailte',
    chainsTitle: 'Mórshraithanna',
    chainsSubtitle: 'Brandaí',
    tipsTitle: 'Leideanna le haghaidh Breoslú in Éirinn',
    tip1Title: 'Íoc ag an gCuntar',
    tip1Text: 'Éilíonn formhór na stáisiún ort líonadh suas ar dtús, ansin íoc istigh. Tá roghanna íoc-ag-an-gcaidéal ag roinnt.',
    tip2Title: 'Breosla Carr ar Cíos',
    tip2Text: 'Seiceáil cén breosla atá ag teastáil ó do charr ar cíos. Úsáideann an chuid is mó de charranna ar cíos nua-aimseartha díosal. Féach ar an lipéad taobh istigh den chaipín breosla.',
    tip3Title: 'Ceantair Tuaithe',
    tip3Text: 'Is féidir le stáisiúin pheitril a bheith gann i gceantair tuaithe. Líon suas sula dtéann tú go réigiúin iargúlta ar nós Chonamara nó Iarthar Chorcaí.',
    tip4Title: 'Íocaíocht',
    tip4Text: 'Glactar go forleathan le cártaí creidmheasa agus dochair. Íocaíocht tadhlach ar fáil ag formhór na stáisiún.',
    fuelTypes: [
      { name: 'Peitreal (Gan Luaidhe)', irish: 'Peitreal', note: 'Breosla caighdeánach gan luaidhe' },
      { name: 'Díosal', irish: 'Díosal', note: 'Is coitianta do charranna ar cíos' },
      { name: 'Peitreal Ardochtánach', irish: 'Peitreal Ardochtánach', note: 'Rogha ochtán níos airde' },
    ],
    prices: ['Peitreal: €1.65-1.80/lítear', 'Díosal: €1.55-1.70/lítear'],
    pricesNote: 'Athraíonn praghsanna de réir suímh. Is gnách go mbíonn seirbhísí mótarbhealaí níos daoire.',
    hoursText: 'Formhór na stáisiún: 7rn-10in',
    hoursText2: 'Stáisiúin 24 uair ar fáil i gcathracha agus ar mhótarbhealaí.',
    hoursText3: 'Íoc-ag-an-gcaidéal ar fáil go minic lasmuigh de uaireanta.',
    majorChains: [
      { name: 'Circle K', note: 'An slabhra is mó, stáisiúin 24u ar fáil' },
      { name: 'Applegreen', note: 'Slabhra Éireannach, tairiscintí bia maithe' },
      { name: 'Topaz', note: 'Anois mar chuid de Circle K' },
      { name: 'Maxol', note: 'Slabhra Éireannach faoi úinéireacht teaghlaigh' },
      { name: 'Texaco', note: 'Branda idirnáisiúnta, forleathan' },
    ],
  }
};

export const PetrolStationsPage = () => {
  const { language } = useLanguage();
  const t = content[language] || content.en;

  return (
    <div data-testid="petrol-stations-page">
      <PageHero title={t.title} subtitle={t.subtitle} image={HERO_IMAGE} />

      <ContentSection title={t.fuelTitle} subtitle={t.fuelSubtitle} id="fuel-types">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.fuelTypes.map((fuel) => (
            <div key={fuel.name} className="bg-white border border-italia-border p-6 hover:border-italia-green transition-colors">
              <h3 className="font-serif text-xl font-medium text-italia-text mb-2">{fuel.name}</h3>
              <p className="text-italia-green font-medium mb-2">{fuel.irish}</p>
              <p className="text-sm text-italia-text-muted">{fuel.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <InfoCard icon={Euro} title={t.pricesTitle}>
            <ul className="space-y-2 mt-3">{t.prices.map((price, i) => <li key={i}>{price}</li>)}</ul>
            <p className="mt-3 text-sm">{t.pricesNote}</p>
          </InfoCard>
          <InfoCard icon={Clock} title={t.hoursTitle} variant="gold">
            <p className="mt-3">{t.hoursText}</p>
            <p className="mt-2">{t.hoursText2}</p>
            <p className="mt-2 text-sm">{t.hoursText3}</p>
          </InfoCard>
        </div>
      </ContentSection>

      <section className="py-16 bg-white" data-testid="chains">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="mb-12">
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-green mb-4">{t.chainsSubtitle}</span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-italia-text">{t.chainsTitle}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.majorChains.map((chain) => (
              <div key={chain.name} className="p-6 border border-italia-border hover:border-italia-green transition-colors">
                <h3 className="font-serif text-xl font-medium text-italia-text mb-2">{chain.name}</h3>
                <p className="text-sm text-italia-text-muted">{chain.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
