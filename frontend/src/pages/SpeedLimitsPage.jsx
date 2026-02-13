import { Gauge, AlertTriangle, Cloud, Moon, Camera } from 'lucide-react';
import { PageHero } from '../components/shared/PageHero';
import { ContentSection } from '../components/shared/ContentSection';
import { InfoCard } from '../components/shared/InfoCard';
import { useLanguage } from '../i18n';

const HERO_IMAGE = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxzcGVlZCUyMGxpbWl0JTIwc2lnbiUyMElyZWxhbmR8ZW58MHx8fHwxNzcwODA2ODEyfDA&ixlib=rb-4.1.0&q=85";

const speedLimits = [
  { type: 'Motorways', limit: '120 km/h', icon: '🛣️', note: 'M-roads only. Minimum speed 50 km/h.' },
  { type: 'National Roads', limit: '100 km/h', icon: '🛤️', note: 'N-roads (single or dual carriageway)' },
  { type: 'Regional/Local Roads', limit: '80 km/h', icon: '🚗', note: 'R and L roads. Often lower in reality due to conditions.' },
  { type: 'Built-up Areas', limit: '50 km/h', icon: '🏘️', note: 'Default in towns/cities. Watch for 30 km/h zones.' },
];

const specialZones = [
  { zone: 'School Zones', limit: '30 km/h', time: 'During school hours' },
  { zone: 'Residential Estates', limit: '30 km/h', time: 'Often marked at entrance' },
  { zone: 'City Centres', limit: '30 km/h', time: 'Dublin, Cork, Galway centres' },
  { zone: 'Near Schools/Churches', limit: '30-50 km/h', time: 'Watch for signs' },
];

const finesTable = [
  { excess: 'Up to 30 km/h over', fine: '€80', points: '3', court: 'No' },
  { excess: '30+ km/h over', fine: 'Up to €5,000', points: '5', court: 'Yes' },
  { excess: '50+ km/h over', fine: 'Up to €5,000', points: '6', court: 'Yes' },
];

const cameraInfo = [
  { name: 'GoSafe Vans', description: 'White vans marked "Safety Camera". Mobile speed detection on all road types.' },
  { name: 'Fixed Cameras', description: 'Yellow boxes, usually signposted. Common on motorways and N-roads.' },
  { name: 'Average Speed Cameras', description: 'Some stretches measure average speed over distance. You can\'t speed between cameras!' },
  { name: 'Garda Checkpoints', description: 'Police may conduct speed checks with handheld devices. Also check for drink driving.' },
];

export const SpeedLimitsPage = () => {
  const { t } = useLanguage();

  return (
    <div data-testid="speed-limits-page">
      <PageHero 
        title="Speed Limits"
        subtitle="Speed limits in Ireland are in kilometres per hour (km/h). These are maximum limits - actual safe speed depends on conditions."
        image={HERO_IMAGE}
      />

      <ContentSection title="Standard Speed Limits" subtitle="By Road Type" id="limits">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {speedLimits.map((item) => (
            <div 
              key={item.type}
              className="bg-white border border-italia-border p-6 hover:border-italia-green transition-colors text-center"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <div className="font-mono text-4xl font-bold text-italia-green mb-2">
                {item.limit}
              </div>
              <h3 className="font-serif text-lg font-medium text-italia-text mb-2">
                {item.type}
              </h3>
              <p className="text-sm text-italia-text-muted">{item.note}</p>
            </div>
          ))}
        </div>

        <InfoCard icon={AlertTriangle} variant="warning" title="Important Note" className="mt-8">
          <p className="mt-2">
            These are MAXIMUM limits for ideal conditions. In rain, fog, or on narrow roads, you should drive slower. 
            Many rural roads are physically impossible to drive at 80 km/h safely!
          </p>
        </InfoCard>
      </ContentSection>

      <section className="py-16 bg-white" data-testid="special-zones">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="mb-12">
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-green mb-4">
              Watch For
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-italia-text">
              Special Speed Zones
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialZones.map((zone) => (
              <div key={zone.zone} className="p-6 border-l-4 border-italia-gold bg-italia-limestone/30">
                <h3 className="font-medium text-italia-text mb-2">{zone.zone}</h3>
                <div className="font-mono text-2xl text-italia-red mb-2">{zone.limit}</div>
                <p className="text-sm text-italia-text-muted">{zone.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContentSection title="Speeding Penalties" subtitle="Fines & Points" id="fines">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-italia-red">
                <th className="text-left py-4 pr-4 font-mono text-xs uppercase tracking-wider text-italia-text-muted">Excess Speed</th>
                <th className="text-left py-4 pr-4 font-mono text-xs uppercase tracking-wider text-italia-text-muted">Fine</th>
                <th className="text-left py-4 pr-4 font-mono text-xs uppercase tracking-wider text-italia-text-muted">Points</th>
                <th className="text-left py-4 font-mono text-xs uppercase tracking-wider text-italia-text-muted">Court?</th>
              </tr>
            </thead>
            <tbody>
              {finesTable.map((row, index) => (
                <tr key={row.excess} className={index % 2 === 0 ? 'bg-white' : 'bg-italia-limestone/50'}>
                  <td className="py-4 pr-4 text-italia-text">{row.excess}</td>
                  <td className="py-4 pr-4 font-mono text-italia-red font-medium">{row.fine}</td>
                  <td className="py-4 pr-4 font-mono">{row.points}</td>
                  <td className="py-4">{row.court}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-8 p-6 bg-italia-red/10 border-l-4 border-italia-red">
          <p className="text-italia-text">
            <strong>Important:</strong> Pay fixed charge notices within 28 days. After 28 days, the fine increases by 50%. 
            After 56 days, you may be summonsed to court.
          </p>
        </div>
      </ContentSection>

      <section className="py-16 bg-italia-green" data-testid="cameras-section">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="mb-12">
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-gold mb-4">
              Enforcement
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-white">
              Speed Cameras
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cameraInfo.map((camera) => (
              <div key={camera.name} className="p-6 bg-white/10 backdrop-blur rounded-lg">
                <Camera className="w-8 h-8 text-italia-gold mb-3" />
                <h3 className="font-serif text-xl font-medium text-white mb-2">
                  {camera.name}
                </h3>
                <p className="text-white/80 text-sm">{camera.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
