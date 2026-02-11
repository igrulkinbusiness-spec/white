import { Shield, AlertTriangle, Phone, FileText } from 'lucide-react';
import { PageHero } from '../components/shared/PageHero';
import { ContentSection } from '../components/shared/ContentSection';
import { InfoCard } from '../components/shared/InfoCard';

const HERO_IMAGE = "https://images.unsplash.com/photo-1764709981173-7b8a7f149ee1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHw0fHxJdGFseSUyMHJvYWQlMjBzaWduJTIwdHJhZmZpYyUyMHZpbnRhZ2V8ZW58MHx8fHwxNzcwODA2ODI2fDA&ixlib=rb-4.1.0&q=85";

const mainRules = [
  {
    title: 'Движение правостороннее',
    description: 'Как и в России, в Италии правостороннее движение. Обгон осуществляется слева.',
  },
  {
    title: 'Ближний свет фар обязателен',
    description: 'Вне населённых пунктов ближний свет должен быть включён круглосуточно, в любую погоду.',
  },
  {
    title: 'Ремни безопасности',
    description: 'Обязательны для всех пассажиров. Дети до 150 см роста — в специальных креслах.',
  },
  {
    title: 'Телефон за рулём',
    description: 'Разрешена только гарнитура hands-free. Штраф от 165 до 660 евро.',
  },
  {
    title: 'Алкоголь',
    description: 'Допустимый уровень — 0.5 промилле. Для водителей со стажем до 3 лет — 0.0 промилле.',
  },
  {
    title: 'Зимние шины',
    description: 'С 15 ноября по 15 апреля обязательны на горных дорогах (знак «цепи обязательны»).',
  },
];

const requiredDocuments = [
  { name: 'Водительское удостоверение', note: 'Российские права действительны с нотариальным переводом или МВУ' },
  { name: 'Паспорт', note: 'Загранпаспорт с действующей визой' },
  { name: 'Страховка', note: 'Зелёная карта или полис, действующий в ЕС' },
  { name: 'Документы на авто', note: 'Свидетельство о регистрации или договор аренды' },
];

const fines = [
  { violation: 'Превышение скорости до 10 км/ч', fine: '42-173€' },
  { violation: 'Превышение скорости 10-40 км/ч', fine: '173-695€' },
  { violation: 'Превышение скорости более 40 км/ч', fine: '543-2.171€ + лишение прав' },
  { violation: 'Проезд на красный свет', fine: '167-665€' },
  { violation: 'Использование телефона', fine: '165-660€' },
  { violation: 'Не пристёгнут ремень', fine: '83-333€' },
  { violation: 'Вождение в нетрезвом виде', fine: '543-6.000€ + арест' },
  { violation: 'Неправильная парковка', fine: '42-173€' },
];

export const TrafficRulesPage = () => {
  return (
    <div data-testid="traffic-rules-page">
      <PageHero 
        title="Правила дорожного движения"
        subtitle="Основные правила ПДД Италии, которые должен знать каждый водитель."
        image={HERO_IMAGE}
      />

      <ContentSection title="Основные правила" subtitle="ПДД Италии" id="rules">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mainRules.map((rule) => (
            <div 
              key={rule.title}
              className="bg-white border border-italia-border p-6 hover:border-italia-green transition-colors"
            >
              <h3 className="font-serif text-lg font-medium text-italia-text mb-3">
                {rule.title}
              </h3>
              <p className="text-sm text-italia-text-muted leading-relaxed">
                {rule.description}
              </p>
            </div>
          ))}
        </div>
      </ContentSection>

      <section className="py-16 bg-white" data-testid="documents-section">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-green mb-4">
                Документы
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-italia-text mb-8">
                Что должно быть в машине
              </h2>
              
              <div className="space-y-4">
                {requiredDocuments.map((doc) => (
                  <div key={doc.name} className="flex items-start gap-4 p-4 border-l-4 border-italia-green bg-italia-limestone/30">
                    <FileText className="w-5 h-5 text-italia-green mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-italia-text">{doc.name}</h4>
                      <p className="text-sm text-italia-text-muted">{doc.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <InfoCard icon={AlertTriangle} variant="warning" title="Обязательное оборудование" className="mb-6">
                <ul className="space-y-2 mt-3">
                  <li>• Светоотражающий жилет (для каждого пассажира)</li>
                  <li>• Знак аварийной остановки</li>
                  <li>• Запасные лампочки для фар</li>
                  <li>• Аптечка (рекомендуется)</li>
                </ul>
              </InfoCard>
              
              <InfoCard icon={Phone} title="Экстренные номера">
                <ul className="space-y-2 mt-3 font-mono">
                  <li><strong>112</strong> — Единый номер экстренных служб</li>
                  <li><strong>113</strong> — Полиция</li>
                  <li><strong>115</strong> — Пожарная служба</li>
                  <li><strong>118</strong> — Скорая помощь</li>
                  <li><strong>116</strong> — Помощь на дороге (ACI)</li>
                </ul>
              </InfoCard>
            </div>
          </div>
        </div>
      </section>

      <ContentSection title="Штрафы" subtitle="Наказания" id="fines">
        <p className="text-lg text-italia-text-muted mb-8 max-w-3xl">
          Итальянские штрафы одни из самых высоких в Европе. Оплата в течение 5 дней 
          даёт скидку 30%. Неоплаченные штрафы отправляются по адресу прокатной компании.
        </p>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-italia-red">
                <th className="text-left py-4 pr-4 font-mono text-xs uppercase tracking-wider text-italia-text-muted">Нарушение</th>
                <th className="text-left py-4 font-mono text-xs uppercase tracking-wider text-italia-text-muted">Штраф</th>
              </tr>
            </thead>
            <tbody>
              {fines.map((item, index) => (
                <tr key={item.violation} className={index % 2 === 0 ? 'bg-white' : 'bg-italia-limestone/50'}>
                  <td className="py-4 pr-4 text-italia-text">{item.violation}</td>
                  <td className="py-4 font-mono text-italia-red font-medium">{item.fine}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ContentSection>

      <section className="py-16 bg-italia-green" data-testid="tips-section">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="max-w-3xl">
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-gold mb-4">
              Совет
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-6">
              Фото- и видеофиксация
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">
              В Италии широко распространены камеры контроля скорости (Autovelox) и 
              камеры фиксации проезда в зоны ZTL. Они могут быть стационарными или 
              мобильными. Знаки предупреждения о камерах не всегда устанавливаются, 
              поэтому рекомендуем использовать навигатор с базой камер.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
