import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MapPin, 
  Shield, 
  Car, 
  Fuel, 
  ParkingCircle, 
  AlertTriangle,
  Compass,
  CreditCard,
  Gauge
} from 'lucide-react';
import { ContentSection } from '../components/shared/ContentSection';
import { FeatureCard } from '../components/shared/FeatureCard';

const HERO_IMAGE = "https://images.unsplash.com/photo-1761995912965-8f134652fc6e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODh8MHwxfHNlYXJjaHwxfHxJdGFsaWFuJTIwd2luZGluZyUyMHJvYWQlMjBUdXNjYW55JTIwaGlsbHN8ZW58MHx8fHwxNzcwODA2ODEyfDA&ixlib=rb-4.1.0&q=85";

const quickLinks = [
  {
    title: 'Автострады',
    description: 'Сеть скоростных дорог Autostrade и как ими пользоваться',
    icon: MapPin,
    link: '/autostrade',
    image: 'https://images.unsplash.com/photo-1640881470888-22adc6819e3a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHwyfHxBbWFsZmklMjBjb2FzdCUyMHJvYWQlMjBkcml2ZSUyMHNjZW5pY3xlbnwwfHx8fDE3NzA4MDY4MjB8MA&ixlib=rb-4.1.0&q=85',
  },
  {
    title: 'Платные дороги',
    description: 'Система оплаты Telepass, тарифы и способы оплаты',
    icon: CreditCard,
    link: '/toll-roads',
    image: 'https://images.unsplash.com/photo-1707342269520-03ca1dddc0fa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHxSb21lJTIwQ29sb3NzZXVtJTIwY2l0eSUyMHBhcmtpbmd8ZW58MHx8fHwxNzcwODA2ODM1fDA&ixlib=rb-4.1.0&q=85',
  },
  {
    title: 'Правила ПДД',
    description: 'Особенности итальянских правил дорожного движения',
    icon: Shield,
    link: '/traffic-rules',
    image: 'https://images.unsplash.com/photo-1764709981173-7b8a7f149ee1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHw0fHxJdGFseSUyMHJvYWQlMjBzaWduJTIwdHJhZmZpYyUyMHZpbnRhZ2V8ZW58MHx8fHwxNzcwODA2ODI2fDA&ixlib=rb-4.1.0&q=85',
  },
  {
    title: 'Живописные маршруты',
    description: 'Самые красивые дороги Италии для незабываемых поездок',
    icon: Compass,
    link: '/scenic-routes',
    image: 'https://images.unsplash.com/photo-1648116119723-921f2e316e86?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHwzfHxBbWFsZmklMjBjb2FzdCUyMHJvYWQlMjBkcml2ZSUyMHNjZW5pY3xlbnwwfHx8fDE3NzA4MDY4MjB8MA&ixlib=rb-4.1.0&q=85',
  },
  {
    title: 'Аренда автомобиля',
    description: 'Как арендовать машину и что нужно знать',
    icon: Car,
    link: '/car-rental',
    image: 'https://images.unsplash.com/photo-1767304082222-71b90060d2f1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHw0fHx2aW50YWdlJTIwRmlhdCUyMGNhciUyMEl0YWx5JTIwc3RyZWV0fGVufDB8fHx8MTc3MDgwNjgzMHww&ixlib=rb-4.1.0&q=85',
  },
  {
    title: 'Заправки и сервисы',
    description: 'Информация о заправках, ценах на топливо и услугах',
    icon: Fuel,
    link: '/gas-stations',
    image: 'https://images.unsplash.com/photo-1760681557274-243f7fad99eb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODh8MHwxfHNlYXJjaHwzfHxJdGFsaWFuJTIwd2luZGluZyUyMHJvYWQlMjBUdXNjYW55JTIwaGlsbHN8ZW58MHx8fHwxNzcwODA2ODEyfDA&ixlib=rb-4.1.0&q=85',
  },
];

const additionalLinks = [
  { title: 'Дорожные знаки', description: 'Итальянские знаки и их значения', icon: AlertTriangle, link: '/road-signs' },
  { title: 'Скоростные режимы', description: 'Ограничения скорости на разных дорогах', icon: Gauge, link: '/speed-limits' },
  { title: 'Парковки и ZTL', description: 'Зоны ограниченного движения в городах', icon: ParkingCircle, link: '/parking' },
];

export const HomePage = () => {
  return (
    <div data-testid="home-page">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] max-h-[900px] overflow-hidden" data-testid="hero-section">
        <div className="absolute inset-0">
          <img 
            src={HERO_IMAGE}
            alt="Живописная дорога в Тоскане"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        <div className="relative h-full container mx-auto px-4 md:px-8 max-w-7xl flex flex-col justify-center">
          <div className="max-w-3xl opacity-0 animate-fade-in-up">
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-gold mb-6">
              Путеводитель по дорогам Италии
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium text-white leading-[1.1] mb-6">
              Strade d'Italia
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-10 max-w-2xl">
              Всё, что нужно знать для комфортного автопутешествия 
              по солнечной Италии — от правил до живописных маршрутов.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/autostrade"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-italia-green font-medium rounded-full hover:bg-italia-limestone transition-all btn-italia"
                data-testid="hero-cta-primary"
              >
                Начать изучение
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/scenic-routes"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-medium rounded-full hover:bg-white/10 transition-all"
                data-testid="hero-cta-secondary"
              >
                Живописные маршруты
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full" />
          </div>
        </div>
      </section>

      {/* Quick Links - Bento Grid */}
      <ContentSection 
        title="Всё о дорогах Италии"
        subtitle="Разделы"
        id="sections"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {quickLinks.map((item, index) => (
            <div key={item.link} className="bento-item">
              <FeatureCard
                title={item.title}
                description={item.description}
                image={item.image}
                icon={item.icon}
                link={item.link}
                size={index === 0 || index === 3 ? 'medium' : 'medium'}
              />
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Additional Links */}
      <section className="py-16 bg-white" data-testid="additional-section">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalLinks.map((item) => (
              <Link 
                key={item.link}
                to={item.link}
                className="group flex items-center gap-4 p-6 border border-italia-border hover:border-italia-green transition-colors"
                data-testid={`link-${item.link.slice(1)}`}
              >
                <div className="w-12 h-12 bg-italia-green/10 rounded-sm flex items-center justify-center group-hover:bg-italia-green transition-colors">
                  <item.icon className="w-6 h-6 text-italia-green group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-medium text-italia-text group-hover:text-italia-green transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-italia-text-muted">{item.description}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-italia-text-muted group-hover:text-italia-green group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-italia-green" data-testid="cta-section">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
          <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-gold mb-4">
            Планируете поездку?
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-6 max-w-3xl mx-auto">
            Полезные советы для вашего путешествия
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Собрали самые важные рекомендации от опытных путешественников 
            по итальянским дорогам.
          </p>
          <Link 
            to="/tips"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-italia-green font-medium rounded-full hover:bg-italia-limestone transition-all btn-italia"
            data-testid="cta-tips-link"
          >
            Читать советы
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};
