import { Fuel, Clock, Euro, CreditCard, Coffee } from 'lucide-react';
import { PageHero } from '../components/shared/PageHero';
import { ContentSection } from '../components/shared/ContentSection';
import { InfoCard } from '../components/shared/InfoCard';

const HERO_IMAGE = "https://images.unsplash.com/photo-1760681557274-243f7fad99eb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODh8MHwxfHNlYXJjaHwzfHxJdGFsaWFuJTIwd2luZGluZyUyMHJvYWQlMjBUdXNjYW55JTIwaGlsbHN8ZW58MHx8fHwxNzcwODA2ODEyfDA&ixlib=rb-4.1.0&q=85";

const fuelTypes = [
  { name: 'Benzina', translation: 'Бензин', note: 'Обычно 95-й (Senza piombo) или 98-й' },
  { name: 'Diesel / Gasolio', translation: 'Дизель', note: 'Самое распространённое топливо' },
  { name: 'GPL', translation: 'Газ', note: 'Сжиженный газ, дешевле бензина' },
  { name: 'Metano', translation: 'Метан', note: 'Природный газ, экологичный вариант' },
];

const stationTypes = [
  {
    name: 'Servito',
    description: 'Заправка с обслуживанием',
    details: 'Сотрудник заправляет машину. Дороже на 10-20 центов за литр.',
    icon: '👤',
  },
  {
    name: 'Self-service / Fai da te',
    description: 'Самообслуживание',
    details: 'Вы заправляетесь сами. Дешевле, работает круглосуточно.',
    icon: '🔧',
  },
];

const majorChains = [
  { name: 'Eni', color: 'Жёлтый с чёрной собакой', note: 'Крупнейшая итальянская сеть' },
  { name: 'IP (Italiana Petroli)', color: 'Синий и жёлтый', note: 'Много станций на юге' },
  { name: 'Q8', color: 'Зелёный и красный', note: 'Часто дешевле конкурентов' },
  { name: 'Tamoil', color: 'Красный', note: 'Сеть на севере Италии' },
  { name: 'Agip', color: 'Жёлтый (часть Eni)', note: 'Историческая марка' },
];

export const GasStationsPage = () => {
  return (
    <div data-testid="gas-stations-page">
      <PageHero 
        title="Заправки и сервисы"
        subtitle="Информация о заправочных станциях, типах топлива и сервисных зонах на итальянских дорогах."
        image={HERO_IMAGE}
      />

      <ContentSection title="Типы топлива" subtitle="Горючее" id="fuel-types">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fuelTypes.map((fuel) => (
            <div 
              key={fuel.name}
              className="bg-white border border-italia-border p-6 hover:border-italia-green transition-colors"
            >
              <h3 className="font-serif text-xl font-medium text-italia-text mb-1">
                {fuel.name}
              </h3>
              <p className="text-italia-green font-medium mb-3">{fuel.translation}</p>
              <p className="text-sm text-italia-text-muted">{fuel.note}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <InfoCard icon={Euro} title="Цены на топливо (ориентировочно)">
            <ul className="space-y-2 mt-3">
              <li>Бензин (Benzina): 1.70-1.90 €/л</li>
              <li>Дизель (Gasolio): 1.60-1.80 €/л</li>
              <li>Газ (GPL): 0.70-0.90 €/л</li>
            </ul>
            <p className="mt-3 text-sm">Цены на автострадах на 10-15% выше</p>
          </InfoCard>
          <InfoCard icon={Clock} title="Режим работы" variant="gold">
            <p className="mt-3">
              В городах: обычно 7:00-19:30, перерыв 12:30-15:30. 
              Воскресенье — часто закрыто.
            </p>
            <p className="mt-3 text-sm">
              На автострадах: круглосуточно (self-service)
            </p>
          </InfoCard>
        </div>
      </ContentSection>

      <section className="py-16 bg-white" data-testid="station-types">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="mb-12">
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-green mb-4">
              Типы заправок
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-italia-text">
              Self-service vs Servito
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stationTypes.map((type) => (
              <div 
                key={type.name}
                className="p-8 border border-italia-border"
              >
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="font-serif text-2xl font-medium text-italia-text mb-2">
                  {type.name}
                </h3>
                <p className="text-italia-green font-medium mb-4">{type.description}</p>
                <p className="text-italia-text-muted">{type.details}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-italia-red/10 border-l-4 border-italia-red">
            <p className="text-italia-text">
              <strong>Внимание:</strong> На self-service автоматы принимают наличные (купюры 5-50€) 
              и карты. Некоторые старые автоматы могут не принимать иностранные карты.
            </p>
          </div>
        </div>
      </section>

      <ContentSection title="Сети заправок" subtitle="Компании" id="chains">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {majorChains.map((chain) => (
            <div 
              key={chain.name}
              className="p-6 bg-white border border-italia-border hover:border-italia-green transition-colors"
            >
              <h3 className="font-serif text-xl font-medium text-italia-text mb-2">
                {chain.name}
              </h3>
              <p className="text-sm text-italia-text-muted mb-2">{chain.color}</p>
              <p className="text-sm text-italia-text-muted">{chain.note}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <section className="py-16 bg-italia-green" data-testid="autogrill-section">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-gold mb-4">
                Area di Servizio
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-6">
                Сервисные зоны на автострадах
              </h2>
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                Area di Servizio — это комплексы на автострадах с заправкой, 
                магазином, кафе и туалетами. Самая известная сеть — Autogrill.
              </p>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-center gap-3">
                  <Fuel className="w-5 h-5 text-italia-gold" />
                  <span>Заправка (круглосуточно)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Coffee className="w-5 h-5 text-italia-gold" />
                  <span>Кафе и рестораны</span>
                </li>
                <li className="flex items-center gap-3">
                  <CreditCard className="w-5 h-5 text-italia-gold" />
                  <span>Магазины и банкоматы</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur p-8 rounded-sm">
              <h3 className="font-serif text-2xl font-medium text-white mb-4">
                Совет по Autogrill
              </h3>
              <p className="text-white/90 leading-relaxed">
                Кофе в Autogrill хороший и недорогой (1-1.50€). А вот еда 
                часто переоценена — лучше съехать с автострады в ближайший городок.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
