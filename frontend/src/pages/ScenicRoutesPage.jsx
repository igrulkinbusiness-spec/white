import { Compass, Clock, MapPin, Camera, Mountain } from 'lucide-react';
import { PageHero } from '../components/shared/PageHero';
import { ContentSection } from '../components/shared/ContentSection';
import { useLanguage } from '../i18n';

const HERO_IMAGE = "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxXaWxkJTIwQXRsYW50aWMlMjBXYXklMjBJcmVsYW5kfGVufDB8fHx8MTc3MDgwNjgxMnww&ixlib=rb-4.1.0&q=85";

const scenicRoutes = [
  {
    name: 'Wild Atlantic Way',
    region: 'West Coast',
    distance: '2,500 km',
    duration: '2-3 weeks',
    description: 'The world\'s longest defined coastal driving route, stretching from Donegal to Cork along Ireland\'s rugged Atlantic coast.',
    highlights: ['Cliffs of Moher', 'Connemara', 'Ring of Kerry', 'Dingle Peninsula', 'Slieve League'],
    image: 'https://images.unsplash.com/photo-1564959130747-897a8e5283c3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxDbGlmZnMlMjBvZiUyME1vaGVyJTIwSXJlbGFuZHxlbnwwfHx8fDE3NzA4MDY4MTJ8MA&ixlib=rb-4.1.0&q=85',
  },
  {
    name: 'Ring of Kerry',
    region: 'County Kerry',
    distance: '179 km',
    duration: '1-2 days',
    description: 'Ireland\'s most famous scenic drive, circling the Iveragh Peninsula with stunning mountain and coastal views.',
    highlights: ['Killarney', 'Ladies View', 'Moll\'s Gap', 'Skellig Ring', 'Sneem'],
    image: 'https://images.unsplash.com/photo-1602088113235-229c19758e9f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxSaW5nJTIwb2YlMjBLZXJyeSUyMElyZWxhbmR8ZW58MHx8fHwxNzcwODA2ODEyfDA&ixlib=rb-4.1.0&q=85',
  },
  {
    name: 'Causeway Coastal Route',
    region: 'Northern Ireland',
    distance: '195 km',
    duration: '1-2 days',
    description: 'From Belfast to Derry along the stunning Antrim coast, including the famous Giant\'s Causeway.',
    highlights: ['Giant\'s Causeway', 'Carrick-a-Rede Bridge', 'Dark Hedges', 'Dunluce Castle', 'Bushmills'],
    image: 'https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxHaWFudHMlMjBDYXVzZXdheSUyMElyZWxhbmR8ZW58MHx8fHwxNzcwODA2ODEyfDA&ixlib=rb-4.1.0&q=85',
  },
  {
    name: 'Dingle Peninsula',
    region: 'County Kerry',
    distance: '150 km',
    duration: '1 day',
    description: 'A quieter alternative to the Ring of Kerry, with dramatic scenery and rich Gaelic culture.',
    highlights: ['Slea Head', 'Inch Beach', 'Dingle Town', 'Beehive Huts', 'Blasket Islands View'],
    image: 'https://images.unsplash.com/photo-1590678873812-1c9731e6b3ea?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxEaW5nbGUlMjBQZW5pbnN1bGElMjBJcmVsYW5kfGVufDB8fHx8MTc3MDgwNjgxMnww&ixlib=rb-4.1.0&q=85',
  },
  {
    name: 'Connemara Loop',
    region: 'County Galway',
    distance: '140 km',
    duration: '1 day',
    description: 'Wild bog lands, mountains, and beautiful lakes in Ireland\'s most untamed landscape.',
    highlights: ['Kylemore Abbey', 'Twelve Bens', 'Sky Road', 'Clifden', 'Dog\'s Bay'],
    image: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxDb25uZW1hcmElMjBJcmVsYW5kfGVufDB8fHx8MTc3MDgwNjgxMnww&ixlib=rb-4.1.0&q=85',
  },
  {
    name: 'Ring of Beara',
    region: 'Cork/Kerry',
    distance: '140 km',
    duration: '1 day',
    description: 'Less crowded than Kerry, this rugged peninsula offers authentic Irish coastal scenery.',
    highlights: ['Healy Pass', 'Dursey Island Cable Car', 'Allihies', 'Garnish Island', 'Glengarriff'],
    image: 'https://images.unsplash.com/photo-1606046604972-77cc76aee944?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxCZWFyYSUyMFBlbmluc3VsYSUyMElyZWxhbmR8ZW58MHx8fHwxNzcwODA2ODEyfDA&ixlib=rb-4.1.0&q=85',
  },
];

export const ScenicRoutesPage = () => {
  const { t } = useLanguage();

  return (
    <div data-testid="scenic-routes-page">
      <PageHero 
        title="Scenic Routes"
        subtitle="Ireland offers some of Europe's most spectacular driving routes, from rugged Atlantic coastlines to rolling green hills."
        image={HERO_IMAGE}
      />

      <ContentSection title="Best Driving Routes" subtitle="Must-Drive Routes" id="routes">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {scenicRoutes.map((route) => (
            <div 
              key={route.name}
              className="bg-white border border-italia-border overflow-hidden group hover:border-italia-green transition-colors"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={route.image} 
                  alt={route.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-italia-green/10 text-italia-green text-xs font-mono uppercase tracking-wider">
                    {route.region}
                  </span>
                  <div className="flex items-center gap-4 text-sm text-italia-text-muted">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {route.distance}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {route.duration}
                    </span>
                  </div>
                </div>
                
                <h3 className="font-serif text-2xl font-medium text-italia-text mb-3 group-hover:text-italia-green transition-colors">
                  {route.name}
                </h3>
                <p className="text-italia-text-muted leading-relaxed mb-6">
                  {route.description}
                </p>
                
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-italia-text-muted mb-3">
                    Key Attractions
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {route.highlights.map((highlight) => (
                      <span 
                        key={highlight}
                        className="px-3 py-1 bg-italia-limestone text-italia-text text-sm"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      <section className="py-16 bg-white" data-testid="tips-section">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border-l-4 border-italia-green">
              <Compass className="w-8 h-8 text-italia-green mb-4" />
              <h3 className="font-serif text-xl font-medium text-italia-text mb-3">
                Plan Your Route
              </h3>
              <p className="text-italia-text-muted">
                Download offline maps - mobile signal can be patchy in rural areas. Roads are narrower than expected!
              </p>
            </div>
            <div className="p-6 border-l-4 border-italia-gold">
              <Clock className="w-8 h-8 text-italia-gold mb-4" />
              <h3 className="font-serif text-xl font-medium text-italia-text mb-3">
                Allow Extra Time
              </h3>
              <p className="text-italia-text-muted">
                Distances look short on maps, but narrow winding roads take longer. Factor in photo stops and Irish hospitality!
              </p>
            </div>
            <div className="p-6 border-l-4 border-italia-red">
              <Camera className="w-8 h-8 text-italia-red mb-4" />
              <h3 className="font-serif text-xl font-medium text-italia-text mb-3">
                Use Pull-Ins
              </h3>
              <p className="text-italia-text-muted">
                Use designated pull-in areas for photos. Never stop on narrow roads - find a safe spot first!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-italia-green" data-testid="weather-section">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <Mountain className="w-12 h-12 text-italia-gold mb-6" />
          <h2 className="font-serif text-3xl font-medium text-white mb-4">Irish Weather Warning</h2>
          <p className="text-white/90 text-lg max-w-3xl">
            Ireland's weather is famously changeable - you can experience "four seasons in one day". 
            Pack layers, waterproofs, and be prepared for mist, rain, and sudden sunshine. 
            The best driving conditions are usually May-September, but even then, expect some rain!
          </p>
        </div>
      </section>
    </div>
  );
};
