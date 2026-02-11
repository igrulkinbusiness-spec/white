import { Compass, Clock, MapPin, Camera } from 'lucide-react';
import { PageHero } from '../components/shared/PageHero';
import { ContentSection } from '../components/shared/ContentSection';
import { FeatureCard } from '../components/shared/FeatureCard';

const HERO_IMAGE = "https://images.unsplash.com/photo-1648116119723-921f2e316e86?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHwzfHxBbWFsZmklMjBjb2FzdCUyMHJvYWQlMjBkcml2ZSUyMHNjZW5pY3xlbnwwfHx8fDE3NzA4MDY4MjB8MA&ixlib=rb-4.1.0&q=85";

const scenicRoutes = [
  {
    name: 'Амальфитанское побережье',
    region: 'Кампания',
    distance: '50 км',
    duration: '2-4 часа',
    description: 'Легендарная дорога SS163 вдоль скалистого побережья от Сорренто до Салерно. Одна из самых красивых прибрежных дорог мира.',
    highlights: ['Позитано', 'Амальфи', 'Равелло', 'Смотровые площадки'],
    image: 'https://images.unsplash.com/photo-1592294993887-1e52918b107e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHw0fHxBbWFsZmklMjBjb2FzdCUyMHJvYWQlMjBkcml2ZSUyMHNjZW5pY3xlbnwwfHx8fDE3NzA4MDY4MjB8MA&ixlib=rb-4.1.0&q=85',
  },
  {
    name: 'Тосканские холмы',
    region: 'Тоскана',
    distance: '120 км',
    duration: '1 день',
    description: 'Маршрут через Val d\'Orcia — холмы с кипарисами, виноградники и средневековые городки, ставшие символом Италии.',
    highlights: ['Сиена', 'Монтальчино', 'Пиенца', 'Монтепульчано'],
    image: 'https://images.unsplash.com/photo-1761995912965-8f134652fc6e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODh8MHwxfHNlYXJjaHwxfHxJdGFsaWFuJTIwd2luZGluZyUyMHJvYWQlMjBUdXNjYW55JTIwaGlsbHN8ZW58MHx8fHwxNzcwODA2ODEyfDA&ixlib=rb-4.1.0&q=85',
  },
  {
    name: 'Чинкве-Терре',
    region: 'Лигурия',
    distance: '30 км',
    duration: '3-5 часов',
    description: 'Извилистая дорога над пятью живописными деревнями на скалистом побережье Лигурийского моря.',
    highlights: ['Риомаджоре', 'Манарола', 'Вернацца', 'Монтероссо'],
    image: 'https://images.unsplash.com/photo-1640881470888-22adc6819e3a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHwyfHxBbWFsZmklMjBjb2FzdCUyMHJvYWQlMjBkcml2ZSUyMHNjZW5pY3xlbnwwfHx8fDE3NzA4MDY4MjB8MA&ixlib=rb-4.1.0&q=85',
  },
  {
    name: 'Strada delle Dolomiti',
    region: 'Трентино',
    distance: '110 км',
    duration: '4-6 часов',
    description: 'Великий доломитовый маршрут SS48 через горные перевалы с захватывающими видами на альпийские вершины.',
    highlights: ['Перевал Пордой', 'Кортина д\'Ампеццо', 'Канацей', 'Озеро Карецца'],
    image: 'https://images.unsplash.com/photo-1760681557274-243f7fad99eb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODh8MHwxfHNlYXJjaHwzfHxJdGFsaWFuJTIwd2luZGluZyUyMHJvYWQlMjBUdXNjYW55JTIwaGlsbHN8ZW58MHx8fHwxNzcwODA2ODEyfDA&ixlib=rb-4.1.0&q=85',
  },
  {
    name: 'Сицилия: вокруг Этны',
    region: 'Сицилия',
    distance: '140 км',
    duration: '1 день',
    description: 'Кольцевой маршрут вокруг вулкана Этна через виноградники, лавовые поля и живописные городки.',
    highlights: ['Таормина', 'Николози', 'Виноградники', 'Кратеры Сильвестри'],
    image: 'https://images.unsplash.com/photo-1764214184501-ac426e28366c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODh8MHwxfHNlYXJjaHw0fHxJdGFsaWFuJTIwd2luZGluZyUyMHJvYWQlMjBUdXNjYW55JTIwaGlsbHN8ZW58MHx8fHwxNzcwODA2ODEyfDA&ixlib=rb-4.1.0&q=85',
  },
  {
    name: 'Озёра северной Италии',
    region: 'Ломбардия',
    distance: '200 км',
    duration: '1-2 дня',
    description: 'Маршрут вдоль озёр Комо, Маджоре и Гарда — виллы, сады и альпийские пейзажи.',
    highlights: ['Белладжо', 'Варенна', 'Стреза', 'Сирмионе'],
    image: 'https://images.unsplash.com/photo-1438076783188-4bdaa16c21df?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODh8MHwxfHNlYXJjaHwyfHxJdGFsaWFuJTIwd2luZGluZyUyMHJvYWQlMjBUdXNjYW55JTIwaGlsbHN8ZW58MHx8fHwxNzcwODA2ODEyfDA&ixlib=rb-4.1.0&q=85',
  },
];

export const ScenicRoutesPage = () => {
  return (
    <div data-testid="scenic-routes-page">
      <PageHero 
        title="Живописные маршруты"
        subtitle="Самые красивые дороги Италии для незабываемых автопутешествий."
        image={HERO_IMAGE}
      />

      <ContentSection 
        title="Лучшие маршруты для автопутешествий" 
        subtitle="Избранное"
        id="routes"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {scenicRoutes.map((route, index) => (
            <div 
              key={route.name}
              className="bg-white border border-italia-border overflow-hidden group hover:border-italia-green transition-colors"
            >
              {/* Image */}
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={route.image} 
                  alt={route.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Content */}
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
                    Основные точки:
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
                Планирование
              </h3>
              <p className="text-italia-text-muted">
                Начинайте поездку рано утром, чтобы избежать пробок и успеть 
                сделать остановки на всех смотровых площадках.
              </p>
            </div>
            <div className="p-6 border-l-4 border-italia-gold">
              <Clock className="w-8 h-8 text-italia-gold mb-4" />
              <h3 className="font-serif text-xl font-medium text-italia-text mb-3">
                Время в пути
              </h3>
              <p className="text-italia-text-muted">
                Закладывайте вдвое больше времени, чем показывает навигатор — 
                вы захотите останавливаться для фото.
              </p>
            </div>
            <div className="p-6 border-l-4 border-italia-red">
              <Camera className="w-8 h-8 text-italia-red mb-4" />
              <h3 className="font-serif text-xl font-medium text-italia-text mb-3">
                Фотографии
              </h3>
              <p className="text-italia-text-muted">
                Лучшее время для фото — раннее утро и час перед закатом, 
                когда свет мягкий и тёплый.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
