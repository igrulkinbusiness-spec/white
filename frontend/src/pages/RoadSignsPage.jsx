import { AlertTriangle, Octagon, CircleSlash, ArrowRight, Info } from 'lucide-react';
import { PageHero } from '../components/shared/PageHero';
import { ContentSection } from '../components/shared/ContentSection';

const HERO_IMAGE = "https://images.unsplash.com/photo-1764711274585-e895820ef034?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHwxfHxJdGFseSUyMHJvYWQlMjBzaWduJTIwdHJhZmZpYyUyMHZpbnRhZ2V8ZW58MHx8fHwxNzcwODA2ODI2fDA&ixlib=rb-4.1.0&q=85";

const signCategories = [
  {
    name: 'Запрещающие знаки',
    description: 'Круглые знаки с красной каймой',
    color: 'bg-italia-red/10 border-italia-red',
    signs: [
      { name: 'Divieto di accesso', meaning: 'Въезд запрещён', icon: '⛔' },
      { name: 'Divieto di transito', meaning: 'Движение запрещено', icon: '🚫' },
      { name: 'Divieto di sorpasso', meaning: 'Обгон запрещён', icon: '🚗❌🚗' },
      { name: 'Divieto di sosta', meaning: 'Остановка запрещена', icon: '🅿️❌' },
      { name: 'Limite di velocità', meaning: 'Ограничение скорости', icon: '50' },
      { name: 'Senso vietato', meaning: 'Одностороннее движение (въезд запрещён)', icon: '➖' },
    ],
  },
  {
    name: 'Предупреждающие знаки',
    description: 'Треугольные знаки с красной каймой',
    color: 'bg-italia-gold/10 border-italia-gold',
    signs: [
      { name: 'Curva pericolosa', meaning: 'Опасный поворот', icon: '↩️' },
      { name: 'Incrocio', meaning: 'Перекрёсток', icon: '✖️' },
      { name: 'Passaggio a livello', meaning: 'Железнодорожный переезд', icon: '🚂' },
      { name: 'Lavori in corso', meaning: 'Дорожные работы', icon: '🚧' },
      { name: 'Animali', meaning: 'Дикие животные', icon: '🦌' },
      { name: 'Strada sdrucciolevole', meaning: 'Скользкая дорога', icon: '💧' },
    ],
  },
  {
    name: 'Предписывающие знаки',
    description: 'Круглые синие знаки',
    color: 'bg-blue-100 border-blue-500',
    signs: [
      { name: 'Direzione obbligatoria', meaning: 'Обязательное направление', icon: '➡️' },
      { name: 'Rotatoria', meaning: 'Круговое движение', icon: '🔄' },
      { name: 'Pista ciclabile', meaning: 'Велосипедная дорожка', icon: '🚴' },
      { name: 'Percorso pedonale', meaning: 'Пешеходная зона', icon: '🚶' },
      { name: 'Catene obbligatorie', meaning: 'Цепи обязательны', icon: '⛓️' },
      { name: 'Velocità minima', meaning: 'Минимальная скорость', icon: '30↑' },
    ],
  },
  {
    name: 'Информационные знаки',
    description: 'Прямоугольные знаки разных цветов',
    color: 'bg-italia-green/10 border-italia-green',
    signs: [
      { name: 'Autostrada', meaning: 'Автострада (зелёный фон)', icon: '🛣️' },
      { name: 'Strada extraurbana', meaning: 'Загородная дорога (синий фон)', icon: '🛤️' },
      { name: 'Centro città', meaning: 'Центр города', icon: '🏛️' },
      { name: 'Parcheggio', meaning: 'Парковка', icon: '🅿️' },
      { name: 'Area di servizio', meaning: 'Зона обслуживания', icon: '⛽' },
      { name: 'Ospedale', meaning: 'Больница', icon: '🏥' },
    ],
  },
];

const importantSigns = [
  {
    name: 'ZTL (Zona Traffico Limitato)',
    description: 'Зона ограниченного движения. Въезд только с разрешением!',
    appearance: 'Белый круг с красной каймой или прямоугольная табличка',
    importance: 'critical',
  },
  {
    name: 'Zona disco orario',
    description: 'Зона с ограничением времени парковки. Нужен парковочный диск.',
    appearance: 'Синий знак парковки с надписью',
    importance: 'warning',
  },
  {
    name: 'Autovelox',
    description: 'Камера контроля скорости. Замедлитесь!',
    appearance: 'Информационная табличка перед камерой',
    importance: 'warning',
  },
  {
    name: 'Tutor',
    description: 'Система контроля средней скорости на участке.',
    appearance: 'Табличка «Controllo elettronico della velocità»',
    importance: 'critical',
  },
];

export const RoadSignsPage = () => {
  return (
    <div data-testid="road-signs-page">
      <PageHero 
        title="Дорожные знаки Италии"
        subtitle="Итальянские дорожные знаки похожи на европейские, но есть важные особенности."
        image={HERO_IMAGE}
      />

      {signCategories.map((category) => (
        <ContentSection 
          key={category.name}
          title={category.name}
          subtitle={category.description}
          id={category.name.toLowerCase().replace(/\s+/g, '-')}
          className={category === signCategories[1] || category === signCategories[3] ? 'bg-white' : ''}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {category.signs.map((sign) => (
              <div 
                key={sign.name}
                className={`p-4 border-l-4 bg-white ${category.color} text-center`}
              >
                <div className="text-3xl mb-3">{sign.icon}</div>
                <h4 className="font-medium text-italia-text text-sm mb-1">{sign.name}</h4>
                <p className="text-xs text-italia-text-muted">{sign.meaning}</p>
              </div>
            ))}
          </div>
        </ContentSection>
      ))}

      <section className="py-16 bg-italia-red/5" data-testid="important-signs">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="mb-12">
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-red mb-4">
              Обратите внимание
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-italia-text">
              Знаки, которые нельзя игнорировать
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {importantSigns.map((sign) => (
              <div 
                key={sign.name}
                className={`p-6 bg-white border-l-4 ${
                  sign.importance === 'critical' ? 'border-italia-red' : 'border-italia-gold'
                }`}
              >
                <div className="flex items-start gap-4">
                  <AlertTriangle className={`w-6 h-6 flex-shrink-0 ${
                    sign.importance === 'critical' ? 'text-italia-red' : 'text-italia-gold'
                  }`} />
                  <div>
                    <h3 className="font-serif text-xl font-medium text-italia-text mb-2">
                      {sign.name}
                    </h3>
                    <p className="text-italia-text-muted mb-2">{sign.description}</p>
                    <p className="text-sm text-italia-text-muted italic">{sign.appearance}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-italia-green" data-testid="color-guide">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="mb-12">
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-gold mb-4">
              Навигация
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-white">
              Цвета указателей направления
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-green-700 text-white">
              <h3 className="font-serif text-xl font-medium mb-3">Зелёный фон</h3>
              <p className="text-white/90">
                Автострады (Autostrade). Номер маршрута в зелёной рамке.
              </p>
            </div>
            <div className="p-6 bg-blue-600 text-white">
              <h3 className="font-serif text-xl font-medium mb-3">Синий фон</h3>
              <p className="text-white/90">
                Обычные дороги и городские направления. Основные указатели.
              </p>
            </div>
            <div className="p-6 bg-amber-700 text-white">
              <h3 className="font-serif text-xl font-medium mb-3">Коричневый фон</h3>
              <p className="text-white/90">
                Туристические достопримечательности, исторические места.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
