import { Gauge, AlertTriangle, Cloud, Moon } from 'lucide-react';
import { PageHero } from '../components/shared/PageHero';
import { ContentSection } from '../components/shared/ContentSection';
import { InfoCard } from '../components/shared/InfoCard';

const HERO_IMAGE = "https://images.unsplash.com/photo-1764709981956-06d81a015a14?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHwyfHxJdGFseSUyMHJvYWQlMjBzaWduJTIwdHJhZmZpYyUyMHZpbnRhZ2V8ZW58MHx8fHwxNzcwODA2ODI2fDA&ixlib=rb-4.1.0&q=85";

const speedLimits = [
  {
    type: 'Населённые пункты',
    limit: '50 км/ч',
    icon: '🏘️',
    note: 'В некоторых зонах (школы, пешеходные улицы) — 30 км/ч',
  },
  {
    type: 'Загородные дороги',
    limit: '90 км/ч',
    icon: '🛤️',
    note: 'Однополосные дороги вне населённых пунктов',
  },
  {
    type: 'Скоростные дороги (Superstrada)',
    limit: '110 км/ч',
    icon: '🚗',
    note: 'Дороги с разделительной полосой, но не автострады',
  },
  {
    type: 'Автострады (Autostrada)',
    limit: '130 км/ч',
    icon: '🛣️',
    note: 'Платные скоростные магистрали',
  },
];

const specialConditions = [
  {
    condition: 'Дождь, снег, туман',
    reduction: '20 км/ч',
    note: 'На автострадах — 110 км/ч вместо 130 км/ч',
    icon: Cloud,
  },
  {
    condition: 'Ночью',
    reduction: 'Без изменений',
    note: 'Ограничения те же, но рекомендуется снижать скорость',
    icon: Moon,
  },
  {
    condition: 'Новички (до 3 лет стажа)',
    reduction: 'Особые ограничения',
    note: 'Макс. 100 км/ч на автострадах, 90 км/ч на скоростных дорогах',
    icon: AlertTriangle,
  },
];

const finesTable = [
  { excess: 'До 10 км/ч', fine: '42-173€', points: '0' },
  { excess: '10-40 км/ч', fine: '173-695€', points: '3' },
  { excess: '40-60 км/ч', fine: '543-2.171€', points: '6' },
  { excess: 'Более 60 км/ч', fine: '845-3.382€', points: '10' },
];

export const SpeedLimitsPage = () => {
  return (
    <div data-testid="speed-limits-page">
      <PageHero 
        title="Скоростные ограничения"
        subtitle="Допустимые скорости на разных типах дорог Италии и штрафы за превышение."
        image={HERO_IMAGE}
      />

      <ContentSection title="Ограничения скорости" subtitle="По типам дорог" id="limits">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {speedLimits.map((item) => (
            <div 
              key={item.type}
              className="p-8 bg-white border border-italia-border hover:border-italia-green transition-colors"
            >
              <div className="flex items-start gap-6">
                <div className="text-5xl">{item.icon}</div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-medium text-italia-text mb-2">
                    {item.type}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="font-mono text-4xl font-bold text-italia-green">
                      {item.limit.split(' ')[0]}
                    </span>
                    <span className="text-italia-text-muted">км/ч</span>
                  </div>
                  <p className="text-sm text-italia-text-muted">{item.note}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      <section className="py-16 bg-white" data-testid="conditions-section">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="mb-12">
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-green mb-4">
              Особые условия
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-italia-text">
              Когда ограничения меняются
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specialConditions.map((item) => (
              <InfoCard 
                key={item.condition}
                icon={item.icon}
                title={item.condition}
                variant={item.condition.includes('Новички') ? 'warning' : 'default'}
              >
                <p className="font-mono text-lg text-italia-green mb-2">{item.reduction}</p>
                <p className="text-sm">{item.note}</p>
              </InfoCard>
            ))}
          </div>
        </div>
      </section>

      <ContentSection title="Штрафы за превышение" subtitle="Наказания" id="fines">
        <p className="text-lg text-italia-text-muted mb-8 max-w-3xl">
          Итальянские штрафы за превышение скорости одни из самых высоких в Европе. 
          Помимо денежного штрафа, начисляются штрафные баллы (максимум 20).
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-italia-red">
                <th className="text-left py-4 pr-4 font-mono text-xs uppercase tracking-wider text-italia-text-muted">Превышение</th>
                <th className="text-left py-4 pr-4 font-mono text-xs uppercase tracking-wider text-italia-text-muted">Штраф</th>
                <th className="text-left py-4 font-mono text-xs uppercase tracking-wider text-italia-text-muted">Баллы</th>
              </tr>
            </thead>
            <tbody>
              {finesTable.map((item, index) => (
                <tr key={item.excess} className={index % 2 === 0 ? 'bg-white' : 'bg-italia-limestone/50'}>
                  <td className="py-4 pr-4 font-medium text-italia-text">{item.excess}</td>
                  <td className="py-4 pr-4 font-mono text-italia-red">{item.fine}</td>
                  <td className="py-4 font-mono text-italia-text-muted">{item.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <InfoCard icon={AlertTriangle} variant="warning" title="Ночные штрафы">
            С 22:00 до 7:00 штрафы увеличиваются на треть. 
            Будьте особенно внимательны ночью!
          </InfoCard>
          <InfoCard icon={Gauge} title="Система Tutor">
            На многих автострадах работает Tutor — система контроля средней скорости 
            на участке. Не поможет просто тормозить перед камерами.
          </InfoCard>
        </div>
      </ContentSection>

      <section className="py-16 bg-italia-green" data-testid="tips-section">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="max-w-3xl">
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-gold mb-4">
              Совет
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-6">
              Как не получить штраф
            </h2>
            <ul className="space-y-4 text-white/90">
              <li className="flex gap-4">
                <span className="font-mono text-italia-gold">01</span>
                <span>Используйте навигатор с базой камер (Google Maps, Waze)</span>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-italia-gold">02</span>
                <span>Следите за знаками «Controllo elettronico della velocità»</span>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-italia-gold">03</span>
                <span>Не превышайте более чем на 5-7 км/ч — камеры имеют погрешность</span>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-italia-gold">04</span>
                <span>Помните о системе Tutor — держите среднюю скорость в норме</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
