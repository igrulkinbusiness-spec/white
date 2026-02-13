import { Lightbulb, Check, AlertTriangle, Car, Smartphone, Cloud } from 'lucide-react';
import { PageHero } from '../components/shared/PageHero';
import { ContentSection } from '../components/shared/ContentSection';
import { InfoCard } from '../components/shared/InfoCard';
import { useLanguage } from '../i18n';

const HERO_IMAGE = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxJcmVsYW5kJTIwZHJpdmluZ3xlbnwwfHx8fDE3NzA4MDY4MTJ8MA&ixlib=rb-4.1.0&q=85";

const tipCategories = [
  {
    category: 'Before Your Trip',
    items: [
      'Get an International Driving Permit if your licence isn\'t in English',
      'Book car rental early - prices rise significantly in summer',
      'Download offline maps - mobile signal is patchy in rural Ireland',
      'Get travel insurance that covers driving in Ireland',
      'Check if your insurance covers Irish roads',
    ],
  },
  {
    category: 'On the Road',
    items: [
      'DRIVE ON THE LEFT - check twice before pulling out',
      'Use low beam headlights in rain and fog',
      'Pull into passing places on narrow roads to let others pass',
      'Allow extra time - Irish roads are slower than they look on maps',
      'Wave to thank other drivers - it\'s the Irish way!',
    ],
  },
  {
    category: 'In Cities',
    items: [
      'Use Park & Ride on the outskirts - city parking is expensive and limited',
      'Register at eflow.ie if using M50 around Dublin',
      'Carry coins for parking meters (or use parking apps)',
      'Watch for bus lanes - fines apply for driving in them',
      'Avoid driving in Dublin city centre during rush hour (7-9am, 4-7pm)',
    ],
  },
  {
    category: 'Rural Driving',
    items: [
      'Watch for sheep, cattle, and tractors on country roads',
      'Keep left on blind corners - oncoming traffic may be in your lane!',
      'Fill up petrol before heading to remote areas',
      'Roads can flood in heavy rain - avoid fords if water looks deep',
      'Many rural roads have no footpaths - watch for pedestrians',
    ],
  },
];

const commonMistakes = [
  { mistake: 'Looking the wrong way', consequence: 'Accidents at junctions', prevention: 'Look RIGHT first - traffic comes from the right!' },
  { mistake: 'Forgetting M50 toll', consequence: 'Fine starting at €41.50', prevention: 'Pay via eflow.ie by 8pm next day' },
  { mistake: 'Underestimating distances', consequence: 'Missed appointments, rushed driving', prevention: 'Add 50% to Google Maps time for rural areas' },
  { mistake: 'Parking on double yellows', consequence: 'Clamping (€80-125 release)', prevention: 'Always check signs before leaving car' },
];

const usefulApps = [
  { name: 'Google Maps', purpose: 'Navigation - download offline maps for rural areas' },
  { name: 'eflow', purpose: 'Pay M50 tolls - register before you travel' },
  { name: 'ParkingTag', purpose: 'Pay for parking by phone' },
  { name: 'AA Roadwatch', purpose: 'Traffic updates and roadworks' },
  { name: 'Met Éireann', purpose: 'Irish weather forecasts - check before scenic drives' },
  { name: 'what3words', purpose: 'Precise location for emergencies in remote areas' },
];

export const TipsPage = () => {
  const { t } = useLanguage();

  return (
    <div data-testid="tips-page">
      <PageHero 
        title="Driving Tips"
        subtitle="Practical advice for a safe and enjoyable driving experience in Ireland."
        image={HERO_IMAGE}
      />

      <ContentSection title="Essential Tips" subtitle="By Category" id="tips">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tipCategories.map((category) => (
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
              Learn from Others
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-italia-text">
              Common Mistakes to Avoid
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commonMistakes.map((item) => (
              <div key={item.mistake} className="p-6 border-l-4 border-italia-red bg-italia-red/5">
                <h3 className="font-serif text-lg font-medium text-italia-text mb-2">
                  {item.mistake}
                </h3>
                <p className="text-italia-red text-sm mb-3">{item.consequence}</p>
                <p className="text-italia-text-muted text-sm">
                  <strong>Prevention:</strong> {item.prevention}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContentSection title="Useful Apps" subtitle="Download Before You Go" id="apps">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {usefulApps.map((app) => (
            <div key={app.name} className="flex items-center gap-4 p-4 bg-white border border-italia-border">
              <Smartphone className="w-8 h-8 text-italia-green flex-shrink-0" />
              <div>
                <h4 className="font-medium text-italia-text">{app.name}</h4>
                <p className="text-sm text-italia-text-muted">{app.purpose}</p>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      <section className="py-16 bg-italia-gold/10" data-testid="weather-section">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex items-start gap-6">
            <Cloud className="w-12 h-12 text-italia-gold flex-shrink-0" />
            <div>
              <h2 className="font-serif text-2xl font-medium text-italia-text mb-4">Weather Warning</h2>
              <p className="text-italia-text-muted mb-4">
                Irish weather is notoriously changeable. "Four seasons in one day" is a real thing!
              </p>
              <ul className="space-y-2 text-italia-text-muted">
                <li>• Check Met Éireann forecast before scenic drives</li>
                <li>• Pack waterproofs even if it looks sunny</li>
                <li>• Mountain roads can be foggy when valleys are clear</li>
                <li>• Rain reduces visibility and increases stopping distances</li>
                <li>• Winter: Watch for black ice, especially in mornings</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-italia-green" data-testid="main-tip-section">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
          <Lightbulb className="w-12 h-12 text-italia-gold mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-6">
            Top Tip
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            Relax and enjoy the journey! Irish roads might be slower and narrower than you're used to, 
            but that's part of the charm. Stop in villages, chat with locals, and don't rush. 
            Some of the best experiences in Ireland happen when you take your time.
          </p>
        </div>
      </section>
    </div>
  );
};
