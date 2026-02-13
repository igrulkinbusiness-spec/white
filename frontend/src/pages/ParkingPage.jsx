import { ParkingCircle, AlertTriangle, Clock, Euro, MapPin, Car } from 'lucide-react';
import { PageHero } from '../components/shared/PageHero';
import { ContentSection } from '../components/shared/ContentSection';
import { InfoCard } from '../components/shared/InfoCard';
import { useLanguage } from '../i18n';

const HERO_IMAGE = "https://images.unsplash.com/photo-1590674899484-13da0f721f3f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxEb21pbmljJTIwc3RyZWV0JTIwcGFya2luZ3xlbnwwfHx8fDE3NzA4MDY4MTJ8MA&ixlib=rb-4.1.0&q=85";

const parkingTypes = [
  { type: 'Pay & Display', description: 'Buy ticket from machine, display on dashboard', cost: '€1-3/hour', where: 'City centres, town centres' },
  { type: 'Disc Parking', description: 'Use parking disc showing arrival time', cost: 'Free (time limited)', where: 'Smaller towns, residential areas' },
  { type: 'Multi-Storey Car Parks', description: 'Covered parking, pay on exit', cost: '€2-4/hour', where: 'City centres, shopping centres' },
  { type: 'Park & Ride', description: 'Free parking + bus/train ticket', cost: 'Free/Low cost', where: 'Outskirts of Dublin, Cork' },
  { type: 'On-Street Metered', description: 'Pay at meter for specific bay', cost: '€1-3/hour', where: 'City centres' },
];

const lineMarkings = [
  { color: 'Single Yellow Line', meaning: 'Restricted parking - check signs for times', fine: '€40' },
  { color: 'Double Yellow Lines', meaning: 'No parking at any time', fine: '€40-80' },
  { color: 'White Dashed Lines', meaning: 'Parking bay - check if pay required', fine: 'N/A' },
  { color: 'Blue Badge Bays', meaning: 'Disabled parking only', fine: '€150' },
  { color: 'Loading Bays', meaning: 'Loading only - time limited', fine: '€40' },
];

const cityParking = [
  { city: 'Dublin', tips: 'Very limited street parking. Use multi-storey car parks (€3-5/hr) or Park & Ride from outskirts.', clampingRisk: 'High' },
  { city: 'Cork', tips: 'Use Paul Street or North Main Street car parks. Free parking on Sundays in most areas.', clampingRisk: 'Medium' },
  { city: 'Galway', tips: 'Extremely limited in centre. Use Eyre Square car park or park outside and walk.', clampingRisk: 'High' },
  { city: 'Limerick', tips: 'Colbert Station car park good for city visits. Street parking available but limited.', clampingRisk: 'Medium' },
];

export const ParkingPage = () => {
  const { t } = useLanguage();

  return (
    <div data-testid="parking-page">
      <PageHero 
        title="Parking in Ireland"
        subtitle="Understanding parking rules will help you avoid fines and clamping. Always check signs carefully!"
        image={HERO_IMAGE}
      />

      <ContentSection title="Parking Types" subtitle="Where to Park" id="types">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {parkingTypes.map((type) => (
            <div 
              key={type.type}
              className="bg-white border border-italia-border p-6 hover:border-italia-green transition-colors"
            >
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
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-green mb-4">
              Know the Rules
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-italia-text">
              Line Markings & Restrictions
            </h2>
          </div>

          <div className="space-y-4">
            {lineMarkings.map((line) => (
              <div key={line.color} className="flex flex-col md:flex-row md:items-center gap-4 p-4 border border-italia-border">
                <div className="md:w-48 flex-shrink-0">
                  <h3 className="font-medium text-italia-text">{line.color}</h3>
                </div>
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
              <h2 className="font-serif text-2xl font-medium text-italia-text mb-4">Clamping Warning!</h2>
              <p className="text-italia-text-muted mb-4">
                Clamping is common in Irish cities. If your car is clamped:
              </p>
              <ul className="space-y-2 text-italia-text-muted">
                <li>• <strong>Clamp release fee:</strong> €80-125 depending on area</li>
                <li>• <strong>If not released within 24 hours:</strong> Car may be towed (additional €150+)</li>
                <li>• <strong>Pay by phone/online:</strong> Number on the clamp notice</li>
                <li>• <strong>Wait time:</strong> Usually 1-2 hours for release after payment</li>
              </ul>
              <p className="mt-4 text-sm text-italia-red font-medium">
                Prevention is better than cure - always check parking signs carefully!
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContentSection title="City Parking Guide" subtitle="Tips by City" id="cities">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cityParking.map((city) => (
            <div key={city.city} className="p-6 border border-italia-border">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-serif text-xl font-medium text-italia-text">{city.city}</h3>
                <span className={`px-3 py-1 text-xs font-mono ${city.clampingRisk === 'High' ? 'bg-italia-red/10 text-italia-red' : 'bg-italia-gold/10 text-italia-gold'}`}>
                  Clamping Risk: {city.clampingRisk}
                </span>
              </div>
              <p className="text-italia-text-muted text-sm">{city.tips}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <section className="py-16 bg-italia-green" data-testid="tips-section">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <h2 className="font-serif text-3xl font-medium text-white mb-8">Parking Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white/10 backdrop-blur rounded-lg">
              <h3 className="font-medium text-white mb-2">Use Apps</h3>
              <p className="text-white/80 text-sm">ParkingTag and Apcoa apps let you pay for parking by phone - no need for coins!</p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur rounded-lg">
              <h3 className="font-medium text-white mb-2">Sunday Parking</h3>
              <p className="text-white/80 text-sm">Many areas offer free parking on Sundays and Bank Holidays - but check the signs.</p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur rounded-lg">
              <h3 className="font-medium text-white mb-2">Disc Parking</h3>
              <p className="text-white/80 text-sm">Buy a parking disc from newsagents (€2). Set the time of arrival and display on dashboard.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
