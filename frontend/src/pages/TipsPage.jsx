import { Lightbulb, Check, AlertTriangle, Clock, Euro, Car } from 'lucide-react';
import { PageHero } from '../components/shared/PageHero';
import { ContentSection } from '../components/shared/ContentSection';
import { InfoCard } from '../components/shared/InfoCard';

const HERO_IMAGE = "https://images.unsplash.com/photo-1625869740698-983464d352ee?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHwyfHx2aW50YWdlJTIwRmlhdCUyMGNhciUyMEl0YWx5JTIwc3RyZWV0fGVufDB8fHx8MTc3MDgwNjgzMHww&ixlib=rb-4.1.0&q=85";

const tips = [
  {
    category: 'Перед поездкой',
    items: [
      'Получите международные права (МВУ) или нотариальный перевод',
      'Оформите зелёную карту или европейскую страховку',
      'Скачайте офлайн-карты в Google Maps или Maps.me',
      'Установите приложение с базой камер (Waze)',
      'Забронируйте парковки в крупных городах заранее',
    ],
  },
  {
    category: 'В дороге',
    items: [
      'Всегда включайте ближний свет вне населённых пунктов',
      'Держите светоотражающий жилет в салоне, не в багажнике',
      'Заправляйтесь до въезда на автостраду — там дороже',
      'Не заезжайте в жёлтые полосы Telepass без устройства',
      'Используйте правую полосу для движения, левую — для обгона',
    ],
  },
  {
    category: 'В городах',
    items: [
      'Всегда проверяйте наличие ZTL перед въездом в центр',
      'Оставляйте машину на парковках P+R у станций метро',
      'Используйте парковочный диск (disco orario) где требуется',
      'Оплачивайте парковку сразу — штрафы от 40€',
      'Фотографируйте место парковки и чек оплаты',
    ],
  },
  {
    category: 'Экономия',
    items: [
      'Заправляйтесь на self-service — дешевле на 10-15 центов',
      'Избегайте заправок на автострадах — накрутка 20%',
      'Бронируйте авто заранее через агрегаторы',
      'Не берите полный бак при аренде — заправьте сами',
      'Telepass даёт скидки на некоторых участках',
    ],
  },
];

const commonMistakes = [
  {
    mistake: 'Въезд в ZTL',
    consequence: 'Штраф 80-100€ за каждый въезд',
    prevention: 'Проверяйте знаки, используйте навигатор с ZTL',
  },
  {
    mistake: 'Превышение скорости',
    consequence: 'Штрафы от 42€, лишение прав при большом превышении',
    prevention: 'Помните о системе Tutor, используйте навигатор',
  },
  {
    mistake: 'Неправильная парковка',
    consequence: 'Штраф 42-173€, возможна эвакуация',
    prevention: 'Паркуйтесь только на синей или белой разметке',
  },
  {
    mistake: 'Потеря билета с автострады',
    consequence: 'Оплата максимального тарифа от начала до конца',
    prevention: 'Сразу кладите билет в надёжное место',
  },
  {
    mistake: 'Проезд без оплаты',
    consequence: 'Штраф от 80€ + оплата проезда',
    prevention: 'Всегда проверяйте наличие денег или карты',
  },
];

export const TipsPage = () => {
  return (
    <div data-testid="tips-page">
      <PageHero 
        title="Полезные советы"
        subtitle="Практические рекомендации от опытных путешественников для комфортной поездки."
        image={HERO_IMAGE}
      />

      <ContentSection title="Советы по категориям" subtitle="Рекомендации" id="tips">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tips.map((section) => (
            <div 
              key={section.category}
              className="bg-white border border-italia-border p-6 md:p-8"
            >
              <h3 className="font-serif text-xl font-medium text-italia-text mb-6">
                {section.category}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-italia-green flex-shrink-0 mt-0.5" />
                    <span className="text-italia-text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </ContentSection>

      <section className="py-16 bg-white" data-testid="mistakes-section">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="mb-12">
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-red mb-4">
              Внимание
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-italia-text">
              Частые ошибки туристов
            </h2>
          </div>

          <div className="space-y-6">
            {commonMistakes.map((item) => (
              <div 
                key={item.mistake}
                className="p-6 border-l-4 border-italia-red bg-italia-limestone/30"
              >
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-italia-red flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-serif text-lg font-medium text-italia-text mb-2">
                      {item.mistake}
                    </h3>
                    <p className="text-italia-red font-medium mb-2">{item.consequence}</p>
                    <p className="text-sm text-italia-text-muted">
                      <strong>Как избежать:</strong> {item.prevention}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContentSection title="Полезные приложения" subtitle="Технологии" id="apps" className="bg-italia-limestone">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InfoCard icon={Car} title="Google Maps / Waze">
            Навигация с пробками и камерами. Waze особенно хорош для предупреждений о камерах и полиции.
          </InfoCard>
          <InfoCard icon={Euro} title="Telepass Pay" variant="gold">
            Оплата парковок и автострад. Работает в привязке к Telepass или отдельно.
          </InfoCard>
          <InfoCard icon={Clock} title="ViaMichelin">
            Расчёт маршрутов с учётом платных дорог. Показывает стоимость проезда.
          </InfoCard>
        </div>
      </ContentSection>

      <section className="py-16 bg-italia-green" data-testid="golden-rules-section">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="mb-12">
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-gold mb-4">
              Золотые правила
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-white">
              5 главных правил автопутешествия
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { num: '01', text: 'Не въезжайте в ZTL без разрешения' },
              { num: '02', text: 'Соблюдайте скоростной режим' },
              { num: '03', text: 'Паркуйтесь только на разрешённых местах' },
              { num: '04', text: 'Имейте при себе все документы' },
              { num: '05', text: 'Включайте ближний свет за городом' },
            ].map((rule) => (
              <div key={rule.num} className="text-center">
                <div className="font-mono text-5xl font-bold text-italia-gold mb-4">
                  {rule.num}
                </div>
                <p className="text-white/90">{rule.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
