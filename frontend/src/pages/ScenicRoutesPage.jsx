import { Compass, Clock, MapPin, Camera } from 'lucide-react';
import { PageHero } from '../components/shared/PageHero';
import { ContentSection } from '../components/shared/ContentSection';
import { useLanguage } from '../i18n';

const HERO_IMAGE = "https://images.unsplash.com/photo-1648116119723-921f2e316e86?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHwzfHxBbWFsZmklMjBjb2FzdCUyMHJvYWQlMjBkcml2ZSUyMHNjZW5pY3xlbnwwfHx8fDE3NzA4MDY4MjB8MA&ixlib=rb-4.1.0&q=85";

const scenicRoutesIT = [
  {
    name: 'Costiera Amalfitana',
    region: 'Campania',
    distance: '50 km',
    duration: '2-4 ore',
    description: 'La leggendaria strada SS163 lungo la costa rocciosa da Sorrento a Salerno. Una delle strade costiere più belle del mondo.',
    highlights: ['Positano', 'Amalfi', 'Ravello', 'Belvedere'],
    image: 'https://images.unsplash.com/photo-1592294993887-1e52918b107e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHw0fHxBbWFsZmklMjBjb2FzdCUyMHJvYWQlMjBkcml2ZSUyMHNjZW5pY3xlbnwwfHx8fDE3NzA4MDY4MjB8MA&ixlib=rb-4.1.0&q=85',
  },
  {
    name: 'Colline Toscane',
    region: 'Toscana',
    distance: '120 km',
    duration: '1 giorno',
    description: 'Percorso attraverso la Val d\'Orcia — colline con cipressi, vigneti e borghi medievali, simbolo dell\'Italia.',
    highlights: ['Siena', 'Montalcino', 'Pienza', 'Montepulciano'],
    image: 'https://images.unsplash.com/photo-1761995912965-8f134652fc6e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODh8MHwxfHNlYXJjaHwxfHxJdGFsaWFuJTIwd2luZGluZyUyMHJvYWQlMjBUdXNjYW55JTIwaGlsbHN8ZW58MHx8fHwxNzcwODA2ODEyfDA&ixlib=rb-4.1.0&q=85',
  },
  {
    name: 'Cinque Terre',
    region: 'Liguria',
    distance: '30 km',
    duration: '3-5 ore',
    description: 'Strada tortuosa sopra i cinque pittoreschi borghi sulla costa rocciosa del Mar Ligure.',
    highlights: ['Riomaggiore', 'Manarola', 'Vernazza', 'Monterosso'],
    image: 'https://images.unsplash.com/photo-1640881470888-22adc6819e3a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHwyfHxBbWFsZmklMjBjb2FzdCUyMHJvYWQlMjBkcml2ZSUyMHNjZW5pY3xlbnwwfHx8fDE3NzA4MDY4MjB8MA&ixlib=rb-4.1.0&q=85',
  },
  {
    name: 'Strada delle Dolomiti',
    region: 'Trentino',
    distance: '110 km',
    duration: '4-6 ore',
    description: 'Il grande percorso dolomitico SS48 attraverso passi montani con viste mozzafiato sulle vette alpine.',
    highlights: ['Passo Pordoi', 'Cortina d\'Ampezzo', 'Canazei', 'Lago di Carezza'],
    image: 'https://images.unsplash.com/photo-1760681557274-243f7fad99eb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODh8MHwxfHNlYXJjaHwzfHxJdGFsaWFuJTIwd2luZGluZyUyMHJvYWQlMjBUdXNjYW55JTIwaGlsbHN8ZW58MHx8fHwxNzcwODA2ODEyfDA&ixlib=rb-4.1.0&q=85',
  },
  {
    name: 'Sicilia: intorno all\'Etna',
    region: 'Sicilia',
    distance: '140 km',
    duration: '1 giorno',
    description: 'Percorso ad anello intorno al vulcano Etna attraverso vigneti, campi di lava e borghi pittoreschi.',
    highlights: ['Taormina', 'Nicolosi', 'Vigneti', 'Crateri Silvestri'],
    image: 'https://images.unsplash.com/photo-1764214184501-ac426e28366c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODh8MHwxfHNlYXJjaHw0fHxJdGFsaWFuJTIwd2luZGluZyUyMHJvYWQlMjBUdXNjYW55JTIwaGlsbHN8ZW58MHx8fHwxNzcwODA2ODEyfDA&ixlib=rb-4.1.0&q=85',
  },
  {
    name: 'Laghi del Nord Italia',
    region: 'Lombardia',
    distance: '200 km',
    duration: '1-2 giorni',
    description: 'Percorso lungo i laghi di Como, Maggiore e Garda — ville, giardini e paesaggi alpini.',
    highlights: ['Bellagio', 'Varenna', 'Stresa', 'Sirmione'],
    image: 'https://images.unsplash.com/photo-1438076783188-4bdaa16c21df?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODh8MHwxfHNlYXJjaHwyfHxJdGFsaWFuJTIwd2luZGluZyUyMHJvYWQlMjBUdXNjYW55JTIwaGlsbHN8ZW58MHx8fHwxNzcwODA2ODEyfDA&ixlib=rb-4.1.0&q=85',
  },
];

const scenicRoutesEN = [
  {
    name: 'Amalfi Coast',
    region: 'Campania',
    distance: '50 km',
    duration: '2-4 hours',
    description: 'The legendary SS163 road along the rocky coast from Sorrento to Salerno. One of the most beautiful coastal roads in the world.',
    highlights: ['Positano', 'Amalfi', 'Ravello', 'Viewpoints'],
    image: 'https://images.unsplash.com/photo-1592294993887-1e52918b107e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHw0fHxBbWFsZmklMjBjb2FzdCUyMHJvYWQlMjBkcml2ZSUyMHNjZW5pY3xlbnwwfHx8fDE3NzA4MDY4MjB8MA&ixlib=rb-4.1.0&q=85',
  },
  {
    name: 'Tuscan Hills',
    region: 'Tuscany',
    distance: '120 km',
    duration: '1 day',
    description: 'Route through Val d\'Orcia — hills with cypresses, vineyards and medieval towns, symbol of Italy.',
    highlights: ['Siena', 'Montalcino', 'Pienza', 'Montepulciano'],
    image: 'https://images.unsplash.com/photo-1761995912965-8f134652fc6e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODh8MHwxfHNlYXJjaHwxfHxJdGFsaWFuJTIwd2luZGluZyUyMHJvYWQlMjBUdXNjYW55JTIwaGlsbHN8ZW58MHx8fHwxNzcwODA2ODEyfDA&ixlib=rb-4.1.0&q=85',
  },
  {
    name: 'Cinque Terre',
    region: 'Liguria',
    distance: '30 km',
    duration: '3-5 hours',
    description: 'Winding road above five picturesque villages on the rocky Ligurian coast.',
    highlights: ['Riomaggiore', 'Manarola', 'Vernazza', 'Monterosso'],
    image: 'https://images.unsplash.com/photo-1640881470888-22adc6819e3a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHwyfHxBbWFsZmklMjBjb2FzdCUyMHJvYWQlMjBkcml2ZSUyMHNjZW5pY3xlbnwwfHx8fDE3NzA4MDY4MjB8MA&ixlib=rb-4.1.0&q=85',
  },
  {
    name: 'Dolomites Road',
    region: 'Trentino',
    distance: '110 km',
    duration: '4-6 hours',
    description: 'The great Dolomite route SS48 through mountain passes with breathtaking views of alpine peaks.',
    highlights: ['Pordoi Pass', 'Cortina d\'Ampezzo', 'Canazei', 'Lake Carezza'],
    image: 'https://images.unsplash.com/photo-1760681557274-243f7fad99eb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODh8MHwxfHNlYXJjaHwzfHxJdGFsaWFuJTIwd2luZGluZyUyMHJvYWQlMjBUdXNjYW55JTIwaGlsbHN8ZW58MHx8fHwxNzcwODA2ODEyfDA&ixlib=rb-4.1.0&q=85',
  },
  {
    name: 'Sicily: Around Etna',
    region: 'Sicily',
    distance: '140 km',
    duration: '1 day',
    description: 'Ring route around Mount Etna through vineyards, lava fields and picturesque towns.',
    highlights: ['Taormina', 'Nicolosi', 'Vineyards', 'Silvestri Craters'],
    image: 'https://images.unsplash.com/photo-1764214184501-ac426e28366c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODh8MHwxfHNlYXJjaHw0fHxJdGFsaWFuJTIwd2luZGluZyUyMHJvYWQlMjBUdXNjYW55JTIwaGlsbHN8ZW58MHx8fHwxNzcwODA2ODEyfDA&ixlib=rb-4.1.0&q=85',
  },
  {
    name: 'Northern Italy Lakes',
    region: 'Lombardy',
    distance: '200 km',
    duration: '1-2 days',
    description: 'Route along Lakes Como, Maggiore and Garda — villas, gardens and alpine landscapes.',
    highlights: ['Bellagio', 'Varenna', 'Stresa', 'Sirmione'],
    image: 'https://images.unsplash.com/photo-1438076783188-4bdaa16c21df?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODh8MHwxfHNlYXJjaHwyfHxJdGFsaWFuJTIwd2luZGluZyUyMHJvYWQlMjBUdXNjYW55JTIwaGlsbHN8ZW58MHx8fHwxNzcwODA2ODEyfDA&ixlib=rb-4.1.0&q=85',
  },
];

export const ScenicRoutesPage = () => {
  const { t, language } = useLanguage();
  const scenicRoutes = language === 'en' ? scenicRoutesEN : scenicRoutesIT;

  return (
    <div data-testid="scenic-routes-page">
      <PageHero 
        title={t('scenicRoutes.title')}
        subtitle={t('scenicRoutes.subtitle')}
        image={HERO_IMAGE}
      />

      <ContentSection 
        title={t('scenicRoutes.routesTitle')} 
        subtitle={t('scenicRoutes.routesSubtitle')}
        id="routes"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {scenicRoutes.map((route, index) => (
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
                    {t('scenicRoutes.mainPoints')}
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
                {t('scenicRoutes.planningTitle')}
              </h3>
              <p className="text-italia-text-muted">
                {t('scenicRoutes.planningText')}
              </p>
            </div>
            <div className="p-6 border-l-4 border-italia-gold">
              <Clock className="w-8 h-8 text-italia-gold mb-4" />
              <h3 className="font-serif text-xl font-medium text-italia-text mb-3">
                {t('scenicRoutes.timeTitle')}
              </h3>
              <p className="text-italia-text-muted">
                {t('scenicRoutes.timeText')}
              </p>
            </div>
            <div className="p-6 border-l-4 border-italia-red">
              <Camera className="w-8 h-8 text-italia-red mb-4" />
              <h3 className="font-serif text-xl font-medium text-italia-text mb-3">
                {t('scenicRoutes.photoTitle')}
              </h3>
              <p className="text-italia-text-muted">
                {t('scenicRoutes.photoText')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
