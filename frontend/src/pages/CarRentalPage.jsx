import { Car, CreditCard, FileText, AlertTriangle, Check } from 'lucide-react';
import { PageHero } from '../components/shared/PageHero';
import { ContentSection } from '../components/shared/ContentSection';
import { InfoCard } from '../components/shared/InfoCard';

const HERO_IMAGE = "https://images.unsplash.com/photo-1767304082222-71b90060d2f1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHw0fHx2aW50YWdlJTIwRmlhdCUyMGNhciUyMEl0YWx5JTIwc3RyZWV0fGVufDB8fHx8MTc3MDgwNjgzMHww&ixlib=rb-4.1.0&q=85";

const rentalCompanies = [
  { name: 'Hertz', type: 'Международная', note: 'Широкая сеть, премиум сервис' },
  { name: 'Europcar', type: 'Международная', note: 'Хороший выбор автомобилей' },
  { name: 'SIXT', type: 'Международная', note: 'Премиум и спорткары' },
  { name: 'Locauto', type: 'Итальянская', note: 'Выгодные цены' },
  { name: 'Maggiore', type: 'Итальянская', note: 'Много офисов по стране' },
  { name: 'Sicily by Car', type: 'Итальянская', note: 'Специализация на юге' },
];

const requirements = [
  { title: 'Возраст', value: 'От 21 года (для некоторых категорий от 25)' },
  { title: 'Стаж вождения', value: 'Минимум 1 год' },
  { title: 'Права', value: 'Национальные права + МВУ или нотариальный перевод' },
  { title: 'Кредитная карта', value: 'На имя водителя для залога' },
];

const insuranceTypes = [
  {
    name: 'CDW (Collision Damage Waiver)',
    description: 'Страхование от повреждений автомобиля. Обычно включена в базовую цену с франшизой.',
  },
  {
    name: 'TP (Theft Protection)',
    description: 'Защита от угона. Также обычно включена с франшизой.',
  },
  {
    name: 'SCDW (Super CDW)',
    description: 'Полное покрытие без франшизы. Рекомендуется для спокойствия.',
  },
  {
    name: 'PAI (Personal Accident Insurance)',
    description: 'Страхование водителя и пассажиров от несчастных случаев.',
  },
];

export const CarRentalPage = () => {
  return (
    <div data-testid="car-rental-page">
      <PageHero 
        title="Аренда автомобиля"
        subtitle="Всё о прокате машины в Италии: требования, компании, страховки и советы."
        image={HERO_IMAGE}
      />

      <ContentSection title="Требования для аренды" subtitle="Документы" id="requirements">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            {requirements.map((req) => (
              <div key={req.title} className="flex items-start gap-4 p-4 bg-white border border-italia-border">
                <Check className="w-5 h-5 text-italia-green mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-italia-text">{req.title}</h4>
                  <p className="text-sm text-italia-text-muted">{req.value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-6">
            <InfoCard icon={FileText} title="Международные права (МВУ)">
              МВУ — это перевод ваших национальных прав. Получить можно в ГИБДД. 
              Действует только вместе с национальными правами.
            </InfoCard>
            <InfoCard icon={CreditCard} title="Залог на карте" variant="warning">
              Сумма залога блокируется на карте (500-2000€). Используйте кредитную карту — 
              с дебетовой деньги могут быть списаны.
            </InfoCard>
          </div>
        </div>
      </ContentSection>

      <section className="py-16 bg-white" data-testid="companies-section">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="mb-12">
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-green mb-4">
              Компании
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-italia-text">
              Где арендовать
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rentalCompanies.map((company) => (
              <div 
                key={company.name}
                className="p-6 border border-italia-border hover:border-italia-green transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-serif text-xl font-medium text-italia-text">
                    {company.name}
                  </h3>
                  <span className="text-xs font-mono text-italia-text-muted uppercase">
                    {company.type}
                  </span>
                </div>
                <p className="text-sm text-italia-text-muted">{company.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-italia-gold/10 border-l-4 border-italia-gold">
            <p className="text-italia-text">
              <strong>Совет:</strong> Бронируйте через агрегаторы (Rentalcars, Discovercars) 
              для сравнения цен, но внимательно читайте условия страховки.
            </p>
          </div>
        </div>
      </section>

      <ContentSection title="Страховки" subtitle="Защита" id="insurance">
        <p className="text-lg text-italia-text-muted mb-8 max-w-3xl">
          Понимание типов страховки поможет избежать неприятных сюрпризов 
          при получении и возврате автомобиля.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {insuranceTypes.map((insurance) => (
            <div 
              key={insurance.name}
              className="p-6 bg-white border border-italia-border"
            >
              <h3 className="font-serif text-lg font-medium text-italia-text mb-2">
                {insurance.name}
              </h3>
              <p className="text-italia-text-muted">{insurance.description}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <section className="py-16 bg-italia-green" data-testid="tips-section">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-gold mb-4">
                При получении
              </span>
              <h2 className="font-serif text-3xl font-medium text-white mb-6">
                Осмотр автомобиля
              </h2>
              <ul className="space-y-3 text-white/90">
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-italia-gold flex-shrink-0" />
                  <span>Сфотографируйте все царапины и вмятины</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-italia-gold flex-shrink-0" />
                  <span>Проверьте уровень топлива</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-italia-gold flex-shrink-0" />
                  <span>Убедитесь, что все повреждения отмечены в акте</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-italia-gold flex-shrink-0" />
                  <span>Проверьте наличие запаски и домкрата</span>
                </li>
              </ul>
            </div>
            <div>
              <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-gold mb-4">
                При возврате
              </span>
              <h2 className="font-serif text-3xl font-medium text-white mb-6">
                Сдача автомобиля
              </h2>
              <ul className="space-y-3 text-white/90">
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-italia-gold flex-shrink-0" />
                  <span>Верните с тем же уровнем топлива</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-italia-gold flex-shrink-0" />
                  <span>Сдавайте в рабочие часы офиса</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-italia-gold flex-shrink-0" />
                  <span>Получите подтверждение возврата</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-italia-gold flex-shrink-0" />
                  <span>Сохраняйте все чеки и документы</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
