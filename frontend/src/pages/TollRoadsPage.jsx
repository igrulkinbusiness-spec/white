import { CreditCard, Clock, AlertTriangle, CheckCircle, MapPin } from 'lucide-react';
import { PageHero } from '../components/shared/PageHero';
import { ContentSection } from '../components/shared/ContentSection';
import { InfoCard } from '../components/shared/InfoCard';
import { useLanguage } from '../i18n';

const HERO_IMAGE = "https://images.unsplash.com/photo-1549918864-48ac978761a4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxJcmVsYW5kJTIwdG9sbCUyMHJvYWR8ZW58MHx8fHwxNzcwODA2ODEyfDA&ixlib=rb-4.1.0&q=85";

const tollRoads = [
  { road: 'M50 (Dublin)', toll: '€3.50', type: 'Barrier-free', note: 'Pay via eflow.ie by 8pm next day' },
  { road: 'M1 (Gormanston-Monasterboice)', toll: '€2.00', type: 'Toll plaza', note: 'Cash, card or tag' },
  { road: 'M3 (Clonee-Kells)', toll: '€1.90', type: 'Toll plaza', note: 'Cash, card or tag' },
  { road: 'M4 (Kilcock-Enfield)', toll: '€3.10', type: 'Toll plaza', note: 'Cash, card or tag' },
  { road: 'M7/M8 (Portlaoise)', toll: '€2.00', type: 'Toll plaza', note: 'Cash, card or tag' },
  { road: 'N6 (Galway-Ballinasloe)', toll: '€2.00', type: 'Toll plaza', note: 'Cash, card or tag' },
  { road: 'N8 (Rathcormac-Fermoy)', toll: '€2.00', type: 'Toll plaza', note: 'Cash, card or tag' },
  { road: 'N25 (Waterford)', toll: '€1.90', type: 'Toll plaza', note: 'Cash, card or tag' },
  { road: 'East Link (Dublin)', toll: '€2.10', type: 'Toll plaza', note: 'Cash only' },
  { road: 'Dublin Tunnel', toll: '€3.50/€6.00', type: 'Toll plaza', note: 'Higher rate for trucks' },
];

const paymentMethods = [
  { name: 'Cash', desc: 'Accepted at all manned toll plazas. Keep coins handy!', pros: ['Accepted everywhere'], cons: ['Queues at peak times', 'Not valid for M50'] },
  { name: 'Card', desc: 'Credit/debit cards accepted at most toll plazas', pros: ['Convenient', 'Contactless available'], cons: ['Some older plazas cash only'] },
  { name: 'Toll Tag', desc: 'Electronic tag for automatic payment. Get from eflow.ie', pros: ['No stopping', 'Discounts available', 'Works on all tolls'], cons: ['Monthly fee', 'Need to register'] },
];

export const TollRoadsPage = () => {
  const { t } = useLanguage();

  return (
    <div data-testid="toll-roads-page">
      <PageHero 
        title="Toll Roads in Ireland"
        subtitle="Several major routes in Ireland have tolls. Most can be paid at toll plazas, but the M50 requires online payment."
        image={HERO_IMAGE}
      />

      <ContentSection title="Toll Roads" subtitle="Current Toll Charges" id="tolls">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-italia-green">
                <th className="text-left py-4 pr-4 font-mono text-xs uppercase tracking-wider text-italia-text-muted">Road</th>
                <th className="text-left py-4 pr-4 font-mono text-xs uppercase tracking-wider text-italia-text-muted">Toll (Car)</th>
                <th className="text-left py-4 pr-4 font-mono text-xs uppercase tracking-wider text-italia-text-muted">Type</th>
                <th className="text-left py-4 font-mono text-xs uppercase tracking-wider text-italia-text-muted">Note</th>
              </tr>
            </thead>
            <tbody>
              {tollRoads.map((toll, index) => (
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
              <h2 className="font-serif text-2xl font-medium text-italia-text mb-4">M50 - Important Warning!</h2>
              <p className="text-italia-text-muted mb-4">
                The M50 around Dublin is a <strong>barrier-free toll road</strong>. There are NO toll booths - cameras read your number plate automatically.
              </p>
              <ul className="space-y-2 text-italia-text-muted">
                <li>• You MUST pay via <strong>eflow.ie</strong> by 8pm the next day</li>
                <li>• Register your vehicle for easier payment</li>
                <li>• Unpaid tolls result in fines starting from €41.50</li>
                <li>• Rental cars: Check if toll is included or pay yourself</li>
              </ul>
              <a 
                href="https://www.eflow.ie" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-3 bg-italia-green text-white rounded-full hover:bg-italia-green-dark transition-colors"
              >
                Visit eflow.ie
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContentSection title="Payment Methods" subtitle="How to Pay" id="payment">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {paymentMethods.map((method) => (
            <div key={method.name} className="bg-white border border-italia-border p-6">
              <h3 className="font-serif text-xl font-medium text-italia-text mb-3">{method.name}</h3>
              <p className="text-italia-text-muted mb-4">{method.desc}</p>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-italia-green mb-1">Pros</p>
                  <ul className="text-sm text-italia-text-muted">
                    {method.pros.map((pro, i) => <li key={i}>+ {pro}</li>)}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium text-italia-red mb-1">Cons</p>
                  <ul className="text-sm text-italia-text-muted">
                    {method.cons.map((con, i) => <li key={i}>- {con}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      <section className="py-16 bg-italia-green" data-testid="tips">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <h2 className="font-serif text-3xl font-medium text-white mb-8">Toll Road Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white/10 backdrop-blur rounded-lg">
              <h3 className="font-medium text-white mb-2">Rental Cars</h3>
              <p className="text-white/80 text-sm">Many rental companies charge a daily fee for toll management. Check your rental agreement. You may save money by paying tolls yourself.</p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur rounded-lg">
              <h3 className="font-medium text-white mb-2">Video Tolling</h3>
              <p className="text-white/80 text-sm">If you use the M50 without a tag, you're using "video tolling". Register at eflow.ie to set up easy payment.</p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur rounded-lg">
              <h3 className="font-medium text-white mb-2">Avoid Peak Times</h3>
              <p className="text-white/80 text-sm">The M50 gets very congested during rush hour (7-9am, 4-7pm). Consider alternative times or routes.</p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur rounded-lg">
              <h3 className="font-medium text-white mb-2">Keep Receipts</h3>
              <p className="text-white/80 text-sm">If paying cash at toll plazas, keep your receipt as proof of payment in case of disputes.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
