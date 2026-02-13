import { Phone, Shield, AlertTriangle, Heart, Car, Flame } from 'lucide-react';
import { PageHero } from '../components/shared/PageHero';
import { ContentSection } from '../components/shared/ContentSection';
import { InfoCard } from '../components/shared/InfoCard';
import { useLanguage } from '../i18n';

const HERO_IMAGE = "https://images.unsplash.com/photo-1587745416684-47953f16f02f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxhbWJ1bGFuY2UlMjBlbWVyZ2VuY3l8ZW58MHx8fHwxNzcwODA2ODEyfDA&ixlib=rb-4.1.0&q=85";

const emergencyNumbers = [
  { number: '999 / 112', name: 'Emergency Services', description: 'Police, Fire, Ambulance. Operators speak English.', icon: Phone },
  { number: '999', name: 'Gardaí (Police)', description: 'For emergencies. For non-emergency, local station.', icon: Shield },
  { number: '999', name: 'Fire Brigade', description: 'Fire emergencies and rescue.', icon: Flame },
  { number: '999', name: 'Ambulance', description: 'Medical emergencies.', icon: Heart },
  { number: '1800 250 025', name: 'AA Roadside (Members)', description: '24/7 breakdown assistance for AA members.', icon: Car },
  { number: '1800 667 788', name: 'AA Roadside (Non-Members)', description: 'Breakdown assistance - pay per call.', icon: Car },
];

const accidentSteps = [
  { step: 1, title: 'Stop & Secure', description: 'Stop your vehicle, turn on hazard lights. Do not leave the scene.' },
  { step: 2, title: 'Check for Injuries', description: 'Check yourself and others. Call 999/112 if anyone is injured.' },
  { step: 3, title: 'Move to Safety', description: 'If possible and safe, move vehicles off the road. Use warning triangle.' },
  { step: 4, title: 'Exchange Details', description: 'Get names, addresses, phone numbers, insurance details, registration numbers.' },
  { step: 5, title: 'Document Everything', description: 'Take photos of damage, scene, road conditions. Note time, location, weather.' },
  { step: 6, title: 'Report to Insurance', description: 'Report to your insurance company within 24 hours.' },
];

const usefulNumbers = [
  { service: 'Garda Confidential Line', number: '1800 666 111', note: 'Anonymous crime reporting' },
  { service: 'Samaritans', number: '116 123', note: '24/7 emotional support' },
  { service: 'HSE Live', number: '1800 700 700', note: 'Health advice line' },
  { service: 'Citizens Information', number: '0818 07 4000', note: 'Public services info' },
  { service: 'Irish Water', number: '1800 278 278', note: 'Water emergencies' },
  { service: 'ESB Networks', number: '1800 372 999', note: 'Power outages' },
];

export const EmergencyPage = () => {
  const { t } = useLanguage();

  return (
    <div data-testid="emergency-page">
      <PageHero 
        title="Emergency Services"
        subtitle="Important numbers and procedures for emergencies in Ireland. Save these numbers before you need them!"
        image={HERO_IMAGE}
      />

      <section className="py-12 bg-italia-red" data-testid="main-number">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
          <h2 className="font-serif text-3xl font-medium text-white mb-4">Emergency Number</h2>
          <div className="font-mono text-6xl font-bold text-white mb-4">999 or 112</div>
          <p className="text-white/90">For Police, Fire, or Ambulance. Free from any phone, 24/7.</p>
        </div>
      </section>

      <ContentSection title="Emergency Numbers" subtitle="Save These Numbers" id="numbers">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {emergencyNumbers.map((item) => (
            <div 
              key={item.name}
              className="p-6 bg-white border border-italia-border hover:border-italia-green transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-italia-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-italia-green" />
                </div>
                <div>
                  <div className="font-mono text-2xl font-bold text-italia-green mb-1">
                    {item.number}
                  </div>
                  <h3 className="font-serif text-lg font-medium text-italia-text mb-2">
                    {item.name}
                  </h3>
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
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-red mb-4">
              Be Prepared
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-italia-text">
              What to Do in an Accident
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accidentSteps.map((step) => (
              <div key={step.step} className="p-6 border-l-4 border-italia-green">
                <span className="font-mono text-3xl font-bold text-italia-green">
                  {String(step.step).padStart(2, '0')}
                </span>
                <h3 className="font-serif text-lg font-medium text-italia-text mt-2 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-italia-text-muted">{step.description}</p>
              </div>
            ))}
          </div>

          <InfoCard icon={AlertTriangle} variant="warning" title="Important Reminder" className="mt-8">
            <p className="mt-2">
              Under Irish law, you MUST stop and exchange details after any accident involving injury or damage. 
              Failure to stop is a serious offence that can result in criminal charges.
            </p>
          </InfoCard>
        </div>
      </section>

      <ContentSection title="Other Useful Numbers" subtitle="Non-Emergency Services" id="useful">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {usefulNumbers.map((service) => (
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
          <h2 className="font-serif text-3xl font-medium text-white mb-8">Emergency Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white/10 backdrop-blur rounded-lg">
              <h3 className="font-medium text-white mb-2">Save Numbers Offline</h3>
              <p className="text-white/80 text-sm">Save emergency numbers in your phone before travelling. In remote areas, mobile signal may be weak.</p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur rounded-lg">
              <h3 className="font-medium text-white mb-2">Know Your Location</h3>
              <p className="text-white/80 text-sm">When calling 999, be ready to give your location. Look for road signs, landmarks, or use what3words app.</p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur rounded-lg">
              <h3 className="font-medium text-white mb-2">Carry Insurance Details</h3>
              <p className="text-white/80 text-sm">Keep your insurance policy number and emergency contact number in your wallet or phone.</p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur rounded-lg">
              <h3 className="font-medium text-white mb-2">EU Health Card</h3>
              <p className="text-white/80 text-sm">EU citizens: Bring your EHIC/GHIC card for access to medical treatment. Non-EU: Ensure you have travel insurance.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
