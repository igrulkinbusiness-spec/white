import { MapPin, Clock, Euro, Info } from 'lucide-react';
import { PageHero } from '../components/shared/PageHero';
import { ContentSection } from '../components/shared/ContentSection';
import { InfoCard } from '../components/shared/InfoCard';

const HERO_IMAGE = "https://images.unsplash.com/photo-1640881470888-22adc6819e3a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHwyfHxBbWFsZmklMjBjb2FzdCUyMHJvYWQlMjBkcml2ZSUyMHNjZW5pY3xlbnwwfHx8fDE3NzA4MDY4MjB8MA&ixlib=rb-4.1.0&q=85";

const mainAutostrade = [
  { name: 'A1 (Autostrada del Sole)', route: 'Милан — Неаполь', length: '759 км', description: 'Главная автомагистраль страны, соединяющая север и юг через Болонью, Флоренцию и Рим.' },
  { name: 'A4 (Serenissima)', route: 'Турин — Триест', length: '528 км', description: 'Пересекает северную Италию, проходя через Милан, Верону и Венецию.' },
  { name: 'A14 (Autostrada Adriatica)', route: 'Болонья — Таранто', length: '743 км', description: 'Адриатическая автострада вдоль восточного побережья.' },
  { name: 'A7', route: 'Милан — Генуя', length: '134 км', description: 'Связывает столицу Ломбардии с главным портом Лигурии.' },
  { name: 'A10 (Autostrada dei Fiori)', route: 'Генуя — Вентимилья', length: '158 км', description: 'Автострада цветов вдоль Лигурийского побережья к границе с Францией.' },
  { name: 'A3 (Autostrada del Mediterraneo)', route: 'Неаполь — Реджо-Калабрия', length: '443 км', description: 'Соединяет Неаполь с носком итальянского сапога.' },
];

export const AutostradePage = () => {
  return (
    <div data-testid="autostrade-page">
      <PageHero 
        title="Автострады Италии"
        subtitle="Сеть скоростных автомагистралей Autostrade протянулась на более чем 6 000 км, соединяя все крупные города страны."
        image={HERO_IMAGE}
      />

      <ContentSection title="Что такое Autostrade" subtitle="Обзор" id="overview">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          <div className="lg:col-span-7">
            <div className="prose prose-lg max-w-none text-italia-text-muted">
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                <strong className="text-italia-text">Autostrade</strong> — это сеть платных скоростных 
                автомагистралей Италии, одна из старейших и наиболее развитых в Европе. 
                Первая автострада была открыта ещё в 1924 году между Миланом и Варезе.
              </p>
              <p className="leading-relaxed mb-6">
                Итальянские автострады обозначаются буквой «A» и номером (например, A1, A4). 
                Они характеризуются высоким качеством покрытия, наличием зон отдыха (Area di Servizio) 
                и регулярными заправочными станциями.
              </p>
              <p className="leading-relaxed">
                Максимальная скорость на автострадах — 130 км/ч (110 км/ч в дождь). 
                Большинство автострад имеют по 2-3 полосы в каждом направлении.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 space-y-6">
            <InfoCard icon={MapPin} title="Протяжённость">
              Общая длина сети автострад превышает 6 000 км
            </InfoCard>
            <InfoCard icon={Clock} title="Зоны отдыха">
              Area di Servizio располагаются каждые 30-50 км
            </InfoCard>
            <InfoCard icon={Euro} title="Стоимость">
              В среднем 7-10 центов за километр
            </InfoCard>
          </div>
        </div>
      </ContentSection>

      <section className="py-16 bg-white" data-testid="autostrade-list">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="mb-12">
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-green mb-4">
              Маршруты
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-italia-text">
              Основные автострады
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mainAutostrade.map((autostrada) => (
              <div 
                key={autostrada.name}
                className="border border-italia-border p-6 md:p-8 hover:border-italia-green transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-serif text-xl font-medium text-italia-text">
                    {autostrada.name}
                  </h3>
                  <span className="font-mono text-sm text-italia-green">
                    {autostrada.length}
                  </span>
                </div>
                <p className="font-medium text-italia-text mb-2">{autostrada.route}</p>
                <p className="text-sm text-italia-text-muted leading-relaxed">
                  {autostrada.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContentSection title="Советы по использованию" subtitle="Рекомендации" id="tips">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <InfoCard icon={Info} title="Въезд на автостраду">
            При въезде возьмите билет из автомата (зелёная полоса) или используйте 
            Telepass (жёлтая полоса).
          </InfoCard>
          <InfoCard icon={Info} title="Зоны отдыха" variant="gold">
            Area di Servizio предлагают заправку, кафе, туалеты и магазины. 
            Autogrill — популярная сеть ресторанов на автострадах.
          </InfoCard>
          <InfoCard icon={Info} title="Оплата на выезде">
            При выезде оплатите проезд наличными, картой или через Telepass. 
            Сохраняйте чек — он может потребоваться.
          </InfoCard>
        </div>
      </ContentSection>
    </div>
  );
};
