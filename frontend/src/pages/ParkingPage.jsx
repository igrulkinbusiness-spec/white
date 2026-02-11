import { ParkingCircle, AlertTriangle, Clock, Euro, Camera } from 'lucide-react';
import { PageHero } from '../components/shared/PageHero';
import { ContentSection } from '../components/shared/ContentSection';
import { InfoCard } from '../components/shared/InfoCard';

const HERO_IMAGE = "https://images.unsplash.com/photo-1603668279554-631d92eaef9b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHw0fHxSb21lJTIwQ29sb3NzZXVtJTIwY2l0eSUyMHBhcmtpbmd8ZW58MHx8fHwxNzcwODA2ODM1fDA&ixlib=rb-4.1.0&q=85";

const parkingTypes = [
  {
    color: 'Белая разметка',
    meaning: 'Бесплатная парковка',
    note: 'Редко встречается в центре. Следите за знаками — может быть ограничение по времени.',
  },
  {
    color: 'Синяя разметка',
    meaning: 'Платная парковка',
    note: 'Оплата в паркоматах. Обычно 1-3€/час. В выходные часто бесплатно.',
  },
  {
    color: 'Жёлтая разметка',
    meaning: 'Только для резидентов или спецтранспорта',
    note: 'Парковка запрещена! Эвакуация + штраф.',
  },
  {
    color: 'Розовая разметка',
    meaning: 'Для беременных и родителей с детьми',
    note: 'Встречается у торговых центров и больниц.',
  },
];

const ztlCities = [
  { city: 'Рим', schedule: 'Пн-Пт: 6:30-18:00, Сб: 14:00-18:00', note: 'Множество зон, включая Трастевере' },
  { city: 'Флоренция', schedule: 'Ежедневно: 7:30-20:00', note: 'Очень строгий контроль' },
  { city: 'Милан', schedule: 'Пн-Пт: 7:30-19:30', note: 'Area C — платная зона в центре' },
  { city: 'Венеция', schedule: 'Постоянно', note: 'Автомобили запрещены на островах' },
  { city: 'Болонья', schedule: 'Ежедневно: 7:00-20:00', note: 'Строгий контроль камерами' },
  { city: 'Неаполь', schedule: 'Различные зоны', note: 'Контроль менее строгий' },
];

export const ParkingPage = () => {
  return (
    <div data-testid="parking-page">
      <PageHero 
        title="Парковки и зоны ZTL"
        subtitle="Как парковаться в Италии и не получить штраф. Всё о зонах ограниченного движения."
        image={HERO_IMAGE}
      />

      <ContentSection title="Цвета разметки" subtitle="Парковка" id="colors">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {parkingTypes.map((type) => (
            <div 
              key={type.color}
              className="p-6 bg-white border border-italia-border hover:border-italia-green transition-colors"
            >
              <h3 className="font-serif text-xl font-medium text-italia-text mb-2">
                {type.color}
              </h3>
              <p className="text-italia-green font-medium mb-3">{type.meaning}</p>
              <p className="text-sm text-italia-text-muted">{type.note}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <section className="py-16 bg-white" data-testid="ztl-section">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-red mb-4">
                Важно!
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-italia-text mb-6">
                Что такое ZTL
              </h2>
              <p className="text-lg text-italia-text-muted leading-relaxed mb-6">
                <strong className="text-italia-text">ZTL (Zona Traffico Limitato)</strong> — 
                это зоны ограниченного движения в исторических центрах итальянских городов. 
                Въезд без разрешения карается штрафом.
              </p>
              <InfoCard icon={Camera} variant="warning" title="Как работает контроль">
                На въездах установлены камеры, фиксирующие номера. 
                Штраф (80-100€ за каждый въезд) приходит по почте владельцу авто — 
                обычно это прокатная компания, которая переадресует его вам.
              </InfoCard>
            </div>
            <div className="lg:col-span-7">
              <h3 className="font-mono text-xs uppercase tracking-widest text-italia-text-muted mb-6">
                ZTL в крупных городах
              </h3>
              <div className="space-y-4">
                {ztlCities.map((item) => (
                  <div 
                    key={item.city}
                    className="flex items-start gap-4 p-4 border border-italia-border hover:border-italia-green transition-colors"
                  >
                    <div className="w-24 flex-shrink-0">
                      <span className="font-serif text-lg font-medium text-italia-text">
                        {item.city}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="font-mono text-sm text-italia-green mb-1">{item.schedule}</p>
                      <p className="text-sm text-italia-text-muted">{item.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContentSection title="Советы по парковке" subtitle="Рекомендации" id="tips">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InfoCard icon={ParkingCircle} title="Крытые паркинги">
            В центре городов ищите знаки «Parcheggio» — крытые платные парковки. 
            Дороже (2-4€/час), но безопаснее и без проблем с ZTL.
          </InfoCard>
          <InfoCard icon={Clock} title="Disco orario" variant="gold">
            На бесплатных парковках с ограничением времени нужен парковочный диск — 
            картонный циферблат с указанием времени прибытия. Купите в табачной лавке.
          </InfoCard>
          <InfoCard icon={Euro} title="Паркоматы">
            Для оплаты нужны монеты. Некоторые принимают карты. 
            Чек положите под лобовое стекло.
          </InfoCard>
        </div>

        <div className="mt-12 p-8 bg-italia-green text-white">
          <h3 className="font-serif text-2xl font-medium mb-4">
            Главный совет
          </h3>
          <p className="text-lg text-white/90 leading-relaxed">
            При посещении исторических центров оставляйте машину на парковке за пределами ZTL 
            и гуляйте пешком. Так вы избежите штрафов, стресса и увидите город по-настоящему. 
            Многие отели в центре имеют договоры с парковками или могут оформить 
            временное разрешение на въезд.
          </p>
        </div>
      </ContentSection>
    </div>
  );
};
