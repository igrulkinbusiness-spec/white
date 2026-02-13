import { Fuel, Clock, Euro, CreditCard } from 'lucide-react';
import { PageHero } from '../components/shared/PageHero';
import { ContentSection } from '../components/shared/ContentSection';
import { InfoCard } from '../components/shared/InfoCard';
import { useLanguage } from '../i18n';

const HERO_IMAGE = "https://images.unsplash.com/photo-1545558014-8692077e9b5c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxwZXRyb2wlMjBzdGF0aW9ufGVufDB8fHx8MTc3MDgwNjgxMnww&ixlib=rb-4.1.0&q=85";

const fuelTypes = [
  { name: 'Petrol (Unleaded)', irish: 'Peitreal', note: 'Standard unleaded fuel' },
  { name: 'Diesel', irish: 'Díosal', note: 'Most common for rental cars' },
  { name: 'Premium Petrol', irish: 'Peitreal Ardochtánach', note: 'Higher octane option' },
];

const majorChains = [
  { name: 'Circle K', note: 'Largest chain, 24hr stations available' },
  { name: 'Applegreen', note: 'Irish chain, good food offerings' },
  { name: 'Topaz', note: 'Now part of Circle K' },
  { name: 'Maxol', note: 'Irish family-owned chain' },
  { name: 'Texaco', note: 'International brand, widespread' },
];

export const PetrolStationsPage = () => {
  const { t } = useLanguage();

  return (
    <div data-testid="petrol-stations-page">
      <PageHero 
        title={t('gasStations.title')}
        subtitle={t('gasStations.subtitle')}
        image={HERO_IMAGE}
      />

      <ContentSection title={t('gasStations.fuelTypesTitle')} subtitle={t('gasStations.fuelTypesSubtitle')} id="fuel-types">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {fuelTypes.map((fuel) => (
            <div 
              key={fuel.name}
              className="bg-white border border-italia-border p-6 hover:border-italia-green transition-colors"
            >
              <h3 className="font-serif text-xl font-medium text-italia-text mb-2">
                {fuel.name}
              </h3>
              <p className="text-italia-green font-medium mb-2">{fuel.irish}</p>
              <p className="text-sm text-italia-text-muted">{fuel.note}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <InfoCard icon={Euro} title="Current Prices (approx)">
            <ul className="space-y-2 mt-3">
              <li>Petrol: €1.65-1.80/litre</li>
              <li>Diesel: €1.55-1.70/litre</li>
            </ul>
            <p className="mt-3 text-sm">Prices vary by location. Motorway services are usually more expensive.</p>
          </InfoCard>
          <InfoCard icon={Clock} title="Opening Hours" variant="gold">
            <p className="mt-3">Most stations: 7am-10pm</p>
            <p className="mt-2">24-hour stations available in cities and on motorways.</p>
            <p className="mt-2 text-sm">Pay-at-pump often available outside hours.</p>
          </InfoCard>
        </div>
      </ContentSection>

      <section className="py-16 bg-white" data-testid="chains">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="mb-12">
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-green mb-4">
              {t('gasStations.chainsSubtitle')}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-italia-text">
              {t('gasStations.chainsTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {majorChains.map((chain) => (
              <div key={chain.name} className="p-6 border border-italia-border hover:border-italia-green transition-colors">
                <h3 className="font-serif text-xl font-medium text-italia-text mb-2">
                  {chain.name}
                </h3>
                <p className="text-sm text-italia-text-muted">{chain.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-italia-green" data-testid="tips">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <h2 className="font-serif text-3xl font-medium text-white mb-8">Tips for Fuelling in Ireland</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white/10 backdrop-blur rounded-lg">
              <h3 className="font-medium text-white mb-2">Pay at Counter</h3>
              <p className="text-white/80 text-sm">Most stations require you to fill up first, then pay inside. Some have pay-at-pump options.</p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur rounded-lg">
              <h3 className="font-medium text-white mb-2">Rental Car Fuel</h3>
              <p className="text-white/80 text-sm">Check what fuel your rental car needs. Most modern rentals use diesel. Look for the label inside the fuel cap.</p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur rounded-lg">
              <h3 className="font-medium text-white mb-2">Rural Areas</h3>
              <p className="text-white/80 text-sm">Petrol stations can be sparse in rural areas. Fill up before heading to remote regions like Connemara or West Cork.</p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur rounded-lg">
              <h3 className="font-medium text-white mb-2">Payment</h3>
              <p className="text-white/80 text-sm">Credit and debit cards widely accepted. Contactless payment available at most stations.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
