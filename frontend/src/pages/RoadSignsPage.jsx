import { AlertTriangle, Octagon, CircleSlash, ArrowRight, Info, AlertCircle } from 'lucide-react';
import { PageHero } from '../components/shared/PageHero';
import { ContentSection } from '../components/shared/ContentSection';
import { useLanguage } from '../i18n';

const HERO_IMAGE = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxyb2FkJTIwc2lnbiUyMElyZWxhbmR8ZW58MHx8fHwxNzcwODA2ODEyfDA&ixlib=rb-4.1.0&q=85";

const signCategories = [
  {
    name: 'Regulatory Signs',
    description: 'These signs give orders - you must obey them',
    color: 'bg-italia-red/10 border-italia-red',
    signs: [
      { name: 'STOP', meaning: 'Stop completely', icon: '🛑' },
      { name: 'YIELD', meaning: 'Give way to traffic', icon: '⚠️' },
      { name: 'No Entry', meaning: 'Cannot enter', icon: '⛔' },
      { name: 'Speed Limit', meaning: 'Maximum speed', icon: '50' },
      { name: 'No Parking', meaning: 'No parking anytime', icon: '🅿️❌' },
      { name: 'No Overtaking', meaning: 'Cannot pass', icon: '🚗❌' },
    ],
  },
  {
    name: 'Warning Signs',
    description: 'Diamond-shaped yellow signs warn of hazards ahead',
    color: 'bg-italia-gold/10 border-italia-gold',
    signs: [
      { name: 'Junction Ahead', meaning: 'Crossroads coming', icon: '✖️' },
      { name: 'Bend', meaning: 'Sharp curve', icon: '↩️' },
      { name: 'Roundabout', meaning: 'Roundabout ahead', icon: '🔄' },
      { name: 'Pedestrians', meaning: 'People crossing', icon: '🚶' },
      { name: 'Animals', meaning: 'Farm animals/deer', icon: '🐄' },
      { name: 'Road Works', meaning: 'Construction ahead', icon: '🚧' },
    ],
  },
  {
    name: 'Information Signs',
    description: 'Blue and green signs provide useful information',
    color: 'bg-blue-100 border-blue-500',
    signs: [
      { name: 'Motorway', meaning: 'Green background', icon: '🛣️' },
      { name: 'National Road', meaning: 'Green background', icon: 'N' },
      { name: 'Regional Road', meaning: 'White background', icon: 'R' },
      { name: 'Hospital', meaning: 'Medical facility', icon: '🏥' },
      { name: 'Parking', meaning: 'Parking available', icon: '🅿️' },
      { name: 'Tourist Info', meaning: 'Brown background', icon: 'ℹ️' },
    ],
  },
];

const irishTerms = [
  { irish: 'Géill Slí', english: 'Yield / Give Way' },
  { irish: 'Stad', english: 'Stop' },
  { irish: 'Go Mall', english: 'Slow' },
  { irish: 'Cosc ar Pháirceáil', english: 'No Parking' },
  { irish: 'Baile Átha Cliath', english: 'Dublin' },
  { irish: 'Corcaigh', english: 'Cork' },
  { irish: 'Gaillimh', english: 'Galway' },
  { irish: 'An Lár', english: 'City Centre' },
  { irish: 'Oifig an Phoist', english: 'Post Office' },
  { irish: 'Aerfort', english: 'Airport' },
  { irish: 'Bóthar Dúnta', english: 'Road Closed' },
  { irish: 'Gaeltacht', english: 'Irish-speaking area' },
];

const colorMeanings = [
  { color: 'Green', meaning: 'Motorways and National Roads', example: 'M50, N11' },
  { color: 'White', meaning: 'Regional and Local Roads', example: 'R115, L2034' },
  { color: 'Blue', meaning: 'Services, Information', example: 'Parking, hospitals' },
  { color: 'Brown', meaning: 'Tourist attractions', example: 'Historic sites, scenic routes' },
  { color: 'Yellow', meaning: 'Warning signs', example: 'Hazards, road conditions' },
  { color: 'Red', meaning: 'Prohibition, Stop', example: 'No entry, Stop signs' },
];

export const RoadSignsPage = () => {
  const { t } = useLanguage();

  return (
    <div data-testid="road-signs-page">
      <PageHero 
        title="Irish Road Signs"
        subtitle="Road signs in Ireland are bilingual - in English and Irish (Gaeilge). In Gaeltacht areas, signs may be in Irish only."
        image={HERO_IMAGE}
      />

      {signCategories.map((category) => (
        <ContentSection 
          key={category.name} 
          title={category.name} 
          subtitle={category.description}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {category.signs.map((sign) => (
              <div key={sign.name} className={`p-4 border-l-4 ${category.color}`}>
                <div className="text-3xl mb-2">{sign.icon}</div>
                <h4 className="font-medium text-italia-text text-sm mb-1">{sign.name}</h4>
                <p className="text-xs text-italia-text-muted">{sign.meaning}</p>
              </div>
            ))}
          </div>
        </ContentSection>
      ))}

      <section className="py-16 bg-white" data-testid="irish-terms">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-green mb-4">
                Gaeilge (Irish)
              </span>
              <h2 className="font-serif text-3xl font-medium text-italia-text mb-4">
                Irish Language on Signs
              </h2>
              <p className="text-italia-text-muted mb-8">
                All road signs in Ireland are bilingual. In Gaeltacht (Irish-speaking) areas, 
                some signs may be in Irish only. Here are common terms you'll see:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {irishTerms.map((term) => (
                  <div key={term.irish} className="py-2 border-b border-italia-border">
                    <span className="font-medium text-italia-green">{term.irish}</span>
                    <span className="text-italia-text-muted text-sm ml-2">= {term.english}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-green mb-4">
                Colour Coding
              </span>
              <h2 className="font-serif text-3xl font-medium text-italia-text mb-8">
                Sign Background Colors
              </h2>
              <div className="space-y-4">
                {colorMeanings.map((item) => (
                  <div key={item.color} className="flex items-center gap-4 py-3 border-b border-italia-border">
                    <span className="font-medium text-italia-text w-24">{item.color}</span>
                    <span className="text-italia-text-muted flex-1">{item.meaning}</span>
                    <span className="text-sm text-italia-green">{item.example}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-italia-green" data-testid="roundabouts">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <AlertCircle className="w-12 h-12 text-italia-gold mb-6" />
          <h2 className="font-serif text-3xl font-medium text-white mb-4">Roundabout Rules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-white/90 text-lg mb-4">
                Irish roundabouts go <strong>CLOCKWISE</strong> (opposite to mainland Europe). 
                This is one of the most confusing things for visitors!
              </p>
              <ul className="space-y-2 text-white/80">
                <li>• Approach in the left lane for left turns or going straight</li>
                <li>• Approach in the right lane for right turns</li>
                <li>• Give way to traffic already on the roundabout (from the right)</li>
                <li>• Signal left when exiting</li>
              </ul>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur rounded-lg">
              <h3 className="font-medium text-white mb-2">Common Mistake</h3>
              <p className="text-white/80">
                Many visitors look the wrong way when entering roundabouts. Traffic comes from your RIGHT, 
                not your left. Take extra care in your first few days!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
