import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Shield, Fuel, Car, AlertTriangle, Compass } from 'lucide-react';
import { useLanguage } from '../i18n';

const HERO_IMAGE = "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxJcmVsYW5kJTIwcm9hZCUyMGdyZWVuJTIwaGlsbHN8ZW58MHx8fHwxNzcwODA2ODEyfDA&ixlib=rb-4.1.0&q=85";

const features = [
  { icon: Car, key: 'motorways', path: '/motorways', color: 'text-italia-green' },
  { icon: MapPin, key: 'tollRoads', path: '/toll-roads', color: 'text-italia-red' },
  { icon: Shield, key: 'trafficRules', path: '/traffic-rules', color: 'text-italia-green' },
  { icon: Compass, key: 'scenicRoutes', path: '/scenic-routes', color: 'text-italia-gold' },
  { icon: Fuel, key: 'gasStations', path: '/petrol-stations', color: 'text-italia-red' },
  { icon: AlertTriangle, key: 'emergency', path: '/emergency', color: 'text-italia-gold' },
];

export const HomePage = () => {
  const { t } = useLanguage();

  return (
    <div data-testid="home-page">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center" data-testid="hero-section">
        <div className="absolute inset-0">
          <img 
            src={HERO_IMAGE}
            alt="Irish countryside road"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="max-w-2xl">
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-gold mb-4">
              {t('home.subtitle')}
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-medium text-white mb-6 leading-tight">
              {t('home.title')}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              {t('home.description')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/motorways"
                className="inline-flex items-center gap-2 px-8 py-4 bg-italia-green text-white font-medium rounded-full hover:bg-italia-green-dark transition-all btn-italia"
                data-testid="cta-button"
              >
                {t('home.cta')}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/scenic-routes"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur text-white font-medium rounded-full hover:bg-white/20 transition-all border border-white/30"
                data-testid="secondary-cta"
              >
                {t('home.scenicCta')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-italia-limestone" data-testid="features-section">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-green mb-4">
              {t('home.featuresSubtitle')}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-italia-text">
              {t('home.featuresTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Link
                key={feature.key}
                to={feature.path}
                className="group p-8 bg-white border border-italia-border hover:border-italia-green transition-all duration-300"
                data-testid={`feature-${feature.key}`}
              >
                <feature.icon className={`w-10 h-10 ${feature.color} mb-6`} />
                <h3 className="font-serif text-xl font-medium text-italia-text mb-3 group-hover:text-italia-green transition-colors">
                  {t(`nav.${feature.key === 'motorways' ? 'motorways' : feature.key === 'tollRoads' ? 'tollRoads' : feature.key === 'trafficRules' ? 'trafficRules' : feature.key === 'scenicRoutes' ? 'scenicRoutes' : feature.key === 'gasStations' ? 'gasStations' : 'emergency'}`)}
                </h3>
                <p className="text-italia-text-muted leading-relaxed">
                  {t(`home.${feature.key}Desc`)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-16 bg-italia-green" data-testid="info-banner">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="font-serif text-2xl md:text-3xl font-medium text-white mb-2">
                Drive on the Left!
              </h3>
              <p className="text-white/80">
                Remember: Ireland drives on the left side of the road. Take extra care at junctions and roundabouts.
              </p>
            </div>
            <Link 
              to="/traffic-rules"
              className="px-8 py-4 bg-white text-italia-green font-medium rounded-full hover:bg-italia-limestone transition-colors"
            >
              Learn the Rules
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
